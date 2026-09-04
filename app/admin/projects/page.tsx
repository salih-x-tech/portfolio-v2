"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Project = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category?: string;
  type?: string;
  featured?: boolean;
  status?: string;
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "Failed to fetch projects");
        }

        setProjects(data.projects);
      } catch (error) {
        console.error(error);
        setError("Unable to load projects.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  async function handleDelete(id: string) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (!confirmed) return;

  try {
    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to delete project");
    }

    setProjects((currentProjects) =>
      currentProjects.filter((project) => project._id !== id)
    );
  } catch (error) {
    console.error(error);
    alert("Failed to delete project.");
  }
}

async function handleLogout() {
  try {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  } catch (error) {
    console.error("Logout error:", error);
  }
}

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Admin
            </p>

            <h1 className="text-4xl font-semibold tracking-tight">
              Projects
            </h1>

            <p className="mt-3 text-zinc-500">
              Manage the projects displayed on your portfolio.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-red-400/40 hover:text-red-400"
          >
            Logout
          </button>

          <Link
            href="/admin/projects/new"
            className="inline-flex w-fit rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
          >
            + Add Project
          </Link>
        </div>

        {loading && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-zinc-500">
            Loading projects...
          </div>
        )}

        {error && (
          <div className="mt-12 rounded-2xl border border-red-400/20 bg-red-400/5 p-8 text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[1fr_140px_140px_100px] border-b border-white/10 bg-white/[0.03] px-6 py-4 text-xs uppercase tracking-wider text-zinc-500 md:grid">
              <span>Project</span>
              <span>Type</span>
              <span>Status</span>
              <span>Featured</span>
            </div>

            {projects.map((project) => (
              <div
                key={project._id}
                className="grid gap-4 border-b border-white/10 px-6 py-5 last:border-b-0 md:grid-cols-[1fr_140px_140px_100px] md:items-center"
              >
                <div>
                  <h2 className="font-medium text-white">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-xs text-zinc-600">
                    /projects/{project.slug}
                  </p>
                </div>

                <div className="text-sm text-zinc-400">
                  {project.type || project.category || "Project"}
                </div>

                <div className="text-sm text-zinc-400">
                  {project.status || "Completed"}
                </div>

                <div>
                  {project.featured ? (
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                      Yes
                    </span>
                  ) : (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-500">
                      No
                    </span>
                  )}
                </div>

                <div className="flex gap-3 md:col-span-4 md:justify-end">
                  <Link
                    href={`/projects/${project.slug}`}
                    target="_blank"
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    View
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href={`/projects/${project.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-cyan-400"
                    >
                      View
                    </a>

                    <Link
                      href={`/admin/projects/${project._id}/edit`}
                      className="text-sm text-zinc-400 hover:text-cyan-400"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDelete(project._id)}
                      className="text-sm text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
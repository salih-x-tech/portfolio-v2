"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  type: string;
  github: string;
  demo: string;
  status?: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

const filters = ["All", "Full-Stack", "Frontend", "Creative"] as const;

export default function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => {
          const type = project.type.toLowerCase();

          if (activeFilter === "Frontend") {
            return type.includes("frontend");
          }

          if (activeFilter === "Full-Stack") {
            return type.includes("full-stack");
          }

          if (activeFilter === "Creative") {
            return type.includes("creative");
          }

          return true;
        });

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                isActive
                  ? "border-cyan-400 bg-cyan-400 text-black"
                  : "border-white/10 text-zinc-400 hover:border-cyan-400/40 hover:text-cyan-400"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-sm text-zinc-600">
        Showing {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="flex min-h-[360px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                {project.type}
              </span>
            </div>

            <div className="mt-8 flex flex-1 flex-col">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                {project.status && (
                  <span className="text-xs text-zinc-600">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
                  >
                    Live Demo ↗
                  </a>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="ml-auto rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  Details →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
import Link from "next/link";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { connectDB } from "@/lib/mongodb";
import Project from "@/lib/models/Project";

export default async function ProjectsPage() {
  await connectDB();

  const projects = await Project.find()
    .sort({ createdAt: -1 })
    .lean();

  const serializedProjects = projects.map((project) => ({
    title: project.title,
    slug: project.slug,
    description: project.description,
    tech: project.technologies || project.tech || [],
    type: project.type || "Project",
    github: project.github || "",
    demo: project.liveDemo || project.demo || "",
    status: project.status || "Completed",
  }));

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-16">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-1/3 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 transition-colors hover:text-indigo-400"
        >
          ← Back home
        </Link>

        <div className="mb-12 mt-10">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Projects
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            All{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A collection of projects I&apos;ve built while learning,
            experimenting, and developing my skills as a software developer.
          </p>
        </div>

        <ProjectsGrid projects={serializedProjects} />
      </div>
    </main>
  );
}
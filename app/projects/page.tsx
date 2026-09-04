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
    <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
        >
          ← Back home
        </a>

        <div className="mb-10 mt-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            All projects.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A collection of projects I&apos;ve built while learning,
            experimenting, and developing my skills as a software developer.
          </p>
        </div>

        <ProjectsGrid projects={serializedProjects} />
      </div>
    </main>
  );
}
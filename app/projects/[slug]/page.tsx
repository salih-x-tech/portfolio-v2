import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Project from "@/lib/models/Project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  try {
    await connectDB();

    const project = await Project.findOne({ slug }).lean();

    if (!project) {
      notFound();
    }

    const technologies = project.technologies ?? [];
    const images = project.images ?? [];
    const challenges = project.challenges ?? [];
    const features = project.features ?? [];

    return (
      <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <a
            href="/projects"
            className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
          >
            ← Back to projects
          </a>

          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                {project.type || "Project"}
              </span>

              <span className="text-zinc-700">•</span>

              <span className="text-sm text-zinc-500">
                {project.status || "Completed"}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {project.longDescription || project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  View on GitHub ↗
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>

          {images.length > 0 && (
            <section className="mt-16">
              <div className="grid gap-6 md:grid-cols-2">
                {images.map((image: string) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot`}
                      className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_0.7fr]">
            <section>
              <h2 className="text-xl font-semibold">About the project</h2>

              <p className="mt-4 leading-8 text-zinc-400">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Technologies</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology: string) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">The Problem</h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">The Solution</h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.solution}
              </p>
            </div>
          </section>

          <section className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Challenges</h2>

              <ul className="mt-5 space-y-3">
                {challenges.map((challenge: string) => (
                  <li
                    key={challenge}
                    className="text-sm leading-7 text-zinc-400"
                  >
                    <span className="mr-2 text-cyan-400">→</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">What I Learned</h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.learning}
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-xl font-semibold">Key features</h2>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature: string) => (
                <li
                  key={feature}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-400"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Project page error:", error);
    notFound();
  }
}
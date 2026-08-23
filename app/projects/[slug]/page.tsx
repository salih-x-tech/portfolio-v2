import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

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
              {project.type}
            </span>

            <span className="text-zinc-700">•</span>

            <span className="text-sm text-zinc-500">
              {project.status}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {project.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
            >
              View on GitHub ↗
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {project.screenshots.length > 0 && (
            <section className="mt-16">
                <div className="grid gap-6 md:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                    <div
                    key={screenshot.src}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                    <img
                        src={screenshot.src}
                        alt={screenshot.alt}
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
              {project.tech.map((technology) => (
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
              {project.challenges.map((challenge) => (
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
            {project.features.map((feature) => (
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
}
import { projects } from "@/lib/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Things I&apos;ve{" "}
            <span className="text-zinc-400">built and shipped.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A curated selection of projects showcasing my work across
            full-stack development, frontend engineering, APIs, and interactive
            web experiences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex min-h-[390px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                  {project.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <span className="text-xs text-zinc-600">
                    {project.status}
                  </span>
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
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  GitHub ↗
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-cyan-300"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/projects"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-300 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  );
}
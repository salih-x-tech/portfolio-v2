import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  type: string;
  github: string;
  demo: string;
  featured: boolean;
  status: string;
  image?: string;
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const displayProjects =
    featuredProjects.length >= 6
      ? featuredProjects.slice(0, 6)
      : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Centered Section Header matching reference */}
        <div className="mb-16 text-center">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Featured Projects
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Some of My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Recent Work
            </span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-indigo-500" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A curated selection of projects showcasing my work across
            full-stack development, frontend engineering, APIs, and interactive
            web experiences.
          </p>
        </div>

        {/* Project Grid matching reference image cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/85 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Preview Image / Mockup Area */}
              <div className="relative h-48 w-full overflow-hidden bg-[#070918] border-b border-white/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1024] to-[#141a38]">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                      <span className="font-mono text-base font-bold">&lt;/&gt;</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Top Overlay Badge on Preview */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-lg border border-white/10 bg-[#070913]/85 px-2.5 py-1 font-mono text-xs font-bold text-indigo-400 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-lg border border-white/10 bg-[#070913]/85 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-300">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-slate-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Links */}
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-indigo-400"
                  >
                    Details →
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition-colors hover:text-white"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                      >
                        View Project ↗
                      </a>
                    ) : (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                      >
                        View Project ↗
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel pagination dots matching reference */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-6 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
          <span className="h-2 w-2 rounded-full bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-700" />
        </div>

        {/* View All Projects Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d1226]/80 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white shadow-lg"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
const projects = [
  {
    title: "Smart Campus Portal",
    description:
      "A full-stack campus management platform with authentication, complaints, events, announcements, FYP management, and separate student and admin dashboards.",
    tech: ["Node.js", "Express", "EJS", "MongoDB"],
    type: "Full-Stack",
  },
  {
    title: "SocialSphere",
    description:
      "A social media platform with user authentication, profiles, posts, comments, likes, and follow functionality.",
    tech: ["Node.js", "Express", "EJS", "MongoDB", "Cloudinary"],
    type: "Full-Stack",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce application featuring product management, image uploads, authentication, cart functionality, and MongoDB integration.",
    tech: ["Node.js", "Express", "EJS", "MongoDB", "Multer"],
    type: "Full-Stack",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Things I&apos;ve{" "}
            <span className="text-zinc-400">built and shipped.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A selection of projects where I&apos;ve turned ideas into working
            applications while learning modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[360px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Project Number */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-cyan-400">
                  0{index + 1}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
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

              {/* Project Link */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="text-sm text-zinc-500 transition-colors group-hover:text-cyan-400">
                  View project →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
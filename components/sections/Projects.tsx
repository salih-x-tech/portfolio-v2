const projects = [
  {
    title: "SocialSphere",
    description:
      "A full-stack social media platform with authentication, user profiles, posts, comments, likes, follows, and media uploads.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
    type: "Full-Stack",
    github: "https://github.com/salih-x-tech/CodeAlpha_SocialSphere",
    demo: "",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce platform with authentication, product management, reviews, wishlist functionality, cart features, and cloud image uploads.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
    type: "Full-Stack",
    github: "https://github.com/salih-x-tech/CodeAlpha_Ecommerce_Store",
    demo: "https://codealphaecommercestore-production-d574.up.railway.app/",
  },
  {
    title: "Birthday Surprise",
    description:
      "An interactive cinematic web experience focused on animations, responsive design, personalized content, and engaging user interactions.",
    tech: ["HTML", "CSS", "JavaScript", "Animations"],
    type: "Creative",
    github: "https://github.com/salih-x-tech/Birthday-Surprise",
    demo: "https://birthday-surprise-fklyowqtm-salih-hayat-s-projects.vercel.app",
  },
  {
    title: "NeuralOps",
    description:
      "A premium cinematic AI landing page focused on modern frontend development, visual design, animations, and polished user experience.",
    tech: ["JavaScript", "Frontend", "UI/UX", "Animation"],
    type: "Frontend",
    github: "https://github.com/salih-x-tech/neuralops-cinematic-landing-page",
    demo: "https://salih-x-tech.github.io/neuralops-cinematic-landing-page/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that retrieves real-world weather data through an API and presents it through a clean interface.",
    tech: ["JavaScript", "API", "CSS", "Responsive UI"],
    type: "Frontend",
    github: "https://github.com/salih-x-tech/weather-dashboard",
    demo: "https://salih-x-tech.github.io/weather-dashboard/",
  },
];

export default function Projects() {
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
          {projects.map((project, index) => (
            <article
              key={project.title}
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
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

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
      </div>
    </section>
  );
}
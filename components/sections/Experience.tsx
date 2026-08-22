const experiences = [
  {
    role: "Full-Stack Development Intern",
    company: "CodeAlpha",
    period: "2026",
    description:
      "Worked on full-stack web development projects, building practical applications and strengthening skills across frontend, backend, databases, authentication, and deployment.",
    highlights: [
      "Built a full-stack e-commerce application",
      "Developed a social media platform",
      "Worked with Node.js, Express, MongoDB, and EJS",
      "Used Git and GitHub for version control",
    ],
  },
  {
    role: "Computer Science Student",
    company: "City University of Science & IT",
    period: "Current",
    description:
      "Studying Computer Science while developing practical software projects and building a strong foundation in programming, web development, and computer science concepts.",
    highlights: [
      "Building full-stack web applications",
      "Learning modern JavaScript and Next.js",
      "Practicing software development through real projects",
      "Exploring AI-assisted development workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Experience
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My journey as a{" "}
            <span className="text-zinc-400">developer.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A timeline of the experiences and learning milestones shaping my
            development journey.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[9px] top-2 hidden h-[calc(100%-8px)] w-px bg-white/10 sm:block" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.company}`}
                className="relative sm:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 hidden h-5 w-5 items-center justify-center rounded-full border border-cyan-400/40 bg-zinc-950 sm:flex">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-cyan-400">
                        {experience.company}
                      </p>
                    </div>

                    <span className="text-sm text-zinc-500">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
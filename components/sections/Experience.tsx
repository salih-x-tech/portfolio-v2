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
      className="relative overflow-hidden border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Experience
          </div>

          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My journey as a{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              developer.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            The experiences, projects, and learning milestones shaping my
            journey in software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Track */}
          <div className="absolute left-3.5 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.role}-${experience.company}`}
                className="group relative sm:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-7 hidden h-7 w-7 items-center justify-center rounded-full border border-indigo-500/30 bg-[#070913] sm:flex shadow-[0_0_12px_rgba(99,102,241,0.4)]">
                  <div className="h-2 w-2 rounded-full bg-indigo-400 transition-all duration-300 group-hover:scale-150" />
                </div>

                {/* Experience Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-[#121832]">
                  <div className="relative">
                    {/* Top */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-indigo-300 sm:text-2xl">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-slate-400">
                          {experience.company}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
                        {experience.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {experience.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
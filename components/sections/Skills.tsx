const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication", level: 80 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "AI Development Tools", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Centered Heading inspired by reference */}
        <div className="mb-16 text-center">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            My Skills
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          {/* Centered accent bar */}
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-indigo-500" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            My growing technical toolkit for building modern, responsive, and
            scalable web applications.
          </p>
        </div>

        {/* Skills Categorized Cards with glowing progress bars */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="group relative rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#121832]"
            >
              {/* Card top */}
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="flex items-center gap-2.5 text-lg font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                  {skillGroup.category}
                </h3>

                <span className="font-mono text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Skill items with progress tracks */}
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-medium text-slate-300 transition-colors group-hover:text-white">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Always learning. Always building.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            See what I&apos;ve built →
          </a>
        </div>
      </div>
    </section>
  );
}
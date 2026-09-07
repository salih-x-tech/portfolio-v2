export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-14">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            About Me
          </div>

          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            I&apos;m passionate about
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-300 to-white bg-clip-text text-transparent mt-1">
              creating digital solutions.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left — About text */}
          <div>
            <div className="space-y-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              <p>
                I&apos;m <span className="font-semibold text-white">Salih Hayat</span>,
                a Computer Science student and aspiring full-stack developer
                focused on building practical and user-friendly web
                applications.
              </p>

              <p>
                I work with JavaScript, React, Next.js, Node.js, Express,
                MongoDB, and modern frontend technologies. I enjoy turning
                ideas into real projects and learning by building.
              </p>

              <p>
                I also use AI as a development tool to explore ideas faster,
                solve problems, and improve my understanding of software
                development.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d1226]/80 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 shadow-lg"
            >
              Let&apos;s Work Together
              <span className="text-indigo-400">↗</span>
            </a>
          </div>

          {/* Right — Standalone floating cards matching reference image */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-[#121832]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-xl text-indigo-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                🎓
              </div>

              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                BS CS
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Computer Science Student
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-[#121832]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-base font-mono font-bold text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                &lt;/&gt;
              </div>

              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Full-Stack
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Development Focus
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-[#121832]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/25 bg-purple-500/10 text-xl text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
                ✦
              </div>

              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                AI + Web
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Modern Development
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-[#121832]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-xl text-emerald-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-500/20">
                🚀
              </div>

              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Learning Through Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
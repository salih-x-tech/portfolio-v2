export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            I build modern web experiences with{" "}
            <span className="text-zinc-400">code, curiosity, and AI.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>
              I&apos;m Salih Hayat, a Computer Science student and aspiring
              full-stack developer focused on building practical and
              user-friendly web applications.
            </p>

            <p>
              I work with technologies like JavaScript, React, Next.js,
              Node.js, Express, MongoDB, and modern frontend tools. I enjoy
              turning ideas into real projects and learning by building.
            </p>

            <p>
              I also use AI as a development tool to explore ideas faster,
              solve problems, and improve my understanding of software
              development.
            </p>
          </div>

          {/* Quick Info */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-5 text-sm font-medium uppercase tracking-wider text-zinc-500">
              Currently
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-zinc-500">Focus</p>
                <p className="mt-1 text-white">
                  Full-Stack Web Development
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Learning</p>
                <p className="mt-1 text-white">
                  Next.js, TypeScript &amp; AI
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Goal</p>
                <p className="mt-1 text-white">
                  Build useful products &amp; grow as a developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
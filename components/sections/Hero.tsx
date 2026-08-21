import Scene from "@/components/three/Scene";
export default function Hero() {
  return (
    <section
      id="hero"
      className="portfolio-grid relative min-h-screen overflow-hidden px-6 pt-32 pb-16"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Hero Content */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Salih Hayat
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I build modern web applications and explore the intersection
            of web development, AI, and software engineering.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition-transform hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Scene Placeholder */}
        <div className="relative h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <Scene />
        </div>
      </div>
    </section>
  );
}
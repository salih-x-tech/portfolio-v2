export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
        
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-cyan-400"
        >
          SH<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
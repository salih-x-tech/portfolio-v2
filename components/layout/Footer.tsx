export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">
            Salih Hayat<span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            Building, learning, and shipping.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-zinc-500">
          <a
            href="https://github.com/salih-x-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/salih-hayat-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/salih_haya2241"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
          >
            X
          </a>

          <a
            href="mailto:salihhayat2241@gmail.com"
            className="transition-colors hover:text-cyan-400"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Salih Hayat
        </p>
      </div>
    </footer>
  );
}
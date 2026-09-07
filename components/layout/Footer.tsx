export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060813] px-6 py-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Salih Hayat. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/salih-x-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/salih-hayat-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/salih_haya2241"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            X
          </a>
        </div>

        <p className="flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> by Salih
        </p>
      </div>
    </footer>
  );
}
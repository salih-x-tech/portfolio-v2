const contactLinks = [
  {
    label: "Email",
    value: "salihhayat2241@gmail.com",
    href: "mailto:salihhayat2241@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/salih-x-tech",
    href: "https://github.com/salih-x-tech",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/salih-hayat-dev",
    href: "https://www.linkedin.com/in/salih-hayat-dev/",
  },
  {
    label: "X",
    value: "@salih_haya2241",
    href: "https://x.com/salih_haya2241",
  },
  {
    label: "Instagram",
    value: "@salihxtech",
    href: "https://www.instagram.com/salihxtech/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* 3-Column Layout inspired by reference image */}
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">

          {/* COLUMN 1: "LET'S WORK TOGETHER" */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#0d1226]/80 p-7 sm:p-8 backdrop-blur-md shadow-xl">
            <div>
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Let&apos;s Work Together
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Have a project in mind?
              </h2>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
                Have a project idea, freelance opportunity, or just want to talk
                about technology? I&apos;d love to hear from you. Let&apos;s create
                something amazing together!
              </p>
            </div>

            <div className="mt-8">
              <a
                href="mailto:salihhayat2241@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95"
              >
                Get in Touch
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: PHILOSOPHY / STATEMENT CARD */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#0d1226]/80 p-7 sm:p-8 backdrop-blur-md shadow-xl">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-xl font-serif text-indigo-400">
                “
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 italic">
                &ldquo;Whether you&apos;re looking to build a modern web application,
                collaborate on an engineering project, or discuss scalable architectures,
                I bring attention to detail, clean code, and passion for technology.&rdquo;
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 font-bold text-white text-xs">
                SH
              </div>
              <div>
                <p className="text-sm font-bold text-white">Salih Hayat</p>
                <p className="text-xs text-slate-400">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: "FOLLOW ME" & DIRECT CONTACT */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#0d1226]/80 p-7 sm:p-8 backdrop-blur-md shadow-xl">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Follow Me
              </p>

              {/* Social Icons row */}
              <div className="flex flex-wrap items-center gap-2.5">
                {contactLinks.filter(l => l.label !== "Email").map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white hover:scale-105"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-slate-500">↗</span>
                  </a>
                ))}
              </div>

              {/* Direct email & location */}
              <div className="mt-6 space-y-3.5 border-t border-white/5 pt-4">
                <a
                  href="mailto:salihhayat2241@gmail.com"
                  className="group flex items-center gap-3 text-xs sm:text-sm text-slate-300 transition-colors hover:text-indigo-400"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-indigo-400 group-hover:border-indigo-500/30">
                    ✉
                  </span>
                  <span className="truncate">salihhayat2241@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-indigo-400">
                    📍
                  </span>
                  <span>Based in Pakistan 🇵🇰</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Open to freelance opportunities &amp; full-time roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
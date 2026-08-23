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
      className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Contact
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-zinc-400">useful.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Have a project idea, freelance opportunity, or just want to talk
              about technology? Feel free to reach out.
            </p>

            <a
              href="mailto:salihhayat2241@gmail.com"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Send me an email →
            </a>
          </div>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {link.label}
                  </p>

                  <p className="mt-1 text-sm text-zinc-300 transition-colors group-hover:text-white">
                    {link.value}
                  </p>
                </div>

                <span className="text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-cyan-400">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
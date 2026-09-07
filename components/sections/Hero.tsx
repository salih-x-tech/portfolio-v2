"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "JavaScript Developer",
  "Next.js Developer",
  "AI-Powered Developer",
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 45 : 95;

    if (!isDeleting && displayText === currentRole) {
      delay = 2000;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* Subtle background ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 top-1/2 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Decorative dot matrix grid */}
      <div className="portfolio-grid pointer-events-none absolute right-8 top-28 h-48 w-48 opacity-30" />

      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

          {/* LEFT SIDE — CONTENT */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              I&apos;m a Web Developer
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Salih
              </span>
              <span className="block text-white text-3xl sm:text-5xl lg:text-[3.25rem] mt-1 font-bold">
                I build things for the web.
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="mt-5 flex items-center justify-center lg:justify-start h-8 text-lg font-medium text-slate-300 sm:text-xl">
              <span>{displayText}</span>
              <span className="ml-1 text-indigo-400 animate-pulse font-bold">
                |
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              I build modern, responsive and scalable web applications
              using JavaScript, Next.js, Node.js and AI-powered tools.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] active:scale-95"
              >
                View My Work
                <span>↗</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d1226]/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white active:scale-95"
              >
                Contact Me
              </Link>
            </div>

            {/* Technologies I work with row */}
            <div className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3 text-center lg:text-left">
                Technologies I work with
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {[
                  { name: "HTML5", bg: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
                  { name: "CSS3", bg: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                  { name: "JavaScript", bg: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
                  { name: "TypeScript", bg: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
                  { name: "React", bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
                  { name: "Next.js", bg: "bg-white/10 text-white border-white/20" },
                  { name: "Node.js", bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
                  { name: "Git", bg: "bg-red-500/10 text-red-400 border-red-500/20" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`rounded-lg border px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-105 ${tech.bg}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — VISUAL COMPOSITION WITH HALO & CODE CARD */}
          <div className="relative flex items-center justify-center">

            {/* Glowing purple halo backdrop matching reference */}
            <div
              className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-400 opacity-60 blur-3xl animate-pulse-glow sm:h-[400px] sm:w-[400px]"
              style={{
                marginLeft: mouse.x * -8,
                marginTop: mouse.y * -8,
              }}
            />

            {/* Circular halo outline ring */}
            <div
              className="absolute h-[340px] w-[340px] rounded-full border border-indigo-500/20 sm:h-[420px] sm:w-[420px]"
              style={{
                marginLeft: mouse.x * 4,
                marginTop: mouse.y * 4,
              }}
            />

            {/* Photo container */}
            <div className="animate-hero-float relative z-10">
              <div
                className="relative h-[290px] w-[290px] overflow-hidden rounded-full border border-white/15 bg-[#0b0f24] shadow-[0_0_80px_rgba(99,102,241,0.25)] transition-transform duration-300 ease-out sm:h-[370px] sm:w-[370px]"
                style={{
                  transform: `translate3d(${mouse.x * 8}px, ${mouse.y * 8}px, 0)`,
                }}
              >
                <Image
                  src="/images/salih-hayat.png"
                  alt="Salih Hayat - Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 290px, 370px"
                />

                {/* Soft gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070913]/50 via-transparent to-white/5" />
              </div>
            </div>

            {/* Floating Code Snippet Card positioned lower underneath the face */}
            <div
              className="absolute -right-2 sm:-right-6 bottom-4 sm:bottom-8 z-20 w-56 sm:w-64 rounded-2xl border border-white/10 bg-[#0c1022]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform duration-300 ease-out animate-badge-float"
              style={{
                transform: `translate3d(${mouse.x * -8}px, ${mouse.y * -8}px, 0)`,
              }}
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/5 pb-2">
                <span className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-400">
                  <span className="font-bold text-indigo-400">&lt;/&gt;</span> Code
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
              <pre className="font-mono text-[11px] leading-relaxed text-slate-300">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = &#123;{"\n"}
                  {"  "}<span className="text-slate-400">name:</span>{" "}
                  <span className="text-amber-300">&quot;Salih&quot;</span>,{"\n"}
                  {"  "}<span className="text-slate-400">skills:</span> [
                  <span className="text-indigo-300">&quot;React&quot;</span>,{" "}
                  <span className="text-indigo-300">&quot;Next.js&quot;</span>],{"\n"}
                  {"  "}<span className="text-slate-400">passion:</span>{" "}
                  <span className="text-amber-300">&quot;Building things&quot;</span>{"\n"}
                  &#125;;
                </code>
              </pre>
            </div>

            {/* Floating </> badge on left */}
            <div
              className="absolute -left-2 top-24 z-20 rounded-xl border border-white/10 bg-[#0c1022]/90 px-3.5 py-2 font-mono text-xs font-bold text-indigo-400 shadow-xl backdrop-blur-md transition-transform duration-300 ease-out sm:left-2"
              style={{
                transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0)`,
              }}
            >
              &lt;/&gt;
            </div>

            {/* AI badge */}
            <div
              className="absolute -right-1 sm:right-2 top-8 sm:top-10 z-20 rounded-full border border-indigo-500/30 bg-[#0c1022]/90 px-4 py-1.5 text-xs font-medium text-indigo-300 shadow-xl backdrop-blur-md transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mouse.x * -6}px, ${mouse.y * -6}px, 0)`,
              }}
            >
              ✦ AI × Web
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
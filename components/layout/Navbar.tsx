"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#090d1f]/80 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white transition-all duration-300"
        >
          <span className="font-mono text-indigo-400 transition-transform duration-300 group-hover:scale-110">
            &lt;/&gt;
          </span>
          <span>
            Salih Hayat<span className="text-indigo-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-95"
          >
            Contact
            <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-base text-slate-300 transition-all duration-200 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-[#090d1f]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:pl-5 hover:text-indigo-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:pl-5 hover:text-indigo-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:pl-5 hover:text-indigo-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:pl-5 hover:text-indigo-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:pl-5 hover:text-indigo-400"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-200 hover:bg-indigo-500"
            >
              Contact
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
        {/* Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-tight transition-colors hover:text-cyan-400"
        >
          SH<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#hero"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Home
          </a>

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
            href="#experience"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-zinc-300 transition-colors hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-zinc-950/95 p-5 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full border border-cyan-400/30 px-4 py-2 text-center text-sm text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
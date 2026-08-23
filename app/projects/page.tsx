"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";

const filters = ["All", "Full-Stack", "Frontend", "Creative"] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
        >
          ← Back home
        </a>

        <div className="mb-10 mt-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            All projects.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A collection of projects I&apos;ve built while learning,
            experimenting, and developing my skills as a software developer.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  isActive
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-white/10 text-zinc-400 hover:border-cyan-400/40 hover:text-cyan-400"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <p className="mb-6 text-sm text-zinc-600">
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="flex min-h-[360px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                  {project.type}
                </span>
              </div>

              <div className="mt-8 flex flex-1 flex-col">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    GitHub ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={`/projects/${project.slug}`}
                    className="ml-auto rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
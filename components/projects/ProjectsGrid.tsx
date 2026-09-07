"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  type: string;
  github: string;
  demo: string;
  status?: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

const filters = ["All", "Full-Stack", "Frontend", "Creative"] as const;

export default function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => {
          const type = project.type.toLowerCase();

          if (activeFilter === "Frontend") {
            return type.includes("frontend");
          }

          if (activeFilter === "Full-Stack") {
            return type.includes("full-stack");
          }

          if (activeFilter === "Creative") {
            return type.includes("creative");
          }

          return true;
        });

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-2.5">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-indigo-500 bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] scale-105"
                  : "border-white/10 bg-[#0d1226]/80 text-slate-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Project count */}
      <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Selected Work
        </p>

        <p className="text-xs sm:text-sm text-slate-400">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:bg-[#121832] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl transition-all duration-300 group-hover:bg-indigo-600/20" />

            {/* Top */}
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-400 transition-colors duration-200 group-hover:border-indigo-500/30 group-hover:text-indigo-300">
                {project.type}
              </span>
            </div>

            {/* Main content */}
            <div className="relative mt-6 flex flex-1 flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-300">
                  {project.title}
                </h2>

                {project.status && (
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-4 max-w-xl flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-indigo-500/30 hover:text-indigo-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom actions */}
            <div className="relative mt-7 flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 transition-all duration-200 hover:border-indigo-400/60 hover:bg-indigo-500/20 shadow-sm"
              >
                View Details →
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:text-white"
                >
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-200 hover:bg-indigo-500"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
          <p className="text-sm text-slate-400">
            No projects found in this category.
          </p>
        </div>
      )}
    </>
  );
}
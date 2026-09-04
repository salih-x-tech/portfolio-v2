"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type ProjectForm = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  type: string;
  technologies: string;
  features: string;
  problem: string;
  solution: string;
  challenges: string;
  learning: string;
  github: string;
  liveDemo: string;
  featured: boolean;
  status: string;
};

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [form, setForm] = useState<ProjectForm>({
    title: "",
    slug: "",
    description: "",
    longDescription: "",
    category: "Frontend",
    type: "Frontend Web Application",
    technologies: "",
    features: "",
    problem: "",
    solution: "",
    challenges: "",
    learning: "",
    github: "",
    liveDemo: "",
    featured: false,
    status: "Completed",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProject() {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Failed to load project");
        }

        const project = data.project;

        setForm({
          title: project.title || "",
          slug: project.slug || "",
          description: project.description || "",
          longDescription: project.longDescription || "",
          category: project.category || "Frontend",
          type: project.type || "Frontend Web Application",
          technologies: (project.technologies || []).join(", "),
          features: (project.features || []).join("\n"),
          problem: project.problem || "",
          solution: project.solution || "",
          challenges: (project.challenges || []).join("\n"),
          learning: project.learning || "",
          github: project.github || "",
          liveDemo: project.liveDemo || "",
          featured: project.featured ?? false,
          status: project.status || "Completed",
        });
      } catch (error) {
        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load project."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [id]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;

    setForm((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSaving(true);
    setError("");

    const payload = {
      ...form,
      technologies: form.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      features: form.features
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      challenges: form.challenges
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to update project");
      }

      router.push("/admin/projects");
      router.refresh();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-zinc-500">Loading project...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <a
            href="/admin/projects"
            className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
          >
            ← Back to projects
          </a>

          <div className="mt-10 rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
            <p className="text-red-300">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <a
          href="/admin/projects"
          className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
        >
          ← Back to projects
        </a>

        <div className="mt-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Admin
          </p>

          <h1 className="text-4xl font-semibold tracking-tight">
            Edit project
          </h1>

          <p className="mt-3 text-zinc-500">
            Update the project information stored in MongoDB.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          {/* Basic information */}
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Basic information
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Project title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />

              <Field
                label="Slug"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                required
              />
            </div>

            <TextField
              label="Short description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />

            <TextField
              label="Long description"
              name="longDescription"
              value={form.longDescription}
              onChange={handleChange}
            />
          </section>

          {/* Classification */}
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Classification
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <SelectField
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                options={[
                  "Full-Stack",
                  "Frontend",
                  "Creative",
                ]}
              />

              <SelectField
                label="Type"
                name="type"
                value={form.type}
                onChange={handleChange}
                options={[
                  "Full-Stack Application",
                  "Frontend Web Application",
                  "Creative Web Experience",
                ]}
              />

              <SelectField
                label="Status"
                name="status"
                value={form.status}
                onChange={handleChange}
                options={[
                  "Completed",
                  "In Progress",
                  "Planned",
                ]}
              />
            </div>
          </section>

          {/* Technologies */}
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Technologies & features
            </h2>

            <TextField
              label="Technologies"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              placeholder="HTML5, CSS3, JavaScript"
            />

            <TextField
              label="Key features"
              name="features"
              value={form.features}
              onChange={handleChange}
              placeholder={`Real-time search filtering
No User Found message
Dark/Light theme`}
            />

            <TextField
              label="Challenges"
              name="challenges"
              value={form.challenges}
              onChange={handleChange}
              placeholder={`Real-time filtering
LocalStorage
Responsive interface`}
            />
          </section>

          {/* Project story */}
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Project story
            </h2>

            <TextField
              label="Problem"
              name="problem"
              value={form.problem}
              onChange={handleChange}
            />

            <TextField
              label="Solution"
              name="solution"
              value={form.solution}
              onChange={handleChange}
            />

            <TextField
              label="What I learned"
              name="learning"
              value={form.learning}
              onChange={handleChange}
            />
          </section>

          {/* Links */}
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Links
            </h2>

            <Field
              label="GitHub URL"
              name="github"
              value={form.github}
              onChange={handleChange}
            />

            <Field
              label="Live demo URL"
              name="liveDemo"
              value={form.liveDemo}
              onChange={handleChange}
            />
          </section>

          {/* Featured */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="h-4 w-4 accent-cyan-400"
              />

              <span className="text-sm text-zinc-300">
                Show this project as featured on the homepage
              </span>
            </label>
          </section>

          {error && (
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push("/admin/projects")}
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-cyan-400/40"
      />
    </div>
  );
}

function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full resize-y rounded-xl border border-white/10 bg-black px-4 py-3 text-sm leading-7 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-cyan-400/40"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-400">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();

  const [form, setForm] = useState({
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

  // Cloudinary image state
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = Array.from(e.target.files || []);

    if (files.length === 0) return;

    setUploading(true);
    setError("");

    try {
      for (const file of files) {
        if (!file.type.startsWith("image/")) {
          throw new Error("Only image files are allowed");
        }

        if (file.size > 5 * 1024 * 1024) {
          throw new Error("Each image must be smaller than 5 MB");
        }

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to upload image"
          );
        }

        if (!data.image?.url) {
          throw new Error(
            "Cloudinary did not return an image URL"
          );
        }

        setImages((current) => [
          ...current,
          data.image.url,
        ]);
      }
    } catch (error) {
      console.error("Image upload error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to upload image"
      );
    } finally {
      setUploading(false);

      // Allows selecting the same image again
      e.target.value = "";
    }
  }

  function removeImage(index: number) {
    setImages((current) =>
      current.filter((_, imageIndex) => imageIndex !== index)
    );
  }

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
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

      images,
    };

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to create project"
        );
      }

      router.push("/admin/projects");
      router.refresh();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
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
            Add project
          </h1>

          <p className="mt-3 text-zinc-500">
            Add a new project to your portfolio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-8"
        >

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
                placeholder="SocialSphere"
                required
              />

              <Field
                label="Slug"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="socialsphere"
                required
              />
            </div>

            <TextField
              label="Short description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="A short description of the project..."
              required
            />

            <TextField
              label="Long description"
              name="longDescription"
              value={form.longDescription}
              onChange={handleChange}
              placeholder="Give a more detailed explanation..."
            />
          </section>

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

                    <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Technologies & features
            </h2>

            <TextField
              label="Technologies"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              placeholder="Next.js, TypeScript, MongoDB, Tailwind CSS"
            />

            <TextField
              label="Key features"
              name="features"
              value={form.features}
              onChange={handleChange}
              placeholder={`Authentication
User profiles
Like system
Follow system`}
            />

            <TextField
              label="Challenges"
              name="challenges"
              value={form.challenges}
              onChange={handleChange}
              placeholder={`MongoDB integration
Authentication flow
Responsive UI`}
            />
          </section>

          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Project images
            </h2>

            <p className="text-sm leading-6 text-zinc-500">
              Upload project screenshots or images. Images will be
              stored securely on Cloudinary.
            </p>

            <div className="rounded-xl border border-dashed border-white/10 bg-black p-5">
              <label className="flex cursor-pointer flex-col items-center justify-center gap-3 py-8 text-center">
                <span className="text-sm font-medium text-zinc-300">
                  {uploading
                    ? "Uploading images..."
                    : "Click to upload project images"}
                </span>

                <span className="text-xs text-zinc-600">
                  PNG, JPG, JPEG or WEBP • Maximum 5 MB each
                </span>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />

                <span className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-cyan-300">
                  {uploading ? "Uploading..." : "Choose Images"}
                </span>
              </label>
            </div>

            {images.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-black"
                  >
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="h-48 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>


                    <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Project story
            </h2>

            <TextField
              label="Problem"
              name="problem"
              value={form.problem}
              onChange={handleChange}
              placeholder="What problem were you solving?"
            />

            <TextField
              label="Solution"
              name="solution"
              value={form.solution}
              onChange={handleChange}
              placeholder="How did you solve it?"
            />

            <TextField
              label="What I learned"
              name="learning"
              value={form.learning}
              onChange={handleChange}
              placeholder="What did you learn from this project?"
            />
          </section>

          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Links
            </h2>

            <Field
              label="GitHub URL"
              name="github"
              value={form.github}
              onChange={handleChange}
              placeholder="https://github.com/..."
            />

            <Field
              label="Live demo URL"
              name="liveDemo"
              value={form.liveDemo}
              onChange={handleChange}
              placeholder="https://..."
            />
          </section>

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
              disabled={loading || uploading}
              className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Creating..."
                : uploading
                  ? "Uploading..."
                  : "Create project"}
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
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
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
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
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
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
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
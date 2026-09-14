"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Cropper from "react-easy-crop";

type ProjectForm = {
  title: string;
  slug: string;
  description: string;
  images: string[];
  screenshots: string[];
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

  async function getCroppedImg(
      imageSrc: string,
      pixelCrop: {
        x: number;
        y: number;
        width: number;
        height: number;
      },
      rotation = 0
    ): Promise<Blob> {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = imageSrc;

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () => reject(new Error("Failed to load image"));
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Could not create canvas");
      }

      const radians = (rotation * Math.PI) / 180;

      const sin = Math.abs(Math.sin(radians));
      const cos = Math.abs(Math.cos(radians));

      canvas.width = image.width * cos + image.height * sin;
      canvas.height = image.width * sin + image.height * cos;

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(radians);
      ctx.translate(-image.width / 2, -image.height / 2);

      ctx.drawImage(image, 0, 0);

      const croppedCanvas = document.createElement("canvas");
      const croppedCtx = croppedCanvas.getContext("2d");

      if (!croppedCtx) {
        throw new Error("Could not create cropped canvas");
      }

      croppedCanvas.width = pixelCrop.width;
      croppedCanvas.height = pixelCrop.height;

      croppedCtx.drawImage(
        canvas,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      return new Promise<Blob>((resolve, reject) => {
        croppedCanvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to create cropped image"));
            }
          },
          "image/jpeg",
          0.9
        );
      });
    }

    

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [form, setForm] = useState<ProjectForm>({
    title: "",
    slug: "",
    description: "",
    images: [],
    screenshots: [],
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
  const [uploadingImage, setUploadingImage] = useState(false);

  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [editingImageIndex, setEditingImageIndex] = useState<number | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  function handleCropComplete(
    _: { x: number; y: number },
    croppedAreaPixels: {
      x: number;
      y: number;
      width: number;
      height: number;
    }
  ) {
    setCroppedAreaPixels(croppedAreaPixels);
  }

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
          images: project.images || [],
          screenshots: project.screenshots || [],
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

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploadingImage(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to upload image");
      }

      setForm((current) => ({
        ...current,
        images: [...current.images, data.image.url],
      }));
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to upload image."
      );
    } finally {
      setUploadingImage(false);
      e.target.value = "";
    }
  }

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

          {/* Project images */}
          <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div>
              <h2 className="text-lg font-semibold">
                Project images
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Upload images that will be displayed with this project.
              </p>
            </div>

            {/* Existing images */}
            {form.images.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {form.images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="overflow-hidden rounded-xl border border-white/10 bg-black"
                  >
                    <img
                      src={image}
                      alt={`${form.title} image ${index + 1}`}
                      className="h-48 w-full object-cover"
                    />

                    <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                      <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500">
                        Image {index + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          setEditingImage(image);
                          setEditingImageIndex(index);
                          setCrop({ x: 0, y: 0 });
                          setZoom(1);
                          setRotation(0);
                          setCroppedAreaPixels(null);
                        }}
                        className="text-xs text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setForm((current) => ({
                            ...current,
                            images: current.images.filter(
                              (_, imageIndex) => imageIndex !== index
                            ),
                          }));
                        }}
                        className="text-xs text-red-400 transition-colors hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Upload */}
            <div>
              <label className="inline-flex cursor-pointer rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10">
                {uploadingImage ? "Uploading..." : "Upload image"}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                  className="hidden"
                />
              </label>
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

      {editingImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Edit Image
                </h2>

                <p className="text-sm text-zinc-500">
                  Crop, zoom or rotate your image
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setEditingImage(null);
                  setEditingImageIndex(null);
                }}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="relative h-[420px] bg-black">
              <Cropper
                image={editingImage}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={handleCropComplete}
              />
            </div>

            <div className="space-y-5 border-t border-white/10 p-6">

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-zinc-400">Zoom</span>
                  <span className="text-zinc-500">
                    {zoom.toFixed(1)}x
                  </span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-zinc-400">Rotation</span>
                  <span className="text-zinc-500">
                    {rotation}°
                  </span>
                </div>

                <input
                  type="range"
                  min={0}
                  max={360}
                  step={1}
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setCrop({ x: 0, y: 0 });
                    setZoom(1);
                    setRotation(0);
                  }}
                  className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5"
                >
                  Reset
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEditingImage(null);
                    setEditingImageIndex(null);
                  }}
                  className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  disabled={!croppedAreaPixels || uploadingImage}
                  onClick={async () => {
                    if (!editingImage || editingImageIndex === null || !croppedAreaPixels) {
                      return;
                    }

                    setUploadingImage(true);
                    setError("");

                    try {
                      const croppedBlob = await getCroppedImg(
                        editingImage,
                        croppedAreaPixels,
                        rotation
                      );

                      const formData = new FormData();
                      formData.append(
                        "file",
                        new File([croppedBlob], "edited-image.jpg", {
                          type: "image/jpeg",
                        })
                      );

                      const response = await fetch("/api/admin/upload", {
                        method: "POST",
                        body: formData,
                      });

                      const data = await response.json();

                      if (!response.ok || !data.success) {
                        throw new Error(data.message || "Failed to upload edited image");
                      }

                      setForm((current) => ({
                        ...current,
                        images: current.images.map((image, index) =>
                          index === editingImageIndex ? data.image.url : image
                        ),
                      }));

                      setEditingImage(null);
                      setEditingImageIndex(null);
                      setCrop({ x: 0, y: 0 });
                      setZoom(1);
                      setRotation(0);
                      setCroppedAreaPixels(null);
                    } catch (error) {
                      console.error(error);

                      setError(
                        error instanceof Error
                          ? error.message
                          : "Failed to save edited image."
                      );
                    } finally {
                      setUploadingImage(false);
                    }
                  }}
                  className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {uploadingImage ? "Saving..." : "Save Image"}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
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
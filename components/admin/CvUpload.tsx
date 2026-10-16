"use client";

import { useState, type FormEvent } from "react";

export default function CvUpload() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function upload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/cv", { method: "POST", body: new FormData(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Upload failed");
      setMessage(result.message);
      form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed");
    } finally { setBusy(false); }
  }
  return (
    <section className="my-8 rounded-2xl border border-white/10 p-6">
      <h2 className="text-xl font-semibold">Portfolio CV</h2>
      <p className="mt-2 text-sm text-zinc-400">Upload a PDF up to 3 MB. A new upload replaces your current public CV.</p>
      <form onSubmit={upload} className="mt-4 flex flex-wrap items-center gap-4">
        <label htmlFor="cv-file" className="sr-only">CV PDF</label>
        <input id="cv-file" name="file" type="file" accept="application/pdf,.pdf" required disabled={busy} className="max-w-full text-sm text-zinc-300" />
        <button disabled={busy} className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-black disabled:opacity-50">{busy ? "Uploading…" : "Upload CV"}</button>
        <a href="/api/cv" className="text-sm text-cyan-300">Download current CV</a>
      </form>
      <p role="status" className="mt-3 text-sm text-zinc-300">{message}</p>
    </section>
  );
}

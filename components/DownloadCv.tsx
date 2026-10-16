"use client";

import { useEffect, useState } from "react";

export default function DownloadCv() {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/cv", { method: "HEAD", signal: controller.signal })
      .then(response => setAvailable(response.ok)).catch(() => {});
    return () => controller.abort();
  }, []);
  if (!available) return null;
  return <a href="/api/cv" download="Salih-Hayat-CV.pdf" className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/40 px-6 py-3.5 text-sm font-semibold text-indigo-300 transition-colors hover:bg-indigo-500/10">Download CV ↓</a>;
}

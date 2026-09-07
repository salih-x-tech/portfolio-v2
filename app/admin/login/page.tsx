"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Invalid username or password");
        return;
      }

      router.push("/admin/projects");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center sm:text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Admin
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome back.
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Sign in to manage your portfolio projects.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/5 bg-[#0d1226]/85 p-7 shadow-2xl backdrop-blur-xl"
        >
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              autoComplete="username"
              className="w-full rounded-xl border border-white/10 bg-[#070913] px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-sm"
              placeholder="Enter username"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="password"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/10 bg-[#070913] px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-sm"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
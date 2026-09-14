import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Project from "@/lib/models/Project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    await connectDB();

    const project = await Project.findOne({ slug }).lean();

    if (!project) {
      return {
        title: "Project Not Found",
        description: "The requested project could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const title = `${project.title} | Salih Hayat`;

    const description =
      project.description ||
      project.longDescription ||
      `Explore ${project.title}, a project built by Salih Hayat.`;

    const image = project.images?.[0];

    return {
      title,
      description,

      keywords: [
        project.title,
        "Salih Hayat",
        "Salih X Tech",
        "Full-Stack Developer",
        ...(project.technologies || []),
        ...(project.type ? [project.type] : []),
      ],

      alternates: {
        canonical: `/projects/${project.slug}`,
      },

      openGraph: {
        type: "article",
        title,
        description,
        url: `/projects/${project.slug}`,
        siteName: "Salih Hayat",
        images: image
          ? [
              {
                url: image,
                alt: `${project.title} - Salih Hayat`,
              },
            ]
          : undefined,
      },

      twitter: {
        card: image ? "summary_large_image" : "summary",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch (error) {
    console.error("Project metadata error:", error);

    return {
      title: "Project | Salih Hayat",
      description:
        "Explore projects built by Salih Hayat, a Full-Stack Developer.",
    };
  }
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  let project;
  try {
    await connectDB();
    project = await Project.findOne({ slug }).lean();
  } catch (error) {
    console.error("Project page error:", error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  const technologies = project.technologies ?? [];
  const images = project.images ?? [];
  const challenges = project.challenges ?? [];
  const features = project.features ?? [];

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: project.title,
          description:
            project.description ||
            project.longDescription ||
            "A software project built by Salih Hayat.",
          url: `https://salihhayat.dev/projects/${project.slug}`,
          author: {
            "@type": "Person",
            name: "Salih Hayat",
            url: "https://salihhayat.dev",
          },
          programmingLanguage: technologies,
          image: images[0] || undefined,
          keywords: technologies.join(", "),
        }),
      }}
    />

    
    


    <main className="relative min-h-screen overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-16">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute left-1/3 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 transition-colors hover:text-indigo-400"
        >
          ← Back to projects
        </Link>

        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              {project.type || "Project"}
            </span>

            <span className="text-slate-600">•</span>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              {project.status || "Completed"}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {project.longDescription || project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
              >
                View on GitHub ↗
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-200 hover:bg-indigo-500"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {images.length > 0 && (
          <section className="mt-16">
            <div className="grid gap-6 md:grid-cols-2">
              {images.map((image: string) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-2xl border border-white/5 bg-[#0d1226]/80 shadow-xl"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot`}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.7fr]">
          <section className="rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-bold text-white">About the project</h2>
            <p className="mt-4 leading-relaxed text-slate-400 text-sm sm:text-base">
              {project.description}
            </p>
          </section>

          <section className="rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-bold text-white">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {technologies.map((technology: string) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/5 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 grid gap-8 border-t border-white/5 pt-12 md:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-bold text-white">The Problem</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {project.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-bold text-white">The Solution</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {project.solution}
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-white/5 pt-12 md:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-bold text-white">Challenges</h2>
            <ul className="mt-4 space-y-2.5">
              {challenges.map((challenge: string) => (
                <li
                  key={challenge}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0d1226]/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-bold text-white">What I Learned</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {project.learning}
            </p>
          </div>
        </section>

        {features.length > 0 && (
          <section className="mt-12 border-t border-white/5 pt-12">
            <h2 className="text-xl font-bold text-white">Key features</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature: string) => (
                <li
                  key={feature}
                  className="rounded-xl border border-white/5 bg-[#0d1226]/80 p-4 text-sm text-slate-300 backdrop-blur-md shadow-md flex items-start gap-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400 shrink-0 shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
    </>
  );
}
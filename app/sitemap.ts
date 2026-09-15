import type { MetadataRoute } from "next";
import { connectDB } from "@/lib/mongodb";
import Project from "@/lib/models/Project";

const siteUrl = "https://salih-portfolio-seven.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const projects = await Project.find(
    {},
    {
      slug: 1,
      updatedAt: 1,
    }
  ).lean();

  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt
      ? new Date(project.updatedAt)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
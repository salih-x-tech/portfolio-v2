import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

import { connectDB } from "@/lib/mongodb";
import Project from "@/lib/models/Project";

export default async function Home() {
  let projects: Array<{
    title: string;
    slug: string;
    description: string;
    tech: string[];
    type: string;
    github: string;
    demo: string;
    featured: boolean;
    status: string;
    image: string;
  }> = [];

  try {
    await connectDB();

    let projectsFromDB = await Project.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(6)
      .lean();

    console.log("Fetched projects from DB:", projectsFromDB.length);

    if (projectsFromDB.length < 6) {
      const existingIds = projectsFromDB.map((p) => p._id);
      const additional = await Project.find({ _id: { $nin: existingIds } })
        .sort({ createdAt: -1 })
        .limit(6 - projectsFromDB.length)
        .lean();
      projectsFromDB = [...projectsFromDB, ...additional];
    }

    projects = projectsFromDB.map((project: any) => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
      tech: project.technologies || [],
      type: project.type || "Project",
      github: project.github || "",
      demo: project.liveDemo || "",
      featured: project.featured ?? true,
      status: project.status || "Completed",
      image: project.images?.[0] || project.screenshots?.[0] || "",
    }));
  } catch (error) {
    console.error("⚠️ Failed to load projects from DB:", error);
    // projects remains [] (or you can assign fallback mock data here)
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Projects projects={projects} />

        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}  
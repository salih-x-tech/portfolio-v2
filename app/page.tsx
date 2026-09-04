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
  await connectDB();

  const projectsFromDB = await Project.find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(4)
    .lean();

  const projects = projectsFromDB.map((project) => ({
    title: project.title,
    slug: project.slug,
    description: project.description,
    tech: project.technologies || [],
    type: project.type || "Project",
    github: project.github || "",
    demo: project.liveDemo || "",
    featured: project.featured ?? true,
    status: project.status || "Completed",
  }));

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
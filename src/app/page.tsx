import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ProjectsSection projects={projects} />
      <Footer />
    </main>
  );
}

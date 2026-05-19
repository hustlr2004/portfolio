import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}

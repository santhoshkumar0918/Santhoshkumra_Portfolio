import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top1";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />

      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      <BackToTop />
    </main>
  );
}

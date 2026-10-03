import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/FeaturedProjects";
import Philosophy from "../components/Philosophy";
import Contact from "../components/Contact";
import { Footer } from "../components/CtaFooter";
import GithubActivity from "../components/GithubActivity";
export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="min-h-screen w-full bg-bg text-ink">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Metrics />
        <About />
        <Philosophy />
        <Experience />
        <Skills />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

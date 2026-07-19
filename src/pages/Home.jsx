import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/FeaturedProjects";
import Philosophy from "../components/Philosophy";
import Contact from "../components/Contact";
import { Footer } from "../components/CtaFooter";

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
    <div
      className="min-h-screen w-full bg-grain"
      style={{
        backgroundColor: "#07080b",
        color: "#fbfbffff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="fixed inset-x-0 top-0 h-[560px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.10), transparent 70%)",
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Architecture /> */}
        <Philosophy />
      
       {/*  <GithubActivity />
        <Blog />
        <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

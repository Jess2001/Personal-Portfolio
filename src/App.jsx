import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { CTA, Footer } from "./components/CtaFooter";

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="min-h-screen w-full" style={{ backgroundColor: "#0b1325ff", color: "#fbfbffff", fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <Metrics />
          <Skills />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

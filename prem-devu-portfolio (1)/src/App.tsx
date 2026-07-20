import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden selection:bg-brand-purple/30 selection:text-white">
      {/* Universal Background Grids and Accents */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      
      {/* Floating Interactive Background Ambient Blobs */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse duration-[10000ms]" />

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Services />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

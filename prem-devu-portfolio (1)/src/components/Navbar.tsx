import { useState, useEffect } from "react";
import { FileText, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Projects", target: "projects" },
    { name: "Services", target: "services" },
    { name: "Process", target: "process" },
    { name: "Connect", target: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505] border-b border-white/10 py-3.5 shadow-[0_12px_40px_0_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-white font-display font-black text-xl tracking-tighter uppercase transition-colors group-hover:text-brand-purple">
            PREM <span className="text-brand-purple">DEVU</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="text-white/60 hover:text-white transition-colors duration-200 text-[11px] font-bold uppercase tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-purple after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-brand-purple hover:bg-brand-purple/10 text-white hover:text-white text-[11px] font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
          >
            <Download className="w-3.5 h-3.5 text-white/80 group-hover:text-brand-purple transition-colors" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-brand-purple p-1"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                  className="text-white/60 hover:text-white transition-colors text-left text-xs uppercase tracking-widest font-bold py-1"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white text-[11px] font-extrabold uppercase tracking-widest rounded-full hover:bg-brand-purple/10 hover:border-brand-purple transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

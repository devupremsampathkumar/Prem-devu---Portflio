import { ArrowUpRight, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 md:py-0 md:h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] animate-glow-float-1" />
      </div>
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] animate-glow-float-2" />
      </div>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 font-display text-lg md:text-xl font-medium tracking-wide flex items-center gap-2"
          >
            Hi <span className="animate-bounce">👋</span> I'm <span className="text-white font-bold">Prem</span>
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.1] text-white"
          >
            <span className="bg-gradient-to-r from-brand-blue via-[#A78BFA] to-brand-purple bg-clip-text text-transparent text-glow-purple">
              AI-
            </span>
            Powered
            <br />
            UX Designer
          </motion.h1>

          {/* Subtitle / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal"
          >
            Crafting intuitive, human-centered digital products that transform complex ideas into seamless user experiences across AI, Finance, Agriculture, Cafés, and Gated Communities.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
          >
            <button
              onClick={scrollToContact}
              className="group flex items-center justify-between gap-4 px-6 py-3.5 rounded-full bg-brand-purple hover:bg-white text-black text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(167,139,250,0.25)] hover:shadow-[0_0_25px_rgba(167,139,250,0.55)] cursor-pointer"
            >
              <span>Let's Build Together</span>
              <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-brand-purple/20 flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
            <button
              onClick={scrollToProjects}
              className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-white/20 hover:border-brand-purple/50 hover:bg-white/5 text-white/95 hover:text-white text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              <span>View Projects</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side - Single Combined Hero Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[400px] md:min-h-[500px]"
        >
          {/* Background and Portrait combined into a single, seamless design */}
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[440px] md:h-[440px] flex items-center justify-center">
            {/* Ambient Purple Core Glow behind the head */}
            <div className="absolute w-[80%] h-[80%] bg-brand-purple/40 rounded-full blur-[70px] mix-blend-screen pointer-events-none animate-pulse duration-[6000ms]" />

            {/* Glowing Orbit Rings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -rotate-12" viewBox="0 0 100 100">
              {/* Outer Orbit */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="url(#purpleGlowGradient)"
                strokeWidth="0.25"
                strokeDasharray="4 2 8 4"
                className="opacity-50 animate-spin-slow-cw"
                style={{ transformOrigin: '50px 50px' }}
              />
              {/* Inner Orbit */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="url(#blueGlowGradient)"
                strokeWidth="0.15"
                strokeDasharray="12 4"
                className="opacity-40 animate-spin-slow-ccw"
                style={{ transformOrigin: '50px 50px' }}
              />
              <defs>
                <linearGradient id="purpleGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="blueGlowGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Matrix Circular tech mesh decoration */}
            <div className="absolute inset-0 border border-white/[0.02] rounded-full p-6 pointer-events-none">
              <div className="absolute inset-0 border border-white/[0.015] rounded-full m-6 animate-spin duration-[40000ms] ease-linear" style={{ borderStyle: 'dashed' }} />
              <div className="absolute inset-0 border border-white/[0.01] rounded-full m-12" />
            </div>

            {/* Tech Dots floating particles */}
            <div className="absolute top-1/6 left-1/12 w-1.5 h-1.5 bg-brand-blue rounded-full shadow-glow-blue animate-ping duration-[3000ms]" />
            <div className="absolute bottom-1/4 right-1/12 w-2 h-2 bg-brand-purple rounded-full shadow-glow-purple animate-pulse" />

            {/* Portrait Image (Prem Devu) - Perfectly circular & responsive */}
            <div className="relative w-[75%] h-[75%] sm:w-[80%] sm:h-[80%] aspect-square rounded-full overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-[#111111] to-[#1a1a1a] group flex items-center justify-center">
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="assets/Images/profile_pic.jpeg?auto=format&fit=crop&q=80&w=600"
                alt="Prem Devu Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center relative z-0 transition-transform duration-[800ms] group-hover:scale-110"
              />
            </div>

            {/* Handwriting Accent overlay text on the right side */}
            <div className="absolute top-[20%] -right-12 sm:-right-20 pointer-events-none select-none z-20 max-w-[150px] sm:max-w-[200px]">
              <motion.p
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 0.8, rotate: 12 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-script text-lg sm:text-2xl text-brand-purple text-glow-purple text-right leading-tight tracking-wide"
              >
                Designing
                <br />
                Experiences.
                <br />
                <span className="text-white/60">Delivering</span>
                <br />
                <span className="text-brand-pink text-glow-purple">Impact.</span>
              </motion.p>
            </div>
            
            {/* Tech line vectors crossing behind portrait */}
            <div className="absolute left-[-20px] top-[40%] w-[120px] h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent pointer-events-none" />
            <div className="absolute right-[-20px] bottom-[30%] w-[120px] h-[1px] bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Explore Indicator Centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5 bg-white/[0.01]">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-brand-purple rounded-full shadow-glow-purple"
          />
        </div>
        <span className="text-[9px] tracking-[0.25em] font-mono text-gray-400 uppercase select-none whitespace-nowrap">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}

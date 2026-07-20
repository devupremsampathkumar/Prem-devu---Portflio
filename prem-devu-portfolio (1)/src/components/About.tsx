import { motion } from "motion/react";
import { Sparkles, Brain, Award, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Experience", value: "1+ Years", desc: "End-to-End Product Design", icon: Award },
    { label: "Core Focus", value: "AI & UX", desc: "Intelligent Interfaces", icon: Brain },
    { label: "Completed", value: "10+ Projects", desc: "Real-World Scalable Products", icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] relative border-b border-white/10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Visual Intro */}
          <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
            <span className="text-xs tracking-[0.3em] font-mono font-semibold uppercase text-brand-purple text-glow-purple">
              • ABOUT ME •
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
              Transforming
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-white to-brand-purple bg-clip-text text-transparent text-glow-purple">
                Complexity
              </span>
              <br />
              Into Simplicity
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full" />
          </div>

          {/* Right Column: Bio Narrative & Stats Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left font-light">
              I am an AI-powered UX Designer with over 1+ years of experience creating intuitive and user-centered digital products. I specialize in end-to-end design, using research-driven insights to turn complex problems into simple, effective user experiences. My core skills include user research, wireframing, prototyping, and usability testing, helping deliver solutions that align with both user needs and business goals.
              <br />
              <br />
              I have worked on real-world projects across domains like agriculture, fintech, and community platforms. I also leverage AI tools and modern design workflows to improve efficiency and build smarter experiences. Alongside UX, I bring skills in digital marketing, visual design, and AI-driven content creation to enhance both product usability and growth.
            </p>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-5 rounded-[24px] border border-white/10 bg-[#111111] hover:border-brand-purple/30 hover:shadow-glow-purple transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden"
                >
                  {/* Subtle vector background */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-brand-purple/5 rounded-full group-hover:scale-125 transition-transform" />

                  <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-brand-purple mb-4">
                    <stat.icon className="w-4.5 h-4.5" />
                  </div>

                  <span className="text-2xl font-display font-black text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-gray-400 mb-0.5 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-gray-500 font-light">
                    {stat.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

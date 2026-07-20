import { motion } from "motion/react";
import { UserSearch, Lightbulb, Compass, Rocket } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: any;
  color: string;
}

export default function Process() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Getting to know the problem",
      desc: "We start by talking. I listen, ask questions, and try to understand your goals, users, and the challenges behind the project.",
      icon: UserSearch,
      color: "from-brand-blue/20 to-brand-purple/10",
    },
    {
      num: "02",
      title: "Exploring ideas and direction",
      desc: "From early ideas to rough concepts, I explore different directions and approaches to find what makes the most sense.",
      icon: Lightbulb,
      color: "from-brand-purple/20 to-brand-pink/10",
    },
    {
      num: "03",
      title: "Designing the solution",
      desc: "I turn ideas into clear layouts and interfaces, focusing on usability, clarity, and thoughtful interactions.",
      icon: Compass,
      color: "from-brand-pink/20 to-orange-500/10",
    },
    {
      num: "04",
      title: "Refining and delivering",
      desc: "We review, refine, and polish the details until everything feels aligned, then prepare the design for delivery.",
      icon: Rocket,
      color: "from-orange-500/20 to-brand-blue/10",
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#050505] relative border-b border-white/10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-20 max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] font-mono font-semibold uppercase text-brand-purple text-glow-purple">
            • MY PROCESS •
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent text-glow-purple mr-3">
              Here's How I
            </span>
            Approach Each Project
          </h2>
        </div>

        {/* Process Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* SVG Connector Arrows (Desktop ONLY, links Card 1 -> 2 -> 3 -> 4) */}
          <div className="absolute top-[40px] left-0 right-0 w-full h-[40px] hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 40" fill="none">
              <style>{`
                @keyframes processDash {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
                .animate-process-dash {
                  animation: processDash 1.5s linear infinite;
                }
              `}</style>
              {/* Connector 1 -> 2 */}
              <path
                d="M 175 20 Q 250 -5, 325 20"
                stroke="url(#connectorGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                className="animate-process-dash"
              />
              {/* Connector 2 -> 3 */}
              <path
                d="M 425 20 Q 500 45, 575 20"
                stroke="url(#connectorGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                className="animate-process-dash"
              />
              {/* Connector 3 -> 4 */}
              <path
                d="M 675 20 Q 750 -5, 825 20"
                stroke="url(#connectorGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                className="animate-process-dash"
              />
              <defs>
                <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00A3FF" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 90, damping: 14, delay: idx * 0.12 }}
              className="group relative rounded-[24px] bg-[#111111] border border-white/10 p-6 md:p-8 flex flex-col items-start text-left hover:border-brand-purple/40 hover:shadow-glow-purple transition-all duration-300 z-10"
            >
              {/* Icon & Index Number Line */}
              <div className="flex items-center justify-between w-full mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-mono text-3xl font-extrabold text-white/5 group-hover:text-brand-purple/20 transition-colors select-none">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                {step.desc}
              </p>

              {/* Card visual footer tech accent */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent mt-6 group-hover:via-brand-purple/30 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

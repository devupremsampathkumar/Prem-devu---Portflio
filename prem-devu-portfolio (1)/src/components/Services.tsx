import { motion } from "motion/react";
import { PenTool, Laptop, BarChart2, MessageSquare, Video, Camera, ArrowRight, Grid } from "lucide-react";

interface Service {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: any;
  color: string;
}

export default function Services() {
  const leftServices: Service[] = [
    {
      id: "uiux",
      num: "01",
      title: "UI/UX Design",
      desc: "Crafting intuitive and user-centric interfaces that deliver seamless and delightful experiences.",
      icon: PenTool,
      color: "from-brand-blue to-cyan-500",
    },
    {
      id: "marketing",
      num: "03",
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies that increase visibility, drive traffic, and boost conversions.",
      icon: BarChart2,
      color: "from-pink-500 to-red-500",
    },
    {
      id: "video",
      num: "05",
      title: "AI Production Videos",
      desc: "Creating high-quality AI-powered videos for product, promos, explainers, and storytelling.",
      icon: Video,
      color: "from-brand-purple to-brand-pink",
    },
  ];

  const rightServices: Service[] = [
    {
      id: "web",
      num: "02",
      title: "Web Design",
      desc: "Designing modern, responsive websites that combine aesthetics with performance and purpose.",
      icon: Laptop,
      color: "from-cyan-500 to-brand-blue",
    },
    {
      id: "social",
      num: "04",
      title: "Social Media Handling",
      desc: "Managing your social presence with engaging content, creative strategies, and community focus.",
      icon: MessageSquare,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "photography",
      num: "06",
      title: "Photography",
      desc: "Capturing powerful visuals for brands, products, and people that tell your story beautifully.",
      icon: Camera,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative border-b border-white/10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-20 max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] font-mono font-semibold uppercase text-brand-purple text-glow-purple">
            • WHAT I OFFER •
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent text-glow-purple mr-3">
              My
            </span>
            Services
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-1">
            End-to-end digital solutions to elevate your brand, engage your audience, and drive real results.
          </p>
        </div>

        {/* Constellation/Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative max-w-5xl mx-auto">
          
          {/* Connector Wires (Desktop SVG Layout) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <defs>
                <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <style>{`
                @keyframes servicesDash {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
                .animate-services-dash {
                  animation: servicesDash 1.5s linear infinite;
                }
              `}</style>
              {/* Left connections */}
              <path d="M 320 100 L 440 100 L 460 300" stroke="url(#servicesGradient)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-services-dash" />
              <path d="M 320 300 L 410 300 L 430 220 L 460 300" stroke="url(#servicesGradient)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-services-dash" />
              <path d="M 320 500 L 440 500 L 460 300" stroke="url(#servicesGradient)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-services-dash" />

              {/* Right connections */}
              <path d="M 680 100 L 560 100 L 540 300" stroke="url(#servicesGradient)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-services-dash" />
              <path d="M 680 300 L 590 300 L 570 220 L 540 300" stroke="url(#servicesGradient)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-services-dash" />
              <path d="M 680 500 L 560 500 L 540 300" stroke="url(#servicesGradient)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-services-dash" />
            </svg>
          </div>

          {/* Left Column Services (01, 03, 05) */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10 text-left z-10">
            {leftServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex items-start gap-5 p-5 rounded-[24px] border border-white/10 bg-[#111111] hover:bg-[#111111]/90 hover:border-brand-purple/40 shadow-lg hover:shadow-glow-purple transition-all duration-300"
              >
                {/* Large index number */}
                <span className="font-mono text-3xl font-bold text-white/15 group-hover:text-brand-purple/40 transition-colors select-none shrink-0">
                  {service.num}
                </span>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-glow-purple">
                      <service.icon className="w-4 h-4 text-brand-purple group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-purple transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Interactive Glowing Hub */}
          <div className="lg:col-span-4 flex items-center justify-center min-h-[180px] lg:min-h-0 z-10">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 border border-brand-purple/30 rounded-full p-2.5 animate-pulse duration-[3000ms]">
                <div className="absolute inset-0 border border-dashed border-brand-blue/20 rounded-full" />
              </div>
              
              {/* Mid concentric circle */}
              <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full" />
              
              {/* Core interactive node */}
              <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#111111] to-[#1a1a1a] border border-brand-purple/40 flex items-center justify-center shadow-glow-purple">
                <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center border border-white/10">
                  <PenTool className="w-6 h-6 text-brand-purple animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Services (02, 04, 06) */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10 text-left z-10">
            {rightServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex items-start gap-5 p-5 rounded-[24px] border border-white/10 bg-[#111111] hover:bg-[#111111]/90 hover:border-brand-blue/40 shadow-lg hover:shadow-glow-blue transition-all duration-300"
              >
                {/* Large index number */}
                <span className="font-mono text-3xl font-bold text-white/15 group-hover:text-brand-blue/40 transition-colors select-none shrink-0">
                  {service.num}
                </span>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-glow-blue">
                      <service.icon className="w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA Button bottom */}
        <div className="text-center mt-20 flex justify-center">
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#111111] hover:bg-brand-purple/20 border border-brand-purple/40 hover:border-brand-purple text-sm text-white font-semibold transition-all duration-300 shadow-glow-purple cursor-pointer"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-brand-purple group-hover:bg-brand-pink transition-colors animate-pulse" />
            <span>Let's Work Together</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

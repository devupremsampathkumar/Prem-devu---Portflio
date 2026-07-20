import React from "react";
import { motion } from "motion/react";

// Inline Brand Icon Components
const FigmaIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6a3 3 0 0 0-3-3H7a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3z" fill="#F24E1E"/>
    <path d="M9 9a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2V9H9z" fill="#A259FF"/>
    <path d="M9 15a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-3H9z" fill="#1ABCFE"/>
    <path d="M15 9a3 3 0 0 0 3-3a3 3 0 0 0-3-3h-3v6h3z" fill="#FF7262"/>
    <path d="M15 15a3 3 0 0 0 3-3V9h-6v6h3z" fill="#0ACF83"/>
  </svg>
);

const AdobeXDIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#2E001F" />
    <text x="4" y="15" fill="#FF61F6" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">Xd</text>
  </svg>
);

const PhotoshopIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#001C2C" />
    <text x="4" y="15" fill="#31A8FF" fontSize="9" fontWeight="900" fontFamily="sans-serif">Ps</text>
  </svg>
);

const IllustratorIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#261300" />
    <text x="5" y="15" fill="#FF9A00" fontSize="9" fontWeight="900" fontFamily="sans-serif">Ai</text>
  </svg>
);

const MiroIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#FFD02F" />
    <path d="M7 6l4 3.5L7 13V6zm6 4.5l4 3.5-4 3.5v-7z" fill="#050505" />
  </svg>
);

const FramerIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2h14v7H5V2zm0 7h14l-7 7H5V9zm7 7l7 7V16H12z" fill="#0055FF" />
  </svg>
);

const NotionIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 4v10l2.5-1.5L12 17l4-10H14.5l-2.5 6-2-6H7z" fill="#FFFFFF" />
  </svg>
);

const ChatGPTIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3 11.2c-.3-1.8-1.5-3.3-3.2-3.8.3-.9.3-1.9-.1-2.8-.7-1.7-2.3-2.8-4.2-2.8-.6 0-1.2.1-1.8.4-.7-1.1-1.9-1.8-3.3-1.8-1.9 0-3.6 1.3-4.1 3.1-.9-.2-1.9-.1-2.7.4C.6 4.6-.2 6.3 0 8.1c-.4.4-.7 1-.9 1.6-.5 1.7-.1 3.5.9 4.8-.3.9-.3 1.9.1 2.8.7 1.7 2.3 2.8 4.2 2.8.6 0 1.2-.1 1.8-.4.7 1.1 1.9 1.8 3.3 1.8 1.9 0 3.6-1.3 4.1-3.1.9.2 1.9.1 2.7-.4 1.3-.9 2.1-2.6 1.9-4.4.4-.4.7-1 .9-1.6.5-1.7.1-3.5-.9-4.8z" fill="#10A37F" />
  </svg>
);

const ClaudeIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#D97706" />
    <path d="M12 5v14M5 12h14" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const GeminiIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 12.5 8.5 19 12C12.5 15.5 12 22 12 22C12 22 11.5 15.5 5 12C11.5 8.5 12 2 12 2Z" fill="#8B5CF6" />
    <path d="M19 4C19 4 19.2 6.5 21.5 7.7C19.2 8.9 19 11.4 19 11.4C19 11.4 18.8 8.9 16.5 7.7C18.8 6.5 19 4 19 4Z" fill="#3B82F6" />
  </svg>
);

const CursorIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3.2l12.3 8.3-5.2 1.3 4.2 6.4-1.8 1.1-4.2-6.4-5.3 4.1V3.2z" fill="#00F0FF" />
  </svg>
);

const VSCodeIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6.5L16.5 2 11 5.5l-5-4L2 4v16l4 2.5 5-4 5.5 3.5 5.5-4.5V6.5z" fill="#007ACC" />
  </svg>
);

const CanvaIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#00C4CC" />
    <text x="6" y="16" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="serif" italic="true">C</text>
  </svg>
);

interface ToolItem {
  name: string;
  color: string;
  iconBg: string;
  Icon: React.ComponentType;
}

export default function TechStack() {
  const leftTools: ToolItem[] = [
    { name: "Figma", color: "#F24E1E", iconBg: "bg-[#F24E1E]/10", Icon: FigmaIcon },
    { name: "Adobe XD", color: "#FF61F6", iconBg: "bg-[#FF61F6]/10", Icon: AdobeXDIcon },
    { name: "Photoshop", color: "#31A8FF", iconBg: "bg-[#31A8FF]/10", Icon: PhotoshopIcon },
    { name: "Illustrator", color: "#FF9A00", iconBg: "bg-[#FF9A00]/10", Icon: IllustratorIcon },
    { name: "Miro", color: "#FFD02F", iconBg: "bg-[#FFD02F]/10", Icon: MiroIcon },
    { name: "Framer", color: "#0055FF", iconBg: "bg-[#0055FF]/10", Icon: FramerIcon },
    { name: "Canva", color: "#00C4CC", iconBg: "bg-[#00C4CC]/10", Icon: CanvaIcon },
  ];

  const rightTools: ToolItem[] = [
    { name: "ChatGPT", color: "#10A37F", iconBg: "bg-[#10A37F]/10", Icon: ChatGPTIcon },
    { name: "Claude", color: "#D97706", iconBg: "bg-[#D97706]/10", Icon: ClaudeIcon },
    { name: "Gemini", color: "#8B5CF6", iconBg: "bg-[#8B5CF6]/10", Icon: GeminiIcon },
    { name: "Cursor", color: "#00F0FF", iconBg: "bg-[#00F0FF]/10", Icon: CursorIcon },
    { name: "VS Code", color: "#007ACC", iconBg: "bg-[#007ACC]/10", Icon: VSCodeIcon },
    { name: "Notion", color: "#FFFFFF", iconBg: "bg-white/10", Icon: NotionIcon },
  ];

  // Duplicate lists to achieve infinite seamless loop
  const duplicatedLeft = [...leftTools, ...leftTools, ...leftTools, ...leftTools];
  const duplicatedRight = [...rightTools, ...rightTools, ...rightTools, ...rightTools];

  return (
    <section className="relative py-12 bg-[#050505] border-y border-white/10 overflow-hidden">
      {/* Light glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-brand-purple/5 blur-[50px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative">
          
          {/* Left Column: Design tools scrolling from left to right (towards center) */}
          <div className="relative overflow-hidden select-none pointer-events-none flex items-center pr-6 md:pr-12 h-14">
            {/* Fade overlays to prevent blending with middle and left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 items-center shrink-0 min-w-full animate-scroll-right">
              {duplicatedLeft.map((tool, idx) => (
                <div
                  key={`left-${idx}`}
                  className="flex items-center gap-2.5 shrink-0 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 transition-colors uppercase tracking-wider text-[9px]"
                >
                  {/* Brand Logo Icon */}
                  <div className={`w-6 h-6 rounded-md ${tool.iconBg} flex items-center justify-center`}>
                    <tool.Icon />
                  </div>
                  <span className="text-white/80 font-mono font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: AI & Engineering tools scrolling from right to left (towards center) */}
          <div className="relative overflow-hidden select-none pointer-events-none flex items-center pl-6 md:pl-12 h-14">
            {/* Fade overlays to prevent blending with middle and right edge */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 items-center shrink-0 min-w-full animate-scroll-left">
              {duplicatedRight.map((tool, idx) => (
                <div
                  key={`right-${idx}`}
                  className="flex items-center gap-2.5 shrink-0 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 transition-colors uppercase tracking-wider text-[9px]"
                >
                  {/* Brand Logo Icon */}
                  <div className={`w-6 h-6 rounded-md ${tool.iconBg} flex items-center justify-center`}>
                    <tool.Icon />
                  </div>
                  <span className="text-white/80 font-mono font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Absolute Centered stationary glowing Bracket Pill */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-20">
            <div className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#111111]/95 border border-brand-purple/40 backdrop-blur-md shadow-glow-purple">
              <span className="text-brand-purple font-mono text-sm font-bold select-none">[</span>
              <span className="text-white font-display text-[10px] font-bold tracking-widest uppercase">
                Tools Stack
              </span>
              <span className="text-brand-purple font-mono text-sm font-bold select-none">]</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

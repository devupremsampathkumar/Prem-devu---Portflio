import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";
import { motion } from "motion/react";

const BehanceIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
    {...props}
  >
    <path d="M22 13.06h-5.54c.05.69.29 1.16.74 1.43.34.21.75.3 1.21.3.49 0 .91-.11 1.25-.33.34-.23.57-.61.68-1.15h1.56c-.15 1-.61 1.76-1.39 2.27s-1.7 0-2.82.02c-1.15 0-2.12-.31-2.92-.93-.8-.62-1.2-1.52-1.2-2.7 0-1.14.39-2.03 1.17-2.69s1.77-.98 2.97-.98c1.17 0 2.11.31 2.82.93.7.62 1.06 1.49 1.06 2.62 0 .15-.01.35-.02.55zm-1.63-1.25c-.01-.5-.15-.89-.44-1.17-.28-.28-.68-.42-1.18-.42-.49 0-.89.14-1.19.42-.3.28-.46.67-.48 1.17h3.29zM8.88 15.65H3V8.35h5.88c1 0 1.77.21 2.3.62.53.41.8 1 .8 1.76 0 .61-.17 1.09-.5 1.45s-.82.6-1.46.72c.8.14 1.39.5 1.77 1.06.38.56.57 1.24.57 2.05 0 .84-.28 1.5-.83 2-.55.5-1.35.75-2.4.75l-.25-.01zm-3.83-5.2h3.21c.42 0 .75-.08.97-.24s.33-.42.33-.76c0-.36-.11-.63-.33-.79-.22-.16-.54-.24-.97-.24H5.05v2.03zm0 3.25V14.6h3.45c.46 0 .8-.1.99-.3s.3-.49.3-.85c0-.34-.1-.59-.3-.75s-.52-.24-.99-.24H5.05zm14.17-7.58H16.1V4.8h3.12v1.32z"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/premsampathkumardevu/", icon: Linkedin },
    { name: "Behance", url: "https://www.behance.net/premsampathkumardevu/", icon: BehanceIcon },
  ];

  return (
    <footer className="pt-24 pb-10 bg-[#050505] relative overflow-hidden">
      {/* Glow from bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        {/* Giant footer header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Lets design
            <br />
            <span className="bg-gradient-to-r from-brand-blue via-white to-brand-purple bg-clip-text text-transparent text-glow-purple">
              incredible work together.
            </span>
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-12 border-b border-white/10">
          {/* Email Item */}
          <a
            href="mailto:devupremsampathkumar@gmail.com"
            className="group flex items-center gap-4 p-4 rounded-[24px] border border-white/10 bg-[#111111] hover:border-brand-purple/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-brand-purple border border-white/10 shadow-sm group-hover:scale-105 transition-transform">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] tracking-wider uppercase font-mono text-gray-500 font-bold block mb-0.5">
                Email
              </span>
              <span className="text-white text-xs sm:text-sm font-semibold group-hover:text-brand-purple transition-colors break-all max-w-full block">
                devupremsampathkumar@gmail.com
              </span>
            </div>
          </a>

          {/* Phone Item */}
          <a
            href="tel:8328513161"
            className="group flex items-center gap-4 p-4 rounded-[24px] border border-white/10 bg-[#111111] hover:border-brand-purple/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-brand-purple border border-white/10 shadow-sm group-hover:scale-105 transition-transform">
              <Phone className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] tracking-wider uppercase font-mono text-gray-500 font-bold block mb-0.5">
                Phone
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-brand-purple transition-colors">
                8328513161
              </span>
            </div>
          </a>

          {/* Location Item */}
          <div className="group flex items-center gap-4 p-4 rounded-[24px] border border-white/10 bg-[#111111] hover:border-brand-purple/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-brand-purple border border-white/10 shadow-sm group-hover:scale-105 transition-transform">
              <MapPin className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] tracking-wider uppercase font-mono text-gray-500 font-bold block mb-0.5">
                Location
              </span>
              <span className="text-white text-sm font-semibold">
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* Social Icons Item */}
          <div className="flex flex-col justify-center items-start pl-2">
            <span className="text-[10px] tracking-wider uppercase font-mono text-gray-500 font-bold block mb-3">
              Social Connect
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-[#111111] hover:border-brand-purple/40 hover:bg-brand-purple/10 flex items-center justify-center text-gray-400 hover:text-white shadow-sm transition-all duration-300 hover:scale-105"
                  aria-label={social.name}
                >
                  <social.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="flex flex-col sm:row sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 pt-2">
          <span>© 2026 Prem Devu</span>
          <div className="flex items-center gap-1.5 hover:text-gray-400 transition-colors">
            <span>Designed & Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-purple fill-brand-purple animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}

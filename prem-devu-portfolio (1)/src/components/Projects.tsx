import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sun, Coffee, Bell, Activity, ClipboardList, Wrench, Settings, X, Globe, Github } from "lucide-react";
import sadhyaImage from "../../assets/Images/sadhya.png";
import fitifyImage from "../../assets/Images/project3.png";
import artjunaImage from "../../assets/Images/Artjuna.png";
import safehomeImage from "../../assets/Images/Safehome.png";
import taxmizeImage from "../../assets/Images/Taxmize.png";
import trackerflowImage from "../../assets/Images/TrackFlow.png";
import indiapostImage from "../../assets/Images/Post.png";
import autonestImage from "../../assets/Images/Car.png";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
  mockupType: "sadhya" | "artjuna" | "taxmize" | "safehome" | "fitify" | "indiapost" | "carservice1" | "carservice2";
  image?: string;
  features: string[];
  challenges: string;
  solution: string;
  liveDemoUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "sadhya-ai",
      title: "Sadhya",
      subtitle: "Agri Companion Application",
      role: "Product Designer",
      description: "Designed an AI-powered agricultural companion app that helps farmers make smarter decisions with real-time insights on crops, weather, market prices, and expert advisory.",
      tags: ["Figma", "Lovable", "Gemini AI"],
      link: "#",
      image: sadhyaImage,
      mockupType: "sadhya",
      features: [
        "Real-time crop disease diagnosis using multi-modal AI scans",
        "Daily Mandi prices tracking with visual market graphs and predictions",
        "Multilingual voice assistant customized for regional dialect queries",
        "Smart hyper-local weather advisory forecasting with agricultural tips"
      ],
      challenges: "Farming users faced extreme technological barriers and varying regional connectivity, making typical nested mobile interfaces highly confusing and hard to navigate.",
      solution: "Implemented clean voice-first command controls coupled with prominent one-tap card actions that drastically reduced cognitive load and removed text input barriers.",
      liveDemoUrl: "https://sadhya-ai-demo.example.com",
      githubUrl: "https://github.com/premdevu/sadhya-ai"
    },
    {
      id: "fitify",
      title: "Fitify",
      subtitle: "Gym Trainer & Diet Booking Platform (App + Web)",
      role: "UI/UX Designer",
      description: "Designed a fitness platform that connects users with professional gym trainers, personalized diet plans, and healthy food ordering services in one ecosystem.",
      tags: ["Figma", "ChatGPT", "Google Stitch"],
      link: "#",
      image: fitifyImage,
      mockupType: "fitify",
      features: [
        "Trainer discovery with filters (location, specialization, pricing)",
        "Personalized diet plan generator based on user goals",
        "Healthy meal ordering with subscription options",
        "Workout scheduling and session booking",
        "Progress tracking dashboard with fitness insights"
      ],
      challenges: "Users struggled to find trusted trainers, follow consistent diet plans, and manage fitness routines across multiple apps.",
      solution: "Created an all-in-one fitness platform with simplified booking flows and AI-driven personalization, enabling users to manage workouts, diet, and food from one interface.",
      liveDemoUrl: "https://fitify-track.example.com",
      githubUrl: "https://github.com/premdevu/fitify"
    },
    {
      id: "artjuna",
      title: "Artjuna",
      subtitle: "Cafe Mobile App",
      role: "UI/UX Designer",
      description: "Crafted a delightful mobile experience for a cafe app that offers seamless food ordering, table booking, exclusive offers, and personalized recommendations.",
      tags: ["Figma", "Miro", "ChatGPT"],
      link: "#",
      image: artjunaImage,
      mockupType: "artjuna",
      features: [
        "Contactless QR-code smart tableside food ordering system",
        "Real-time table booking and seat occupancy calendar integration",
        "Personalized live music event updates and fast digital ticket manager",
        "Loyalty rewards program tracking with tier progress indicators"
      ],
      challenges: "High foot-traffic periods created customer ordering delays and staff coordination bottlenecks during peak Goan holiday tourist seasons.",
      solution: "Designed a streamlined dual-user application flow that allowed diners to easily order and pay from their tables while sync-notifying the kitchen staff instantly.",
      liveDemoUrl: "https://artjuna-cafe.example.com",
      githubUrl: "https://github.com/premdevu/artjuna-app"
    },
    {
      id: "safehome",
      title: "Safehome",
      subtitle: "Gated Community Application",
      role: "Product Designer",
      description: "Developed a smart community management app that enhances security, communication, and facility management for residents and administrators in gated communities.",
      tags: ["Figma", "Gemini AI", "Google Forms"],
      link: "#",
      image: safehomeImage,
      mockupType: "safehome",
      features: [
        "Pre-approved visitor digital gate entry control panel",
        "Real-time package delivery locker notifications with photo proof",
        "Direct community emergency alert broadcasting and panic button",
        "Shared neighborhood neighborhood amenity and clubhouse reservation scheduler"
      ],
      challenges: "Residents frequently missed crucial courier deliveries, and security guards struggled to verify unexpected visitor IDs quickly enough.",
      solution: "Built a lightning-fast push-notification and approval flow, allowing residents to authorize visitors with a single secure tap on lockscreens.",
      liveDemoUrl: "https://safehome-gate.example.com",
      githubUrl: "https://github.com/premdevu/safehome"
    },
    {
      id: "taxmize",
      title: "Taxmize",
      subtitle: "US Tax Filing Application",
      role: "UI/UX Designer",
      description: "Designed a user-friendly tax filing platform for the US market, simplifying complex tax processes with smart guidance, secure data handling, and a clear step-by-step experience.",
      tags: ["Figma", "ChatGPT", "Notion"],
      link: "#",
      image: taxmizeImage,
      mockupType: "taxmize",
      features: [
        "Step-by-step smart tax classification wizard with responsive tips",
        "Secure 256-bit encrypted personal document upload vault",
        "Interactive tax refund and obligation tracking simulator",
        "Automated IRS filing status updates and milestone notifications"
      ],
      challenges: "Tax filing is inherently stressful, cluttered, and contains highly complex professional terminology that alienates standard everyday taxpayers.",
      solution: "Re-engineered the interface as a progressive disclosure wizard, reducing information density to one simple, human-readable question per screen.",
      liveDemoUrl: "https://taxmize-us.example.com",
      githubUrl: "https://github.com/premdevu/taxmize"
    },
    {
      id: "trackerflow-ai",
      title: "TrackerFlow AI",
      subtitle: "Employee Management System (Web Application)",
      role: "UI/UX Designer",
      description: "Designed an AI-powered employee management system that helps organizations monitor work progress, attendance, and leave management efficiently.",
      tags: ["Figma", "Google Stitch", "Motiff"],
      link: "#",
      image: trackerflowImage,
      mockupType: "carservice2",
      features: [
        "Real-time employee activity tracking",
        "Smart attendance and login monitoring",
        "AI-powered productivity insights",
        "Leave request and approval system",
        "Role-based Admin and Employee dashboards"
      ],
      challenges: "Organizations lacked a centralized system for tracking productivity and attendance.",
      solution: "Designed a clean, data-driven dashboard with AI insights to automate workflows and improve decision-making.",
      liveDemoUrl: "https://trackerflow-demo.example.com",
      githubUrl: "https://github.com/premdevu/trackerflow-ai"
    },
    {
      id: "heuristic-evaluation",
      title: "Heuristic Evaluation",
      subtitle: "Indian Post Digital Experience",
      role: "UX Researcher",
      description: "Conducted a usability evaluation of the Indian Post digital platform using Jakob Nielsen's 10 Usability Heuristics.",
      tags: ["UX Research Methods", "Notion"],
      link: "#",
      image: indiapostImage,
      mockupType: "indiapost",
      features: [
        "Evaluation using Nielsen's 10 heuristics",
        "Navigation and workflow analysis",
        "UX audit report with severity ratings",
        "Accessibility recommendations",
        "User journey and pain-point analysis"
      ],
      challenges: "Users experienced navigation issues and difficulty completing tasks.",
      solution: "Performed a structured UX audit and delivered actionable recommendations to improve usability and accessibility.",
      liveDemoUrl: "https://indiapost-ux-redesign.example.com",
      githubUrl: "https://github.com/premdevu/india-post-audit"
    },
    {
      id: "autonest",
      title: "AutoNest",
      subtitle: "Car Service Booking Application",
      role: "UI/UX Designer",
      description: "Designed a mobile application that allows users to book car services, track service status, and manage vehicle maintenance.",
      tags: ["Figma", "Notion", "Miro"],
      link: "#",
      image: autonestImage,
      mockupType: "carservice1",
      features: [
        "Easy booking with doorstep pickup",
        "Live service tracking",
        "Service history and maintenance reminders",
        "Cost estimation before booking",
        "Multiple service package selection"
      ],
      challenges: "Users lacked transparency in pricing and service updates while booking car services.",
      solution: "Designed an intuitive booking experience with live tracking, transparent pricing, and timely notifications.",
      liveDemoUrl: "https://autonest-booking.example.com",
      githubUrl: "https://github.com/premdevu/autonest"
    }
  ];

  const renderMockup = (type: Project["mockupType"]) => {
    switch (type) {
      case "safehome":
        return (
          <div className="w-full h-full bg-[#04091a] text-white p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Top Device Bar */}
            <div className="flex justify-between items-center text-[7px] text-white/50 mb-1.5 px-1 font-mono">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Profile Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-left">
                <div className="w-5.5 h-5.5 rounded-full bg-blue-900 border border-white/20 overflow-hidden flex items-center justify-center font-bold text-[7px]">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-white text-[8px] leading-tight">Hi Shivam 👋</h4>
                  <p className="text-white/40 text-[6px] leading-none">Smart living at fingertips</p>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center relative">
                <Bell className="w-2.5 h-2.5 text-yellow-400" />
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>
            </div>

            {/* Grid Services */}
            <div className="grid grid-cols-2 gap-1.5 mb-2 text-left">
              <div className="bg-white/[0.03] border border-white/5 p-1.5 rounded-lg flex items-center gap-1.5">
                <span className="text-[10px]">🍎</span>
                <div>
                  <span className="font-medium text-white block text-[7px] leading-tight">Essentials</span>
                  <span className="text-white/40 text-[5px] leading-none">Fresh groceries</span>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 p-1.5 rounded-lg flex items-center gap-1.5">
                <span className="text-[10px]">🚗</span>
                <div>
                  <span className="font-medium text-white block text-[7px] leading-tight">Commute</span>
                  <span className="text-white/40 text-[5px] leading-none">Travel simplified</span>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 p-1.5 rounded-lg flex items-center gap-1.5">
                <span className="text-[10px]">🔥</span>
                <div>
                  <span className="font-medium text-white block text-[7px] leading-tight">Utility</span>
                  <span className="text-white/40 text-[5px] leading-none">Pay bills in one tap</span>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 p-1.5 rounded-lg flex items-center gap-1.5">
                <span className="text-[10px]">🏷️</span>
                <div>
                  <span className="font-medium text-white block text-[7px] leading-tight">Coupons</span>
                  <span className="text-white/40 text-[5px] leading-none">Smart savings</span>
                </div>
              </div>
            </div>

            {/* Sale Banner */}
            <div className="bg-gradient-to-r from-green-950 to-emerald-900 border border-green-500/20 rounded-lg p-2 text-left relative overflow-hidden mb-2">
              <span className="text-[5px] font-bold text-yellow-400 uppercase tracking-wider block">Super Discount</span>
              <p className="font-extrabold text-[8px] leading-tight text-white max-w-[100px]">BIG SALE UP TO 50% OFF ON VEG FOOD</p>
            </div>

            {/* Floating Alerts Container */}
            <div className="flex flex-col gap-1 text-left mt-auto">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-1.5 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-green-400">✓</span>
                  <div>
                    <span className="text-white text-[7px] font-semibold leading-none block">Visitor Approved</span>
                    <span className="text-white/50 text-[5px] leading-none">Gate Entry Successful</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 p-1.5 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-orange-400">📦</span>
                  <div>
                    <span className="text-white text-[7px] font-semibold leading-none block">Package Delivered</span>
                    <span className="text-white/50 text-[5px] leading-none">Block A, Flat 302</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "artjuna":
        return (
          <div className="w-full h-full bg-[#FAF6EE] text-[#1d3d2c] p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />

            {/* Top Device Bar */}
            <div className="flex justify-between items-center text-[7px] text-[#1d3d2c]/40 mb-1.5 px-1 font-mono">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Profile Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-left">
                <div className="w-5.5 h-5.5 rounded-full bg-[#1d3d2c] border border-[#1d3d2c] flex items-center justify-center font-bold text-white text-[7px]">
                  R
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1d3d2c] text-[8px] leading-tight">Hi Roshan 👋</h4>
                  <p className="text-[#1d3d2c]/50 text-[6px] leading-none">Perfect cup is just a tap away!</p>
                </div>
              </div>
              <Coffee className="w-3.5 h-3.5 text-amber-800" />
            </div>

            {/* Horizontal Options */}
            <div className="flex gap-1.5 mb-2">
              <span className="px-2.5 py-1 rounded-full border border-orange-200 bg-orange-50 text-[6px] font-bold text-orange-700">Takeaway</span>
              <span className="px-2.5 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-[6px] font-bold text-[#1d3d2c]">Dine-In</span>
            </div>

            {/* Menu Carousel Banner */}
            <div className="bg-[#1d3d2c] text-white p-2 rounded-lg text-left relative overflow-hidden mb-2">
              <span className="text-[5px] text-amber-300 uppercase tracking-widest font-bold">Featured Event</span>
              <h4 className="font-extrabold text-[8px] leading-tight mt-0.5">SOUNDCRAFT ANJUNA with DJ NEHAMA</h4>
              <p className="text-[5px] text-white/60 leading-none mt-0.5">Artjuna Goa Live Performance</p>
            </div>

            {/* Grid of Dishes with Circular Backgrounds */}
            <div className="grid grid-cols-4 gap-1.5 mb-2 text-center text-[5.5px] font-semibold text-[#1d3d2c]/80">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-full bg-[#ebd9c1] flex items-center justify-center text-[10px]">☕</div>
                <span>Coffee</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-full bg-[#d0dfd4] flex items-center justify-center text-[10px]">🥪</div>
                <span>Sandwich</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-full bg-[#fce0d6] flex items-center justify-center text-[10px]">🍰</div>
                <span>Sweets</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-full bg-[#ebd9c1] flex items-center justify-center text-[10px]">🍹</div>
                <span>Mocktails</span>
              </div>
            </div>

            {/* Bottom Menu Card */}
            <div className="bg-[#fcfbf9] border border-[#1d3d2c]/5 p-1.5 rounded-lg flex items-center justify-between text-left mt-auto">
              <div>
                <span className="font-bold text-[#1d3d2c] text-[7.5px] block leading-tight">Avocado Sourdough</span>
                <span className="text-[#1d3d2c]/50 text-[5.5px] leading-none">Fresh sourdough, avocados, olive oil</span>
              </div>
              <span className="font-extrabold text-amber-800 text-[8px] shrink-0">₹350</span>
            </div>
          </div>
        );
      case "taxmize":
        return (
          <div className="w-full h-full bg-[#070b19] text-white p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Top Device Bar */}
            <div className="flex justify-between items-center text-[7px] text-white/40 mb-1.5 px-1 font-mono">
              <span>TAX YEAR 2023</span>
              <div className="flex items-center gap-1 text-teal-400 font-bold">
                <span>● CONNECTED</span>
              </div>
            </div>

            {/* Brand Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 text-left">
                <span className="text-[11px]">🐝</span>
                <span className="font-display font-extrabold text-white text-[8.5px] tracking-tight">TAXMIZE</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold text-[5.5px]">Naveen (Admin)</span>
            </div>

            {/* Refund Calculator Card */}
            <div className="bg-white/[0.03] border border-white/5 p-2 rounded-lg text-left relative overflow-hidden mb-2">
              <span className="text-white/40 text-[5.5px] block mb-0.5 leading-none">TOTAL PROJECTED INCOME</span>
              <h3 className="font-mono font-black text-[12px] text-teal-400 leading-tight">$250,000.00</h3>
              <div className="flex gap-2 text-[5px] text-white/60 mt-1">
                <span>W-2: $185k</span>
                <span>Interest: $12k</span>
                <span>Div: $53k</span>
              </div>

              {/* Progress indicator mimicking circular chart */}
              <div className="absolute right-2.5 top-2 w-8 h-8 rounded-full border-2 border-dashed border-teal-400/30 flex items-center justify-center">
                <span className="text-[5.5px] font-mono text-teal-300 font-bold">70%</span>
              </div>
            </div>

            {/* Step Checklists */}
            <div className="flex flex-col gap-1 mt-auto text-left">
              <div className="bg-[#121c38]/50 border border-teal-500/20 p-1 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[6.5px] text-teal-400">✓</span>
                  <span className="text-white text-[6.5px] font-medium leading-none">W-2 Wages (Completed)</span>
                </div>
                <span className="text-[5px] bg-teal-500/20 text-teal-300 px-1 rounded font-bold">Done</span>
              </div>
              <div className="bg-[#121c38]/50 border border-orange-500/20 p-1 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[6.5px] text-orange-400">⚡</span>
                  <span className="text-white text-[6.5px] font-medium leading-none">1099 Income (In Progress)</span>
                </div>
                <span className="text-[5px] bg-orange-500/20 text-orange-300 px-1 rounded font-bold">Active</span>
              </div>
              <div className="bg-[#121c38]/30 border border-white/5 p-1 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[6.5px] text-white/30">○</span>
                  <span className="text-white/40 text-[6.5px] leading-none">Capital Loss Carryover</span>
                </div>
                <span className="text-[5px] bg-white/5 text-white/40 px-1 rounded font-bold">Draft</span>
              </div>
            </div>
          </div>
        );
      case "sadhya":
        return (
          <div className="w-full h-full bg-[#05170d] text-white p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Top Device Bar */}
            <div className="flex justify-between items-center text-[7px] text-emerald-400/60 mb-1.5 px-1 font-mono">
              <span>Good morning, Ramesh 👋</span>
              <div className="flex items-center gap-1 font-bold">
                <span>TELANGANA</span>
              </div>
            </div>

            {/* Weather Box */}
            <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-lg p-1.5 text-left flex items-center justify-between mb-2">
              <div>
                <span className="text-emerald-400 text-[5px] uppercase font-bold block leading-none">Weather</span>
                <span className="text-[7.5px] font-bold text-white mt-0.5 block leading-tight">Sunny / Clear 32°C</span>
              </div>
              <Sun className="w-3.5 h-3.5 text-yellow-400" />
            </div>

            {/* Grid Feature Cards */}
            <div className="grid grid-cols-2 gap-1.5 mb-2 text-left">
              <div className="bg-white/[0.03] border border-white/5 p-1.5 rounded-md flex flex-col justify-between h-9">
                <span className="text-[8px]">📷</span>
                <span className="text-white text-[6.5px] font-bold leading-tight">Scan A Crop</span>
              </div>
              <div className="bg-white/[0.03] border border-white/5 p-1.5 rounded-md flex flex-col justify-between h-9">
                <span className="text-[8px]">📈</span>
                <span className="text-white text-[6.5px] font-bold leading-tight">Mandi Prices</span>
              </div>
            </div>

            {/* Voice Assistant Microphone Bar */}
            <div className="bg-[#0b2f1c] border border-emerald-500/30 py-1 px-2 rounded-full flex items-center justify-between text-left mb-2">
              <span className="text-[6px] text-emerald-300 font-semibold truncate max-w-[110px]">Talk to Sadhya (Voice Assistant)...</span>
              <div className="w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-[5px]">🎙️</span>
              </div>
            </div>

            {/* Market Prices Listing Card */}
            <div className="bg-emerald-950/60 border border-emerald-500/15 p-1.5 rounded-lg flex items-center justify-between text-left mt-auto">
              <div>
                <span className="text-white/60 text-[5px] uppercase block leading-none">Live Rate</span>
                <span className="text-white text-[7px] font-bold leading-tight">Paddy (Raw)</span>
              </div>
              <span className="font-mono font-bold text-emerald-400 text-[8px]">₹2,180/q</span>
            </div>
          </div>
        );
      case "fitify":
        return (
          <div className="w-full h-full bg-[#0a0f0d] text-white p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-lime-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Device Bar */}
            <div className="flex justify-between items-center text-[7px] text-white/50 mb-1 font-mono">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Fitify Title */}
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-lime-400" />
                <span className="font-display font-extrabold text-[9px] tracking-tight text-white">FITIFY</span>
              </div>
              <span className="text-[6px] text-lime-400 font-bold bg-lime-400/10 px-1 py-0.5 rounded">Active</span>
            </div>

            {/* Rings & Core Stat */}
            <div className="bg-white/[0.02] border border-white/5 p-2 rounded-lg flex items-center justify-between gap-1.5 mb-1.5">
              <div className="text-left">
                <span className="text-white/40 text-[5px] block leading-none">ACTIVE CALORIES</span>
                <h3 className="font-mono font-black text-[11px] text-lime-400 leading-tight">482 / 600 kcal</h3>
                <span className="text-white/50 text-[5px] leading-none block mt-0.5">Steps: 8,432 / 10k</span>
              </div>
              {/* Circular Ring SVG */}
              <svg className="w-8 h-8 -rotate-90 shrink-0" viewBox="0 0 36 36">
                <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-lime-400" strokeDasharray="80, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
            </div>

            {/* Quick Goals */}
            <div className="grid grid-cols-2 gap-1 mb-1 text-left">
              <div className="bg-white/[0.03] border border-white/5 p-1 rounded flex items-center gap-1">
                <span className="text-[8px]">💧</span>
                <div>
                  <span className="text-white block text-[6px] leading-tight">Hydration</span>
                  <span className="text-lime-400 font-bold text-[5px] leading-none">1.5 / 3L</span>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 p-1 rounded flex items-center gap-1">
                <span className="text-[8px]">⏱️</span>
                <div>
                  <span className="text-white block text-[6px] leading-tight">Workout</span>
                  <span className="text-lime-400 font-bold text-[5px] leading-none">45 / 60m</span>
                </div>
              </div>
            </div>

            {/* Premium Button */}
            <button className="w-full py-1.5 rounded-md bg-lime-400 text-black font-bold text-[7px] uppercase tracking-wider text-center mt-auto shadow-sm">
              Start Workout Session
            </button>
          </div>
        );
      case "indiapost":
        return (
          <div className="w-full h-full bg-[#fafbfc] text-[#050505] p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center text-[7.5px] border-b border-[#e5e7eb] pb-1.5 mb-1.5">
              <div className="flex items-center gap-1 text-left">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-sm flex items-center justify-center text-[6px] text-yellow-300 font-black">✉</span>
                <span className="font-extrabold text-[#991b1b] tracking-wider text-[7.5px]">INDIA POST REDESIGN</span>
              </div>
              <span className="text-[6.5px] font-bold text-red-600 bg-red-50 px-1 py-0.5 rounded border border-red-200">UX Audit</span>
            </div>

            {/* Usability Heuristics Metrics */}
            <div className="bg-amber-50 border border-amber-200 rounded p-1.5 text-left mb-1.5">
              <span className="text-amber-800 text-[5px] uppercase font-extrabold block">Usability Rating</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[11px] font-black text-amber-900 leading-none">3.8 / 10</span>
                <span className="text-[5.5px] text-amber-700 font-medium">Severe Friction</span>
              </div>
            </div>

            {/* Usability Issues List */}
            <div className="flex flex-col gap-1 text-left mb-1.5">
              <div className="bg-white border border-[#ebd9c1] p-1 rounded flex items-center justify-between">
                <span className="text-[6.5px] font-bold text-gray-800">1. Complex Tracking Layout</span>
                <span className="text-[5px] bg-red-600 text-white font-bold px-1 rounded">Critical</span>
              </div>
              <div className="bg-white border border-[#ebd9c1] p-1 rounded flex items-center justify-between">
                <span className="text-[6.5px] font-bold text-gray-800">2. High Information Density</span>
                <span className="text-[5px] bg-amber-500 text-white font-bold px-1 rounded">High</span>
              </div>
            </div>

            {/* Quick Redeveloped Prototype View */}
            <div className="bg-[#1e293b] text-white p-1.5 rounded text-left flex items-center justify-between mt-auto">
              <div>
                <span className="text-gray-400 text-[4px] uppercase block">PROTOTYPE REDESIGN</span>
                <span className="text-[6px] font-bold text-teal-400 block mt-0.5 leading-none">Simplified Consignment Flow</span>
              </div>
              <span className="text-[9px]">📱</span>
            </div>
          </div>
        );
      case "carservice1":
        return (
          <div className="w-full h-full bg-[#080d1a] text-white p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Top Bar */}
            <div className="flex justify-between items-center text-[7px] text-white/40 mb-1.5 px-1 font-mono">
              <span>ELITE CAR CARE</span>
              <span className="text-cyan-400 font-bold">● ONLINE BOOKING</span>
            </div>

            {/* Title / Vehicle Selection */}
            <div className="flex items-center justify-between mb-1.5">
              <div className="text-left">
                <h4 className="font-extrabold text-[8px] text-white">Tesla Model S</h4>
                <p className="text-white/40 text-[5.5px] leading-none">Next Service in 1,240 mi</p>
              </div>
              <Wrench className="w-3 h-3 text-cyan-400" />
            </div>

            {/* Booking Scheduler Card */}
            <div className="bg-white/[0.02] border border-white/5 p-1.5 rounded-lg text-left mb-1.5">
              <span className="text-white/40 text-[5px] block leading-none mb-0.5">CHOOSE MAINTENANCE TYPE</span>
              <span className="text-[7.5px] font-bold text-white block">Full Diagnostic & Synthetic Oil Change</span>
              <div className="flex justify-between items-center mt-1">
                <span className="text-cyan-400 font-mono text-[7px] font-bold">Est: $145.00</span>
                <span className="text-[5.5px] bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded font-bold">Select Slot</span>
              </div>
            </div>

            {/* Appointment progress indicators */}
            <div className="flex gap-1 items-center justify-between text-center text-[5.5px] mt-auto">
              <div className="flex-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 py-1 rounded font-bold">1. Inspection</div>
              <div className="flex-1 bg-white/[0.02] border border-white/5 text-white/30 py-1 rounded">2. Repair</div>
              <div className="flex-1 bg-white/[0.02] border border-white/5 text-white/30 py-1 rounded">3. Delivery</div>
            </div>
          </div>
        );
      case "carservice2":
        return (
          <div className="w-full h-full bg-[#0d071a] text-white p-3.5 font-sans text-[9px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Top Bar */}
            <div className="flex justify-between items-center text-[7px] text-white/40 mb-1.5 px-1 font-mono">
              <span>TRACKERFLOW AI</span>
              <span className="text-purple-400 font-bold">● HQ - ONLINE</span>
            </div>

            {/* Partner Stat */}
            <div className="grid grid-cols-2 gap-1.5 mb-1.5">
              <div className="bg-white/[0.02] border border-white/5 p-1 rounded-lg text-left">
                <span className="text-white/40 text-[4.5px] block leading-none">ACTIVE USERS</span>
                <span className="font-mono font-black text-[10px] text-purple-400 leading-tight">142 Employees</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-1 rounded-lg text-left">
                <span className="text-white/40 text-[4.5px] block leading-none">PRODUCTIVITY</span>
                <span className="font-mono font-black text-[10px] text-purple-400 leading-tight">94.2%</span>
              </div>
            </div>

            {/* Job Board List */}
            <div className="flex flex-col gap-1 text-left mb-1.5">
              <div className="bg-[#1c1133] border border-purple-500/20 p-1 rounded flex items-center justify-between">
                <span className="text-[6px] font-bold text-white">Dev Sprint -- Task Completion Tracker</span>
                <span className="text-[5px] bg-purple-500/30 text-purple-300 font-bold px-1 rounded">Processing</span>
              </div>
              <div className="bg-white/[0.01] border border-white/5 p-1 rounded flex items-center justify-between">
                <span className="text-[6px] text-white/50">Marketing Strategy -- Live Attendance</span>
                <span className="text-[5px] bg-white/5 text-white/40 px-1 rounded">Active</span>
              </div>
            </div>

            {/* Mechanic Config Footer */}
            <div className="bg-[#120a21] border border-purple-500/15 p-1 rounded flex items-center justify-between text-left mt-auto">
              <span className="text-[5.5px] text-purple-300">Logged in: Admin (HR Lead)</span>
              <Settings className="w-2.5 h-2.5 text-purple-400" />
            </div>
          </div>
        );
    }
  };

  const displayedProjects = expanded ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-[#050505] relative border-b border-white/10">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16 max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] font-mono font-semibold uppercase text-brand-purple text-glow-purple">
            • PROJECTS •
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent text-glow-purple mr-3">
              Recent
            </span>
            Projects
          </h2>
        </div>

        {/* Projects Grid (2x2 or expanded layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col md:flex-row items-stretch rounded-[24px] bg-[#111111] border border-white/10 hover:border-brand-purple/40 overflow-hidden shadow-xl hover:shadow-glow-purple transition-all duration-300 min-h-[280px] cursor-pointer"
              >
                {/* Left Column: Fully Custom App Mockup */}
                <div className="md:w-1/2 bg-[#1a1a1a] p-0 flex items-center justify-center relative overflow-hidden group-hover:bg-[#222222]/90 transition-colors">
                  {/* Embedded screen container */}
                  <img
                    src={project.image ?? sadhyaImage}
                    alt={`${project.title} preview`}
                  />
                </div>

                {/* Right Column: Project Context */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">
                      {project.subtitle}
                    </p>
                    
                    {/* Role Tag */}
                    <span className="inline-block text-xs font-semibold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-md mt-3.5 mb-4">
                      {project.role}
                    </span>

                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags and Link */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wide font-medium text-gray-400 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-white transition-colors duration-200 uppercase tracking-widest cursor-pointer group"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Central Button */}
        <div className="text-center mt-16 md:mt-20">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-brand-purple text-sm text-gray-300 hover:text-white font-semibold transition-all duration-300 shadow-sm cursor-pointer group"
          >
            <span>{expanded ? "Show Fewer Projects" : "Explore More Projects"}</span>
            <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-purple/30">
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-purple" />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#111111] border border-white/10 w-full max-w-4xl rounded-[32px] overflow-hidden relative shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-purple hover:bg-brand-purple/10 flex items-center justify-center text-gray-400 hover:text-white transition-all z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Mockup Frame (Visual Screenshot) */}
              <div className="md:w-[45%] bg-[#1a1a1a] p-0 flex items-center justify-center relative overflow-hidden border-r border-white/5 min-h-[300px] md:min-h-auto align-self-baseline" style={{ alignSelf: "baseline" }}>
                <img
                  src={selectedProject.image ?? sadhyaImage}
                  alt={`${selectedProject.title} preview`}
                />
              </div>

              {/* Right Side: Detailed Case Study (Scrollable) */}
              <div className="md:w-[55%] p-8 md:p-10 overflow-y-auto flex flex-col justify-between text-left">
                <div>
                  {/* Header */}
                  <span className="inline-block text-[10px] font-mono tracking-widest font-semibold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-md mb-3 uppercase">
                    {selectedProject.role}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mt-1 mb-6 font-medium">
                    {selectedProject.subtitle}
                  </p>

                  {/* Section: Overview */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 font-mono mb-2">Overview</h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Section: Features */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 font-mono mb-2">Key Features</h4>
                    <ul className="flex flex-col gap-2">
                      {selectedProject.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-400 font-light">
                          <span className="text-brand-purple shrink-0 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section: Challenges */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 font-mono mb-2">The Challenge</h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  {/* Section: Solution */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 font-mono mb-2">The Solution</h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Section: Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 font-mono mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wide font-medium text-gray-400 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links / Action Footer */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-purple hover:bg-white text-black text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer text-center"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-brand-purple/40 bg-white/[0.02] hover:bg-brand-purple/10 text-white text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer text-center"
                  >
                    <Github className="w-4 h-4 shrink-0" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

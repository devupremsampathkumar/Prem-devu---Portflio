import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Briefcase, ArrowRight, User, FileText, PenTool, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactDetail {
  id: string;
  label: string;
  val: string;
  icon: any;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactDetails: ContactDetail[] = [
    {
      id: "email",
      label: "Email",
      val: "devupremsampathkumar@gmail.com",
      icon: Mail,
    },
    {
      id: "phone",
      label: "Phone",
      val: "8328513161",
      icon: Phone,
    },
    {
      id: "location",
      label: "Location",
      val: "Hyderabad, India",
      icon: MapPin,
    },
    {
      id: "availability",
      label: "Availability",
      val: "Open to work",
      icon: Briefcase,
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailRecipient = "devupremsampathkumar@gmail.com";
    const subject = encodeURIComponent(formData.subject || `New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || "-"}\n\n${formData.message}`
    );

    const mailtoUrl = `mailto:${emailRecipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16 max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] font-mono font-semibold uppercase text-brand-purple text-glow-purple">
            • GET IN TOUCH •
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent text-glow-purple mr-3">
              Let's Create
            </span>
            Something Amazing
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-1">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column - Quick Info Cards (Stretched h-full with flex-grow children) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full w-full">
            {contactDetails.map((detail) => {
              const isLink = detail.id === "email" || detail.id === "phone";
              const Element = isLink ? "a" : "div";
              const extraProps = detail.id === "email" 
                ? { href: "mailto:devupremsampathkumar@gmail.com" }
                : detail.id === "phone"
                  ? { href: "tel:8328513161" }
                  : {};

              return (
                <Element
                  key={detail.id}
                  {...extraProps as any}
                  className={`group flex items-center justify-between p-5 rounded-[24px] border border-white/10 bg-[#111111] hover:border-brand-purple/40 transition-all duration-300 flex-1 min-h-[76px] ${isLink ? 'cursor-pointer hover:bg-white/[0.02]' : ''}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-brand-purple shadow-sm shrink-0">
                      <detail.icon className="w-4.5 h-4.5 text-brand-purple" />
                    </div>
                    <div className="min-w-0 text-left overflow-hidden">
                      <span className="text-[10px] tracking-wider uppercase font-mono text-gray-500 font-bold block mb-0.5">
                        {detail.label}
                      </span>
                      <span className="text-white text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide block break-all">
                        {detail.val}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-brand-purple group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30 transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Element>
              );
            })}
          </div>

          {/* Right Column - Glowing Message Form (h-full to align perfectly with left column) */}
          <div className="lg:col-span-7 w-full h-full">
            <div className="relative rounded-[24px] bg-[#111111] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl shadow-glow-purple/20 overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />

              {/* Form Title & Icon */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                  Send me a message
                </h3>
                <div className="w-9 h-9 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                  <Sparkles className="w-4.5 h-4.5 text-brand-purple animate-pulse" />
                </div>
              </div>

              {/* Success Message Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-xs flex items-center gap-3 text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <div>
                      <span className="font-bold block">Message Sent Successfully!</span>
                      <span>Thank you, {formData.name || "friend"}. Your message has been sent to Prem's desk.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left h-full justify-between">
                <div className="flex flex-col gap-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative flex flex-col items-start w-full">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple/50 focus:bg-[#1f1f1f] focus:shadow-[0_0_15px_rgba(167,139,250,0.1)] hover:border-white/20 transition-all duration-300 placeholder:text-gray-500 pr-12"
                      />
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-colors group-focus-within:text-brand-purple" />
                    </div>

                    <div className="relative flex flex-col items-start w-full">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple/50 focus:bg-[#1f1f1f] focus:shadow-[0_0_15px_rgba(167,139,250,0.1)] hover:border-white/20 transition-all duration-300 placeholder:text-gray-500 pr-12"
                      />
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-colors group-focus-within:text-brand-purple" />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative flex flex-col items-start w-full">
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject"
                      className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple/50 focus:bg-[#1f1f1f] focus:shadow-[0_0_15px_rgba(167,139,250,0.1)] hover:border-white/20 transition-all duration-300 placeholder:text-gray-500 pr-12"
                    />
                    <FileText className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-colors group-focus-within:text-brand-purple" />
                  </div>

                  {/* Message */}
                  <div className="relative flex flex-col items-start w-full">
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message"
                      className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple/50 focus:bg-[#1f1f1f] focus:shadow-[0_0_15px_rgba(167,139,250,0.1)] hover:border-white/20 transition-all duration-300 placeholder:text-gray-500 pr-12 resize-none"
                    />
                    <PenTool className="absolute right-4 top-4 w-4 h-4 text-gray-500 pointer-events-none transition-colors group-focus-within:text-brand-purple" />
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-95 disabled:opacity-50 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-glow-purple cursor-pointer overflow-hidden"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-[10px] text-gray-500 text-center">
                    🔒 Your information is safe with me. I'll never share your data.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

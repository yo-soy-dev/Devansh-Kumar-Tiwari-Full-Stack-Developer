
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20 md:pt-24"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 text-center lg:text-left max-w-xl"
          >
            <p className="text-sm tracking-widest text-cyan-400 mb-3 md:mb-4 uppercase">
              Hi, my name is
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="animated-name block lg:inline-block">
                Devansh Kumar Tiwari
              </span>
            </h1>

            <h2 className="mt-3 md:mt-4 text-xl md:text-3xl font-semibold text-slate-300">
              Full-Stack Developer • Mobile Developer • AI SaaS Builder
            </h2>

            <p className="mt-5 md:mt-6 text-slate-400 max-w-md leading-relaxed text-sm md:text-base mx-auto lg:mx-0">
              I build <span className="text-cyan-400">scalable web applications</span>,{" "}
              <span className="text-cyan-400">cross-platform mobile apps</span>, and{" "}
              <span className="text-cyan-400">AI-powered SaaS platforms</span> using{" "}
              <span className="text-cyan-400">React.js</span>,{" "}
              <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-cyan-400">React Native</span>,{" "}
              <span className="text-cyan-400">Node.js</span>, and{" "}
              <span className="text-cyan-400">TypeScript</span>.
              Experienced in JWT authentication, REST APIs, cloud deployments, and clean architectures focused on real-world impact.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.img
            src="/projects/profile.png"
            alt="Portrait of Devansh Kumar Tiwari"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="
              w-48 sm:w-56 md:w-80
              aspect-[4/5]
              mt-16 md:mt-20 lg:mt-0
              rounded-xl shadow-2xl
              bg-gradient-to-b from-blue-900/50 to-transparent
              lg:ml-10
            "
          />
        </div>

        <div className="mt-8 space-y-3 max-w-xl mx-auto lg:mx-0">

          <a
            href="mailto:devanshtiwari817@gmail.com"
            aria-label="Send email to Devansh"
            className="flex items-center gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-xl p-2.5 md:p-3 backdrop-blur-md min-h-[44px]"
          >
            <div className="p-2 rounded-lg bg-cyan-400/10">
              <Mail className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-white text-sm md:text-base">devanshtiwari817@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+916386331981"
            aria-label="Call Devansh"
            className="flex items-center gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-xl p-2.5 md:p-3 backdrop-blur-md min-h-[44px]"
          >
            <div className="p-2 rounded-lg bg-cyan-400/10">
              <Phone className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-white text-sm md:text-base">+91 6386331981</p>
            </div>
          </a>

          <div className="flex items-center gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-xl p-2.5 md:p-3 backdrop-blur-md min-h-[44px]">
            <div className="p-2 rounded-lg bg-cyan-400/10">
              <MapPin className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-white text-sm md:text-base">Lucknow, India</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">

          <a
            href="/resume.pdf"
            aria-label="Download resume"
            className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-3 min-h-[44px] rounded-xl font-medium hover:scale-105 transition"
          >
            <FileText size={18} />
            Resume
          </a>

          <a
            href="https://github.com/yo-soy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-3 min-h-[44px] rounded-xl hover:bg-cyan-400/10 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yo-soy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-3 min-h-[44px] rounded-xl hover:bg-cyan-400/10 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href={
              /Android|iPhone/i.test(navigator.userAgent)
                ? "mailto:devanshtiwari817@gmail.com"
                : "https://mail.google.com/mail/?view=cm&fs=1&to=devanshtiwari817@gmail.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to Devansh"
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-3 min-h-[44px] rounded-xl hover:bg-cyan-400/10 transition"
          >
            <Mail size={18} />
            Send Email
          </a>

        </div>

      </div>
    </SectionWrapper>
  );
}

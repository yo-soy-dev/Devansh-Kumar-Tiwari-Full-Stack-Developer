import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="py-12 md:py-14 px-6 text-center border-t border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="text-slate-400 text-sm md:text-base">
        © {year}{" "}
        <span className="text-white font-medium">
          Devansh Kumar Tiwari
        </span>
      </p>

      <p className="mt-2 text-xs md:text-sm text-slate-500">
        Full-Stack Developer · Mobile Developer · AI SaaS Builder · Lucknow, India
      </p>

      <div className="mt-6 flex justify-center gap-5 md:gap-6">

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://github.com/yo-soy-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
        >
          <Github size={22} />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://www.linkedin.com/in/yo-soy-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
        >
          <Linkedin size={22} />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href={
            /Android|iPhone/i.test(navigator.userAgent)
              ? "mailto:devanshtiwari817@gmail.com"
              : "https://mail.google.com/mail/?view=cm&fs=1&to=devanshtiwari817@gmail.com"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email to Devansh"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
        >
          <Mail size={22} />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://x.com/soy_yo_dev40"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit X (Twitter) profile"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
        >
          <X size={22} />
        </motion.a>
      </div>
    </motion.footer>
  );
}

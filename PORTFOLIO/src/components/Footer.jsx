import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { isTouchDevice } from "../utils/device";
import { getMailHref } from "../utils/device";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="py-12 md:py-14 px-6 text-center border-t border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <p className="text-slate-400 text-sm md:text-base">
        © {year}{" "}
        <span className="text-white font-medium">Devansh Kumar Tiwari</span>
      </p>

      {/* Fix: max-w + flex-wrap so tagline wraps cleanly on 360px screens */}
      <p className="mt-2 text-xs md:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
        Full-Stack Developer · Mobile Developer · AI SaaS Builder · Lucknow, India
      </p>

      <div className="mt-6 flex justify-center gap-5 md:gap-6">
        {[
          {
            href: "https://github.com/yo-soy-dev",
            label: "Visit GitHub profile",
            icon: <Github size={22} />,
          },
          {
            href: "https://www.linkedin.com/in/yo-soy-dev",
            label: "Visit LinkedIn profile",
            icon: <Linkedin size={22} />,
          },
          {
            href: getMailHref(),
            label: "Send email to Devansh",
            icon: <Mail size={22} />,
          },
          {
            href: "https://x.com/soy_yo_dev40",
            label: "Visit X (Twitter) profile",
            icon: <X size={22} />,
          },
        ].map(({ href, label, icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            /* Fix: hover animation desktop-only */
            whileHover={isTouchDevice ? {} : { y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            /* Fix: min-h/min-w for 44px tap target */
            className="p-2 min-h-[44px] min-w-[44px]
              flex items-center justify-center
              rounded-lg text-slate-400
              hover:text-white hover:bg-white/5 transition"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
}

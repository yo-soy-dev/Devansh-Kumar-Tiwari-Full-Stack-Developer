import SectionWrapper from "../components/SectionWrapper";
import { certificates } from "../data/certificates";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { isTouchDevice } from "../utils/device";

export default function Certificates() {
  return (
    <SectionWrapper
      id="certificates"
      className="bg-gradient-to-b from-black via-[#020617] to-black"
    >
      {/* ── Heading — consistent with all other sections ── */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-white text-center md:text-left">
        Certificates
      </h2>

      {/* ── Fix 1: explicit grid-cols-1 base ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {certificates.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            /* ── Fix 2: hover animation desktop-only ── */
            whileHover={isTouchDevice ? {} : { y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            /* ── Fix 3: viewport margin ── */
            viewport={{ once: true, margin: "-50px" }}
            className="
              relative p-4 md:p-6 rounded-2xl
              bg-white/5 border border-white/10
              hover:border-cyan-400/40
              md:hover:shadow-[0_25px_60px_-15px_rgba(56,189,248,0.45)]
              transition-all
            "
          >
            <Award className="text-cyan-400 mb-2 md:mb-3 shrink-0" size={22} />

            <h3 className="text-lg font-semibold text-white leading-snug">
              {cert.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {cert.issuer}
            </p>

            <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm text-cyan-400">
                {cert.year}
              </span>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View certificate for ${cert.title}`}
                  /* ── Fix 4: bump min-h to 44px (iOS tap target spec) ── */
                  className="inline-flex items-center gap-1
                    text-sm text-cyan-400 hover:underline min-h-[44px]"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

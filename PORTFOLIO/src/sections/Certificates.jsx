import SectionWrapper from "../components/SectionWrapper";
import { certificates } from "../data/certificates";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

export default function Certificates() {
  return (
    <SectionWrapper
      id="certificates"
      className="bg-gradient-to-b from-black via-[#020617] to-black"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-white">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative p-4 md:p-6 rounded-2xl
              bg-white/5 border border-white/10
              hover:border-cyan-400/40
              hover:shadow-[0_25px_60px_-15px_rgba(56,189,248,0.45)]
              transition-all cursor-pointer"
          >
            <Award className="text-cyan-400 mb-2 md:mb-3" size={22} />

            <h3 className="text-lg font-semibold text-white">
              {cert.title}
            </h3>

            <p className="mt-2 text-slate-400">
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
                  className="inline-flex items-center gap-1
        text-sm text-cyan-400 hover:underline py-1 min-h-[36px]"
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

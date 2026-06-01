import SectionWrapper from "../components/SectionWrapper";
import { achievements } from "../data/achievements";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { isTouchDevice } from "../utils/device";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      className="bg-gradient-to-b from-black via-[#020617] to-black"
    >
      {/* ── Heading — consistent with About & Projects ── */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-white text-center md:text-left">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            /* ── Fix 1: hover animation desktop-only ── */
            whileHover={isTouchDevice ? {} : { y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            /* ── Fix 2: viewport margin so animation triggers early enough ── */
            viewport={{ once: true, margin: "-50px" }}
            className="
              relative p-4 md:p-6 rounded-2xl
              bg-white/5 border border-white/10
              hover:border-cyan-400/40
              md:hover:shadow-[0_25px_50px_-15px_rgba(56,189,248,0.35)]
              transition-all
            "
          >
            {/* ── Fix 3: proper flex layout instead of pr-12 magic number ── */}
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold text-white flex-1 min-w-0 pr-2">
                {item.title}
              </h3>

              {item.title.includes("DSA") && (
                <span className="shrink-0 px-2 md:px-3 py-1 text-[11px] md:text-xs font-semibold
                  rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                  165+ Problems
                </span>
              )}
            </div>

            <p className="mt-2 md:mt-3 text-sm md:text-base text-slate-400 leading-relaxed">
              {item.desc}
            </p>

            <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-sm text-cyan-400">
                {item.year}
              </span>

              <div className="flex gap-4">
                {item.proof && (
                  <a
                    href={item.proof}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open LeetCode profile in new tab"
                    title="View LeetCode Profile"
                    className="group flex items-center gap-2
                      text-sm text-cyan-400 hover:underline min-h-[44px] py-1"
                  >
                    <img
                      src="/icons/leetcode.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover:opacity-100"
                    />
                    LeetCode
                    <ExternalLink size={14} />
                  </a>
                )}

                {item.proof2 && (
                  <a
                    href={item.proof2}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GeeksforGeeks profile in new tab"
                    title="View GeeksforGeeks Profile"
                    className="group flex items-center gap-2
                      text-sm text-cyan-400 hover:underline min-h-[44px] py-1"
                  >
                    <img
                      src="/icons/gfg.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover:opacity-100"
                    />
                    GFG
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

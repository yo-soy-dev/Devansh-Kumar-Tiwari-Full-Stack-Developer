
import SectionWrapper from "../components/SectionWrapper";
import { achievements } from "../data/achievements";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      className="bg-gradient-to-b from-black via-[#020617] to-black"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-white">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        {achievements.map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative p-4 md:p-6 rounded-2xl
            min-h-[180px] md:min-h-[200px]
    bg-white/5 border border-white/10
    hover:border-cyan-400/40
    hover:shadow-[0_25px_50px_-15px_rgba(56,189,248,0.35)]
    transition-all cursor-pointer"
          >

            <div className="flex items-start justify-between gap-2 pr-12 md:pr-0">
               <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>


            {item.title.includes("DSA") && (
              <span className="shrink-0
                px-2 md:px-3 py-1 text-[11px] md:text-xs font-semibold
                rounded-full bg-cyan-500/10 text-cyan-400
                border border-cyan-400/20">
                165+ Problems
              </span>
            )}
            </div>

            {/* <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3> */}

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
                      text-sm text-cyan-400 hover:underline py-1 md:py-0 min-h-[36px]"
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
                      text-sm text-cyan-400 hover:underline py-1 md:py-0 min-h-[36px]"
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

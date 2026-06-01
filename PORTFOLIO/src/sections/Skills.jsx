import { skills } from "../data/skills";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

// Category metadata: label + accent color + subtle bg tint
const CATEGORY_META = {
  Languages:                   { color: "#f59e0b", bg: "rgba(245,158,11,0.06)"  },
  Frontend:                    { color: "#38bdf8", bg: "rgba(56,189,248,0.06)"  },
  Backend:                     { color: "#34d399", bg: "rgba(52,211,153,0.06)"  },
  Databases:                   { color: "#a78bfa", bg: "rgba(167,139,250,0.06)" },
  "BaaS & Cloud":              { color: "#fb7185", bg: "rgba(251,113,133,0.06)" },
  "DevOps & Tools":            { color: "#fbbf24", bg: "rgba(251,191,36,0.06)"  },
  "AI & APIs":                 { color: "#e879f9", bg: "rgba(232,121,249,0.06)" },
  "System Design & Protocols": { color: "#22d3ee", bg: "rgba(34,211,238,0.06)"  },
  "CS Fundamentals":           { color: "#86efac", bg: "rgba(134,239,172,0.06)" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Section heading ── */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/70 font-semibold mb-3">
            What I work with
          </p>
          <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
              Technologies
            </span>
          </h2>
        </div>

        {/* ── Category blocks ── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {Object.entries(CATEGORY_META).map(([category, { color, bg }]) => {
            const skillsInCategory = skills[category];
            if (!skillsInCategory?.length) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ background: bg }}
                className="rounded-2xl border border-white/8 p-5 md:p-7 backdrop-blur-sm"
              >
                {/* Category label with colored left bar */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-1 h-5 rounded-full flex-shrink-0"
                    style={{ background: color }}
                  />
                  <h3
                    className="text-sm md:text-base font-semibold uppercase tracking-widest min-w-0 truncate"
                    style={{ color }}
                  >
                    {category}
                  </h3>
                  <span className="ml-auto text-xs text-white/30 font-mono">
                    {skillsInCategory.length} skills
                  </span>
                </div>

                {/* Skill pills */}
                <motion.div
                  className="flex flex-wrap gap-2 md:gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {skillsInCategory.map((skill) => (
                    <motion.div
                      key={category + skill.name}
                      variants={cardVariants}
                      whileHover={{ y: -3, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="
                        group relative flex items-center gap-2
                        px-3 py-2 md:px-4 md:py-2.5
                        rounded-xl text-sm font-medium text-white/80
                        bg-white/5 border border-white/10
                        hover:text-white
                        transition-all duration-200 cursor-default
                        overflow-hidden
                      "
                    >
                      {/* Hover glow using the category color */}
                      <span
                        className="
                          absolute inset-0 opacity-0 group-hover:opacity-100
                          transition-opacity duration-300 rounded-xl
                        "
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${color}22, transparent 70%)`,
                          border: `1px solid ${color}44`,
                        }}
                      />
                      {/* Left accent dot on hover */}
                      <span
                        className="
                          relative z-10 w-1.5 h-1.5 rounded-full flex-shrink-0
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                        "
                        style={{ background: color }}
                      />
                      <span className="relative z-10 text-base leading-none">
                        {skill.icon}
                      </span>
                      <span className="relative z-10 text-xs md:text-sm leading-snug">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}


import { useState } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <SectionWrapper
      id="projects"
      className="bg-gradient-to-b from-black via-[#020617] to-black"
    >
      <h2 className="text-4xl font-bold mb-16 text-white">Projects</h2>

      <div className="grid grid-cols-1 gap-10">
        {visibleProjects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative rounded-3xl p-[1px]
              bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40"
          >
            <div
              className="relative rounded-3xl p-6
              bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617]
              border border-white/10 backdrop-blur-xl
              flex flex-col md:flex-row gap-6
              transition-all duration-300
              group-hover:border-cyan-400/40
              hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.35)]"
            >
              {/* IMAGE */}
              {p.image && (
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="h-56 md:h-full overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-105"
                    />
                  </div>
                </div>
              )}

              {/* CONTENT */}
              <div className="flex-1 flex flex-col">
                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white">
                  {p.name}
                </h3>

                {/* SHORT DESC */}
                {p.desc && (
                  <p className="mt-2 text-slate-400">
                    {p.desc}
                  </p>
                )}

                {/* FULL DESC */}
                {p.fullDesc && (
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {p.fullDesc}
                  </p>
                )}

                {/* HIGHLIGHT */}
                {p.highlight && (
                  <div className="mt-4 p-4 rounded-xl
                    bg-cyan-500/10 border border-cyan-400/20
                    text-cyan-300 text-sm"
                  >
                    ⭐ {p.highlight}
                  </div>
                )}

                {/* IMPACT */}
                {p.impact && p.impact.length > 0 && (
                  <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                    {p.impact.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-cyan-400">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* TECH STACK */}
                {p.tech && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.split("·").map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-3 py-1 text-xs
                          bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* LINKS */}
                <div className="mt-6 flex gap-3 flex-wrap">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg
                        bg-cyan-500/10 text-cyan-400 text-sm font-medium
                        border border-cyan-400/20
                        hover:bg-cyan-500/20 transition"
                    >
                      View Code →
                    </a>
                  )}

                  {p.live && p.live !== "hhhh" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg
                        bg-white/5 text-slate-300 text-sm font-medium
                        border border-white/10
                        hover:bg-white/10 transition"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SHOW MORE / LESS */}
      {projects.length > 3 && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-xl
              bg-white/5 text-slate-300 font-medium
              border border-white/10
              hover:bg-white/10 transition"
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}

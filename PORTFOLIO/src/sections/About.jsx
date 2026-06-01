import SectionWrapper from "../components/SectionWrapper";
import { about } from "../data/About";
import { motion } from "framer-motion";

// Disable hover animations on touch devices (same pattern as Projects.jsx)
const isTouchDevice =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

export default function About() {
  return (
    <SectionWrapper id="about">

      {/* ── Heading — centred mobile, left on md+ (consistent with Projects) ── */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white text-center md:text-left">
        About Me
      </h2>

      <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
        I'm a <span className="text-white font-medium">Full-Stack Developer</span> based in
        Lucknow, India, experienced in building{" "}
        <span className="text-cyan-400">scalable web applications</span>,{" "}
        <span className="text-cyan-400">cross-platform mobile apps</span>, and{" "}
        <span className="text-cyan-400">AI-powered SaaS platforms</span> with a focus on
        performance, security, and user experience.
      </p>

      <p className="text-slate-400 leading-relaxed mt-4 max-w-3xl">
        I primarily work with{" "}
        <span className="text-white">
          React.js, Next.js, React Native, Node.js, and TypeScript
        </span>
        , along with databases like{" "}
        <span className="text-white">MongoDB, PostgreSQL, and Supabase</span>. I have
        hands-on experience designing secure REST APIs, JWT authentication, infinite
        scrolling feeds, media uploads, Stripe subscription workflows, and cloud
        deployments on Vercel &amp; Render.
      </p>

      <p className="text-slate-400 leading-relaxed mt-4 max-w-3xl">
        With a strong foundation in{" "}
        <span className="text-white">
          Data Structures, Algorithms, and problem-solving
        </span>
        , I build clean and maintainable systems that solve real-world problems. I'm
        actively seeking{" "}
        <span className="text-white">internship / entry-level opportunities</span> to
        contribute to impactful products and grow as a developer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
        {about.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            /* ── Fix 1: hover animation desktop-only ── */
            whileHover={isTouchDevice ? {} : { y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
            /* ── Fix 2: viewport margin so animation triggers before card is on screen ── */
            viewport={{ once: true, margin: "-50px" }}
            className="
              flex items-start gap-4
              bg-white/5 border border-white/10
              rounded-2xl p-4 md:p-6 backdrop-blur-md
              hover:border-cyan-400/40
              md:hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.35)]
              transition-all
            "
          >
            {/* ── Fix 3: shrink-0 so emoji never compresses in tight flex ── */}
            <span className="text-3xl md:text-4xl text-cyan-400 shrink-0 leading-none mt-0.5">
              {category.icon}
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold mb-1 text-white">
                {category.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
}

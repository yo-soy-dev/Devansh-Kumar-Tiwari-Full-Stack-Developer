import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  children,
  className = "",
}) {
  return (
    <motion.section
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-purple-600/15 animate-gradient" />

      <div className="absolute -top-20 md:-top-40 -left-20 md:-left-40 w-[260px] md:w-[400px] h-[400px] bg-cyan-500/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 md:-bottom-40 -right-20 md:-right-40 w-[260px] md:w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

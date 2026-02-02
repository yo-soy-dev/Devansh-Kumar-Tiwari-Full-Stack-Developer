
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);

        if (visible.length > 0) {
          const best = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );

          setActive(`#${best.target.id}`);
        }
      },
      {
        threshold: [0.3, 0.6, 0.9],
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  
  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false);

    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const close = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 w-full z-50
        bg-[rgba(2,6,23,0.95)]
        backdrop-blur-md
        border-b border-slate-800
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={() => handleClick("#hero")}
          className="
            font-semibold text-lg text-cyan-400
            hover:text-cyan-300 transition
          "
        >
          DevanshTiwari.dev
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <div key={link.href} className="relative inline-block">
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`
                  group text-sm py-2
                  transition
                  ${
                    active === link.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }
                `}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.name}
              </a>

              <AnimatePresence>
                {active === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-[2px] bg-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="p-2"
          >
            {menuOpen ? (
              <HiX className="w-6 h-6 text-white" />
            ) : (
              <HiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              md:hidden
              bg-[rgba(2,6,23,0.95)]
              backdrop-blur-md
              border-t border-slate-800
              flex flex-col items-center
              py-4 space-y-2
              overflow-y-auto
              max-h-[80vh]
            "
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`
                  text-lg py-3 px-4 w-full text-center
                  transition
                  ${
                    active === link.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }
                `}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

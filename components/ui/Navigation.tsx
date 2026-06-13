"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#patent", label: "Patent" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-scrolled py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-display font-bold transition-transform group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              MK
            </div>
            <span className="font-display font-bold text-gray-900 text-sm hidden sm:block">
              Mandar Kukde
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-indigo-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(99,102,241,0.08)" }}
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-gradient px-4 py-2 rounded-lg text-xs font-semibold items-center gap-1.5"
            >
              Get in Touch
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden glass w-9 h-9 rounded-xl flex items-center justify-center"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5 w-4">
                <motion.span
                  className="block h-px bg-gray-700 rounded"
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                />
                <motion.span
                  className="block h-px bg-gray-700 rounded"
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="block h-px bg-gray-700 rounded"
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-4 right-4 glass-strong rounded-2xl p-4 flex flex-col gap-1"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-indigo-700 rounded-xl hover:bg-indigo-50/60 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/50 mt-1 pt-3">
                <a
                  href="mailto:mandarkukde8352@gmail.com"
                  className="btn-gradient w-full py-2.5 rounded-xl text-sm font-semibold text-center block"
                >
                  Get in Touch
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

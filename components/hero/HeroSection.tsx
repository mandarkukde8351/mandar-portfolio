"use client";

import { useRef, useCallback, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const MoleculeCanvas = lazy(() => import("./MoleculeCanvas"));

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const STAGGER_PARENT = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

export default function HeroSection() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mesh-gradient"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient orbs */}
      <div className="orb orb-blue absolute w-[700px] h-[700px] top-[-200px] right-[-100px] opacity-60" />
      <div className="orb orb-purple absolute w-[500px] h-[500px] bottom-[-150px] left-[-80px] opacity-50" />
      <div className="orb orb-indigo absolute w-[400px] h-[400px] top-[40%] left-[30%] opacity-30" />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-20">

          {/* ── Left column: copy ─────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={STAGGER_PARENT}
          >
            {/* Eyebrow */}
            <motion.div variants={FADE_UP} custom={0}>
              <span className="section-eyebrow inline-flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse-slow" />
                OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={FADE_UP}
              custom={0.05}
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-gray-900"
            >
              Mandar{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Kukde</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Role badge row */}
            <motion.div
              variants={FADE_UP}
              custom={0.1}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="glass rounded-full px-4 py-1.5 text-sm font-semibold text-indigo-700 border-indigo-200/60">
                M.Pharm + MBA · NMIMS Shirpur
              </span>
              <span className="glass rounded-full px-4 py-1.5 text-sm font-semibold text-purple-700 border-purple-200/60">
                🏆 Aavishkar 2024–25 · 
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={FADE_UP}
              custom={0.15}
              className="text-gray-600 text-lg leading-relaxed max-w-[620px] font-body"
            >
              M.Pharm (Pharmaceutics) + MBA (Pharmaceutical technology and healthcare management) student {" "}
<span className="font-semibold text-gray-800">
  
</span>{" "}
at SVKM's NMIMS, with a strong interest in{" "}
<span className="font-semibold text-gray-800">
  advanced drug delivery systems
</span>
, healthcare technology, marketing, operations, product management and finance.

<br />
<br />

Inventor of a{" "}
<span className="font-semibold text-gray-800">
  Portable Multipurpose Sterilization Unit
</span>{" "}
and developer of an{" "}
<span className="font-semibold text-gray-800">
  Animal Vital Parameter Monitoring Device
</span>
. Passionate about transforming scientific research into impactful healthcare solutions through innovation, strategy, and interdisciplinary collaboration.
            </motion.p>

            {/* Stat row */}
            <motion.div
              variants={FADE_UP}
              custom={0.2}
              className="grid grid-cols-3 gap-4 max-w-[380px]"
            >
              {[
                { value: "2", label: "Design Patents", sub: "India + UK" },
                { value: "8.05", label: "M.Pharm GPA", sub: "Sem I" },
                { value: "4×", label: "Award Winner", sub: "National" },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-3 text-center">
                  <div className="gradient-text font-display font-extrabold text-2xl leading-tight">
                    {s.value}
                  </div>
                  <div className="text-gray-700 text-xs font-semibold mt-0.5 leading-tight">
                    {s.label}
                  </div>
                  <div className="text-gray-400 text-[10px] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={FADE_UP}
              custom={0.25}
              className="flex flex-wrap gap-3 pt-1"
            >
              <motion.a
                href="/resume.pdf"
download
target="_blank"
rel="noopener noreferrer"
                className="btn-gradient px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </motion.a>

              <motion.a
                href="#research"
                className="glass px-6 py-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-indigo-700 inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                Explore Research
              </motion.a>

              <motion.a
                href="#patent"
                className="glass px-6 py-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-purple-700 inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                View Patents
              </motion.a>
            </motion.div>

            {/* Social / contact links */}
            <motion.div
              variants={FADE_UP}
              custom={0.3}
              className="flex items-center gap-4 pt-1"
            >
              <a
                href="https://linkedin.com/in/mandar-kukde-b47b48295"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:mandarkukde8352@gmail.com"
                className="glass w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-700 transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <span className="font-mono text-xs text-gray-400 ml-1">
                mandarkukde8352@gmail.com
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right column: 3D canvas + photo ───────────────── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow ring behind canvas */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)",
              }}
            />

            {/* 3D Canvas container */}
            <div className="relative w-full aspect-square max-w-[480px]">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-indigo-300/50 border-t-indigo-500 animate-spin" />
                  </div>
                }
              >
                <MoleculeCanvas mouseRef={mouseRef} />
              </Suspense>

              {/* Profile photo glass frame */}
              <motion.div
                className="absolute bottom-2 left-[60%] -translate-x-1/2 glass-strong rounded-3xl p-4 shadow-glow-blue"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                style={{
                  boxShadow:
                    "0 8px 40px rgba(99,102,241,0.18), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <div
                  className="w-48 h-48 rounded-2xl overflow-hidden relative gradient-border"
                  style={{
                    background:
                      "linear-gradient(135deg, #e0e7ff 0%, #ede9fe 50%, #dbeafe 100%)",
                  }}
                >
                  <Image
  src="/mandar.jpeg"
  alt="Mandar Kukde"
  fill
  className="object-cover scale-110"
  priority
/>
                  
                </div>

                <div className="pt-2 pb-1 px-1 text-center">
                  <div className="font-display font-bold text-lg text-gray-900 leading-tight">
                    Mandar Kukde
                  </div>
                  <div className="font-mono text-xs text-indigo-600 tracking-wider mt-0.5">
                    M.PHARM + MBA · NMIMS
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-8 right-0 glass rounded-xl px-3 py-2 text-xs font-semibold text-purple-700"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
              >
                 
                🏅 secured 1st place at Inter District and District Aavishkar competition 
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-0 glass rounded-xl px-3 py-2 text-xs font-semibold text-blue-700"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                style={{ animation: "float 6s ease-in-out infinite 1s" }}
              >
                📜 2 Patents Granted
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="section-eyebrow text-[9px] opacity-60">Scroll to explore</span>
        <motion.div
          className="w-5 h-8 glass rounded-full flex items-start justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

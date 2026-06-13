"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Subtle gradient top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(139,92,246,0.5), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-display font-bold"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                MK
              </div>
              <span className="font-display font-bold text-white text-base">
                Mandar Kukde
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              M.Pharm + MBA · NMIMS Shirpur<br />
              Pharmaceutical Scientist &amp; Healthcare Strategist
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://linkedin.com/in/mandar-kukde-b47b48295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 hover:bg-indigo-600/60 flex items-center justify-center transition-colors text-gray-400 hover:text-white border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:mandarkukde8352@gmail.com"
                className="w-8 h-8 rounded-lg bg-white/8 hover:bg-indigo-600/60 flex items-center justify-center transition-colors text-gray-400 hover:text-white border border-white/10"
                aria-label="Email"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                ["#home", "Home"],
                ["#about", "About"],
                ["#skills", "Skills"],
                ["#research", "Research"],
                ["#patent", "Patent Spotlight"],
                ["#education", "Education"],
                ["#achievements", "Achievements"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info */}
          <div>
            <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-4">
              Quick Facts
            </div>
            <div className="space-y-3">
              {[
                { label: "Degree", value: "M.Pharm + MBA" },
                { label: "Institute", value: "NMIMS Shirpur" },
                { label: "Patents", value: "2 Granted (IN + UK)" },
                { label: "Awards", value: "4× National Winner" },
                { label: "GPA", value: "8.05 / 10 (Sem I)" },
                { label: "Location", value: "Nagpur · Pan-India" },
              ].map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-500">{f.label}</span>
                  <span className="text-xs font-semibold text-gray-300">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-600 font-mono">
            © 2026 Mandar Ravi Kukde. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600 font-mono">
            Built with Next.js · React Three Fiber · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

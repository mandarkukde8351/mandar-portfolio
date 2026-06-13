"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PATENTS = [
  {
    flag: "🇮🇳",
    country: "India",
    jurisdiction: "Intellectual Property Office, Government of India",
    regNum: "Reg. No. 442245-001",
    class: "Class 24-01",
    date: "Registered: 27 December 2024",
    title: "Portable Disinfection Box for Medical Use",
    desc: "A portable, multipurpose sterilisation device engineered for medical environments. Addresses infection-control challenges in resource-limited healthcare settings by enabling rapid, effective disinfection of instruments and surfaces without requiring large-scale infrastructure. Arose from undergraduate device research at RTMNU.",
    tags: ["Medical Device", "Infection Control", "Sterilisation", "Healthcare"],
    accent: "from-blue-500/10 to-indigo-500/8",
    borderColor: "border-blue-200/60",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    jurisdiction: "UK Intellectual Property Office (UKIPO)",
    regNum: "Design No. 6393927",
    class: "Class 24-01 · Hague Agreement",
    date: "Granted: 03 October 2024",
    title: "Animal Vital Parameters Detector",
    desc: "A medical monitoring device for non-invasive measurement of vital parameters in animals. Internationally registered in the UK under the Hague Agreement framework — reflecting cross-disciplinary pharmaceutical-veterinary engineering principles. Demonstrates the global reach of undergraduate innovation at RTMNU.",
    tags: ["Veterinary Diagnostics", "Medical Monitoring", "Hague Agreement", "International IP"],
    accent: "from-purple-500/10 to-violet-500/8",
    borderColor: "border-purple-200/60",
    badgeColor: "bg-purple-100 text-purple-800",
  },
];

export default function PatentSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="patent" className="relative py-28 overflow-hidden" style={{ background: "#F8FAFC" }}>
      {/* Large ambient blobs */}
      <div className="orb orb-indigo absolute w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Intellectual Property</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Patent{" "}
            <span className="gradient-text">Spotlight</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Two internationally registered design patents arising from
            undergraduate research — recognised by both the Government of India
            and the UK Intellectual Property Office.
          </p>
        </motion.div>

        {/* Patent cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PATENTS.map((patent, i) => (
            <motion.div
              key={patent.regNum}
              className={`relative glass-strong rounded-3xl p-8 bg-gradient-to-br ${patent.accent} border ${patent.borderColor} overflow-hidden`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 + 0.15 }}
              whileHover={{ y: -4, scale: 1.005 }}
            >
              {/* Large flag watermark */}
              <div
                className="absolute top-4 right-6 text-7xl pointer-events-none select-none"
                style={{ opacity: 0.15, filter: "saturate(0)" }}
                aria-hidden="true"
              >
                {patent.flag}
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl glass border-white/60 flex-shrink-0"
                >
                  {patent.flag}
                </div>
                <div>
                  <span
                    className={`inline-block text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${patent.badgeColor} mb-1`}
                  >
                    ✓ GRANTED · {patent.country}
                  </span>
                  <div className="font-mono text-[10px] text-gray-400 tracking-wider">
                    {patent.regNum} · {patent.class}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-xl text-gray-900 leading-tight mb-2">
                {patent.title}
              </h3>

              {/* Jurisdiction + date */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="text-xs text-indigo-600 font-medium">
                  {patent.jurisdiction}
                </span>
              </div>
              <div className="text-[11px] font-mono text-gray-400 mb-5">
                {patent.date}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {patent.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {patent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-pill text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width IP statement */}
        <motion.div
          className="mt-8 glass-card rounded-3xl p-8 text-center gradient-border"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-3xl mb-3">🎓</div>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
            Both patents arose from undergraduate research at RTMNU
          </h3>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Independently conceived, developed, and registered during the B.Pharm programme —
            demonstrating a track record of translating academic research into real-world
            intellectual property. Internationally recognised under India's IPO and the UK's
            UKIPO via the Hague Agreement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

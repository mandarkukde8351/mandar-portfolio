"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EDUCATION = [
  {
    period: "2025 – 2028",
    degree: "M.Pharm (Pharmaceutics) + MBA",
    spec: "Pharmaceutical Technology & Healthcare Management",
    institution: "SVKM's NMIMS School of Pharmacy & Technology Management",
    location: "Shirpur, Maharashtra",
    grade: "Sem I GPA: 8.05 / 10",
    gradeType: "Current",
    highlights: [
      "Research on vesicular drug delivery for topical immunosuppression (Dr. Amit B. Page)",
      "MBA specialisation in Healthcare Management, Business Analytics & Operations",
      "Design-Expert 13 (Box-Behnken DoE), scientific writing, CADD coursework",
    ],
    color: "border-indigo-400",
    dotColor: "bg-indigo-500",
    glowColor: "shadow-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200/60",
    icon: "🎓",
  },
  {
    period: "2021 – 2025",
    degree: "Bachelor of Pharmacy (B.Pharm)",
    spec: "Pharmaceutical Sciences",
    institution: "Dadasaheb Balpande College of Pharmacy, Nagpur",
    location: "RTMNU · Nagpur, Maharashtra",
    grade: "CGPA: 7.64 / 10",
    gradeType: "Distinction",
    highlights: [
      "Two registered design patents arising from undergraduate research",
      "Industrial training at Ankit Pulps & Boards Pvt. Ltd. (pharmaceutical excipients, GMP)",
      "1st Place at Aavishkar 2024–25 — District, University & State levels",
      "NSS volunteer — unit received RTMNU Best College Award (2023–24)",
    ],
    color: "border-purple-400",
    dotColor: "bg-purple-500",
    glowColor: "shadow-purple-200",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200/60",
    icon: "🔬",
  },
  {
    period: "2021",
    degree: "12th Standard — Science (HSC)",
    spec: "Physics, Chemistry, Biology, Mathematics",
    institution: "Major Hemant Jakate Institute of Science & Commerce",
    location: "Maharashtra State Board · Nagpur",
    grade: "94.67%",
    gradeType: "HSC",
    highlights: [
      "Strong foundation in physical and biological sciences",
      "Maharashtra State Board, merit performance",
    ],
    color: "border-blue-300",
    dotColor: "bg-blue-400",
    glowColor: "shadow-blue-100",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200/60",
    icon: "📚",
  },
  {
    period: "2019",
    degree: "10th Standard (SSC)",
    spec: "Secondary Education",
    institution: "K. John Public School, Nagpur",
    location: "CBSE · Nagpur, Maharashtra",
    grade: "69.00%",
    gradeType: "SSC",
    highlights: [
      "CBSE curriculum — solid grounding in science and mathematics",
    ],
    color: "border-gray-300",
    dotColor: "bg-gray-400",
    glowColor: "shadow-gray-100",
    badgeColor: "bg-gray-100 text-gray-600 border-gray-200/60",
    icon: "🏫",
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="relative py-28 overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="orb orb-indigo absolute w-[500px] h-[500px] top-[-60px] left-[-120px] opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Academic{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            A rigorous academic path combining pharmaceutical sciences with business
            management — built for the challenges of modern healthcare.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="timeline-line hidden sm:block"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree + edu.period}
                className="relative flex gap-6 sm:gap-8"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${edu.dotColor} border-2 border-white shadow-lg ${edu.glowColor} relative z-10 mt-1`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.35, type: "spring", stiffness: 400 }}
                  />
                </div>

                {/* Card */}
                <div className={`flex-1 glass-card rounded-3xl p-7 border-l-[3px] ${edu.color}`}>
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{edu.icon}</span>
                      <div>
                        <div className="font-mono text-[10px] text-gray-400 tracking-wider mb-0.5">
                          {edu.period}
                        </div>
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-gray-900 leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="text-xs text-gray-500 mt-0.5">{edu.spec}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${edu.badgeColor}`}
                      >
                        {edu.gradeType}
                      </span>
                      <span className="gradient-text font-display font-extrabold text-base">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/60">
                    <span className="text-sm">🏛️</span>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">
                        {edu.institution}
                      </div>
                      <div className="text-[11px] text-gray-400 font-mono">{edu.location}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

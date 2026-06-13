"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AWARDS = [
  {
    icon: "🏆",
    position: "1st Position — District Level",
    title: "Aavishkar 2024–25",
    body: "Shri Binzani City College, Nagpur · RTMNU Inter-University Research Competition",
    color: "from-yellow-50 to-amber-50 border-yellow-200/70",
    accent: "text-yellow-700",
  },
  {
    icon: "🥇",
    position: "1st Position — University Level",
    title: "Aavishkar 2024–25",
    body: "GH Raisoni College of Engineering · Represented RTMNU at State Level, Dr. BATU, Lonere",
    color: "from-orange-50 to-amber-50 border-orange-200/70",
    accent: "text-orange-700",
  },
  {
    icon: "🏅",
    position: "1st Position",
    title: "Avishkar 2025",
    body: "Priyadarshini J. L. College of Pharmacy, Nagpur · February 2025",
    color: "from-amber-50 to-yellow-50 border-amber-200/70",
    accent: "text-amber-700",
  },
  {
    icon: "💰",
    position: "Best Research Project",
    title: "₹25,000 Cash Prize",
    body: "ADES Research Initiative & Incentive Scheme · Dadasaheb Balpande College of Pharmacy · March 2025",
    color: "from-green-50 to-teal-50 border-green-200/70",
    accent: "text-green-700",
  },
];

const CERTIFICATIONS = [
  {
    issuer: "Goldman Sachs · Forage",
    name: "Internal Audit Job Simulation",
    desc: "Risk assessment, compliance analysis, and financial governance workflows.",
    year: "2026",
    color: "text-blue-700",
  },
  {
    issuer: "RTMNU Certificate Programme",
    name: "Employability Skills",
    desc: "Professional communication, leadership, and workplace readiness. CGPA: 8.5/10 (A+).",
    year: "2023",
    color: "text-indigo-700",
  },
  {
    issuer: "RTMNU Certificate Programme",
    name: "Ethical Practices in Pharmaceutical Sciences",
    desc: "Research ethics, regulatory compliance, responsible conduct in pharmaceutical development.",
    year: "2022",
    color: "text-purple-700",
  },
];

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="achievements" className="relative py-28 overflow-hidden bg-white">
      <div className="orb orb-purple absolute w-[500px] h-[500px] top-[-80px] right-[-100px] opacity-25" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Recognition & Credentials</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Publications &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Publication highlight */}
        <motion.div
          className="glass-card rounded-3xl p-8 mb-8 gradient-border bg-gradient-to-br from-indigo-50/60 to-blue-50/40 border-indigo-200/50"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl flex-shrink-0">
              📄
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200/60">
                  🔄 Under Submission
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  Review Article · ~15,000 words · 101 references
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-gray-900 leading-tight mb-2">
                3D Printing in Pharmaceutical Manufacturing: Technologies, Applications, Regulatory Considerations & Future Perspectives
              </h3>
              <p className="text-xs font-medium text-indigo-600 mb-3">
                Mandar Ravi Kukde et al. · Targeting: Journal of Drug Delivery Science and Technology / AAPSPharmSciTech
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                A comprehensive review surveying FDM, SLA, inkjet, and binder-jetting
                technologies applied to solid dosage forms and personalised medicine.
                Covers FDA/EMA regulatory frameworks, translational challenges in commercial
                scale-up, and the future trajectory of additive manufacturing in precision
                pharmaceutical production. Prepared to rigorous AMA/Vancouver citation
                standards with Turnitin compliance.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["3D Printing", "FDM", "SLA", "Personalised Medicine", "FDA Regulations", "Pharmaceutical Manufacturing"].map((t) => (
                  <span key={t} className="skill-pill text-xs text-gray-600">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* VISTAAR Techno Fest */}
        <motion.div
          className="glass-card rounded-3xl p-7 mb-8 bg-gradient-to-br from-violet-50/60 to-purple-50/40 border-violet-200/50"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xl flex-shrink-0">🧬</div>
            <div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200/60 inline-block mb-2">
                Innovation Challenge
              </span>
              <h3 className="font-display font-bold text-base text-gray-900 mb-1">
                VISTAAR Techno Fest — Mednovation
              </h3>
              <p className="text-xs text-purple-600 font-medium mb-2">
                Formulation Development Challenge
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Participated in VISTAAR's Mednovation segment, presenting a novel approach
                to pharmaceutical formulation development. Demonstrated ability to conceptualise
                and communicate innovation under competitive conditions in a multi-institutional
                technical environment.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards */}
          <div>
            <motion.div
              className="section-eyebrow mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
            >
              Awards & Prizes
            </motion.div>
            <div className="space-y-3">
              {AWARDS.map((award, i) => (
                <motion.div
                  key={award.title + i}
                  className={`glass-card rounded-2xl p-5 bg-gradient-to-br border flex items-start gap-4 ${award.color}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <span className="text-2xl flex-shrink-0">{award.icon}</span>
                  <div>
                    <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${award.accent} mb-0.5`}>
                      {award.position}
                    </div>
                    <div className="font-display font-bold text-sm text-gray-900">
                      {award.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {award.body}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NSS */}
            <motion.div
              className="glass-card rounded-2xl p-5 mt-3 bg-gradient-to-br from-teal-50/70 to-cyan-50/50 border-teal-200/60"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">🤝</span>
                <div>
                  <div className="font-display font-bold text-sm text-gray-900">
                    NSS Volunteer — National Service Scheme
                  </div>
                  <div className="text-[10px] font-mono text-teal-700 mt-0.5">
                    RTMNU · 2023–2024 · RTMNU Best College Award
                  </div>
                  <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                    7-day special camp at Baba Amte's Ashokvan. Blood Donation Camp, village healthcare surveys. Unit recognised with RTMNU Best College NSS Award (2023–24).
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              className="section-eyebrow mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Certifications & Courses
            </motion.div>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="glass-card rounded-2xl p-5 relative overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #6366f1, #8b5cf6, transparent)",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${cert.color} mb-1`}>
                        {cert.issuer}
                      </div>
                      <div className="font-display font-bold text-sm text-gray-900 leading-snug">
                        {cert.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        {cert.desc}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full px-2.5 py-1 flex-shrink-0">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

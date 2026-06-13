"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_GROUPS = [
  {
    category: "Pharmaceutical Sciences",
    icon: "⚗️",
    color: "text-blue-700",
    dotColor: "bg-blue-500",
    skills: [
      { name: "Vesicular Drug Delivery", level: 92 },
      { name: "Topical Formulation", level: 88 },
      { name: "Biopharmaceutics", level: 82 },
      { name: "Nano-DDSs · NLCs · SLNs", level: 80 },
      { name: "Cosmeceutical Formulation", level: 76 },
      { name: "Herbal Formulation", level: 74 },
    ],
    pills: ["Transfersomes", "Liposomes", "Phytosomes", "NLCs", "Emulgels", "Nanoemulsions"],
  },
  {
    category: "Regulatory & Quality",
    icon: "📋",
    color: "text-purple-700",
    dotColor: "bg-purple-500",
    skills: [
      { name: "ICH Q7A–Q14 Guidelines", level: 78 },
      { name: "USFDA Regulatory Affairs", level: 72 },
      { name: "GMP Documentation", level: 80 },
      { name: "SOP Compliance", level: 85 },
      { name: "Pharmaceutical QA/QC", level: 78 },
    ],
    pills: ["ICH Q8 (R2)", "ICH Q9", "ICH Q10", "21 CFR", "GMP", "Quality Systems"],
  },
  {
    category: "Business & Strategy",
    icon: "📈",
    color: "text-indigo-700",
    dotColor: "bg-indigo-500",
    skills: [
      { name: "Healthcare Strategy", level: 78 },
      { name: "Pharmaceutical Marketing", level: 74 },
      { name: "Business Analytics", level: 72 },
      { name: "Operations Management", level: 68 },
      { name: "Human Resource Management", level: 74 },
    ],
    pills: ["Market Analysis", "Business Economics", "Supply Chain", "KOL Engagement", "P&L Basics"],
  },
  {
    category: "Research & Technical",
    icon: "🖥️",
    color: "text-cyan-700",
    dotColor: "bg-cyan-500",
    skills: [
      { name: "Design-Expert 13 (DoE)", level: 82 },
      { name: "Statistical Analysis (BBD)", level: 78 },
      { name: "Scientific Writing (AMA)", level: 85 },
      { name: "BioRender · Canva", level: 88 },
      { name: "MS Office Suite", level: 90 },
    ],
    pills: ["Box-Behnken Design", "RSM", "ANOVA", "PubMed", "Scopus", "BioRender"],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-gray-700">{name}</span>
        <span className="text-[10px] font-mono text-gray-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 60%, #3b82f6 100%)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="relative py-28 overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="orb orb-blue absolute w-[500px] h-[500px] top-0 left-[-100px] opacity-25" />
      <div className="orb orb-purple absolute w-[400px] h-[400px] bottom-0 right-[-80px] opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Competencies</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Technical &{" "}
            <span className="gradient-text">Strategic Arsenal</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A multi-disciplinary skill set spanning formulation science,
            regulatory affairs, and pharmaceutical business management.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card rounded-3xl p-7 space-y-5"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 + 0.15 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg glass border-white/60`}>
                  {group.icon}
                </div>
                <div>
                  <div className={`font-display font-bold text-base ${group.color}`}>
                    {group.category}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${group.dotColor}`} />
                    <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                      {group.skills.length} competencies
                    </span>
                  </div>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.06 + 0.4}
                  />
                ))}
              </div>

              {/* Floating pills */}
              <div className="pt-2 border-t border-white/60">
                <div className="flex flex-wrap gap-2">
                  {group.pills.map((pill) => (
                    <span key={pill} className="skill-pill text-gray-700">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills row */}
        <motion.div
          className="mt-8 glass-card rounded-3xl p-7"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className="section-eyebrow mb-4">Professional & Interpersonal</div>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Scientific Communication",
              "Cross-functional Collaboration",
              "Research Leadership",
              "Critical Analysis",
              "Stakeholder Engagement",
              "Scientific Writing",
              "Project Management",
              "Problem-Solving",
              "Adaptability",
              "Presentation Skills",
              "Chess & Strategic Thinking",
            ].map((s) => (
              <span key={s} className="skill-pill text-gray-600">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

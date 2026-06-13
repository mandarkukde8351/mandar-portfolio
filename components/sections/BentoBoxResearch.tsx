"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BENTO_ITEMS = [
  {
    id: "vesicular",
    col: "md:col-span-7",
    row: "md:row-span-2",
    title: "Synergistic Vesicular Formulations for Topical Immunosuppression",
    subtitle: "M.Pharm Dissertation · NMIMS Shirpur · Ongoing",
    badge: "Flagship Research",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200/60",
    gradient: "from-blue-50/80 to-indigo-50/60",
    desc: "Designing and characterising combination vesicular systems — transfersomes, liposomes, NLCs, and phytosomes — for topical delivery of synergistic immunosuppressant + corticosteroid/NSAID drug pairs. Targets: psoriasis and ichthyosis. Focus on physicochemical parameter mapping (logP, MW, flux, HLB) and lamellarity-driven formulation decisions to optimise percutaneous penetration. Supervised by Dr. Amit B. Page, HoD – Pharmaceutical Technology, NMIMS.",
    tags: ["Transfersomes", "Liposomes", "NLCs", "Phytosomes", "Psoriasis", "Topical DDS"],
    icon: "🔬",
    meta: "Dr. Amit B. Page · NMIMS Shirpur",
  },
  {
    id: "bbd",
    col: "md:col-span-5",
    row: "",
    title: "Box-Behnken Design Optimisation",
    subtitle: "Design-Expert 13 · Statistical Analysis",
    badge: "Applied DoE",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200/60",
    gradient: "from-purple-50/80 to-violet-50/50",
    desc: "Statistical formulation optimisation using Box-Behnken Design with Design-Expert 13. Produced ANOVA tables, polynomial regression models, 3D response surfaces, and contour plots to identify optimal formulation space for tablet manufacturing.",
    tags: ["Box-Behnken", "RSM", "ANOVA", "Design-Expert"],
    icon: "📐",
    meta: "NMIMS Shirpur · 2025",
  },
  {
    id: "printing",
    col: "md:col-span-5",
    row: "",
    title: "3D Printing in Pharmaceutical Manufacturing",
    subtitle: "Review Article · Under Journal Submission",
    badge: "Publication",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200/60",
    gradient: "from-orange-50/70 to-amber-50/50",
    desc: "A ~15,000-word peer-reviewed review covering FDM, SLA, inkjet, and binder-jetting technologies for personalised dosage forms. Examines FDA/EMA regulatory frameworks, translational challenges, and the future of additive manufacturing in precision medicine. 101 curated references, AMA citation format.",
    tags: ["FDM", "SLA", "Personalised Medicine", "FDA Regulatory"],
    icon: "📄",
    meta: "Targeting JDDST / AAPSPharmSciTech",
  },
  {
    id: "aavishkar",
    col: "md:col-span-4",
    row: "",
    title: "Aavishkar 2024–25 — 1st Place",
    subtitle: "State Research Convention · RTMNU",
    badge: "🏆 National Award",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-200/60",
    gradient: "from-yellow-50/80 to-amber-50/60",
    desc: "First place at District, University, and State levels of the 17th Maharashtra State Inter-University Research Convention. Represented RTMNU at Dr. BATU, Lonere, competing against top universities across Maharashtra.",
    tags: ["Aavishkar", "RTMNU", "Maharashtra State"],
    icon: "🏆",
    meta: "District · University · State Level",
  },
  {
    id: "industrial",
    col: "md:col-span-3",
    row: "",
    title: "Industrial Training — Excipient Manufacturing",
    subtitle: "Ankit Pulps & Boards · Oct–Nov 2024",
    badge: "Industry",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200/60",
    gradient: "from-teal-50/70 to-cyan-50/50",
    desc: "End-to-end exposure to MCC and co-processed excipient manufacturing at production scale. GMP, QA/QC, batch records, and SOP compliance.",
    tags: ["GMP", "MCC", "QA/QC"],
    icon: "🏭",
    meta: "Nagpur, Maharashtra",
  },
  {
    id: "cadd",
    col: "md:col-span-5",
    row: "",
    title: "Computer-Aided Drug Development (CADD)",
    subtitle: "M.Pharm Coursework · In Silico Methods",
    badge: "Computational",
    badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200/60",
    gradient: "from-cyan-50/70 to-blue-50/40",
    desc: "Application of molecular docking, QSAR modelling, pharmacophore screening, and ADME prediction tools (PubChem, ChEMBL, DrugBank) to integrate in silico insights with experimental formulation workflows.",
    tags: ["Molecular Docking", "QSAR", "ADME", "ChEMBL"],
    icon: "💻",
    meta: "NMIMS Shirpur · 2025",
  },
];

export default function BentoBoxResearch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="research" className="relative py-28 overflow-hidden bg-white">
      <div className="orb orb-blue absolute w-[500px] h-[500px] top-[-80px] right-[-120px] opacity-25" />
      <div className="orb orb-purple absolute w-[400px] h-[400px] bottom-[-60px] left-[-80px] opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Research & Projects</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Research &{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From bench-scale formulation to peer-reviewed publications and
            national award-winning research.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          {BENTO_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${item.col} glass-card rounded-3xl p-6 bg-gradient-to-br ${item.gradient} border border-white/60 flex flex-col gap-4`}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 + 0.15 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div className="min-w-0">
                    <span
                      className={`inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border mb-1.5 ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-gray-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-gray-500 bg-white/60 border border-white/80 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="pt-3 border-t border-white/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="text-[10px] font-mono text-gray-400">{item.meta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

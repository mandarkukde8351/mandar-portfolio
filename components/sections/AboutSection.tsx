"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STRENGTHS = [
  {
    icon: "🔬",
    title: "Advanced Formulation Science",
    desc: "Specialising in vesicular drug delivery systems — transfersomes, liposomes, NLCs, and phytosomes — for dermatological conditions requiring enhanced skin penetration.",
    color: "from-blue-50 to-indigo-50 border-blue-100/80",
  },
  {
    icon: "🏛️",
    title: "Regulatory & Compliance Acumen",
    desc: "Trained in ICH Q7A–Q14 guidelines, USFDA regulatory frameworks, and GMP standards. Practical exposure from industrial training in pharmaceutical excipient manufacturing.",
    color: "from-purple-50 to-violet-50 border-purple-100/80",
  },
  {
    icon: "📊",
    title: "Strategic Business Thinking",
    desc: "MBA training in healthcare operations, business analytics, HR management, pharmaceutical marketing, and corporate strategy — enabling evidence-based commercial decisions.",
    color: "from-indigo-50 to-blue-50 border-indigo-100/80",
  },
  {
    icon: "💡",
    title: "Innovation & IP Creation",
    desc: "Two internationally registered design patents from undergraduate research — a portable medical disinfection device (India) and a veterinary vital-parameters detector (UK).",
    color: "from-violet-50 to-purple-50 border-violet-100/80",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white">
      <div className="orb orb-purple absolute w-[600px] h-[600px] top-[-100px] right-[-200px] opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Who I Am</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Engineering Health,{" "}
            <span className="gradient-text">Managing Innovation</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            A dual-degree pharmaceutical student and business strategist,
            trained at one of India's most rigorous integrated programmes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Narrative */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card rounded-3xl p-8 space-y-5">
              <p className="text-gray-700 text-base leading-relaxed">
                I am pursuing a dual{" "}
                <span className="font-semibold text-gray-900">
                  M.Pharm + MBA programme at SVKM's NMIMS
                </span>{" "}
                — one of India's most demanding integrated pharmacy-business
                qualifications. {" "}
                <span className="font-semibold text-gray-900">
                  
                </span>
                
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                My profile is defined by the rare convergence of hands-on
                formulation science, internationally recognised intellectual
                property, and strategic business education. I hold two{" "}
                <span className="font-semibold text-gray-900">
                  granted design patents
                </span>{" "}
                — one registered with the Government of India and one with the
                UK Intellectual Property Office under the Hague Agreement — and
                I am the author of a{" "}
                <span className="font-semibold text-gray-900">
                  peer-reviewed review article on 3D printing in pharmaceutical
                  manufacturing
                </span>
                , currently under journal submission.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                My career target is the intersection where scientific depth
                creates business value: Medical Affairs, Business Development,
                Pharmaceutical Marketing, Healthcare Consulting, or Supply Chain
                Operations — roles where a formulation scientist who also
                understands strategy is genuinely rare.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Location", value: "Nagpur, Maharashtra · Relocate: Yes" },
                  { label: "Languages", value: "English · Hindi · Marathi" },
                  { label: "Availability", value: "Immediately (Summer 2025)" },
                  { label: "Target Hubs", value: "Mumbai · Hyderabad · Pune · Pan-India" },
                ].map((f) => (
                  <div key={f.label} className="bg-gray-50/70 rounded-xl p-3">
                    <div className="text-[10px] font-mono font-medium text-indigo-500 uppercase tracking-widest mb-0.5">
                      {f.label}
                    </div>
                    <div className="text-gray-800 text-xs font-semibold">
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strengths grid */}
          <motion.div
            className="lg:col-span-2 space-y-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {STRENGTHS.map((s, i) => (
              <motion.div
                key={s.title}
                className={`glass-card rounded-2xl p-5 bg-gradient-to-br border ${s.color}`}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div>
                    <div className="font-display font-bold text-sm text-gray-900 mb-1">
                      {s.title}
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

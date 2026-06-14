"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const CONTACT_LINKS = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "mandarkukde8352@gmail.com",
    href: "mailto:mandarkukde8352@gmail.com",
    color: "text-blue-700",
    bg: "bg-blue-50/80",
  },
  
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/mandar-kukde-b47b48295",
    href: "https://linkedin.com/in/mandar-kukde-b47b48295",
    color: "text-indigo-700",
    bg: "bg-indigo-50/80",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Nagpur, Maharashtra · Open to Relocation",
    href: "#",
    color: "text-purple-700",
    bg: "bg-purple-50/80",
  },
];

const PURPOSE_OPTIONS = [
  "Internship Opportunity",
  "Research Collaboration",
  "Academic Enquiry",
  "Business Development",
  "Medical Affairs Role",
  "General Networking",
  "Other",
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.firstName || !form.email || !form.message) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    await emailjs.send(
      "service_2vw1s0j",
      "template_d0bbfv2",
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        organisation: form.organisation,
        purpose: form.purpose,
        message: form.message,
      },
      "zTU_R7SjTZnGrgYKQ"
    );

    setSubmitted(true);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      purpose: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Please try again.");
  }
};

return (
    <section id="contact" className="relative py-28 overflow-hidden bg-white">
      <div className="orb orb-blue absolute w-[500px] h-[500px] bottom-[-100px] left-[-80px] opacity-25" />
      <div className="orb orb-purple absolute w-[400px] h-[400px] top-[-60px] right-[-100px] opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 mt-2">
            Initiate{" "}
            <span className="gradient-text">Connection</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Open to internship opportunities, research collaborations, and
            meaningful conversations at the intersection of science and strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {/* Availability card */}
            <div className="glass-card rounded-3xl p-7 bg-gradient-to-br from-indigo-50/60 to-blue-50/40 border-indigo-200/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-green-700 uppercase tracking-widest">
                  Available Now
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-gray-900 mb-2 leading-tight">
                Open to Internships, Research Opportunities & Industry Collaborations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Immediately available for MBA summer internship roles in
                Medical Affairs, Business Development, Pharmaceutical Marketing,
                Healthcare Consulting, or Supply Chain. Willing to relocate
                pan-India.
              </p>
              <div className="space-y-2">
                {[
                  "Medical Affairs / MSL",
                  "Business Development",
                  "Pharmaceutical Marketing",
                  "Healthcare Consulting",
                  "Supply Chain Operations",
                ].map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 text-xs text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-2">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 glass-card rounded-2xl p-4 ${link.bg} hover:scale-[1.02] transition-transform`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl glass flex items-center justify-center flex-shrink-0 ${link.color}`}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${link.color} opacity-70`}>
                      {link.label}
                    </div>
                    <div className="text-xs text-gray-700 font-medium truncate">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <div className="glass-strong rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-extrabold text-xl text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Message delivered successfully. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-indigo-600 text-sm font-medium hover:text-indigo-700"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-5">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        First Name <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Your first name"
                        className="glass-input w-full rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        className="glass-input w-full rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@organisation.com"
                      className="glass-input w-full rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Company / Institute / University"
                      className="glass-input w-full rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Purpose of Contact
                    </label>
                    <select
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-2.5 text-sm text-gray-800 font-body appearance-none cursor-pointer"
                    >
                      <option value="">Select a purpose…</option>
                      {PURPOSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Message <span className="text-indigo-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about the opportunity or collaboration you have in mind…"
                      className="glass-input w-full rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 resize-none font-body"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-gradient w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send Message
                  </motion.button>

                  <p className="text-center text-[10px] text-gray-400 font-mono">
                    Messages are securely delivered to my inbox.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
);
}


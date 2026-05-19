"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, viewportOnce } from "@/lib/motion";

const detailRows = [
  {
    label: "STUDYING AT",
    value: "BIT Bengaluru — Robotics & AI — CGPA 8.45"
  },
  {
    label: "CURRENTLY",
    value: "Building · Reading DDIA · Exploring LLM Infra"
  },
  {
    label: "RECOGNIZED",
    value: "SIH Round 2 · HackSurgeX 2nd · Project Expo Winner"
  }
];

const aboutLabel = "// WHO I AM";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(59,130,246,0.13),transparent_26%),radial-gradient(circle_at_82%_74%,rgba(139,92,246,0.1),transparent_30%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full border border-accent-primary/60 bg-white/[0.03] p-8 shadow-[0_0_44px_rgba(59,130,246,0.48)]">
            <div className="absolute inset-4 rounded-full border border-accent-primary/20" />
            <div className="absolute inset-10 rounded-full border border-white/10" />
            <div className="relative h-44 w-44 rounded-full border border-white/15 bg-[#080c14] shadow-glow">
              <div className="absolute left-1/2 top-9 h-16 w-16 -translate-x-1/2 rounded-full bg-slate-100" />
              <div className="absolute bottom-8 left-1/2 h-20 w-32 -translate-x-1/2 rounded-t-full bg-accent-primary" />
              <div className="absolute left-1/2 top-24 h-3 w-24 -translate-x-1/2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-5 py-3 text-sm font-semibold text-emerald-200 shadow-[0_0_26px_rgba(16,185,129,0.18)] backdrop-blur-md">
            <span aria-hidden="true">🟢</span>
            <span>Open to Internships — 2025</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="mb-5 font-mono text-sm font-semibold tracking-[0.22em] text-accent-primary">
            {aboutLabel}
          </p>
          <h2 className="max-w-3xl text-[40px] font-bold leading-tight text-white">
            I got bored of building things that already exist.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-[1.8] text-slate-400">
            <p>
              Most people start with todo apps. I started with a system that
              generates drug molecules using AI and docks them against protein
              targets. Not because it was required — because it was the hardest
              thing I could think of.
            </p>
            <p>
              I&apos;m a third-year Robotics & AI student at BIT Bengaluru. I
              build at the intersection of AI systems, backend infrastructure,
              and scientific computing. My work tends to live in the
              uncomfortable space where research meets production.
            </p>
            <p className="text-slate-200">
              Right now I&apos;m interested in: platform engineering, AI
              infrastructure, and anything that involves making systems smarter
              about their own failure.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {detailRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:flex-row sm:items-center"
              >
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-accent-primary">
                  {row.label}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

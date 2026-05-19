"use client";

import { motion } from "framer-motion";
import { AnimatedTerminal } from "@/components/animated-terminal";

const ctas = [
  { label: "View Projects", href: "#work", variant: "primary" },
  { label: "Read About", href: "#about", variant: "ghost" },
  { label: "GitHub", href: "https://github.com/", variant: "ghost" }
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen overflow-hidden bg-void px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <div className="grid-texture absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent" />
      <div className="absolute right-[-180px] top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full bg-accent-primary/18 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_52%,rgba(79,142,247,0.12),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.96fr_1.04fr]">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-accent-success/80 sm:text-sm">
            ROBOTICS & AI ENGINEER / SYSTEMS BUILDER
          </p>
          <h1 className="font-heading text-6xl font-extrabold leading-[0.86] tracking-[-0.075em] text-white sm:text-7xl lg:text-[112px]">
            <span className="bg-gradient-to-r from-accent-primary via-white to-accent-secondary bg-clip-text text-transparent">
              Gourav
            </span>
            <br />
            Singh
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400">
            Junior systems engineer building AI pipelines, chaos platforms, and
            backend infrastructure with the discipline of a developer tool.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {ctas.map((cta) => (
              <motion.a
                key={cta.label}
                href={cta.href}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={
                  cta.variant === "primary"
                    ? "inline-flex h-12 items-center justify-center rounded-md border-[0.5px] border-accent-primary bg-accent-primary px-6 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-glow transition duration-300 hover:shadow-[0_0_34px_rgba(79,142,247,0.62)] focus:outline-none focus:ring-2 focus:ring-accent-primary/70"
                    : "inline-flex h-12 items-center justify-center rounded-md border-[0.5px] border-white/25 bg-white/[0.025] px-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-200 transition duration-300 hover:border-accent-secondary/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-secondary/50"
                }
              >
                {cta.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="lg:justify-self-end"
        >
          <AnimatedTerminal />
        </motion.div>
      </div>
    </section>
  );
}

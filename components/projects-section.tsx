"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "MolGenix",
    problem:
      "AI-assisted drug discovery pipeline that generates candidate molecules and evaluates them against protein targets.",
    layers: [
      { label: "Next UI", tone: "blue", x: "8%", y: "16%" },
      { label: "API Gateway", tone: "grey", x: "38%", y: "16%" },
      { label: "Transformer", tone: "purple", x: "68%", y: "16%" },
      { label: "Docking", tone: "purple", x: "24%", y: "58%" },
      { label: "ADMET", tone: "green", x: "56%", y: "58%" },
      { label: "Candidates", tone: "green", x: "72%", y: "58%" }
    ],
    highlights: [
      "Generative model loop for molecule proposals",
      "Protein-target scoring and toxicity filtering",
      "Backend pipeline shaped for experiment replay"
    ]
  },
  {
    title: "ChaosLab",
    problem:
      "Infrastructure platform for injecting controlled container failures, observing blast radius, and triggering repair workflows.",
    layers: [
      { label: "Dashboard", tone: "blue", x: "8%", y: "18%" },
      { label: "FastAPI", tone: "grey", x: "38%", y: "18%" },
      { label: "Fault Engine", tone: "purple", x: "66%", y: "18%" },
      { label: "Docker", tone: "grey", x: "20%", y: "60%" },
      { label: "Metrics", tone: "green", x: "50%", y: "60%" },
      { label: "Repair", tone: "green", x: "72%", y: "60%" }
    ],
    highlights: [
      "Memory, CPU, and network fault experiments",
      "Runtime health checks with repair orchestration",
      "Operator-style workflow for resilient services"
    ]
  }
];

const toneClasses = {
  blue: "border-accent-primary/70 text-accent-primary bg-accent-primary/10",
  purple: "border-accent-secondary/70 text-accent-secondary bg-accent-secondary/10",
  green: "border-accent-success/70 text-accent-success bg-accent-success/10",
  grey: "border-slate-500/60 text-slate-300 bg-slate-500/10"
};

const skills = [
  "AI Systems",
  "FastAPI",
  "Docker",
  "PyTorch",
  "SRE",
  "Scientific Computing",
  "LLM Infra"
];

const projectsLabel = "// PROJECT SYSTEMS";

type Project = (typeof projects)[number];

function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-lg border-[0.5px] border-line bg-[#05070d] p-5">
      <div className="grid-texture absolute inset-0 opacity-45" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M22 27 L43 27 L70 27" stroke="rgba(79,142,247,0.42)" strokeWidth="0.35" fill="none" />
        <path d="M50 35 L34 60" stroke="rgba(139,92,246,0.42)" strokeWidth="0.35" fill="none" />
        <path d="M55 35 L59 60 L76 60" stroke="rgba(6,214,160,0.42)" strokeWidth="0.35" fill="none" />
        <path d="M34 68 L59 68" stroke="rgba(148,163,184,0.34)" strokeWidth="0.35" fill="none" />
      </svg>
      {project.layers.map((layer) => (
        <div
          key={layer.label}
          className={`absolute rounded-md border-[0.5px] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm ${
            toneClasses[layer.tone as keyof typeof toneClasses]
          }`}
          style={{ left: layer.x, top: layer.y }}
        >
          {layer.label}
        </div>
      ))}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#080c1a] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="grid-texture absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-secondary/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-primary">
            {projectsLabel}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-extrabold leading-none tracking-[-0.055em] text-white sm:text-6xl">
            Built like tools, not portfolio tiles.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group relative overflow-hidden rounded-xl border-[0.5px] border-line bg-white/[0.025] p-4 transition duration-300 hover:border-white/20"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent-primary to-accent-secondary transition duration-500 group-hover:scale-x-100" />
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <ArchitectureDiagram project={project} />

                <div className="flex flex-col justify-center p-2 sm:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-success">
                    DEPLOYABLE SYSTEM
                  </p>
                  <h3 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {project.problem}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="mr-2 text-accent-success">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/"
                      className="rounded-md border-[0.5px] border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-accent-primary hover:text-accent-primary"
                    >
                      GitHub
                    </a>
                    <a
                      href="#home"
                      className="rounded-md border-[0.5px] border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-accent-secondary hover:text-accent-secondary"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border-[0.5px] border-line bg-white/[0.025] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-accent-success/70 hover:text-accent-success hover:shadow-success"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

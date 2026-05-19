"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "$ whoami",
  "gourav: robotics_ai_engineer",
  "$ ls projects/",
  "molgenix/ chaoslab/ voice-os/ backend-infra/",
  "$ echo $STATUS",
  "BUILDING_SYSTEMS_THAT_LEARN_AND_RECOVER"
];

export function AnimatedTerminal() {
  const [charIndex, setCharIndex] = useState(0);
  const terminalText = useMemo(() => terminalLines.join("\n"), []);

  useEffect(() => {
    if (charIndex >= terminalText.length) {
      return undefined;
    }

    const typeTimer = window.setTimeout(() => {
      setCharIndex((current) => current + 1);
    }, 58);

    return () => window.clearTimeout(typeTimer);
  }, [charIndex, terminalText.length]);

  const visibleLines = terminalText.slice(0, charIndex).split("\n");

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-lg border-[0.5px] border-line bg-[#05070d] shadow-[0_0_64px_rgba(79,142,247,0.2)]">
      <div className="flex h-11 items-center gap-2 border-b-[0.5px] border-line bg-white/[0.035] px-5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-slate-500">
          terminal-os/session
        </span>
      </div>

      <div className="relative min-h-[390px] p-5 font-mono text-sm leading-8 text-accent-success sm:p-7 sm:text-base">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_50%,transparent_50%)] bg-[size:100%_6px] opacity-25" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-success to-accent-secondary" />
        <div className="relative space-y-3">
          {visibleLines.map((line, index) => (
            <p
              key={`${line}-${index}`}
              className={
                line.startsWith("$")
                  ? "break-words text-accent-primary"
                  : "break-words text-accent-success"
              }
            >
              {line}
            </p>
          ))}
          <span className="sr-only">Typing cursor</span>
          <span className="inline-flex">
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              className="inline-block h-5 w-2 bg-accent-success shadow-[0_0_12px_rgba(6,214,160,0.9)]"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

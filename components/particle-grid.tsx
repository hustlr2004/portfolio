"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function ParticleGrid() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: false,
      detectRetina: true,
      fpsLimit: 60,
      background: {
        color: "transparent"
      },
      particles: {
        color: {
          value: ["#3b82f6", "#8b5cf6"]
        },
        links: {
          color: "#3b82f6",
          distance: 130,
          enable: true,
          opacity: 0.16,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 0.22,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 900
          },
          value: 62
        },
        opacity: {
          value: 0.22
        },
        shape: {
          type: "square"
        },
        size: {
          value: { min: 1, max: 2.5 }
        }
      }
    }),
    []
  );

  if (!ready) {
    return null;
  }

  return (
    <Particles
      id="hero-particle-grid"
      options={options}
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
    />
  );
}

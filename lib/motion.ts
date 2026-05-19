import type { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const viewportOnce = {
  once: true,
  amount: 0.25
} as const;

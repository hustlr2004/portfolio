"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { fadeUpVariant, viewportOnce } from "@/lib/motion";

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>;

export function MotionSection({
  children,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.section>
  );
}

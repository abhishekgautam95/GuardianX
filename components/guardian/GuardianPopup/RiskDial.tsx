"use client";

import { motion } from "framer-motion";
import { CircularProgress } from "@/components/ui/circular-progress";
import { fadeIn, delayedTransitions } from "./motion";

interface RiskDialProps {
  riskScore: number;
  className?: string;
}

export function RiskDial({ riskScore, className }: RiskDialProps) {
  return (
    <motion.div 
      variants={fadeIn}
      transition={delayedTransitions.riskDial}
      className={`flex justify-center ${className || ""}`}
    >
      <CircularProgress value={riskScore} />
    </motion.div>
  );
}
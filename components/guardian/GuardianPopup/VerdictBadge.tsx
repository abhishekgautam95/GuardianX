"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Verdict } from "./types";
import { fadeInUp, delayedTransitions } from "./motion";

interface VerdictBadgeProps {
  verdict: Verdict;
  explanation: string;
}

// Verdict metadata mapping
const VERDICT_META: Record<Verdict, {
  icon: typeof CheckCircle;
  colorClass: string;
  badgeVariant: "default" | "secondary" | "destructive";
}> = {
  SAFE: {
    icon: CheckCircle,
    colorClass: "text-green-600",
    badgeVariant: "default"
  },
  CAUTION: {
    icon: AlertTriangle,
    colorClass: "text-amber-600",
    badgeVariant: "secondary"
  },
  DANGER: {
    icon: Shield,
    colorClass: "text-red-600",
    badgeVariant: "destructive"
  }
};

export function VerdictBadge({ verdict, explanation }: VerdictBadgeProps) {
  const { icon: VerdictIcon, colorClass, badgeVariant } = VERDICT_META[verdict];

  return (
    <motion.div
      variants={fadeInUp}
      transition={delayedTransitions.verdict}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <VerdictIcon className={`h-5 w-5 ${colorClass}`} />
        <Badge 
          variant={badgeVariant}
          className="text-sm font-semibold"
        >
          {verdict}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {explanation}
      </p>
    </motion.div>
  );
}
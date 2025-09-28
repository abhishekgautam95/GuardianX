"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { fadeInUp, delayedTransitions } from "./motion";

interface ActionsProps {
  onProceed: () => void;
  onReject: () => void;
}

export function Actions({ onProceed, onReject }: ActionsProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={delayedTransitions.actions}
      className="flex gap-3 pt-2"
    >
      <Button
        variant="outline"
        onClick={onReject}
        className="flex-1 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors"
      >
        <X className="h-4 w-4 mr-2" />
        Reject
      </Button>
      <Button
        onClick={onProceed}
        data-primary-action
        className="flex-1 bg-green-600 hover:bg-green-700 transition-colors"
      >
        Proceed
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </motion.div>
  );
}
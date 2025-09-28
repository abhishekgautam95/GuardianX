"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, X } from "lucide-react";
import { GuardianPopupProps } from "./types";
import { RiskDial } from "./RiskDial";
import { VerdictBadge } from "./VerdictBadge";
import { TxDetails } from "./TxDetails";
import { Actions } from "./Actions";
import { useFocusManagement, useEscapeKey, prefersReducedMotion } from "./a11y";
import { overlayVariants, containerVariants, springTransition, staggerChildren } from "./motion";

export function GuardianPopup({
  isOpen,
  onClose,
  txSummary,
  riskScore,
  verdict,
  explanation,
  onProceed,
  onReject,
}: GuardianPopupProps) {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = prefersReducedMotion();

  // Accessibility hooks
  useFocusManagement(isOpen);
  useEscapeKey(isOpen, onClose);

  // Portal mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dialogContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={reducedMotion ? undefined : overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guardian-title"
          aria-describedby="guardian-explanation"
        >
          <motion.div
            variants={reducedMotion ? undefined : containerVariants}
            transition={reducedMotion ? undefined : springTransition}
            className="w-full max-w-md mx-auto"
          >
            <Card className="border-none shadow-2xl">
              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle id="guardian-title" className="text-lg">
                      GuardianX Security
                    </CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0"
                    aria-label="Close security dialog"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <motion.div
                  variants={reducedMotion ? undefined : staggerChildren}
                  initial="initial"
                  animate="animate"
                  className="space-y-6"
                >
                  {/* Risk Score */}
                  <RiskDial riskScore={riskScore} />

                  {/* Verdict */}
                  <div id="guardian-explanation">
                    <VerdictBadge verdict={verdict} explanation={explanation} />
                  </div>

                  {/* Transaction Details */}
                  <TxDetails txSummary={txSummary} />

                  {/* Action Buttons */}
                  <Actions onProceed={onProceed} onReject={onReject} />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render to portal at document.body
  return createPortal(dialogContent, document.body);
}
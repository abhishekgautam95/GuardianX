"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Shield, AlertTriangle, CheckCircle, X, Coins, ArrowRight } from "lucide-react";

interface TransactionSummary {
  tokenName: string;
  tokenSymbol: string;
  amount: string;
  type: string;
  collection?: string;
  recipient?: string;
  estimatedValue?: string;
}

interface GuardianPopupProps {
  isOpen: boolean;
  onClose: () => void;
  txSummary: TransactionSummary;
  riskScore: number;
  verdict: "SAFE" | "CAUTION" | "DANGER";
  explanation: string;
  onProceed: () => void;
  onReject: () => void;
}

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
  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "SAFE": return "text-green-600";
      case "CAUTION": return "text-amber-600";
      case "DANGER": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "SAFE": return CheckCircle;
      case "CAUTION": return AlertTriangle;
      case "DANGER": return Shield;
      default: return Shield;
    }
  };

  const VerdictIcon = getVerdictIcon(verdict);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            <Card className="border-none shadow-2xl">
              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">GuardianX Security</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Risk Score */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center"
                >
                  <CircularProgress value={riskScore} />
                </motion.div>

                {/* Verdict */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <VerdictIcon className={`h-5 w-5 ${getVerdictColor(verdict)}`} />
                    <Badge 
                      variant={verdict === "SAFE" ? "default" : verdict === "CAUTION" ? "secondary" : "destructive"}
                      className="text-sm font-semibold"
                    >
                      {verdict}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {explanation}
                  </p>
                </motion.div>

                {/* Transaction Details */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="bg-muted/50">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Coins className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-sm">Transaction Details</span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Token:</span>
                          <span className="font-medium">{txSummary.tokenName} ({txSummary.tokenSymbol})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="font-medium">{txSummary.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <Badge variant="outline" className="h-6 text-xs">
                            {txSummary.type}
                          </Badge>
                        </div>
                        {txSummary.collection && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Collection:</span>
                            <span className="font-medium text-xs">{txSummary.collection}</span>
                          </div>
                        )}
                        {txSummary.estimatedValue && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Est. Value:</span>
                            <span className="font-medium">{txSummary.estimatedValue}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
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
                    className="flex-1 bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    Proceed
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
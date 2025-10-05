"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";
import { TransactionSummary } from "./types";
import { fadeInUp, delayedTransitions } from "./motion";

interface TxDetailsProps {
  txSummary: TransactionSummary;
}

export function TxDetails({ txSummary }: TxDetailsProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={delayedTransitions.details}
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
  );
}
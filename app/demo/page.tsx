"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GuardianPopup } from "@/components/guardian/GuardianPopup";
import { mockTransactions } from "@/lib/mock-data";
import { Shield, TestTube, AlertTriangle, CheckCircle, Zap } from "lucide-react";

type TransactionType = 'safe' | 'scam' | 'caution';

export default function DemoPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<TransactionType>('safe');

  const handleTestTransaction = (type: TransactionType) => {
    setCurrentTransaction(type);
    setIsPopupOpen(true);
  };

  const handleProceed = () => {
    setIsPopupOpen(false);
    // In a real app, this would execute the transaction
    console.log("Transaction proceeded");
  };

  const handleReject = () => {
    setIsPopupOpen(false);
    // In a real app, this would cancel the transaction
    console.log("Transaction rejected");
  };

  const currentTx = mockTransactions[currentTransaction];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GuardianX
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-2">
            AI-Powered Solana Wallet Security
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Experience next-generation transaction security with real-time AI risk assessment 
            and intelligent threat detection for the Solana ecosystem.
          </p>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TestTube className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-xl">Interactive Demo</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Test GuardianX with simulated transactions to see how our AI security system works in action.
              </p>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {/* Safe Transaction */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="cursor-pointer border-2 hover:border-green-200 transition-all duration-200 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-green-800 mb-2">Safe Transaction</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Normal SOL transfer to verified wallet
                    </p>
                    <Button
                      onClick={() => handleTestTransaction('safe')}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Test Safe TX
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Caution Transaction */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="cursor-pointer border-2 hover:border-amber-200 transition-all duration-200 bg-gradient-to-br from-amber-50 to-yellow-50">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-amber-800 mb-2">Caution Transaction</h3>
                    <p className="text-sm text-amber-700 mb-4">
                      New token with limited history
                    </p>
                    <Button
                      onClick={() => handleTestTransaction('caution')}
                      variant="outline"
                      className="w-full border-amber-600 text-amber-700 hover:bg-amber-50"
                    >
                      Test Caution TX
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dangerous Transaction */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="cursor-pointer border-2 hover:border-red-200 transition-all duration-200 bg-gradient-to-br from-red-50 to-pink-50">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-red-800 mb-2">Dangerous Transaction</h3>
                    <p className="text-sm text-red-700 mb-4">
                      Suspicious contract with scam indicators
                    </p>
                    <Button
                      onClick={() => handleTestTransaction('scam')}
                      variant="destructive"
                      className="w-full"
                    >
                      Test Scam TX
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Instant AI-powered risk assessment for every transaction before execution.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">Smart Contract Safety</h3>
              <p className="text-sm text-muted-foreground">
                Advanced detection of honeypots, rugpulls, and malicious contracts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <AlertTriangle className="h-8 w-8 text-amber-600 mb-3" />
              <h3 className="font-semibold mb-2">Threat Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Community-driven database of known scams and suspicious addresses.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Guardian Popup */}
      <GuardianPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        txSummary={currentTx.txSummary}
        riskScore={currentTx.riskScore}
        verdict={currentTx.verdict}
        explanation={currentTx.explanation}
        onProceed={handleProceed}
        onReject={handleReject}
      />
    </div>
  );
}
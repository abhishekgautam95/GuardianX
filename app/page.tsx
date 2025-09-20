"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Zap, Lock, Eye, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            GuardianX
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Next-generation AI-powered security for your Solana wallet. 
            Protect yourself from scams, rugpulls, and malicious contracts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/demo">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20"
        >
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-time Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every transaction is analyzed by our advanced AI before execution, 
                providing instant risk assessment and threat detection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Smart Contract Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced detection of honeypots, rugpulls, and malicious smart contracts 
                using machine learning algorithms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Eye className="h-12 w-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Threat Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Community-driven database of known scams, suspicious addresses, 
                and emerging threats in the Solana ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging collective intelligence from the Solana community 
                to identify and prevent emerging security threats.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Zero False Positives</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI is trained on extensive datasets to minimize false alerts 
                while maintaining maximum security coverage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <ArrowRight className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy integration with popular Solana wallets and DApps. 
                Protect your transactions without changing your workflow.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Secure Your Solana Transactions?
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Experience the future of wallet security with GuardianX. 
                Try our interactive demo and see how AI can protect your crypto assets.
              </p>
              <Link href="/demo">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
                  Launch Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
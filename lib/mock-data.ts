export const mockTransactions = {
  safe: {
    txSummary: {
      tokenName: "Solana",
      tokenSymbol: "SOL",
      amount: "2.5 SOL",
      type: "TRANSFER",
      recipient: "7xKX...9mN2",
      estimatedValue: "$320.50"
    },
    riskScore: 15,
    verdict: "SAFE" as const,
    explanation: "This transaction appears legitimate. The recipient is a verified wallet address with normal transaction patterns. No suspicious smart contract interactions detected."
  },
  
  scam: {
    txSummary: {
      tokenName: "Fake USDC",
      tokenSymbol: "USDC",
      amount: "1,000 USDC",
      type: "MINT_NFT",
      collection: "Suspicious Collection #1",
      recipient: "9xKY...8mL1",
      estimatedValue: "$1,000.00"
    },
    riskScore: 85,
    verdict: "DANGER" as const,
    explanation: "⚠️ HIGH RISK DETECTED: This contract has been flagged for suspicious activity. Multiple reports of users losing funds. The token contract is not verified and shows signs of honeypot behavior."
  },

  caution: {
    txSummary: {
      tokenName: "New Project Token",
      tokenSymbol: "NPT",
      amount: "500 NPT",
      type: "SWAP",
      recipient: "4xMZ...7nK3",
      estimatedValue: "$125.00"
    },
    riskScore: 55,
    verdict: "CAUTION" as const,
    explanation: "Moderate risk detected. This is a newly created token with limited transaction history. Exercise caution and only proceed if you trust the source."
  }
};
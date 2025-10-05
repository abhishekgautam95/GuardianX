export interface TransactionSummary {
  tokenName: string;
  tokenSymbol: string;
  amount: string;
  type: string;
  collection?: string;
  recipient?: string;
  estimatedValue?: string;
}

export type Verdict = "SAFE" | "CAUTION" | "DANGER";

export interface RiskAssessment {
  score: number;
  verdict: Verdict;
  explanation: string;
  factors?: string[];
  modelVersion?: string;
}

export interface GuardianPopupProps {
  isOpen: boolean;
  onClose: () => void;
  txSummary: TransactionSummary;
  riskScore: number;
  verdict: Verdict;
  explanation: string;
  onProceed: () => void;
  onReject: () => void;
}
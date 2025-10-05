// Main component export
export { GuardianPopup } from "./GuardianPopup";

// Subcomponents for advanced usage
export { RiskDial } from "./RiskDial";
export { VerdictBadge } from "./VerdictBadge";
export { TxDetails } from "./TxDetails";
export { Actions } from "./Actions";

// Types
export type { 
  GuardianPopupProps, 
  TransactionSummary, 
  Verdict, 
  RiskAssessment 
} from "./types";

// Motion utilities
export { 
  overlayVariants, 
  containerVariants, 
  fadeIn, 
  fadeInUp,
  springTransition,
  delayedTransitions
} from "./motion";

// Accessibility utilities
export { useFocusManagement, useEscapeKey, prefersReducedMotion } from "./a11y";
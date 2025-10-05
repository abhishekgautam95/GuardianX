/**
 * @deprecated This import path is deprecated. Please use:
 * import { GuardianPopup } from "@/components/guardian/GuardianPopup"
 * 
 * The component has been refactored into a modular architecture with improved
 * accessibility, better type safety, and enhanced maintainability.
 */

import { useEffect } from "react";
import { GuardianPopup as NewGuardianPopup } from "./guardian/GuardianPopup";
import type { GuardianPopupProps } from "./guardian/GuardianPopup";

// Log deprecation warning in development
if (process.env.NODE_ENV === "development") {
  console.warn(
    "⚠️ DEPRECATION WARNING: @/components/guardian-popup is deprecated.\n" +
    "Please update your import to: import { GuardianPopup } from '@/components/guardian/GuardianPopup'\n" +
    "The new modular architecture provides better accessibility, maintainability, and type safety."
  );
}

export function GuardianPopup(props: GuardianPopupProps) {
  // Log warning on component usage
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.warn("GuardianPopup: Please migrate to the new import path for future compatibility.");
    }
  }, []);

  return <NewGuardianPopup {...props} />;
}

// Re-export types for backward compatibility
export type { GuardianPopupProps, TransactionSummary, Verdict } from "./guardian/GuardianPopup";
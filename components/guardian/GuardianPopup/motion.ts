import { Variants } from "framer-motion";

export const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const containerVariants: Variants = {
  initial: { scale: 0.9, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  exit: { scale: 0.9, opacity: 0, y: 20 }
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

// Transition configurations
export const springTransition = {
  type: "spring" as const,
  duration: 0.5
};

export const delayedTransitions = {
  riskDial: { delay: 0.2 },
  verdict: { delay: 0.4 },
  details: { delay: 0.6 },
  actions: { delay: 0.8 }
};
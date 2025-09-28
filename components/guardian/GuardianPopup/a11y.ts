"use client";

import { useEffect, useRef } from "react";

/**
 * Hook to manage focus when dialog opens/closes
 */
export function useFocusManagement(isOpen: boolean) {
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const firstFocusableElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      
      // Focus the first primary action button after a short delay
      const timer = setTimeout(() => {
        const primaryAction = document.querySelector('[data-primary-action]') as HTMLElement;
        if (primaryAction) {
          primaryAction.focus();
          firstFocusableElement.current = primaryAction;
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // Return focus to the previously focused element when closing
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    }
  }, [isOpen]);
}

/**
 * Hook to handle escape key press
 */
export function useEscapeKey(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
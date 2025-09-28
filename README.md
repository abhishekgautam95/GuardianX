# GuardianX - Frontend

## Overview

GuardianX is an AI-powered wallet security tool for Solana that protects users from scams, rug-pulls, and unsafe transactions. The frontend displays transaction details, risk analysis, and recommendations from the AI engine in an interactive, visually appealing interface.

This repository contains the **Next.js frontend** implementation using TailwindCSS and shadcn/ui components.

---

## Features

* **GuardianPopup Component:** Shows transaction summary, AI-generated risk score, verdict, and explanation.
* **Risk Visualization:** Circular progress bar with traffic-light colors (Green, Yellow, Red) representing the risk score.
* **Interactive Buttons:** Proceed and Reject options for users to approve or block transactions.
* **Demo Page:** Simulate safe and scam transactions for testing the frontend.
* **Mobile Responsive:** Optimized layout for desktop and mobile devices.
* **Smooth Animations:** Framer Motion animations for risk score updates and popup appearance.

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** TailwindCSS
* **Components:** shadcn/ui
* **Animations:** Framer Motion
* **Mock API/Data:** Demo transaction data included

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd guardianx-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at [http://localhost:3000/demo](http://localhost:3000/demo) to view the demo page.

---

## Usage

1. Navigate to the `/demo` page.
2. Click on "Test Safe Transaction" or "Test Scam Transaction".
3. GuardianPopup will display the transaction details, AI risk score, verdict, and explanation.
4. Use the **Proceed** or **Reject** buttons to simulate user action.

---

## Project Structure

```
guardianx-frontend/
├── app/
│   ├── demo/page.tsx      # Demo page with mock transactions
│   └── layout.tsx         # App layout
├── components/
│   ├── guardian/
│   │   └── GuardianPopup/ # Modular popup component suite
│   │       ├── GuardianPopup.tsx  # Main orchestrating component
│   │       ├── RiskDial.tsx       # Circular risk visualization
│   │       ├── VerdictBadge.tsx   # Icon + badge + explanation
│   │       ├── TxDetails.tsx      # Transaction metadata list
│   │       ├── Actions.tsx        # Proceed/Reject buttons
│   │       ├── types.ts           # Domain types & interfaces
│   │       ├── motion.ts          # Animation variants
│   │       ├── a11y.ts            # Accessibility utilities
│   │       └── index.ts           # Barrel exports
│   └── guardian-popup.tsx # Deprecated (use new path above)
├── public/                # Static assets
├── styles/                # Global TailwindCSS styles
├── package.json
└── tailwind.config.js
```

## Component Architecture

GuardianX uses a modular component architecture for enhanced maintainability and testability:

### GuardianPopup Component Suite

- **Modular Design**: Each UI concern is separated into focused subcomponents
- **Accessibility First**: Proper ARIA roles, focus management, and keyboard navigation
- **Portal Rendering**: Uses React portals to avoid z-index conflicts
- **Type Safety**: Comprehensive TypeScript interfaces and domain types
- **Motion System**: Centralized animation variants with reduced-motion support
- **Future-Proof**: Scaffolded for features like model versioning and reasoning factors

### Usage

```typescript
import { GuardianPopup } from '@/components/guardian/GuardianPopup';

// The component maintains the same API as before
<GuardianPopup
  isOpen={isOpen}
  onClose={onClose}
  txSummary={txSummary}
  riskScore={riskScore}
  verdict={verdict}
  explanation={explanation}
  onProceed={onProceed}
  onReject={onReject}
/>
```

### Migration from Legacy Component

The old import path still works but is deprecated:
```typescript
// ❌ Deprecated - will show console warning in development
import { GuardianPopup } from '@/components/guardian-popup';

// ✅ Recommended - use the new modular path
import { GuardianPopup } from '@/components/guardian/GuardianPopup';
```

---

## Customization

* Update mock transaction data in `/app/demo/page.tsx` to test different scenarios.
* Adjust color thresholds or animation styles in `GuardianPopup.tsx` as needed.
* Connect to backend API by replacing mock data with API calls.

---

## License

This project is open-source and free to use for educational and hackathon purposes.

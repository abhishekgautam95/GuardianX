import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GuardianX - AI-Powered Solana Wallet Security',
  description: 'Next-generation AI security for Solana wallets. Protect against scams, rugpulls, and malicious contracts with real-time transaction analysis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
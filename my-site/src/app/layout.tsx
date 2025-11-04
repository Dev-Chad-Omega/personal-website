import React from "react";
import "./globals.css";

export const metadata = {
  title: "Dev Patel - Personal Site",
  description: "Stripe-inspired portfolio for Dave Patel, highlighting applied AI and analytics storytelling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

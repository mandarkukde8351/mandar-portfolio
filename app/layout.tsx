import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mandar Kukde | Pharmaceutical Scientist & Healthcare Strategist",
  description:
    "Dual-degree M.Pharm + MBA candidate at NMIMS. Patent holder, national award winner, and pharmaceutical scientist bridging advanced drug delivery science with healthcare strategy.",
  keywords: [
    "Mandar Kukde",
    "NMIMS",
    "M.Pharm",
    "MBA Pharmaceutics",
    "Drug Delivery",
    "Pharmaceutical Sciences",
    "Medical Affairs",
    "Healthcare Strategy",
  ],
  authors: [{ name: "Mandar Ravi Kukde" }],
  creator: "Mandar Ravi Kukde",
  openGraph: {
    title: "Mandar Kukde | Pharmaceutical Scientist & Healthcare Strategist",
    description:
      "Dual-degree M.Pharm + MBA at NMIMS. Patent holder, national award winner, vesicular drug delivery researcher.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8FAFC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

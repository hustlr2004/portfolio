import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["800"]
});

export const metadata: Metadata = {
  title: "Gourav Singh | Robotics & AI Engineer",
  description:
    "A dark developer-tool portfolio for a Robotics & AI engineer building AI systems and backend infrastructure."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${syne.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

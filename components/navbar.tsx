"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "mailto:gourav@example.com", label: "Contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b-[0.5px] border-line bg-void/[0.9] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[12px]"
          : "border-b-[0.5px] border-transparent bg-void/[0.18] backdrop-blur-[12px]"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="#home" className="font-mono text-sm font-semibold tracking-[0.22em] text-white">
          GOURAV.SYS
        </Link>
        <div className="flex items-center gap-1 rounded-full border-[0.5px] border-line bg-white/[0.035] p-1 backdrop-blur-[12px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400 transition hover:bg-white/[0.06] hover:text-accent-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="UniTech" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold gradient-text">UniTech</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Fitur
            </Link>
            <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tentang
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Harga
            </Link>
          </div>

          {/* Dashboard Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-full gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Buka Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Fitur</Link>
            <Link href="/#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Tentang</Link>
            <Link href="/#pricing" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Harga</Link>
            <hr className="border-border" />
            <Link href="/dashboard" className="block w-full text-center px-5 py-2.5 text-sm font-medium text-white rounded-full gradient-bg">
              Buka Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
              {t("nav_features")}
            </Link>
            <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav_about")}
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav_pricing")}
            </Link>
          </div>

          {/* Desktop Dashboard Button & Switchers */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-border bg-muted text-muted-foreground hover:text-foreground cursor-pointer hover:bg-muted/80 transition-colors select-none"
              title={language === "id" ? "Switch to English" : "Ubah ke Bahasa Indonesia"}
            >
              🌐 {language.toUpperCase()}
            </button>

            {/* Dark Mode Switcher */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border bg-muted text-muted-foreground hover:text-foreground cursor-pointer hover:bg-muted/80 transition-colors select-none"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <Link
              href="/dashboard"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-full gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              {t("nav_dashboard")}
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
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground">{t("nav_features")}</Link>
            <Link href="/#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground">{t("nav_about")}</Link>
            <Link href="/#pricing" className="block text-sm font-medium text-muted-foreground hover:text-foreground">{t("nav_pricing")}</Link>
            <hr className="border-border" />
            <div className="flex gap-2">
              <button 
                onClick={toggleLanguage}
                className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full border border-border bg-muted flex items-center justify-center gap-2 select-none"
              >
                🌐 {language === "id" ? "ID" : "EN"}
              </button>
              <button 
                onClick={toggleTheme}
                className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full border border-border bg-muted flex items-center justify-center select-none"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
            <Link href="/dashboard" className="block w-full text-center px-5 py-2.5 text-sm font-medium text-white rounded-full gradient-bg">
              {t("nav_dashboard")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

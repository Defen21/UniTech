"use client";

import { Bell, Search, Menu } from "lucide-react";
import Image from "next/image";

export default function DashboardTopBar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border h-16 flex items-center px-4 lg:px-8 gap-4">
      {/* Mobile menu trigger */}
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-muted" aria-label="Open menu">
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari fitur, materi, lomba..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell size={18} className="text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
            FA
          </div>
        </div>
      </div>
    </header>
  );
}

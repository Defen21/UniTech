"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardTopBar from "@/components/DashboardTopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Sidebar - responsive */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Overlay backdrop for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopBar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}


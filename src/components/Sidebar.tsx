"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Brain,
  GraduationCap,
  ShoppingBag,
  Trophy,
  MessageCircle,
  User,
  LogOut,
  Settings,
  Crown,
} from "lucide-react";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/unimatch", label: "UniMatch", icon: Users },
  { href: "/uniguide", label: "UniGuide AI", icon: Brain },
  { href: "/unimentor", label: "UniMentor Hub", icon: GraduationCap },
  { href: "/student-shop", label: "StudentShop", icon: ShoppingBag },
  { href: "/unicompete", label: "UniCompete", icon: Trophy },
  { href: "/community", label: "Community", icon: MessageCircle },
];

const bottomItems = [
  { href: "/profile", label: "Profil Saya", icon: User },
  { href: "/profile", label: "Pengaturan", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-border h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 h-16 border-b border-border">
        <Image src="/logo.jpeg" alt="UniTech" width={32} height={32} className="rounded-lg" />
        <span className="text-lg font-bold gradient-text">UniTech</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Menu Utama
        </p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                isActive
                  ? "bg-gradient-to-r from-primary/10 to-accent/5 text-primary border-l-3 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon size={18} className={isActive ? "text-primary" : ""} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Premium Card */}
      <div className="px-4 pb-4">
        <div className="rounded-xl p-4 gradient-bg text-white">
          <div className="flex items-center gap-2 mb-2">
            <Crown size={16} />
            <span className="text-sm font-semibold">Upgrade Premium</span>
          </div>
          <p className="text-xs opacity-90 mb-3">
            Dapatkan kuota AI lebih besar, bank soal eksklusif, dan fitur premium lainnya.
          </p>
          <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-medium transition-colors">
            Upgrade Sekarang
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border px-3 py-3 space-y-1">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <item.icon size={16} />
            {item.label}
          </Link>
        ))}
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 w-full transition-colors">
          <LogOut size={16} />
          Keluar
        </button>
      </div>
    </aside>
  );
}

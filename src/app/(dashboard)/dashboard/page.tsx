"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users, Brain, GraduationCap, ShoppingBag, Trophy, MessageCircle,
  ArrowRight, Clock, Star, Zap
} from "lucide-react";

const quickActions = [
  { icon: Users, labelKey: "dash_action_match", href: "/unimatch", color: "bg-blue-500" },
  { icon: Brain, labelKey: "dash_action_guide", href: "/uniguide", color: "bg-purple-500" },
  { icon: GraduationCap, labelKey: "dash_action_mentor", href: "/unimentor", color: "bg-teal-500" },
  { icon: ShoppingBag, labelKey: "dash_action_shop", href: "/student-shop", color: "bg-orange-500" },
  { icon: Trophy, labelKey: "dash_action_compete", href: "/unicompete", color: "bg-yellow-500" },
  { icon: MessageCircle, labelKey: "dash_action_community", href: "/community", color: "bg-indigo-500" },
];

const recentCompetitions = [
  { title: "Gemastik 2026 - Divisi Pemrograman", deadline: "25 Jun 2026", tag: "nasional", tagColor: "bg-red-100 text-red-700" },
  { title: "UI/UX Design Competition - DSC Tel-U", deadline: "30 Jun 2026", tag: "kampus", tagColor: "bg-blue-100 text-blue-700" },
  { title: "Hackathon Smart Campus 2026", deadline: "15 Jul 2026", tag: "nasional", tagColor: "bg-red-100 text-red-700" },
];

const upcomingMentoring = [
  { title: "Algoritma & Pemrograman - Graph", tutor: "Andi R. (IF'23)", time: "Hari ini, 19:00", participants: 8 },
  { title: "Basis Data - Normalisasi", tutor: "Siti N. (IF'22)", time: "Besok, 14:00", participants: 12 },
];

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t("dash_hello").replace("{name}", "Fahtur")}</h1>
          <p className="text-muted-foreground text-sm mt-1">{t("dash_welcome")}</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-sm">
          <Zap size={14} />
          <span className="font-medium">Free Plan</span>
          <Link href="/profile" className="text-xs underline ml-1">{t("pricing_premium_cta").replace("Upgrade ", "")}</Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {quickActions.map((a) => (
          <Link
            key={a.labelKey}
            href={a.href}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-border card-hover"
          >
            <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center`}>
              <a.icon size={18} className="text-white" />
            </div>
            <span className="text-xs font-medium">{t(a.labelKey)}</span>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-xl bg-white border border-border p-5">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">{t("dash_stats_title")}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">{t("dash_stats_ai")}</span>
                <span className="text-sm font-semibold">3/5</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="gradient-bg h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{t("dash_stats_team")}</span>
                <span className="text-sm font-semibold">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{t("dash_stats_mentor")}</span>
                <span className="text-sm font-semibold">7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{t("dash_stats_compete")}</span>
                <span className="text-sm font-semibold">1</span>
              </div>
            </div>
          </div>

          {/* Premium CTA */}
          <div className="rounded-xl gradient-bg p-5 text-white">
            <h3 className="font-semibold flex items-center gap-2"><Star size={16} /> {t("dash_premium_upgrade")}</h3>
            <p className="text-sm opacity-90 mt-2">{t("dash_premium_desc")}</p>
            <button className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Rp 29.000/{t("pricing_populer") === "Populer" ? "bulan" : "month"}
            </button>
          </div>
        </div>

        {/* Competitions */}
        <div className="lg:col-span-1 rounded-xl bg-white border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">{t("dash_comp_title")}</h3>
            <Link href="/unicompete" className="text-xs text-primary hover:underline flex items-center gap-1">
              {t("dash_see_all")} <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {recentCompetitions.map((c) => (
              <div key={c.title} className="p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-medium leading-tight">{c.title}</h4>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${c.tagColor}`}>{t("dash_tag_" + c.tag)}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Clock size={12} /> Deadline: {c.deadline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentoring */}
        <div className="lg:col-span-1 rounded-xl bg-white border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">{t("dash_ment_title")}</h3>
            <Link href="/unimentor" className="text-xs text-primary hover:underline flex items-center gap-1">
              {t("dash_see_all")} <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingMentoring.map((m) => {
              const displayTime = m.time
                .replace("Hari ini", t("dash_today"))
                .replace("Besok", t("dash_tomorrow"));
              return (
                <div key={m.title} className="p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                  <h4 className="text-sm font-medium">{m.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{t("dash_by")} {m.tutor}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-primary font-medium">{displayTime}</span>
                    <span className="text-xs text-muted-foreground">{m.participants} {t("dash_participants")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

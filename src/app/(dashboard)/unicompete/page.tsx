"use client";

import { useState } from "react";
import { Trophy, Search, Calendar, Users, Clock, Bookmark, Sparkles, Code, Palette, Shield, BarChart3, Lightbulb, Rocket } from "lucide-react";

const tabs = ["Semua Lomba", "Diikuti", "Arsip"];
const categories = ["Semua", "Pemrograman", "UI/UX", "Business Plan", "Data Science", "Cyber Security", "IoT"];

interface Competition {
  title: string;
  organizer: string;
  deadline: string;
  prize: string;
  tag: string;
  tagColor: string;
  participants: number;
  maxTeam: number;
  poster: {
    gradient: string;
    bgPattern: string;
    icon: string;
    accent: string;
    decoColor: string;
    year: string;
    badge: string;
  };
}

const competitions: Competition[] = [
  {
    title: "Gemastik 2026 - Divisi Pemrograman",
    organizer: "Kemendikbud Ristek",
    deadline: "25 Juni 2026",
    prize: "Rp 50.000.000",
    tag: "Nasional", tagColor: "bg-red-100 text-red-700",
    participants: 12, maxTeam: 3,
    poster: {
      gradient: "from-red-600 via-orange-500 to-yellow-500",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)",
      icon: "💻", accent: "bg-white/20", decoColor: "white",
      year: "2026", badge: "🏆 NASIONAL",
    },
  },
  {
    title: "UI/UX Design Competition - DSC Tel-U",
    organizer: "Developer Student Club",
    deadline: "30 Juni 2026",
    prize: "Rp 10.000.000",
    tag: "Kampus", tagColor: "bg-blue-100 text-blue-700",
    participants: 8, maxTeam: 4,
    poster: {
      gradient: "from-violet-600 via-purple-500 to-pink-500",
      bgPattern: "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.12) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%)",
      icon: "🎨", accent: "bg-white/20", decoColor: "white",
      year: "2026", badge: "🎨 DESIGN",
    },
  },
  {
    title: "Hackathon Smart Campus 2026",
    organizer: "Bandung Techno Park",
    deadline: "15 Juli 2026",
    prize: "Rp 30.000.000",
    tag: "Nasional", tagColor: "bg-red-100 text-red-700",
    participants: 5, maxTeam: 5,
    poster: {
      gradient: "from-emerald-600 via-teal-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.06) 0%, transparent 50%)",
      icon: "⚡", accent: "bg-white/20", decoColor: "white",
      year: "2026", badge: "🚀 HACKATHON",
    },
  },
  {
    title: "CTF Cyber Security Championship",
    organizer: "Cyber Security Forum",
    deadline: "20 Juli 2026",
    prize: "Rp 25.000.000",
    tag: "Nasional", tagColor: "bg-red-100 text-red-700",
    participants: 3, maxTeam: 4,
    poster: {
      gradient: "from-gray-900 via-slate-800 to-cyan-900",
      bgPattern: "repeating-linear-gradient(0deg, rgba(0,255,200,0.03) 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(0,255,200,0.03) 0px, transparent 1px, transparent 20px)",
      icon: "🛡️", accent: "bg-cyan-500/20", decoColor: "#22d3ee",
      year: "2026", badge: "🔒 SECURITY",
    },
  },
  {
    title: "Business Plan Competition - FE Tel-U",
    organizer: "BEM Fakultas Ekonomi",
    deadline: "1 Agustus 2026",
    prize: "Rp 15.000.000",
    tag: "Kampus", tagColor: "bg-blue-100 text-blue-700",
    participants: 0, maxTeam: 3,
    poster: {
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgPattern: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.08) 0%, transparent 40%)",
      icon: "📊", accent: "bg-white/20", decoColor: "white",
      year: "2026", badge: "💼 BUSINESS",
    },
  },
  {
    title: "Data Science Challenge 2026",
    organizer: "GoTo Financial",
    deadline: "10 Agustus 2026",
    prize: "Rp 75.000.000",
    tag: "Nasional", tagColor: "bg-red-100 text-red-700",
    participants: 0, maxTeam: 3,
    poster: {
      gradient: "from-blue-700 via-indigo-600 to-purple-700",
      bgPattern: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.1) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(255,255,255,0.06) 0%, transparent 50%)",
      icon: "🧠", accent: "bg-white/20", decoColor: "white",
      year: "2026", badge: "📈 DATA SCIENCE",
    },
  },
];

// ============ POSTER COMPONENT ============
function CompetitionPoster({ poster, title }: { poster: Competition["poster"]; title: string }) {
  return (
    <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br ${poster.gradient} h-44 sm:h-48`}>
      {/* Background pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: poster.bgPattern }} />

      {/* Decorative shapes */}
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10" style={{ background: poster.decoColor }} />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-8" style={{ background: poster.decoColor, opacity: 0.08 }} />
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-10" style={{ background: poster.decoColor }} />
      <div className="absolute bottom-8 right-12 w-6 h-6 rotate-45 opacity-15" style={{ background: poster.decoColor }} />
      <div className="absolute top-12 left-8 w-4 h-4 rotate-12 opacity-20" style={{ background: poster.decoColor }} />

      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200" fill="none">
        <line x1="0" y1="200" x2="400" y2="0" stroke={poster.decoColor} strokeWidth="1" />
        <line x1="50" y1="200" x2="400" y2="50" stroke={poster.decoColor} strokeWidth="0.5" />
        <line x1="0" y1="150" x2="350" y2="0" stroke={poster.decoColor} strokeWidth="0.5" />
      </svg>

      {/* Badge */}
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider">
          {poster.badge}
        </span>
      </div>

      {/* Year watermark */}
      <div className="absolute -right-2 top-1/2 -translate-y-1/2">
        <span className="text-[72px] font-black text-white/[0.07] leading-none select-none">{poster.year}</span>
      </div>

      {/* Main icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`w-16 h-16 ${poster.accent} backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/10`}>
          {poster.icon}
        </div>
      </div>

      {/* Decorative dots grid */}
      <div className="absolute bottom-3 left-3 grid grid-cols-5 gap-1 opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full" style={{ background: poster.decoColor }} />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

// ============ MAIN COMPONENT ============
export default function UniCompetePage() {
  const [activeTab, setActiveTab] = useState("Semua Lomba");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());

  const toggleBookmark = (title: string) => {
    setBookmarked(prev => {
      const n = new Set(prev);
      n.has(title) ? n.delete(title) : n.add(title);
      return n;
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">UniCompete</h1>
          <p className="text-muted-foreground text-sm mt-1">Temukan lomba, bentuk tim, dan raih prestasi bersama</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity">
          <Trophy size={16} /> Buat Lomba
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Categories */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari lomba..." className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <select className="px-4 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30">
          {categories.map((cat) => (<option key={cat}>{cat}</option>))}
        </select>
      </div>

      {/* Competitions with Posters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {competitions.map((c) => (
          <div key={c.title} className="card-hover rounded-xl bg-white border border-border overflow-hidden group">
            {/* Poster Banner */}
            <CompetitionPoster poster={c.poster} title={c.title} />

            {/* Card Body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${c.tagColor}`}>{c.tag}</span>
                    <span className="text-[10px] text-muted-foreground">{c.organizer}</span>
                  </div>
                  <h3 className="font-semibold text-sm leading-snug">{c.title}</h3>
                </div>
                <button onClick={() => toggleBookmark(c.title)} className="p-1.5 hover:bg-muted rounded-lg transition-colors shrink-0">
                  <Bookmark size={16} className={bookmarked.has(c.title) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"} />
                </button>
              </div>

              <div className="space-y-2 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-red-400 shrink-0" />
                  <span>Deadline: <strong className="text-foreground">{c.deadline}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy size={12} className="text-yellow-500 shrink-0" />
                  <span>Total Hadiah: <strong className="text-foreground">{c.prize}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={12} className="text-blue-400 shrink-0" />
                  <span>Tim terdaftar: <strong>{c.participants}</strong> (Max {c.maxTeam} anggota/tim)</span>
                </div>
              </div>

              {/* Progress bar for team slots */}
              <div className="mb-4">
                <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Kuota Tim</span>
                  <span>{c.participants}/{c.maxTeam * 3}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full gradient-bg rounded-full transition-all" style={{ width: `${Math.min((c.participants / (c.maxTeam * 3)) * 100, 100)}%` }} />
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 text-sm font-medium text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity">
                  Daftar Lomba
                </button>
                <button className="py-2.5 px-3 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors flex items-center gap-1">
                  <Users size={14} /> Cari Tim
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { GraduationCap, Search, Calendar, Clock, Star, Users, BookOpen, Video } from "lucide-react";

const tabs = ["Jadwal Mentoring", "Arsip Materi", "Bank Soal"];

const mentors = [
  { name: "Andi Rahman", subject: "Algoritma & Pemrograman", rating: 4.9, sessions: 45, year: "IF'21", status: "Online" },
  { name: "Siti Nurhaliza", subject: "Basis Data", rating: 4.8, sessions: 38, year: "IF'22", status: "Offline" },
  { name: "Budi Santoso", subject: "Struktur Data", rating: 4.7, sessions: 52, year: "IF'20", status: "Online" },
  { name: "Dewi Lestari", subject: "Pemrograman Web", rating: 4.9, sessions: 30, year: "IF'21", status: "Online" },
];

const schedule = [
  { title: "Graph Algorithms - BFS & DFS", tutor: "Andi R.", date: "16 Jun 2026", time: "19:00 - 20:30", participants: 8, max: 15, type: "Online" },
  { title: "Normalisasi Database (1NF-3NF)", tutor: "Siti N.", date: "17 Jun 2026", time: "14:00 - 15:30", participants: 12, max: 20, type: "Offline" },
  { title: "Binary Search Tree Implementation", tutor: "Budi S.", date: "18 Jun 2026", time: "16:00 - 17:30", participants: 6, max: 10, type: "Online" },
  { title: "React Hooks Deep Dive", tutor: "Dewi L.", date: "19 Jun 2026", time: "19:00 - 20:30", participants: 15, max: 25, type: "Online" },
];

const materials = [
  { title: "Modul Graf - Algoritma & Aplikasi", course: "Algoritma & Pemrograman", type: "PDF", downloads: 234 },
  { title: "Ringkasan Normalisasi Basis Data", course: "Basis Data", type: "PDF", downloads: 189 },
  { title: "Latihan Soal BST + Kunci Jawaban", course: "Struktur Data", type: "PDF", downloads: 312 },
  { title: "Tutorial React State Management", course: "Pemrograman Web", type: "Video", downloads: 156 },
];

export default function UniMentorPage() {
  const [activeTab, setActiveTab] = useState("Jadwal Mentoring");

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">UniMentor Hub</h1>
        <p className="text-muted-foreground text-sm mt-1">Mentoring sebaya dengan jadwal terstruktur dan arsip materi pembelajaran</p>
      </div>

      {/* Top Mentors */}
      <div>
        <h2 className="text-sm font-semibold mb-3">Tutor Populer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {mentors.map((m) => (
            <div key={m.name} className="card-hover rounded-xl bg-card border border-border p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{m.name}</h3>
                  <p className="text-xs text-muted-foreground">{m.year}</p>
                </div>
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${m.status === "Online" ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"}`}>
                  {m.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{m.subject}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500" /> {m.rating}</span>
                <span className="text-muted-foreground">{m.sessions} sesi</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted rounded-lg p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Schedule Tab */}
      {activeTab === "Jadwal Mentoring" && (
        <div className="space-y-3">
          {schedule.map((s) => (
            <div key={s.title} className="card-hover rounded-xl bg-card border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.type === "Online" ? "bg-blue-500/10" : "bg-orange-500/10"}`}>
                {s.type === "Online" ? <Video size={18} className="text-blue-500" /> : <Users size={18} className="text-orange-500" />}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">oleh {s.tutor}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {s.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {s.time}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {s.participants}/{s.max}</span>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity shrink-0">
                {s.participants >= s.max ? "Penuh" : "Daftar"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Materials Tab */}
      {activeTab === "Arsip Materi" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {materials.map((m) => (
            <div key={m.title} className="card-hover rounded-xl bg-card border border-border p-5">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${m.type === "PDF" ? "bg-red-500/10" : "bg-purple-500/10"}`}>
                  {m.type === "PDF" ? <BookOpen size={18} className="text-red-500" /> : <Video size={18} className="text-purple-500" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{m.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.course}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>{m.type}</span>
                    <span>{m.downloads} unduhan</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bank Soal Tab */}
      {activeTab === "Bank Soal" && (
        <div className="rounded-xl bg-card border border-border p-8 text-center">
          <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
            <BookOpen size={24} className="text-white" />
          </div>
          <h3 className="font-semibold mb-2">Bank Soal Eksklusif</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
            Akses kumpulan soal UTS/UAS tahun sebelumnya beserta pembahasan. Fitur ini tersedia untuk pengguna Premium.
          </p>
          <button className="px-6 py-2.5 text-sm font-medium text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity">
            Upgrade ke Premium
          </button>
        </div>
      )}
    </div>
  );
}

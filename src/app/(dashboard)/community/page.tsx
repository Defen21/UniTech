"use client";

import { useState } from "react";
import { MessageCircle, Search, Users, Hash, TrendingUp, Plus, Heart, MessageSquare, Bookmark } from "lucide-react";

const channels = [
  { name: "Pemrograman Kompetitif", members: 245, messages: 1230, icon: "💻" },
  { name: "UI/UX Design", members: 189, messages: 890, icon: "🎨" },
  { name: "Data Science & AI", members: 312, messages: 2100, icon: "🤖" },
  { name: "Web Development", members: 278, messages: 1567, icon: "🌐" },
  { name: "Cyber Security", members: 156, messages: 678, icon: "🔒" },
  { name: "Game Development", members: 134, messages: 543, icon: "🎮" },
  { name: "Entrepreneurship", members: 201, messages: 987, icon: "💼" },
  { name: "General Discussion", members: 456, messages: 3421, icon: "💬" },
];

const posts = [
  {
    author: "Rizky A.",
    channel: "Pemrograman Kompetitif",
    content: "Ada yang punya referensi soal Dynamic Programming untuk persiapan Gemastik? Saya sudah coba solve beberapa soal di Codeforces tapi masih stuck di pattern tertentu.",
    likes: 24,
    replies: 8,
    time: "2 jam lalu",
    avatar: "R",
  },
  {
    author: "Putri M.",
    channel: "UI/UX Design",
    content: "Sharing hasil riset user untuk proyek desain aplikasi kampus. Ternyata mahasiswa lebih prefer dark mode dan navigasi bottom sheet. Ada insight lain?",
    likes: 42,
    replies: 15,
    time: "4 jam lalu",
    avatar: "P",
  },
  {
    author: "Dimas S.",
    channel: "Data Science & AI",
    content: "Baru selesai bikin model prediksi nilai mata kuliah pakai Random Forest. Accuracy-nya 87%. Mau sharing code dan dataset-nya kalau ada yang tertarik.",
    likes: 56,
    replies: 23,
    time: "6 jam lalu",
    avatar: "D",
  },
  {
    author: "Anisa R.",
    channel: "Entrepreneurship",
    content: "Tips jualan makanan di kampus: fokus di packaging yang instagramable, harga di bawah 20rb, dan sediakan sistem pre-order. Lumayan bisa untung 30-40% per hari.",
    likes: 78,
    replies: 31,
    time: "8 jam lalu",
    avatar: "A",
  },
];

export default function CommunityPage() {
  const [activeView, setActiveView] = useState<"feed" | "channels">("feed");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Community Hub</h1>
          <p className="text-muted-foreground text-sm mt-1">Diskusi, berbagi, dan terhubung dengan sesama mahasiswa</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity">
          <Plus size={16} /> Buat Post
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cari diskusi, channel, atau topik..."
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* View Toggle */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveView("feed")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeView === "feed" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"}`}
        >
          Feed
        </button>
        <button
          onClick={() => setActiveView("channels")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeView === "channels" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"}`}
        >
          Channels
        </button>
      </div>

      {activeView === "feed" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feed */}
          <div className="lg:col-span-2 space-y-4">
            {posts.map((p) => (
              <div key={p.content} className="card-hover rounded-xl bg-white border border-border p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
                    {p.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{p.author}</h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Hash size={10} /> {p.channel}</span>
                      <span>&middot;</span>
                      <span>{p.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">{p.content}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Heart size={14} /> {p.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageSquare size={14} /> {p.replies}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Bookmark size={14} /> Simpan
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trending */}
          <div className="space-y-4">
            <div className="rounded-xl bg-white border border-border p-5">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" /> Trending
              </h3>
              <div className="space-y-3">
                {["#Gemastik2026", "#UTSPrep", "#UIUXChallenge", "#HackathonSmart", "#KopiKampus"].map((tag) => (
                  <div key={tag} className="text-sm">
                    <span className="text-primary font-medium">{tag}</span>
                    <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 100) + 20} posts</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white border border-border p-5">
              <h3 className="font-semibold text-sm mb-4">Komunitas Aktif</h3>
              <div className="space-y-2">
                {channels.slice(0, 4).map((ch) => (
                  <div key={ch.name} className="flex items-center gap-2 text-sm">
                    <span>{ch.icon}</span>
                    <span className="flex-1 truncate">{ch.name}</span>
                    <span className="text-xs text-muted-foreground">{ch.members}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((ch) => (
            <div key={ch.name} className="card-hover rounded-xl bg-white border border-border p-5 cursor-pointer">
              <div className="text-3xl mb-3">{ch.icon}</div>
              <h3 className="text-sm font-semibold">{ch.name}</h3>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Users size={12} /> {ch.members}</span>
                <span className="flex items-center gap-1"><MessageCircle size={12} /> {ch.messages}</span>
              </div>
              <button className="mt-4 w-full py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                Gabung
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

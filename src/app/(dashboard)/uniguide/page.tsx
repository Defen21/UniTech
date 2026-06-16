"use client";

import { useState } from "react";
import { Brain, Send, BookOpen, FileText, Lightbulb, Clock, Sparkles, Crown } from "lucide-react";

const suggestions = [
  "Buatkan roadmap belajar untuk UTS Algoritma & Pemrograman",
  "Jelaskan konsep Normalisasi Basis Data dengan contoh",
  "Rekomendasikan materi untuk persiapan Gemastik divisi Pemrograman",
  "Rangkum materi Machine Learning dari modul minggu 1-5",
];

const chatHistory = [
  { role: "user", content: "Bagaimana cara belajar Dynamic Programming yang efektif?" },
  { role: "ai", content: "Dynamic Programming (DP) adalah teknik pemecahan masalah dengan memecah menjadi sub-problem yang lebih kecil dan menyimpan hasilnya. Berikut roadmap yang saya rekomendasikan berdasarkan silabus matkul Algoritma:\n\n1. **Pahami konsep dasar** - Mulai dari Fibonacci (memoization vs tabulation)\n2. **Latihan soal klasik** - Knapsack, LCS, LIS\n3. **Variasi pattern** - Interval DP, Tree DP, Bitmask DP\n\nSaya menemukan 3 modul relevan dari LMS kamu dan 5 soal latihan UTS tahun lalu. Mau saya tunjukkan?" },
];

export default function UniGuidePage() {
  const [input, setInput] = useState("");

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="text-purple-500" size={24} />
            UniGuide AI
          </h1>
          <p className="text-muted-foreground text-sm mt-1">AI companion akademik yang memahami kurikulum kampusmu</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm">
          <Sparkles size={14} />
          <span className="font-medium">3/5 queries</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto rounded-xl bg-white border border-border p-6 space-y-6 mb-4">
        {chatHistory.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] ${msg.role === "user" ? "order-2" : ""}`}>
              {msg.role === "ai" && (
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <Brain size={12} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">UniGuide AI</span>
                </div>
              )}
              <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "gradient-bg text-white"
                  : "bg-gray-50 border border-border"
              }`}>
                <p className="whitespace-pre-line">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-3">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setInput(s)}
            className="shrink-0 px-3 py-2 rounded-lg bg-white border border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            <Lightbulb size={12} className="inline mr-1" />
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tanyakan apa saja tentang materi kuliah, roadmap belajar, atau soal latihan..."
          className="w-full pl-4 pr-12 py-3.5 text-sm bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg gradient-bg text-white hover:opacity-90 transition-opacity">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

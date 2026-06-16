"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users, Brain, GraduationCap, ShoppingBag, Trophy, MessageCircle,
  ArrowRight, CheckCircle, Star, Sparkles
} from "lucide-react";

const features = [
  {
    icon: Users,
    name: "UniMatch",
    descKey: "feature_unimatch_desc",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    name: "UniGuide AI",
    descKey: "feature_uniguide_desc",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    name: "UniMentor Hub",
    descKey: "feature_unimentor_desc",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: ShoppingBag,
    name: "StudentShop",
    descKey: "feature_studentshop_desc",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Trophy,
    name: "UniCompete",
    descKey: "feature_unicompete_desc",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    name: "Community Hub",
    descKey: "feature_community_desc",
    color: "from-indigo-500 to-purple-500",
  },
];

const stats = [
  { value: "4.000+", labelKey: "stats_mhs" },
  { value: "150+", labelKey: "stats_tim" },
  { value: "50+", labelKey: "stats_lomba" },
  { value: "200+", labelKey: "stats_tutor" },
];

const testimonials = [
  {
    name: "Aditya Pratama",
    roleKey: "testi_1_role",
    univ: "Telkom University",
    quoteKey: "testi_1_quote",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Nadia Putri",
    roleKey: "testi_2_role",
    univ: "Telkom University",
    quoteKey: "testi_2_quote",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 4
  },
  {
    name: "Fikri Ramadhan",
    roleKey: "testi_3_role",
    univ: "Telkom University",
    quoteKey: "testi_3_quote",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles size={14} />
                {t("hero_badge")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {t("hero_title_1")}{" "}
                <span className="gradient-text">{t("hero_title_2")}</span>{" "}
                {t("hero_title_3")}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("hero_desc")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="px-8 py-3.5 text-sm font-semibold text-white rounded-full gradient-bg hover:opacity-90 transition-opacity shadow-xl shadow-primary/25 flex items-center gap-2"
                >
                  {t("hero_cta_1")} <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#features"
                  className="px-8 py-3.5 text-sm font-semibold text-foreground rounded-full border border-border hover:bg-muted transition-colors"
                >
                  {t("hero_cta_2")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.labelKey} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <p className="text-sm text-muted-foreground mt-1">{t(s.labelKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                {t("features_title_1")} <span className="gradient-text">{t("features_title_2")}</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t("features_desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.name} className="card-hover rounded-2xl border border-border p-6 bg-white">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                    <f.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
                  <Link href="/dashboard" className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline">
                    {t("features_try")} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">{t("how_title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("how_desc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", titleKey: "how_step_1_title", descKey: "how_step_1_desc" },
                { step: "2", titleKey: "how_step_2_title", descKey: "how_step_2_desc" },
                { step: "3", titleKey: "how_step_3_title", descKey: "how_step_3_desc" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">{t("pricing_title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("pricing_desc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Free */}
              <div className="rounded-2xl border border-border p-8 bg-white">
                <h3 className="text-lg font-semibold">{t("pricing_free")}</h3>
                <p className="text-3xl font-bold mt-2">Rp 0<span className="text-sm font-normal text-muted-foreground">/bulan</span></p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["pricing_free_feat_1", "pricing_free_feat_2", "pricing_free_feat_3", "pricing_free_feat_4"].map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 shrink-0" /> {t(key)}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-8 block w-full text-center py-3 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors">
                  {t("pricing_free_cta")}
                </Link>
              </div>
              {/* Premium */}
              <div className="rounded-2xl border-2 border-primary p-8 bg-white relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-semibold">
                  {t("pricing_populer")}
                </div>
                <h3 className="text-lg font-semibold">Premium Hub</h3>
                <p className="text-3xl font-bold mt-2">Rp 29K<span className="text-sm font-normal text-muted-foreground">/bulan</span></p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "pricing_premium_feat_1",
                    "pricing_premium_feat_2",
                    "pricing_premium_feat_3",
                    "pricing_premium_feat_4",
                    "pricing_premium_feat_5",
                    "pricing_premium_feat_6",
                    "pricing_premium_feat_7"
                  ].map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" /> {t(key)}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-8 block w-full text-center py-3 rounded-full gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                  {t("pricing_premium_cta")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / What They Said */}
        <section id="testimonials" className="py-20 bg-gray-50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                {t("testimonials_title_1")}<span className="gradient-text">{t("testimonials_title_2")}</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t("testimonials_desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((tItem, idx) => (
                <div key={idx} className="card-hover rounded-2xl border border-border p-8 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className={i < tItem.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
                      &quot;{t(tItem.quoteKey)}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tItem.avatar} alt={tItem.name} className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{tItem.name}</h4>
                      <p className="text-xs text-muted-foreground">{t(tItem.roleKey)}</p>
                      <p className="text-[10px] text-primary font-medium">{tItem.univ}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-bg">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold">{t("cta_title")}</h2>
            <p className="mt-4 opacity-90">
              {t("cta_desc")}
            </p>
            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("cta_btn")} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users, Brain, GraduationCap, ShoppingBag, Trophy, MessageCircle,
  ArrowRight, CheckCircle, Star, Zap, Shield, Sparkles
} from "lucide-react";

const features = [
  {
    icon: Users,
    name: "UniMatch",
    desc: "Temukan rekan tim lomba yang tepat berdasarkan minat, skill, dan kebutuhan role tim kamu.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    name: "UniGuide AI",
    desc: "AI companion akademik yang membantu menyusun roadmap belajar dan merekomendasikan materi relevan.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    name: "UniMentor Hub",
    desc: "Platform mentoring sebaya dengan jadwal terstruktur, arsip materi, dan umpan balik tutor.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: ShoppingBag,
    name: "StudentShop",
    desc: "Marketplace khusus mahasiswa untuk jual-beli makanan, produk, dan jasa dengan biaya admin rendah.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Trophy,
    name: "UniCompete",
    desc: "Platform informasi, promosi, dan penyelenggaraan lomba dengan arsip proposal terpusat.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    name: "Community Hub",
    desc: "Forum diskusi, chat room per kategori, dan ruang komunitas untuk UKM dan organisasi.",
    color: "from-indigo-500 to-purple-500",
  },
];

const stats = [
  { value: "4.000+", label: "Mahasiswa Aktif" },
  { value: "150+", label: "Tim Terbentuk" },
  { value: "50+", label: "Lomba Tersedia" },
  { value: "200+", label: "Tutor Sebaya" },
];

export default function LandingPage() {
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
                Platform Ekosistem Mahasiswa #1
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Satu Platform untuk{" "}
                <span className="gradient-text">Belajar, Berkolaborasi,</span>{" "}
                dan Berkembang
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                UniTech menghubungkan mahasiswa dalam ekosistem digital terpadu: cari tim lomba, 
                belajar dengan AI, mentoring sebaya, hingga buka toko digital — semua dalam satu platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="px-8 py-3.5 text-sm font-semibold text-white rounded-full gradient-bg hover:opacity-90 transition-opacity shadow-xl shadow-primary/25 flex items-center gap-2"
                >
                  Mulai Sekarang <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#features"
                  className="px-8 py-3.5 text-sm font-semibold text-foreground rounded-full border border-border hover:bg-muted transition-colors"
                >
                  Pelajari Lebih Lanjut
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
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
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
                Semua yang Kamu Butuhkan, <span className="gradient-text">Dalam Satu Platform</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                UniTech menghadirkan layanan terintegrasi untuk mendukung aktivitas akademik, kolaborasi, dan kewirausahaan mahasiswa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.name} className="card-hover rounded-2xl border border-border p-6 bg-white">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                    <f.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <Link href="/register" className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline">
                    Coba Sekarang <ArrowRight size={14} />
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
              <h2 className="text-3xl font-bold">Bagaimana UniTech Bekerja?</h2>
              <p className="mt-4 text-muted-foreground">Tiga langkah mudah untuk memulai perjalananmu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Daftar & Lengkapi Profil", desc: "Buat akun gratis dengan email kampus dan lengkapi profil skill, minat, serta tujuanmu." },
                { step: "2", title: "Temukan & Bergabung", desc: "Jelajahi fitur-fitur UniTech: cari tim lomba, mulai belajar dengan AI, atau buka tokomu." },
                { step: "3", title: "Berkolaborasi & Berkembang", desc: "Terhubung dengan sesama mahasiswa, bangun portofolio, dan raih prestasi bersama." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Pilih Paket yang Sesuai</h2>
              <p className="mt-4 text-muted-foreground">Mulai gratis, upgrade kapan saja sesuai kebutuhanmu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Free */}
              <div className="rounded-2xl border border-border p-8 bg-white">
                <h3 className="text-lg font-semibold">Gratis</h3>
                <p className="text-3xl font-bold mt-2">Rp 0<span className="text-sm font-normal text-muted-foreground">/bulan</span></p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Daftar akun & join komunitas", "Cari info lomba & basic matchmaking", "Akses materi umum & forum", "Daftar sebagai tutor/seller"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-8 block w-full text-center py-3 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors">
                  Daftar Gratis
                </Link>
              </div>
              {/* Premium */}
              <div className="rounded-2xl border-2 border-primary p-8 bg-white relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-semibold">
                  Populer
                </div>
                <h3 className="text-lg font-semibold">Premium Hub</h3>
                <p className="text-3xl font-bold mt-2">Rp 29K<span className="text-sm font-normal text-muted-foreground">/bulan</span></p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Semua fitur Gratis", "Kuota AI lebih besar (100x/hari)", "Bank soal eksklusif", "Advanced team matching (AI)", "Portofolio builder & sertifikat", "Kelas mentoring eksklusif", "Priority exposure di marketplace"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-8 block w-full text-center py-3 rounded-full gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                  Upgrade Premium
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
                Apa Kata Mereka <span className="gradient-text">Tentang Kami</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Testimoni nyata dari rekan mahasiswa yang telah meningkatkan prestasi, berkolaborasi, dan berkembang bersama UniTech.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Aditya Pratama",
                  role: "Teknik Informatika",
                  univ: "Institut Teknologi Bandung",
                  quote: "Gokil sih! Fitur UniMatch RPG dan Swiper-nya ngebantu banget pas nyari tim hackathon. Tim kami terbentuk di sini dan berhasil bawa pulang piala Juara 1!",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                  rating: 5
                },
                {
                  name: "Nadia Putri",
                  role: "Sistem Informasi",
                  univ: "Universitas Indonesia",
                  quote: "UniGuide AI ngebantu aku bikin roadmap belajar data science dari nol. Sekarang berhasil dapat magang di tech company impian berkat roadmap belajarnya yang presisi.",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
                  rating: 5
                },
                {
                  name: "Fikri Ramadhan",
                  role: "Desain Komunikasi Visual",
                  univ: "Telkom University",
                  quote: "Jualan aset 3D dan template UI/UX di StudentShop beneran ngebantu nambah uang jajan. Sistemnya instan, terpercaya, dan bebas biaya admin yang memberatkan mahasiswa.",
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                  rating: 5
                }
              ].map((t, idx) => (
                <div key={idx} className="card-hover rounded-2xl border border-border p-8 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                      <p className="text-[10px] text-primary font-medium">{t.univ}</p>
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
            <h2 className="text-3xl font-bold">Siap Bergabung dengan Komunitas UniTech?</h2>
            <p className="mt-4 opacity-90">
              Temukan teman, belajar, dan berkembang bersama. UniTech akan menjadi pintu utama seluruh aktivitas digitalmu.
            </p>
            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Daftar Sekarang <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

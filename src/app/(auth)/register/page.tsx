import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, User, GraduationCap } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left - Hero */}
      <div className="hidden lg:flex flex-1 gradient-bg items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <Image src="/logo.jpeg" alt="UniTech" width={80} height={80} className="rounded-2xl mx-auto mb-8 shadow-2xl" />
          <h2 className="text-3xl font-bold mb-4">Mulai Perjalananmu</h2>
          <p className="opacity-90 leading-relaxed">
            Daftar gratis dan akses semua fitur UniTech: cari tim lomba, belajar dengan AI, mentoring, dan marketplace mahasiswa.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="w-full max-w-sm mx-auto">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Image src="/logo.jpeg" alt="UniTech" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold gradient-text">UniTech</span>
          </Link>

          <h1 className="text-2xl font-bold">Buat Akun Baru</h1>
          <p className="text-muted-foreground text-sm mt-1">Daftar dengan email kampus kamu</p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-medium">Nama Lengkap</label>
              <div className="relative mt-1.5">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email Kampus</label>
              <div className="relative mt-1.5">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="nama@student.telkomuniversity.ac.id"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">NIM</label>
              <div className="relative mt-1.5">
                <GraduationCap size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="1030324XXXXX"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1.5">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Minimal 8 karakter"
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <Eye size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="rounded border-border mt-0.5" />
              <span className="text-xs text-muted-foreground">
                Saya menyetujui <Link href="#" className="text-primary hover:underline">Syarat & Ketentuan</Link> dan <Link href="#" className="text-primary hover:underline">Kebijakan Privasi</Link> UniTech.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Daftar Sekarang
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">Masuk di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

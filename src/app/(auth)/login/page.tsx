import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="w-full max-w-sm mx-auto">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Image src="/logo.jpeg" alt="UniTech" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold gradient-text">UniTech</span>
          </Link>

          <h1 className="text-2xl font-bold">Selamat Datang Kembali</h1>
          <p className="text-muted-foreground text-sm mt-1">Masuk ke akun UniTech kamu</p>

          <form className="mt-8 space-y-5">
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
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1.5">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <Eye size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-border" />
                Ingat saya
              </label>
              <Link href="#" className="text-sm text-primary hover:underline">Lupa password?</Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Masuk
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Belum punya akun?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">Daftar di sini</Link>
          </p>
        </div>
      </div>

      {/* Right - Hero */}
      <div className="hidden lg:flex flex-1 gradient-bg items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <Image src="/logo.jpeg" alt="UniTech" width={80} height={80} className="rounded-2xl mx-auto mb-8 shadow-2xl" />
          <h2 className="text-3xl font-bold mb-4">Ekosistem Digital Mahasiswa</h2>
          <p className="opacity-90 leading-relaxed">
            Bergabunglah dengan ribuan mahasiswa yang sudah berkolaborasi, belajar, dan berkembang bersama di UniTech.
          </p>
        </div>
      </div>
    </div>
  );
}

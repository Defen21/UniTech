import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpeg" alt="UniTech" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-white">UniTech</span>
            </div>
            <p className="text-sm text-gray-400">
              Community-Driven Student Ecosystem Platform. Menghubungkan mahasiswa untuk kolaborasi, pembelajaran, dan kewirausahaan.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Fitur</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/unimatch" className="hover:text-white transition-colors">UniMatch</Link></li>
              <li><Link href="/uniguide" className="hover:text-white transition-colors">UniGuide AI</Link></li>
              <li><Link href="/unimentor" className="hover:text-white transition-colors">UniMentor Hub</Link></li>
              <li><Link href="/student-shop" className="hover:text-white transition-colors">StudentShop</Link></li>
              <li><Link href="/unicompete" className="hover:text-white transition-colors">UniCompete</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Sumber Daya</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Panduan</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li>support@unitech.id</li>
              <li>Bandung Techno Park</li>
              <li>Telkom University</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; 2026 UniTech. All rights reserved.</p>
          <p className="text-xs text-gray-500">Dibuat dengan ❤️ di Telkom University</p>
        </div>
      </div>
    </footer>
  );
}

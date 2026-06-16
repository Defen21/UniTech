'use client';

import { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Star,
  Edit3, Camera, Shield, CreditCard, Bell, Palette, LogOut,
  ChevronRight, GraduationCap, Trophy, Flame, Settings
} from 'lucide-react';

const tabs = [
  { id: 'profil', label: 'Profil Saya', icon: User },
  { id: 'akademik', label: 'Akademik', icon: GraduationCap },
  { id: 'pencapaian', label: 'Pencapaian', icon: Trophy },
  { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
];

const achievements = [
  { icon: '🏆', title: 'Top Mentor', desc: '50+ sesi mentoring selesai', date: 'Mei 2025', color: 'from-yellow-400 to-orange-500' },
  { icon: '🥇', title: 'Hackathon Champion', desc: 'Juara 1 Hackathon Nasional 2025', date: 'Apr 2025', color: 'from-blue-400 to-cyan-500' },
  { icon: '🔥', title: 'Streak Master', desc: '30 hari berturut-turut aktif', date: 'Mar 2025', color: 'from-red-400 to-pink-500' },
  { icon: '⭐', title: 'Top Rated Seller', desc: 'Rating 4.9+ di StudentShop', date: 'Feb 2025', color: 'from-purple-400 to-violet-500' },
  { icon: '📚', title: 'Knowledge Sharer', desc: '100+ materi dibagikan', date: 'Jan 2025', color: 'from-green-400 to-emerald-500' },
  { icon: '🤝', title: 'Team Player', desc: '10+ tim kompetisi terbentuk', date: 'Des 2024', color: 'from-teal-400 to-blue-500' },
];

const academicStats = [
  { label: 'IPK', value: '3.78', icon: BookOpen, color: 'text-blue-600' },
  { label: 'SKS Selesai', value: '98/144', icon: GraduationCap, color: 'text-teal-600' },
  { label: 'Semester', value: '6', icon: Calendar, color: 'text-purple-600' },
  { label: 'Lomba Diikuti', value: '12', icon: Trophy, color: 'text-orange-600' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="gradient-bg h-32 sm:h-40" />
        <div className="px-4 sm:px-8 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-12 sm:-mt-16 gap-4">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-gray-200 shadow-lg flex items-center justify-center text-4xl sm:text-5xl">
                👨‍🎓
              </div>
              <button className="absolute bottom-1 right-1 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left pb-2">
              <h1 className="text-2xl font-bold text-gray-900">Ahmad Rizky Pratama</h1>
              <p className="text-gray-500">Informatika • Angkatan 2022 • NIM: 1301223001</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  ⭐ Premium Member
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  Terverifikasi
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium">
              <Edit3 className="w-4 h-4" /> Edit Profil
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {academicStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'gradient-bg text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'profil' && (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bio Card */}
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tentang Saya</h2>
            <p className="text-gray-600 leading-relaxed">
              Mahasiswa Informatika semester 6 yang passionate di bidang AI/ML dan Web Development. 
              Aktif mengikuti kompetisi hackathon dan mentoring rekan sesama mahasiswa. 
              Tertarik dengan teknologi blockchain dan IoT untuk solusi kampus cerdas.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>ahmad.rizky@student.telkomuniversity.ac.id</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Bandung, Jawa Barat</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Bergabung sejak Agustus 2022</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {['Python', 'React', 'Machine Learning', 'Node.js', 'PostgreSQL', 'Figma', 'TensorFlow', 'Docker', 'Git', 'Next.js', 'FastAPI', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3">Minat Riset</h3>
            <div className="flex flex-wrap gap-2">
              {['Artificial Intelligence', 'IoT', 'Blockchain', 'Smart Campus'].map((interest) => (
                <span key={interest} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Activity Stats */}
          <div className="md:col-span-3 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Platform</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                { label: 'Sesi Mentoring', value: '52', icon: '👨‍🏫' },
                { label: 'Lomba Diikuti', value: '12', icon: '🏆' },
                { label: 'Produk Dijual', value: '8', icon: '🛍️' },
                { label: 'Post Komunitas', value: '34', icon: '💬' },
                { label: 'Materi Dibuat', value: '27', icon: '📝' },
                { label: 'Hari Streak', value: '45', icon: '🔥' },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-lg bg-gray-50">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="text-xl font-bold text-gray-900">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'akademik' && (
        <div className="space-y-6">
          {/* Academic Progress */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress Studi</h2>
            <div className="space-y-4">
              {[
                { sem: 'Semester 1', sks: 21, ipk: 3.65, status: 'Selesai' },
                { sem: 'Semester 2', sks: 22, ipk: 3.72, status: 'Selesai' },
                { sem: 'Semester 3', sks: 20, ipk: 3.80, status: 'Selesai' },
                { sem: 'Semester 4', sks: 18, ipk: 3.85, status: 'Selesai' },
                { sem: 'Semester 5', sks: 17, ipk: 3.78, status: 'Selesai' },
                { sem: 'Semester 6', sks: 14, ipk: null, status: 'Berjalan' },
              ].map((s) => (
                <div key={s.sem} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${s.status === 'Berjalan' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="font-medium text-gray-900">{s.sem}</span>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-gray-500">{s.sks} SKS</span>
                    <span className={`font-semibold ${s.ipk ? 'text-blue-600' : 'text-gray-400'}`}>
                      {s.ipk ? `IPK ${s.ipk}` : '—'}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      s.status === 'Berjalan' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                    }`}>{s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKS Progress Bar */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-gray-900">Total SKS</h2>
              <span className="text-sm text-gray-500">98 / 144 SKS</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="gradient-bg h-full rounded-full transition-all" style={{ width: '68%' }} />
            </div>
            <p className="text-sm text-gray-500 mt-2">68% selesai — estimasi lulus 2026</p>
          </div>
        </div>
      )}

      {activeTab === 'pencapaian' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach) => (
            <div key={ach.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {ach.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{ach.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{ach.desc}</p>
              <p className="text-xs text-gray-400 mt-3">{ach.date}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'pengaturan' && (
        <div className="max-w-2xl space-y-4">
          {[
            { icon: Shield, title: 'Keamanan & Privasi', desc: 'Password, 2FA, dan pengaturan privasi' },
            { icon: Bell, title: 'Notifikasi', desc: 'Email, push notification, dan reminder' },
            { icon: CreditCard, title: 'Langganan', desc: 'Kelola paket Premium dan pembayaran' },
            { icon: Palette, title: 'Tampilan', desc: 'Tema, bahasa, dan preferensi tampilan' },
          ].map((item) => (
            <button key={item.title} className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-left group">
              <div className="p-3 rounded-lg bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          ))}
          <button className="w-full flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-left">
            <div className="p-3 rounded-lg bg-red-100 text-red-600">
              <LogOut className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-red-700">Keluar</p>
              <p className="text-sm text-red-500">Logout dari akun UniTech</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

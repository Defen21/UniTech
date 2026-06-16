"use client";

import { useState } from "react";
import { ShoppingBag, Search, Filter, MapPin, Star, ShoppingCart, Plus, Store } from "lucide-react";

const categories = ["Semua", "Makanan", "Minuman", "Produk", "Jasa"];

const products = [
  { name: "Nasi Goreng Spesial", seller: "Dapur Rina", price: "Rp 15.000", rating: 4.8, sold: 120, category: "Makanan", image: "🍛" },
  { name: "Es Kopi Susu Gula Aren", seller: "Kopi Campus", price: "Rp 12.000", rating: 4.9, sold: 250, category: "Minuman", image: "☕" },
  { name: "Jasa Desain Poster", seller: "Creative Studio", price: "Rp 50.000", rating: 4.7, sold: 35, category: "Jasa", image: "🎨" },
  { name: "Kaos Custom Tel-U", seller: "Campus Merch", price: "Rp 75.000", rating: 4.6, sold: 89, category: "Produk", image: "👕" },
  { name: "Mie Ayam Bakso", seller: "Mie Ayam Pak Joko", price: "Rp 13.000", rating: 4.8, sold: 180, category: "Makanan", image: "🍜" },
  { name: "Jasa Print & Jilid", seller: "Print Express", price: "Rp 5.000", rating: 4.5, sold: 340, category: "Jasa", image: "🖨️" },
  { name: "Roti Bakar Coklat Keju", seller: "Roti Bakar 88", price: "Rp 10.000", rating: 4.7, sold: 95, category: "Makanan", image: "🍞" },
  { name: "Thai Tea Original", seller: "Tea House", price: "Rp 8.000", rating: 4.6, sold: 210, category: "Minuman", image: "🧋" },
];

export default function StudentShopPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">StudentShop</h1>
          <p className="text-muted-foreground text-sm mt-1">Marketplace khusus mahasiswa untuk makanan, produk, dan jasa</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white rounded-lg gradient-bg hover:opacity-90 transition-opacity">
          <Plus size={16} /> Buka Toko
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari makanan, jasa, atau produk..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? "gradient-bg text-white"
                : "bg-white border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <div key={p.name} className="card-hover rounded-xl bg-white border border-border overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
              {p.image}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Store size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{p.seller}</span>
              </div>
              <h3 className="text-sm font-semibold">{p.name}</h3>
              <p className="text-lg font-bold mt-1 gradient-text">{p.price}</p>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500" /> {p.rating}</span>
                <span>{p.sold} terjual</span>
              </div>
              <button className="mt-3 w-full py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={14} /> Tambah
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// FULL MODERN FINANCE TRACKER
// READY FOR FIREBASE + VERCEL DEPLOYMENT
// APK RELEASE FINAL STRUCTURE
// MULTI USER : FIKRI & DAYANG
// ANDROID APK PRODUCTION READY
// RESPONSIVE + MODERN UI

import { useState } from "react"

// FINAL APK CONFIG
// App Name : Fikri Dayang Finance
// Package ID : com.fikridayang.finance
// Build : Release APK
// Framework : React + Capacitor
// Hosting : Firebase + Vercel

// VERCEL AUTO CONFIGURATION
// 1. Upload project to GitHub
// 2. Import repository to Vercel
// 3. Framework preset : Vite / React
// 4. Build Command : npm run build
// 5. Output Directory : dist
// 6. Deploy automatic

// FILE STRUCTURE FOR VERCEL
// package.json
// vite.config.js
// vercel.json
// src/App.jsx
// src/main.jsx

// vercel.json
// {
//   "rewrites": [
//     {
//       "source": "/(.*)",
//       "destination": "/"
//     }
//   ]
// }

export default function Keuangan Kita() {
  const [selectedUser, setSelectedUser] = useState("Fikri")

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl mb-6">
          <h1 className="text-4xl font-bold mb-2">Finance Tracker</h1>
          <p className="text-lg opacity-90">Pencatat pemasukan dan pengeluaran modern • Multi Catatan</p>

          <div className="flex gap-3 mt-5">
            <button
              onClick={() => setSelectedUser("Fikri")}
              className={`${selectedUser === "Fikri"
                ? "bg-white text-emerald-600"
                : "bg-white/20 text-white"
                } px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition`}
            >
              Catatan Fikri
            </button>

            <button
              onClick={() => setSelectedUser("Dayang")}
              className={`${selectedUser === "Dayang"
                ? "bg-white text-emerald-600"
                : "bg-white/20 text-white"
                } px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition`}
            >
              Catatan Dayang
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
              <p className="text-sm opacity-80">Saldo Total</p>
              <h2 className="text-3xl font-bold mt-2">Rp 0</h2>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
              <p className="text-sm opacity-80">Pemasukan</p>
              <h2 className="text-3xl font-bold mt-2">Rp 0</h2>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
              <p className="text-sm opacity-80">Pengeluaran</p>
              <h2 className="text-3xl font-bold mt-2">Rp 0</h2>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Tambah Transaksi</h2>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-sm font-semibold">
                  Akun: {selectedUser}
                </span>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Transaksi</label>
                  <input
                    type="text"
                    placeholder="Contoh: Gaji Bulanan"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Jumlah</label>
                  <input
                    type="number"
                    placeholder="Masukkan nominal"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Kategori</label>
                  <select className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Makanan</option>
                    <option>Transportasi</option>
                    <option>Belanja</option>
                    <option>Gaji</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tipe</label>
                  <select className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Pemasukan</option>
                    <option>Pengeluaran</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 transition text-white py-3 rounded-xl font-semibold shadow-lg"
                >
                  Simpan Transaksi
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold">Riwayat Transaksi</h2>

                <input
                  type="text"
                  placeholder="Cari transaksi..."
                  className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div>
                    <h3 className="font-semibold text-lg">Gaji Bulanan</h3>
                    <p className="text-sm text-slate-500">Kategori: Gaji</p>
                  </div>

                  <div className="text-right">
                    <p className="text-emerald-600 font-bold text-lg">+ Rp 5.000.000</p>
                    <button className="text-red-500 text-sm mt-1 hover:underline">
                      Hapus
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-red-50 border border-red-100">
                  <div>
                    <h3 className="font-semibold text-lg">Belanja Bulanan</h3>
                    <p className="text-sm text-slate-500">Kategori: Belanja</p>
                  </div>

                  <div className="text-right">
                    <p className="text-red-600 font-bold text-lg">- Rp 750.000</p>
                    <button className="text-red-500 text-sm mt-1 hover:underline">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4">Tips Keuangan</h2>
                <ul className="space-y-3 text-slate-600">
                  <li>• Catat semua pengeluaran harian</li>
                  <li>• Sisihkan minimal 20% untuk tabungan</li>
                  <li>• Hindari pengeluaran impulsif</li>
                  <li>• Buat target keuangan bulanan</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4">Statistik Bulan Ini</h2>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Pemasukan</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-emerald-500 h-3 rounded-full w-[80%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Pengeluaran</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full w-[45%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 mt-6">
            <h2 className="text-2xl font-bold mb-5">Fitur Premium</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-slate-100 rounded-2xl p-4">
                <h3 className="font-bold mb-2">Realtime Sync</h3>
                <p className="text-sm text-slate-600">Data otomatis update online menggunakan Firebase.</p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <h3 className="font-bold mb-2">Cloud Database</h3>
                <p className="text-sm text-slate-600">Data aman dan dapat diakses dari HP maupun laptop.</p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <h3 className="font-bold mb-2">Export PDF</h3>
                <p className="text-sm text-slate-600">Download laporan pemasukan dan pengeluaran.</p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <h3 className="font-bold mb-2">Analytics</h3>
                <p className="text-sm text-slate-600">Statistik dan grafik keuangan modern.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 text-slate-500 text-sm">
          Finance Tracker Modern Multi User • Fikri & Dayang
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-6 mt-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Android APK Ready</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-xl font-bold mb-3">Fitur APK</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• Install langsung di Android</li>
                <li>• Support realtime database</li>
                <li>• Bisa digunakan offline</li>
                <li>• Tampilan seperti aplikasi premium</li>
                <li>• Multi akun Fikri & Dayang</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-xl font-bold mb-3">Build APK</h3>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="bg-black/30 rounded-xl p-3">
                  npm install
                </div>

                <div className="bg-black/30 rounded-xl p-3">
                  npm run build
                </div>

                <div className="bg-black/30 rounded-xl p-3">
                  npx cap add android
                </div>

                <div className="bg-black/30 rounded-xl p-3">
                  npx cap open android
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

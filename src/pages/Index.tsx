
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, 
  MapPin, 
  Truck, 
  DollarSign, 
  Users, 
  BarChart3, 
  Bell, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              KardusKulaku
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#masalah" className="text-gray-700 hover:text-green-600 transition-colors">Masalah</a>
            <a href="#solusi" className="text-gray-700 hover:text-green-600 transition-colors">Solusi</a>
            <a href="#manfaat" className="text-gray-700 hover:text-green-600 transition-colors">Manfaat</a>
            <a href="#testimoni" className="text-gray-700 hover:text-green-600 transition-colors">Testimoni</a>
            <a href="#harga" className="text-gray-700 hover:text-green-600 transition-colors">Harga</a>
          </nav>
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            Mulai Sekarang
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            Solusi Revolusioner untuk Bisnis Kardus Bekas
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Kardus Saya
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
              Laku Terjual
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Platform digital yang menghubungkan pengepul dan pelanggan kardus bekas dengan efisien, 
            menciptakan ekosistem bisnis yang berkelanjutan untuk ekonomi dan lingkungan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-4">
              Daftar Sebagai Pengepul
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              Jual Kardus Bekas
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="masalah" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Masalah yang Dihadapi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pengepul dan pelanggan kardus bekas menghadapi berbagai tantangan dalam bertransaksi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8 text-red-500" />,
                title: "Inefisiensi Operasional",
                description: "Pengepul harus berkeliling kota tanpa kepastian persediaan kardus"
              },
              {
                icon: <MapPin className="w-8 h-8 text-red-500" />,
                title: "Informasi Lokasi Tidak Akurat",
                description: "Waktu dan biaya BBM terbuang karena lokasi pelanggan tidak jelas"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-red-500" />,
                title: "Harga Tidak Transparan",
                description: "Pelanggan tidak mengetahui harga kardus bekas terkini di pasaran"
              },
              {
                icon: <Users className="w-8 h-8 text-red-500" />,
                title: "Komunikasi Buruk",
                description: "Tidak ada media komunikasi yang efektif antara pengepul dan pelanggan"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-red-500" />,
                title: "Tidak Ada Perencanaan",
                description: "Pengepul tidak bisa merencanakan rute dan kapasitas angkut optimal"
              },
              {
                icon: <Bell className="w-8 h-8 text-red-500" />,
                title: "Informasi Tidak Realtime",
                description: "Tidak ada notifikasi dan update status transaksi secara langsung"
              }
            ].map((problem, index) => (
              <Card key={index} className="border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {problem.icon}
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solusi" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solusi Komprehensif</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              KardusKulaku hadir dengan fitur-fitur canggih untuk mengatasi semua masalah bisnis kardus bekas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-green-600" />,
                title: "Peta Interaktif",
                description: "Cluster dan heatmap lokasi kardus bekas dengan filter canggih"
              },
              {
                icon: <Truck className="w-8 h-8 text-green-600" />,
                title: "Optimasi Rute",
                description: "Sistem perencanaan rute pickup yang efisien dan hemat biaya"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-green-600" />,
                title: "Manajemen Harga",
                description: "Update harga realtime berdasarkan jenis dan kualitas kardus"
              },
              {
                icon: <Bell className="w-8 h-8 text-green-600" />,
                title: "Notifikasi Realtime",
                description: "Update status transaksi dan jadwal pickup secara langsung"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-green-600" />,
                title: "Dashboard Analitik",
                description: "Laporan dan statistik komprehensif untuk analisis bisnis"
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "Progressive Web App",
                description: "Aplikasi mobile-friendly yang bisa diinstall di smartphone"
              }
            ].map((solution, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {solution.icon}
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="manfaat" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manfaat Triple Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Memberikan dampak positif untuk ekonomi, sosial, dan lingkungan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700 flex items-center">
                  <DollarSign className="w-8 h-8 mr-2" />
                  Ekonomi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span>Meningkatkan efisiensi operasional pengepul</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span>Harga jual yang lebih transparan dan adil</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span>Mengurangi biaya operasional dan BBM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-green-100 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center">
                  <Users className="w-8 h-8 mr-2" />
                  Sosial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Memberdayakan masyarakat jadi pengepul</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Menciptakan lapangan kerja baru</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Membantu UMKM dan industri kecil</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-700 flex items-center">
                  <Recycle className="w-8 h-8 mr-2" />
                  Lingkungan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Mendukung program daur ulang kardus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Mengurangi limbah kardus di TPA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Melestarikan lingkungan untuk generasi mendatang</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimoni" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Pengguna</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pengalaman nyata dari pengepul dan pelanggan yang sudah merasakan manfaat KardusKulaku
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Pengepul Kardus",
                location: "Jakarta Timur",
                comment: "Sejak pakai KardusKulaku, pendapatan saya naik 40%! Sekarang saya bisa rencanakan rute dengan optimal dan tidak buang-buang waktu lagi.",
                rating: 5
              },
              {
                name: "Sari Indah",
                role: "Pemilik Toko Retail",
                location: "Surabaya",
                comment: "Sangat membantu! Kardus bekas toko saya langsung laku dengan harga yang adil. Prosesnya cepat dan praktis.",
                rating: 5
              },
              {
                name: "Ahmad Rizki",
                role: "Manager Pabrik",
                location: "Bandung",
                comment: "Aplikasi ini solusi sempurna untuk limbah kardus pabrik kami. Pickup terjadwal, harga transparan, dan dokumentasi lengkap.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-green-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paket Berlangganan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Pelanggan</CardTitle>
                <CardDescription>Untuk penjual kardus bekas</CardDescription>
                <div className="text-3xl font-bold text-green-600">Gratis</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Posting jual kardus unlimited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Notifikasi realtime</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Riwayat transaksi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Export laporan</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Mulai Sekarang
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                Paling Populer
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Pengepul Basic</CardTitle>
                <CardDescription>Untuk pengepul pemula</CardDescription>
                <div className="text-3xl font-bold text-green-600">
                  Rp 99rb
                  <span className="text-sm font-normal text-gray-500">/bulan</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Semua fitur pelanggan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Peta interaktif dan heatmap</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Optimasi rute pickup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Dashboard analitik</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Radius area kerja 10km</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Berlangganan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-2xl">Pengepul Pro</CardTitle>
                <CardDescription>Untuk pengepul berpengalaman</CardDescription>
                <div className="text-3xl font-bold text-emerald-600">
                  Rp 199rb
                  <span className="text-sm font-normal text-gray-500">/bulan</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span>Semua fitur Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span>Tracking inventori</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span>Broadcast update harga</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span>Laporan komprehensif</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span>Radius area kerja unlimited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span>Support prioritas</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">
                  Berlangganan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering diajukan tentang KardusKulaku
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Apakah KardusKulaku gratis untuk pelanggan?",
                a: "Ya, KardusKulaku 100% gratis untuk pelanggan yang ingin menjual kardus bekas. Anda bisa posting jual kardus tanpa biaya apapun."
              },
              {
                q: "Bagaimana cara kerja sistem optimasi rute?",
                a: "Sistem kami menggunakan algoritma cerdas untuk menentukan rute pickup yang paling efisien berdasarkan lokasi, waktu, dan kapasitas kendaraan Anda."
              },
              {
                q: "Apakah harga kardus bekas selalu berubah?",
                a: "Ya, harga kardus bekas mengikuti mekanisme pasar (supply & demand). Pengepul dapat update harga secara realtime melalui aplikasi."
              },
              {
                q: "Bagaimana keamanan data pribadi saya?",
                a: "Kami menggunakan enkripsi tingkat enterprise dan mematuhi standar keamanan data internasional untuk melindungi informasi pribadi Anda."
              },
              {
                q: "Apakah bisa digunakan di semua kota?",
                a: "Saat ini KardusKulaku tersedia di kota-kota besar di Indonesia. Kami terus ekspansi ke kota-kota lain secara bertahap."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white border-green-100">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim support kami siap membantu Anda 24/7
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-green-100">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                <p className="text-gray-600">+62 21 1234 5678</p>
                <p className="text-sm text-gray-500 mt-1">Senin - Jumat, 08:00 - 17:00</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-100">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">support@karduskulaku.com</p>
                <p className="text-sm text-gray-500 mt-1">Respon dalam 24 jam</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-100">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Media Sosial</h3>
                <div className="flex justify-center space-x-4 mt-2">
                  <Instagram className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
                  <Facebook className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
                  <Twitter className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">KardusKulaku</span>
              </div>
              <p className="text-gray-400 text-sm">
                Platform digital yang menghubungkan pengepul dan pelanggan kardus bekas untuk bisnis yang berkelanjutan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Harga</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Komunitas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 KardusKulaku. All rights reserved. Made with ❤️ for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

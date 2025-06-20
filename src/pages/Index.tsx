
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
  Twitter,
  Leaf,
  Earth,
  Gift,
  Heart
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
            <a href="#gratis" className="text-gray-700 hover:text-green-600 transition-colors font-semibold">100% Gratis</a>
            <a href="#testimoni" className="text-gray-700 hover:text-green-600 transition-colors">Testimoni</a>
            <a href="#dampak" className="text-gray-700 hover:text-green-600 transition-colors">Dampak</a>
          </nav>
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            Mulai Sekarang Gratis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            Platform Ramah Lingkungan untuk Ekonomi Berkelanjutan - 100% GRATIS
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Kardus Saya Laku Terjual
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Platform digital yang menghubungkan pengepul dan pelanggan kardus bekas dengan efisien, 
            menciptakan ekosistem bisnis yang berkelanjutan untuk ekonomi dan lingkungan yang lebih baik.
          </p>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Gift className="w-6 h-6 text-orange-600" />
              <span className="text-2xl font-bold text-orange-700">100% GRATIS SELAMANYA!</span>
            </div>
            <p className="text-orange-700 font-medium">
              Tidak ada biaya berlangganan, tidak ada biaya tersembunyi. 
              Nikmati semua fitur premium tanpa batas untuk pengepul dan pelanggan!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-4">
              Daftar Sebagai Pengepul - Gratis!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              Jual Kardus Bekas - Gratis!
            </Button>
          </div>
        </div>
      </section>

      {/* Free Benefits Section - New */}
      <section id="gratis" className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gift className="w-10 h-10 text-orange-600" />
              <h2 className="text-4xl font-bold text-gray-900">Mengapa KardusKulaku 100% Gratis?</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami percaya teknologi harus dapat diakses semua orang untuk menciptakan dampak positif bagi ekonomi dan lingkungan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: "Misi Sosial",
                description: "Memberdayakan masyarakat tanpa hambatan finansial untuk menciptakan ekonomi berkelanjutan"
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-600" />,
                title: "Dampak Lingkungan",
                description: "Semakin banyak pengguna, semakin besar kontribusi dalam menyelamatkan lingkungan"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Ekosistem Komunitas",
                description: "Membangun jaringan pengepul dan pelanggan yang saling menguntungkan"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-600" />,
                title: "Akses Ekonomi",
                description: "Semua lapisan masyarakat bisa merasakan manfaat ekonomi tanpa modal teknologi"
              },
              {
                icon: <Earth className="w-8 h-8 text-emerald-600" />,
                title: "Gerakan Hijau",
                description: "Bersama menciptakan Indonesia yang lebih hijau dan berkelanjutan"
              },
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                title: "Teknologi Terdepan",
                description: "Akses fitur premium dan teknologi canggih tanpa batasan biaya"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {benefit.icon}
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Bergabunglah dengan Ribuan Pengguna Lainnya!</h3>
            <p className="text-xl mb-6 opacity-90">
              Semakin banyak pengguna KardusKulaku, semakin besar dampak positif untuk ekonomi dan lingkungan Indonesia. 
              Mari bersama-sama membangun masa depan yang berkelanjutan!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm opacity-90">Pengepul Aktif</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-sm opacity-90">Pelanggan Terdaftar</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">Rp 25M+</div>
                <div className="text-sm opacity-90">Total Transaksi</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              Daftar Sekarang - Tanpa Biaya Apapun!
              <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Benefits Section - Enhanced */}
      <section id="manfaat" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manfaat Triple Impact - Semuanya Gratis!</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dapatkan dampak positif berkelanjutan untuk ekonomi, sosial, dan lingkungan tanpa biaya sepeserpun
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
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> meningkatkan pendapatan pengepul hingga 40%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> akses harga jual transparan dan adil</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> mengurangi biaya operasional hingga 50%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> menciptakan sumber penghasilan tambahan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span><strong>Bonus:</strong> Hemat biaya teknologi dan sistem</span>
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
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> memberdayakan masyarakat jadi pengepul mandiri</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> menciptakan lapangan kerja baru</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> membantu UMKM dan industri kecil berkembang</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> membangun ekosistem ekonomi sirkular</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span><strong>Bonus:</strong> Akses teknologi untuk semua kalangan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-700 flex items-center">
                  <Leaf className="w-8 h-8 mr-2" />
                  Lingkungan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> mengurangi limbah kardus hingga 80% di TPA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> menghemat emisi karbon dari transportasi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> mendukung industri daur ulang berkelanjutan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span><strong>Gratis</strong> melestarikan hutan untuk generasi mendatang</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                    <span><strong>Bonus:</strong> Berkontribusi tanpa hambatan finansial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="dampak" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dampak Nyata untuk Lingkungan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kontribusi KardusKulaku dalam menciptakan masa depan yang lebih hijau dan berkelanjutan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-green-200 bg-white">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">1,200+</h3>
                <p className="text-gray-600">Ton kardus berhasil didaur ulang per bulan</p>
              </CardContent>
            </Card>
            <Card className="text-center border-emerald-200 bg-white">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Earth className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-emerald-600 mb-2">85%</h3>
                <p className="text-gray-600">Pengurangan limbah kardus di TPA</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200 bg-white">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">40%</h3>
                <p className="text-gray-600">Pengurangan emisi karbon dari optimasi rute</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200 bg-white">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">5,000+</h3>
                <p className="text-gray-600">Keluarga terdampak positif secara ekonomi</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Bergabunglah dalam Gerakan Ekonomi Hijau</h3>
            <p className="text-xl mb-6 opacity-90">
              Setiap kardus yang Anda jual berkontribusi pada pelestarian lingkungan dan pemberdayaan ekonomi masyarakat
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Mulai Berkontribusi Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimoni" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Pengguna - Semuanya Gratis!</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pengalaman nyata dari pengepul dan pelanggan yang merasakan manfaat KardusKulaku tanpa biaya
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Pengepul Kardus",
                location: "Jakarta Timur",
                comment: "Luar biasa! Gratis tapi fiturnya premium. Sejak pakai KardusKulaku, pendapatan saya naik 40% dan saya bangga bisa ikut menjaga lingkungan. Yang paling penting, tidak ada biaya berlangganan sama sekali!",
                rating: 5
              },
              {
                name: "Sari Indah",
                role: "Pemilik Toko Retail",
                location: "Surabaya",
                comment: "Sangat membantu dan benar-benar gratis! Kardus bekas toko langsung laku dengan harga adil. Senang bisa berkontribusi untuk lingkungan sambil dapat penghasilan tambahan tanpa modal teknologi.",
                rating: 5
              },
              {
                name: "Ahmad Rizki",
                role: "Manager Pabrik",
                location: "Bandung",
                comment: "Solusi sempurna dan gratis untuk limbah kardus pabrik. Tidak hanya menguntungkan secara ekonomi, tapi juga mendukung program CSR lingkungan perusahaan kami. Fitur premium tanpa biaya!",
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
                q: "Apakah KardusKulaku benar-benar gratis untuk digunakan?",
                a: "Ya, KardusKulaku 100% gratis untuk semua pengguna tanpa batas waktu! Kami berkomitmen memberikan akses teknologi untuk mendukung ekonomi berkelanjutan dan pelestarian lingkungan tanpa biaya apapun - tidak ada biaya pendaftaran, biaya berlangganan, atau biaya tersembunyi."
              },
              {
                q: "Mengapa KardusKulaku gratis? Apakah ada yang disembunyikan?",
                a: "Tidak ada yang disembunyikan! Kami menyediakan layanan gratis karena misi kami adalah memberdayakan masyarakat dan melestarikan lingkungan. Semakin banyak pengguna, semakin besar dampak positif yang tercipta. Semua fitur premium tersedia gratis selamanya."
              },
              {
                q: "Bagaimana KardusKulaku berkontribusi pada lingkungan?",
                a: "Setiap transaksi di platform kami mengurangi limbah kardus di TPA, mengoptimalkan rute pickup untuk mengurangi emisi karbon, dan mendukung industri daur ulang berkelanjutan. Yang terbaik, semua kontribusi ini bisa Anda lakukan tanpa biaya sepeserpun!"
              },
              {
                q: "Apakah ada batasan penggunaan karena gratis?",
                a: "Tidak ada batasan sama sekali! Semua fitur premium seperti peta interaktif, optimasi rute, analitik komprehensif, dan notifikasi realtime tersedia penuh tanpa batas untuk semua pengguna. Kami percaya teknologi terbaik harus dapat diakses semua orang."
              },
              {
                q: "Bagaimana cara bergabung dengan komunitas KardusKulaku?",
                a: "Sangat mudah dan gratis! Daftar di aplikasi, pilih peran sebagai pengepul atau pelanggan, dan langsung mulai berkontribusi pada ekonomi hijau berkelanjutan bersama puluhan ribu pengguna lainnya tanpa biaya registrasi."
              },
              {
                q: "Apakah layanan akan tetap gratis di masa depan?",
                a: "Ya, kami berkomitmen menjaga KardusKulaku gratis selamanya! Misi kami adalah dampak sosial dan lingkungan, bukan profit. Semakin banyak pengguna yang bergabung, semakin kuat platform ini dalam menciptakan perubahan positif di Indonesia."
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
                Platform digital ramah lingkungan yang menghubungkan pengepul dan pelanggan kardus bekas untuk ekonomi berkelanjutan dan masa depan yang lebih hijau.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cara Kerja</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Komunitas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dampak</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ekonomi Berkelanjutan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pelestarian Lingkungan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pemberdayaan Masyarakat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Laporan Dampak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Panduan Pengguna</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 KardusKulaku. All rights reserved. Made with ❤️ for a sustainable future and greener Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

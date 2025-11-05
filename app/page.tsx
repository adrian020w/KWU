import Link from "next/link"
import { ArrowRight, Sparkles, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Rasakan Kesegaran dan Relaksasi Maksimal
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Pegel Pedia menyediakan layanan pijat profesional dengan terapis berpengalaman untuk menghilangkan
                kelelahan dan memberikan kesehatan optimal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285715713501?text=Halo%20Pegel%20Pedia%2C%20saya%20ingin%20memesan%20layanan%20pijat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Pesan Sekarang
                  <ArrowRight size={20} />
                </a>
                <Link
                  href="/tentang"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <Sparkles size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-semibold">Pegel Pedia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Mengapa Memilih Pegel Pedia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Terapis Profesional</h3>
              <p className="text-foreground/70 leading-relaxed">
                Tim terapis bersertifikat dan berpengalaman.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Teknik Terbaik</h3>
              <p className="text-foreground/70 leading-relaxed">
                Menggunakan teknik pijat tradisional dan modern untuk hasil maksimal dan kepuasan pelanggan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Pelayanan Terbaik</h3>
              <p className="text-foreground/70 leading-relaxed">
                Komitmen kami adalah memberikan pengalaman terbaik dengan suasana nyaman dan ramah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Merasakan Kesegaran?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang melalui WhatsApp dan dapatkan penawaran spesial untuk pelanggan baru.
          </p>
          <a
            href="https://wa.me/6285715713501?text=Halo%20Pegel%20Pedia%2C%20saya%20ingin%20memesan%20layanan%20pijat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

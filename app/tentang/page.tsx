import { CheckCircle } from "lucide-react"

export default function TentangKami() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tentang Pegel Pedia</h1>
          <p className="text-lg text-foreground/70">
            Mengenal lebih jauh tentang misi dan visi kami dalam memberikan layanan pijat terbaik
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Siapa Kami?</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Pegel Pedia adalah layanan pijat profesional yang didirikan dengan visi untuk memberikan solusi
                kesehatan dan relaksasi bagi masyarakat. Kami percaya bahwa kesehatan adalah investasi terbaik.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Dengan tim terapis berpengalaman dan fasilitas modern, kami berkomitmen untuk memberikan pengalaman
                pijat yang tak terlupakan dan hasil yang maksimal.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-2xl font-bold">Pegel Pedia</p>
                <p className="text-white/80 mt-2">Kesehatan Anda, Prioritas Kami</p>
              </div>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-md border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
              <p className="text-foreground/70 leading-relaxed">
                Menjadi layanan pijat terpercaya dan terdepan yang memberikan solusi kesehatan holistik untuk
                meningkatkan kualitas hidup masyarakat.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
              <p className="text-foreground/70 leading-relaxed">
                Memberikan layanan pijat berkualitas tinggi dengan harga terjangkau, terapis profesional, dan suasana
                yang nyaman untuk kesehatan optimal pelanggan.
              </p>
            </div>
          </div>

          {/* Keunggulan */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Keunggulan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Terapis bersertifikat dan berpengalaman",
                "Teknik pijat tradisional dan modern",
                "Fasilitas bersih dan nyaman",
                "Harga kompetitif dan terjangkau",
                "Layanan profesional dan ramah",
                "Jam operasional yang fleksibel",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground/70 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

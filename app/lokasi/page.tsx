import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Lokasi() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Lokasi Kami</h1>
          <p className="text-lg text-foreground/70">Kunjungi kami di lokasi yang strategis dan mudah diakses</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl h-96 flex items-center justify-center border-2 border-primary/30">
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-4" size={48} />
                <p className="text-foreground/70 font-medium">Peta Lokasi</p>
                <p className="text-foreground/50 text-sm mt-2">Jl. Kesehatan No. 123, Jakarta</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Informasi Kontak</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Alamat</h3>
                    <p className="text-foreground/70">
                      Jl. Kesehatan No. 123
                      <br />
                      Jakarta Selatan, 12345
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Telepon</h3>
                    <p className="text-foreground/70">
                      <a href="tel:+6285715713501" className="hover:text-primary transition-colors">
                        +62 857 1571 3501
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70">
                      <a href="mailto:info@pegelpedia.com" className="hover:text-primary transition-colors">
                        info@pegelpedia.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Jam Operasional</h3>
                    <p className="text-foreground/70">
                      Senin - Jumat: 09:00 - 21:00 WIB
                      <br />
                      Sabtu - Minggu: 10:00 - 22:00 WIB
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6285715713501?text=Halo%20Pegel%20Pedia%2C%20saya%20ingin%20memesan%20layanan%20pijat"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors font-semibold w-full text-center"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

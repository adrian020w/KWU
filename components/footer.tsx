import Link from "next/link"
import { Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pegel Pedia</h3>
            <p className="text-white/80 leading-relaxed">
              Layanan pijat profesional untuk kesehatan, relaksasi, dan kesejahteraan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-white/80 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/lokasi" className="text-white/80 hover:text-white transition-colors">
                  Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={18} />
                <span>+62 857 1571 3501</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={18} />
                <span>info@pegelpedia.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Clock size={18} />
                <span>09:00 - 21:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; 2025 Pegel Pedia. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

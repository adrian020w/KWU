"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PP</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline">Pegel Pedia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Beranda
            </Link>
            <Link href="/tentang" className="text-foreground hover:text-primary transition-colors font-medium">
              Tentang Kami
            </Link>
            <Link href="/lokasi" className="text-foreground hover:text-primary transition-colors font-medium">
              Lokasi
            </Link>
          </div>

          {/* WhatsApp Button Desktop */}
          <a
            href="https://wa.me/6285715713501?text=Halo%20Pegel%20Pedia%2C%20saya%20ingin%20memesan%20layanan%20pijat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
          >
            Pesan via WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-primary" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Beranda
            </Link>
            <Link
              href="/tentang"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="/lokasi"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Lokasi
            </Link>
            <a
              href="https://wa.me/6285715713501?text=Halo%20Pegel%20Pedia%2C%20saya%20ingin%20memesan%20layanan%20pijat"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium text-center"
            >
              Pesan via WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

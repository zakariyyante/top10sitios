"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f051d]/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-48 h-12">
            <Image
              src="/logo.png"
              alt="Top 10 Sitios de Casino"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/70 hover:text-[var(--accent)] transition-colors">Início</Link>
          <Link href="/#brands" className="text-sm font-medium text-white/70 hover:text-[var(--accent)] transition-colors">Casinos</Link>
          <Link href="/#guide" className="text-sm font-medium text-white/70 hover:text-[var(--accent)] transition-colors">Guia</Link>
          <Link href="/about" className="text-sm font-medium text-white/70 hover:text-[var(--accent)] transition-colors">Sobre Nós</Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-[var(--accent)] transition-colors">Contacto</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a0b2e] border-b border-white/10 py-4 px-4 flex flex-col gap-4">
          <Link href="/" className="text-base font-medium text-white/70" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link href="/#brands" className="text-base font-medium text-white/70" onClick={() => setIsMenuOpen(false)}>Casinos</Link>
          <Link href="/#guide" className="text-base font-medium text-white/70" onClick={() => setIsMenuOpen(false)}>Guia</Link>
          <Link href="/about" className="text-base font-medium text-white/70" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
          <Link href="/contact" className="text-base font-medium text-white/70" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Footer from "./Footer";

interface MobileModalProps {
  brands: Brand[];
}

export default function MobileModal({ brands }: MobileModalProps) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const gclid = searchParams.get("gclid");

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (gclid && isMobileDevice) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f051d] overflow-y-auto flex flex-col">
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-12">
          <div className="relative w-40 h-10">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "unset";
            }}
            className="p-2 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">
              Elite Mobile Access
            </span>
          </div>
          <h2 className="text-4xl font-black mb-4 leading-tight">
            OS MELHORES <br />
            <span className="cyan-text">CASINOS MÓVEIS</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium">Acesso VIP instantâneo no seu telemóvel.</p>
        </div>

        <div className="grid gap-6 mb-12">
          {mobileBrands.map((brand, idx) => (
            <BrandCard key={brand.id} brand={brand} index={idx} gclid={gclid || undefined} />
          ))}
        </div>

        <div className="bg-black/20 p-6 rounded-2xl border border-white/5 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">
              18+
            </div>
            <span className="text-sm font-bold text-white/90">Jogue com Responsabilidade</span>
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
            Apenas para maiores de 18 anos. O jogo pode causar dependência. 
            Regulado pelo SRIJ Portugal.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

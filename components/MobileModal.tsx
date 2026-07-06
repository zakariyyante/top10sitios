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
      <div className="flex-grow p-3">
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-32 h-8">
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
            className="p-1.5 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">
              Acesso Móvel Elite
            </span>
          </div>
          <h2 className="text-2xl font-black mb-1 leading-tight">
            OS MELHORES <span className="cyan-text">CASINOS MÓVEIS</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">Acesso VIP instantâneo</p>
        </div>

        <div className="grid gap-3 mb-8">
          {mobileBrands.map((brand, idx) => (
            <BrandCard key={brand.id} brand={brand} index={idx} gclid={gclid || undefined} compact={true} />
          ))}
        </div>

        <div className="bg-black/20 p-4 rounded-xl border border-white/5 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center text-red-500 font-bold text-[10px]">
              18+
            </div>
            <span className="text-xs font-bold text-white/90">Jogue com Responsabilidade</span>
          </div>
          <p className="text-[8px] text-white/40 leading-relaxed uppercase tracking-widest">
            Apenas para maiores de 18 anos. Regulado pelo SRIJ Portugal.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

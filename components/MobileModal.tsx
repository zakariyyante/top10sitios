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
          <h2 className="text-2xl font-black mb-4 leading-tight px-4">
            OS MELHORES <span className="cyan-text">CASINOS MÓVEIS</span>
          </h2>

          <div className="text-center mb-2">
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[8px]">
              ATUALIZADO EDITORIALMENTE - 10 DE JULHO DE 2026
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden mb-6 mask-fade-edges">
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-3 w-max px-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white/90 text-[9px] font-black uppercase tracking-wider">Jogo Responsável</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white/90 text-[9px] font-black uppercase tracking-wider">MB Way</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <svg className="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white/90 text-[9px] font-black uppercase tracking-wider">Multibanco</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-white/90 text-[9px] font-black uppercase tracking-wider">Levantamentos Rápidos</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-white/90 text-[9px] font-black uppercase tracking-wider">18+</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-[9px] font-black uppercase tracking-wider">Licença SRIJ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

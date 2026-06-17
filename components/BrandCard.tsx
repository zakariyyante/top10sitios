"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclid?: string;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

export default function BrandCard({ brand, index, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    track('Brand Click', { brand: brand.name });
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const getBadge = (idx: number) => {
    if (idx === 0) return { label: "1º ELITE", color: "from-[#fef08a] to-[#eab308]", text: "text-black" };
    if (idx === 1) return { label: "2º PREMIUM", color: "from-slate-200 to-slate-400", text: "text-black" };
    if (idx === 2) return { label: "3º SELECT", color: "from-orange-300 to-orange-500", text: "text-black" };
    return null;
  };

  const badge = getBadge(index);

  return (
    <div 
      onClick={handleCardClick}
      className="premium-card relative group cursor-pointer shimmer-overlay"
    >
      {/* Top Badge */}
      {badge && (
        <div className={`absolute top-0 left-0 z-10 px-4 py-1.5 rounded-br-2xl bg-gradient-to-r ${badge.color} ${badge.text} text-[10px] font-black tracking-[0.2em] shadow-xl`}>
          {badge.label}
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Logo & Rating Section */}
        <div className="p-8 flex flex-col items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent border-b border-white/5">
          <div className="relative w-40 h-20 mb-6 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(brand.rating / 2) ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'text-white/10'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white tracking-tighter">{brand.rating.toFixed(1)}</span>
              <span className="text-sm font-bold text-white/30">/10</span>
            </div>
          </div>
        </div>

        {/* Bonus & CTA Section */}
        <div className="p-8 flex flex-col flex-grow justify-between bg-slate-900/40">
          <div className="mb-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-4 border border-cyan-500/20">
              Bónus Exclusivo
            </span>
            <h3 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-cyan-400 transition-colors">
              {brand.bonus}
            </h3>
            <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Pagamento Verificado
            </div>
          </div>

          <button 
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] text-sm shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-95"
          >
            Reivindicar Agora
          </button>
        </div>
      </div>
    </div>
  );
}

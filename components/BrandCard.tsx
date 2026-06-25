"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclid?: string;
  compact?: boolean;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

export default function BrandCard({ brand, index, gclid, compact }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    // If URL already ends with an empty parameter (e.g. clickid=), append gclid directly
    if (url.endsWith('=')) return `${url}${gclid}`;
    // Otherwise, append as a new parameter
    return url.includes('?') ? `${url}&gclid=${gclid}` : `${url}?gclid=${gclid}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    track('Brand Click', { brand: brand.name });
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  // Auto-calculated values based on index
  const autoRating = Math.max(8.5, 9.9 - index * 0.1);
  const autoVotes = Math.floor(15000 / (1 + index * 0.15)) + (index % 3) * 123;

  const getBadge = (idx: number) => {
    if (brand.badge === "fast_withdrawal") return { label: "LEVANTAMENTOS RÁPIDOS", color: "from-emerald-400 to-emerald-600", text: "text-white" };
    if (brand.badge === "best_casino") return { label: "MELHOR CASINO", color: "from-cyan-400 to-blue-600", text: "text-white" };
    if (brand.badge === "new_casino") return { label: "NOVO CASINO", color: "from-purple-400 to-purple-600", text: "text-white" };
    
    if (idx === 0) return { label: "1º ELITE", color: "from-[#fef08a] to-[#eab308]", text: "text-black" };
    if (idx === 1) return { label: "2º PREMIUM", color: "from-slate-200 to-slate-400", text: "text-black" };
    if (idx === 2) return { label: "3º SELECT", color: "from-orange-300 to-orange-500", text: "text-black" };
    return null;
  };

  const badge = getBadge(index);

  return (
    <div 
      onClick={handleCardClick}
      className={`premium-card relative group cursor-pointer shimmer-overlay ${compact ? 'rounded-xl' : ''}`}
    >
      {/* Top Badge */}
      {badge && (
        <div className={`absolute top-0 left-0 z-10 ${compact ? 'px-2 py-0.5 rounded-br-xl text-[8px]' : 'px-4 py-1.5 rounded-br-2xl text-[10px]'} font-black tracking-[0.2em] bg-gradient-to-r ${badge.color} ${badge.text} shadow-xl`}>
          {badge.label}
        </div>
      )}

      <div className={`flex ${compact ? 'flex-row items-center h-36' : 'flex-col h-full'}`}>
        {/* Logo & Rating Section */}
        <div className={`${compact ? 'w-[35%] p-3 border-r border-b-0' : 'p-8 flex flex-col items-center justify-center border-b'} flex flex-col items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent border-white/5`}>
          <div className={`relative ${compact ? 'w-24 h-12 mb-2' : 'w-40 h-20 mb-6'} transition-transform duration-500 group-hover:scale-110`}>
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`flex items-center gap-1 ${compact ? 'mb-1' : 'mb-2'}`}>
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`${compact ? 'w-3.5 h-3.5' : 'w-5 h-5'} ${i < Math.floor(autoRating / 2) ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'text-white/10'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className={`${compact ? 'text-2xl' : 'text-4xl'} font-black text-white tracking-tighter`}>{autoRating.toFixed(1)}</span>
              <span className={`${compact ? 'text-[10px]' : 'text-sm'} font-bold text-white/30`}>/10</span>
            </div>
            {!compact && (
              <span className="text-[10px] text-white/40 uppercase tracking-tighter mt-1">{autoVotes.toLocaleString()} votos</span>
            )}
          </div>
        </div>

        {/* Bonus & CTA Section */}
        <div className={`${compact ? 'w-[65%] p-4 h-full' : 'p-8 h-full'} flex flex-col justify-between bg-slate-900/40`}>
          <div className={`${compact ? 'mb-2' : 'mb-8'} text-center`}>
            <span className={`inline-block ${compact ? 'px-2 py-0.5 text-[8px] mb-1.5' : 'px-3 py-1 text-[10px] mb-4'} rounded-full bg-cyan-500/10 font-black text-cyan-400 uppercase tracking-[0.2em] border border-cyan-500/20`}>
              Bónus Exclusivo
            </span>
            <h3 className={`${compact ? 'text-base mb-2 leading-tight' : 'text-2xl mb-4 leading-tight'} font-black text-white group-hover:text-cyan-400 transition-colors`}>
              {brand.bonus}
            </h3>
            {!compact && (
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Pagamento Verificado
              </div>
            )}
          </div>

          <button 
            className={`w-full ${compact ? 'py-3 rounded-xl text-xs' : 'py-5 rounded-2xl text-sm'} bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-95`}
          >
            Jogar no {brand.name}
          </button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function ComplianceBar() {
  return (
    <div className="w-full bg-black/60 border-y border-white/5 py-6 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-red-500/50 flex items-center justify-center text-red-500 font-black text-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              18+
            </div>
            <span className="text-sm font-black text-white/90 uppercase tracking-widest">Apenas 18+</span>
          </div>
          
          <p className="text-[11px] text-slate-400 max-w-4xl leading-relaxed text-center lg:text-left font-medium uppercase tracking-wider">
            Jogue com responsabilidade. O jogo pode ser viciante. Se precisar de ajuda, contacte a Linha de Apoio ao Jogador. 
            Regulado pelo <span className="text-white/80 font-bold">SRIJ - Serviço de Regulação e Inspeção de Jogos</span>. 
            Visite <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-1 underline-offset-4">SRIJ</Link> para mais informações. 
            Linha de Apoio: <span className="text-white/80 font-bold">+351 211 167 300</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-24 md:py-40 overflow-hidden felt-texture">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
          <span className="text-xs md:text-sm font-black text-primary uppercase tracking-[0.2em]">
            Guia de Casinos Elite de Portugal {currentYear}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
          <span className="cyan-text">TOP 10</span> <br />
          <span className="gold-text">SÍTIOS DE CASINO</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
          Experiência premium, bónus exclusivos e os pagamentos mais rápidos do mercado. 
          A sua jornada de elite começa aqui.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { label: "Licenciado SRIJ", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "text-primary", bg: "bg-primary/10" },
            { label: "Melhores Casinos", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", color: "text-secondary", bg: "bg-secondary/10" },
            { label: "Levantamentos Imediatos", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-accent", bg: "bg-accent/10" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${badge.bg} flex items-center justify-center ${badge.color}`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                </svg>
              </div>
              <span className="font-black text-sm md:text-lg uppercase tracking-wider text-white/90">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

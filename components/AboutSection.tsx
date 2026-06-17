export default function AboutSection() {
  return (
    <section id="guide" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            O NOSSO PADRÃO DE <span className="cyan-text">EXCELÊNCIA</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Our Reviews Stand Out */}
          <div className="p-10 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-xl casino-glow-cyan">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Elite Review Process
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Auditoria de Licença", desc: "Verificação em tempo real com o SRIJ." },
                { title: "Teste de Liquidez", desc: "Depósitos e levantamentos reais para testar a velocidade." },
                { title: "Análise de Algoritmo", desc: "Verificação de RNG e justiça nos jogos." },
                { title: "Suporte VIP", desc: "Avaliação da qualidade e tempo de resposta 24/7." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                  <div>
                    <span className="block font-black text-white uppercase tracking-wider text-sm mb-1">{item.title}</span>
                    <span className="text-slate-400 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="p-10 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-xl casino-glow-purple">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              Compromisso Ético
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              A nossa prioridade é a sua segurança. Promovemos o jogo como entretenimento e apoiamos ativamente as diretrizes de Jogo Responsável em Portugal.
            </p>
            <div className="grid gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-black text-white uppercase tracking-widest text-xs">Linha de Vida</span>
                  <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-[10px] font-black">GRATUITO</span>
                </div>
                <span className="block text-2xl font-black text-purple-400">1414</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-black text-white uppercase tracking-widest text-xs">Portal SICAD</span>
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <a href="http://www.sicad.pt" target="_blank" className="text-cyan-400 font-black underline decoration-2 underline-offset-4">www.sicad.pt</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />
    </section>
  );
}

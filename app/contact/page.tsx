export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-8">Contacto</h1>
      <div className="prose prose-invert max-w-none text-white/70 space-y-6">
        <p>
          Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir de si. A nossa equipa está disponível para ajudar com qualquer questão relacionada com o nosso site ou com os casinos listados.
        </p>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Informações de Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-cyan-400 font-bold">Email:</span>
              <a href="mailto:admin@topsitiosdecasino.org" className="text-white hover:text-cyan-400 transition-colors">
                admin@topsitiosdecasino.org
              </a>
            </div>
            <p className="text-sm text-white/50 mt-4">
              Tentamos responder a todas as mensagens num prazo de 24 a 48 horas úteis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

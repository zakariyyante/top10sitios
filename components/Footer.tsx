import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0414] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="flex items-center mb-10">
            <div className="relative w-56 h-14">
              <Image
                src="/logo.png"
                alt="Top 10 Sitios de Casino"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Links Rápidos</h4>
              <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">Início</Link>
              <Link href="/#brands" className="text-sm text-white/50 hover:text-white transition-colors">Top Casinos</Link>
              <Link href="/#guide" className="text-sm text-white/50 hover:text-white transition-colors">Guia de Avaliação</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
              <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Política de Privacidade</Link>
              <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Termos de Serviço</Link>
              <Link href="/advertiser-disclosure" className="text-sm text-white/50 hover:text-white transition-colors">Divulgação de Publicidade</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Suporte</h4>
              <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">Sobre Nós</Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contacto</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Responsável</h4>
              <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">SRIJ Portugal</Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-wider">
            AVISO: O topsitiosdecasino.org é um portal de afiliados independente. As nossas avaliações são baseadas na nossa experiência e pesquisa. 
            Recebemos comissões dos operadores listados. O jogo é proibido para menores de 18 anos. 
            Todos os operadores listados são regulados pelo SRIJ - Serviço de Regulação e Inspeção de Jogos de Portugal.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-8 grayscale opacity-50">
          <div className="relative w-10 h-10">
            <Image src="/18plus.svg" alt="18+" fill className="object-contain" />
          </div>
          <div className="relative w-24 h-10">
            <Image src="/srij.svg" alt="SRIJ" fill className="object-contain" />
          </div>
          <div className="relative w-32 h-10">
            <Image src="/begambleaware.svg" alt="BeGambleAware" fill className="object-contain" />
          </div>
          <div className="relative w-24 h-10">
            <Image src="/GamCare.svg" alt="GamCare" fill className="object-contain" />
          </div>
          <div className="relative w-16 h-10">
            <Image src="/IBAS.svg" alt="IBAS" fill className="object-contain" />
          </div>
        </div>

        <div className="text-center border-t border-white/5 pt-8">
          <p className="text-xs text-white/20">
            © {currentYear} topsitiosdecasino.org. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

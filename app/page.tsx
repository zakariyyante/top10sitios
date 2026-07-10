import { brands } from "./data/brands";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import ComplianceBar from "@/components/ComplianceBar";
import AboutSection from "@/components/AboutSection";
import MobileModal from "@/components/MobileModal";
import { headers } from "next/headers";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : undefined;
  
  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "";
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  const filteredBrands = brands.filter(brand => {
    if (brand.isMobile) {
      return isMobileDevice && gclid;
    }
    return true;
  });

  return (
    <>
      <Hero />
      
      <section id="brands" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
              TOP 10 CASINOS <span className="cyan-text">ELITE</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white/10" />
              <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">ATUALIZADO EDITORIALMENTE - 10 DE JULHO DE 2026</p>
              <div className="h-px w-12 bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                index={index} 
                gclid={gclid}
              />
            ))}
          </div>
        </div>
      </section>

      <ComplianceBar />
      
      <AboutSection />

      <MobileModal brands={filteredBrands} />
    </>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top 10 Melhores Sites de Casino em Portugal 2026",
  description: "Descubra os melhores sites de casino online em Portugal. Avaliações de especialistas, bónus exclusivos e sites licenciados pelo SRIJ.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        <main min-h-screen>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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

const GA_MEASUREMENT_ID = "AW-18247199675";
const CONVERSION_LABEL = "XXXXXXXXXXXX"; // Replace with actual label

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  // window.location = url; // Handled by BrandCard
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${GA_MEASUREMENT_ID}/${CONVERSION_LABEL}',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
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

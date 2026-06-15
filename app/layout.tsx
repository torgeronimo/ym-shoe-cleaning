import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Space_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Preloader from "./components/ui/preloader";

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
});

const montserrat = Montserrat({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
<<<<<<< HEAD
      className={`${bebasNeue.variable} ${spaceMono.variable} ${barlowCondensed.variable} ${barlowCondensed.variable}${montserrat.variable} h-full antialiased `}
=======
      className={`${bebasNeue.variable} ${spaceMono.variable} ${barlowCondensed.variable} ${barlowCondensed.variable}${montserrat.variable} h-full antialiased scroll-smooth`}
>>>>>>> feat/footer-modification
    >
      <body className="min-h-full flex flex-col">
        <Preloader minDuration={2200} />
        {children}
        </body>
    </html>
  );
}

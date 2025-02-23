import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Data from '@/data/data'

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: `${Data.primer_nombre} ${Data.segundo_nombre} - Mis 15 años`,
  description: `${Data.descripcion}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} bg-melon`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Data from '@/data/data'

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
        className={`font-montserrat bg-melon`}
      >
        {children}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Capillarte | Especialistas en Injerto Capilar',
  description: 'Confianza, tecnología y experiencia en microinjerto capilar, tricología y estética facial.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}

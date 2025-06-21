import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Injerto Capilar en Zapopan | Capillarte',
  description: 'Especialistas en injerto capilar con técnica FUE Zafiro. Resultados naturales, mínima invasión y recuperación rápida. Agenda tu consulta hoy.',
  keywords: ['injerto capilar', 'microinjerto', 'tricología', 'FUE Zafiro', 'capilar', 'calvicie', 'Zapopan'],
  icons: {
    icon: '/CapillarteLogo.png', // Asegúrate que este archivo exista en /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <link rel="icon" href="/CapillarteLogo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

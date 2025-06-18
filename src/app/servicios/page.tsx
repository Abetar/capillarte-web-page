import SeccionServicios from '../components/SeccionServiciosCompleta'
import Navbar from '../components/Navbar'
import FooterSitio from '../components/FooterSitio'
import HeroSection from '../components/HeroSection'
import SeccionZonasCapilares from '../components/SeccionZonasCapilares'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAPILLARTE',
  description: 'Especialistas en salud capilar, injertos FUE y diagnóstico clínico personalizado.',
  keywords: ['tricología', 'injerto capilar', 'alopecia', 'dermatología', 'clínica capilar'],
   icons: {
    icon: "/CapillarteLogo.png", // ruta relativa desde /public
  },
}


export default function ServiciosPage() {
    return (
        <>
            <Navbar />
            <HeroSection
                titulo="Técnica FUE Zafiro: Precisión y Naturalidad en Cada Implante"
                subtitulo="Descubre la última generación en microinjerto capilar. Menos invasiva, mayor densidad, resultados naturales y recuperación más rápida gracias a la precisión de hojas de zafiro."
                ctaTexto="Agenda tu consulta"
                ctaLink="https://wa.me/5213313572842?text=Hola%2C%20quiero%20agendar%20una%20valoración%20capilar"
                imagenSrc="/fue_zafiro.jpg"
                align="left"
                fullHeight={true}
            />
            <SeccionServicios />
            <SeccionZonasCapilares />
            <FooterSitio />
        </>
    )
}

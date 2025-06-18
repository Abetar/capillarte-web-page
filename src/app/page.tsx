import type { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import SeccionCompromiso from './components/SeccionCompromiso'
import SeccionServicios from './components/SeccionServicios'
// import SeccionZonasCapilares from './components/SeccionZonasCapilares'
import SeccionPerfilDoctor from './components/SeccionPerfil'
import BotonWhatsapp from './components/BotonWhatsApp'
import FooterSitio from './components/FooterSitio'
// import BeforeAfterSlider from './components/BeforeAfterSlider'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Clínica Capilar | PU Tricología',
  description: 'Especialistas en salud capilar, injertos FUE y diagnóstico clínico personalizado.',
  keywords: ['tricología', 'injerto capilar', 'alopecia', 'dermatología', 'clínica capilar'],
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        titulo="Confianza que comienza desde la raíz"
        subtitulo="Especialistas en tricología e injerto capilar con tecnología de punta."
        ctaTexto="Agenda tu consulta"
        ctaLink="https://wa.me/5213313572842?text=Hola%2C%20quiero%20agendar%20una%20valoración%20capilar"
        imagenSrc="/Capillarte_2.jpg"
        align="left"
        fullHeight={true}
      />
      <SeccionCompromiso />
      <SeccionServicios />
      {/* <SeccionZonasCapilares />
      <BeforeAfterSlider /> */}
      <SeccionPerfilDoctor />
      <BotonWhatsapp />
      <FooterSitio />
    </>
  )
}
import type { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import SeccionCompromiso from './components/SeccionCompromiso'
import SeccionServicios from './components/SeccionServicios'
import SeccionZonasCapilares from './components/SeccionZonasCapilares'
import SeccionPerfilDoctor from './components/SeccionPerfil'
import BotonWhatsapp from './components/BotonWhatsapp'
import FooterSitio from './components/FooterSitio'

export const metadata: Metadata = {
  title: 'Clínica Capilar | PU Tricología',
  description: 'Especialistas en salud capilar, injertos FUE y diagnóstico clínico personalizado.',
  keywords: ['tricología', 'injerto capilar', 'alopecia', 'dermatología', 'clínica capilar'],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SeccionCompromiso />
      <SeccionServicios />
      <SeccionZonasCapilares />
      <SeccionPerfilDoctor />
      <BotonWhatsapp />
      <FooterSitio />
    </>
  )
}
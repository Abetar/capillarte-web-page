'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            // className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 md:px-16 lg:px-24 flex justify-between items-center"
            className="sticky top-0 z-50 bg-white shadow-md"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/CapillarteLogo.png"
                        alt="Logo Capillarte"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    <span className="text-teal-700 font-bold text-xl tracking-tight">CAPILL<span className='text-teal-700 font-normal text-xl tracking-tight'>ARTE</span></span>
                </Link>

                {/* Botón hamburguesa en mobile */}
                <button
                    className="md:hidden text-slate-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Navegación en desktop */}
                <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-700">
                    <Link href="/servicios" className="hover:text-blue-700 transition">Servicios</Link>
                    <Link href="/servicios#zonas" className="hover:text-blue-700 transition">Zonas</Link>
                    <Link href="#perfil" className="hover:text-blue-700 transition">Sobre el Dr.</Link>
                    <Link href="#resultados" className="hover:text-blue-700 transition">Resultados</Link>
                    <a
                        href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20agendar%20una%20consulta"
                        className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-1.5 rounded transition"
                    >
                        Agenda Ahora
                    </a>
                </nav>
            </div>

            {/* Menú desplegable en mobile */}
            {menuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-slate-700">
                    <Link href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
                    <Link href="#zonas" onClick={() => setMenuOpen(false)}>Zonas</Link>
                    <Link href="#perfil" onClick={() => setMenuOpen(false)}>Sobre el Dr.</Link>
                    <Link href="#resultados" onClick={() => setMenuOpen(false)}>Resultados</Link>
                    <a
                        href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20agendar%20una%20consulta"
                        className="bg-blue-900 text-white px-4 py-2 rounded text-center hover:bg-blue-950 transition"
                    >
                        Agenda Ahora
                    </a>
                </nav>
            )}
        </motion.header>
    )
}

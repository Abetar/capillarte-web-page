// components/SeccionZonasCapilares.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const zonas = [
  { nombre: 'Línea Frontal', id: 'frontal', color: '#0d9488' },
  { nombre: 'Entradas Temporales', id: 'entradas', color: '#0d9488' },
  { nombre: 'Zona Media Superior', id: 'superior', color: '#0d9488' },
  { nombre: 'Coronilla', id: 'coronilla', color: '#0d9488' },
]

export default function SeccionZonasCapilares() {
  const [zonaActiva, setZonaActiva] = useState<string | null>(null)

  return (
    <section className="bg-white py-20 px-6 md:px-24 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
        Zonas comunes para injerto capilar
      </h2>
      <p className="text-gray-600 mb-8">
        Pasa el cursor sobre las zonas para conocer más.
      </p>

      <div className="relative w-full max-w-md mx-auto">
        <svg viewBox="0 0 200 260" className="w-full h-auto">
          <ellipse cx="100" cy="130" rx="80" ry="120" fill="#e5e7eb" stroke="#94a3b8" strokeWidth="2" />

          <path
            id="frontal"
            d="M60,60 Q100,40 140,60 Q130,80 70,80 Z"
            fill={zonaActiva === 'Línea Frontal' ? '#0d9488' : '#a5f3fc'}
            stroke="#0d9488"
            strokeWidth={zonaActiva === 'Línea Frontal' ? 2 : 1}
            onMouseEnter={() => setZonaActiva('Línea Frontal')}
            onMouseLeave={() => setZonaActiva(null)}
          />

          <path
            id="entradas"
            d="M50,90 Q40,70 60,60 Q70,75 60,90 Z"
            fill={zonaActiva === 'Entradas Temporales' ? '#0d9488' : '#a5f3fc'}
            stroke="#0d9488"
            strokeWidth={zonaActiva === 'Entradas Temporales' ? 2 : 1}
            onMouseEnter={() => setZonaActiva('Entradas Temporales')}
            onMouseLeave={() => setZonaActiva(null)}
          />

          <path
            id="superior"
            d="M70,100 Q100,120 130,100 Q130,140 70,140 Z"
            fill={zonaActiva === 'Zona Media Superior' ? '#0d9488' : '#a5f3fc'}
            stroke="#0d9488"
            strokeWidth={zonaActiva === 'Zona Media Superior' ? 2 : 1}
            onMouseEnter={() => setZonaActiva('Zona Media Superior')}
            onMouseLeave={() => setZonaActiva(null)}
          />

          <circle
            cx="100" cy="180" r="25"
            fill={zonaActiva === 'Coronilla' ? '#0d9488' : '#a5f3fc'}
            stroke="#0d9488"
            strokeWidth={zonaActiva === 'Coronilla' ? 2 : 1}
            onMouseEnter={() => setZonaActiva('Coronilla')}
            onMouseLeave={() => setZonaActiva(null)}
          />
        </svg>

        {zonaActiva && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-teal-100 text-teal-800 px-4 py-2 rounded shadow font-bold text-lg"
          >
            {zonaActiva}
          </motion.div>
        )}
      </div>
    </section>
  )
}

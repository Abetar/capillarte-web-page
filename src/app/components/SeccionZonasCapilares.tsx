'use client'
import Image from 'next/image'
import { useState } from 'react'

const zonas = [
  { nombre: 'Zona Occipital', top: '16%', left: '50%', width: '30%', height: '22%' },
  { nombre: 'Zona Superior', top: '38%', left: '50%', width: '50%', height: '25%' },
  { nombre: 'Zona Parietal Izquierda', top: '40%', left: '20%', width: '20%', height: '20%' },
  { nombre: 'Zona Parietal Derecha', top: '40%', left: '80%', width: '20%', height: '20%' },
  { nombre: 'Zona Frontal', top: '72%', left: '50%', width: '40%', height: '16%' },
]

export default function SeccionZonasCapilares() {
  const [zonaActiva, setZonaActiva] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-800 ">
        Áreas comunes para injerto capilar
      </h2>

      <div className="relative w-[300px] md:w-[400px] mx-auto">
        {/* Imagen base */}
        <Image
          src="/images/Head_top-nobg.png"
          alt="Cabeza superior"
          width={500}
          height={500}
          className="w-full h-auto pointer-events-none select-none"
        />

        {/* Zonas visibles */}
        {zonas.map((zona, index) => (
          <div
            key={index}
            className={`absolute rounded-full border border-teal-500 bg-teal-200/50
              hover:bg-teal-300/80 transition duration-300`}
            style={{
              top: zona.top,
              left: zona.left,
              width: zona.width,
              height: zona.height,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setZonaActiva(zona.nombre)}
            onMouseLeave={() => setZonaActiva(null)}
          />
        ))}

        {/* Texto de zona activa */}
        {zonaActiva && (
          <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-800 px-4 py-2 rounded shadow text-sm font-semibold">
            {zonaActiva}
          </div>
        )}
      </div>
    </section>
  )
}

'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import fondoHero from '/public/Capillarte_1.jpg'

export default function SeccionCompromiso() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 })

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-24 bg-white text-center overflow-hidden">
      {/* Fondo */}
      <Image
        src={fondoHero}
        alt="Consultorio Capilar"
        fill
        className="object-cover opacity-20"
        priority
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Recuperar tu cabello es recuperar tu confianza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-gray-700 mb-8"
        >
          En Capillarte, combinamos experiencia médica, tecnología capilar y atención empática para ayudarte a verte y sentirte mejor. Tu salud capilar es nuestra prioridad.
        </motion.p>

        <motion.a
          
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          href="https://wa.me/5213313572842?text=Hola%2C%20quiero%20saber%20más%20sobre%20el%20tratamiento%20capilar"
          target='_blank'
          className="bg-blue-900 hover:bg-blue-950 text-white font-medium py-2 px-6 rounded-md shadow-md transition text-sm md:text-base"
        >
          Empieza tu tratamiento hoy
        </motion.a>
      </div>
    </section>
  )
}

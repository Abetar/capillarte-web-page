'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import doctorImg from '/public/Capillarte_2.jpg'

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Columna izquierda animada */}
      <motion.div
        className="bg-teal-200 flex flex-col justify-center px-8 py-12 md:w-1/2"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
          Tu tratamiento capilar empieza con una consulta profesional
        </h1>
        <p className="text-base text-slate-700 mb-5">
          Diagnóstico clínico, soluciones para alopecia y microinjerto con enfoque médico. Recupera tu confianza con un plan personalizado.
        </p>
        <motion.a
          href="https://wa.me/5213313572842?text=Hola%2C%20quiero%20agendar%20una%20valoración%20capilar"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-5 rounded transition w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target='_blank'
        >
          Agendar valoración capilar
        </motion.a>
      </motion.div>

      {/* Columna derecha con imagen animada y tamaño completo */}
      <motion.div
        className="relative md:w-1/2 h-[300px] md:h-full aspect-[3/4] md:aspect-auto"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          src={doctorImg}
          alt="Especialista capilar"
          fill
          className="object-contain md:object-cover"
          priority
        />
      </motion.div>
    </section>
  )
}

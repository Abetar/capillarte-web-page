'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import FooterSitio from '../components/FooterSitio'


const imagenes = [
    '/implantacion_nutrientes.jpg',
    '/injerto_barba.jpg',
    '/injerto_cejas.jpg',
    '/injerto_coronilla.jpg',
    '/injerto_cabeza_entradas.jpg',
    '/injerto_entradas_2.jpg',
    '/resultados_señor.jpg',
    '/Capillarte_2.jpg'
]

export default function ResultadosMultimedia() {
    const [imagenActiva, setImagenActiva] = useState<string | null>(null)
    const [mute, setMute] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            const random = imagenes[Math.floor(Math.random() * imagenes.length)]
            setImagenActiva(random)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Navbar />
            <section className="bg-white">

                {/* HERO CON VIDEO */}
                <div className="relative w-full h-[70vh] overflow-hidden">
                    <video
                        src="/video_injerto.mp4"
                        autoPlay
                        loop
                        muted={mute}
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 max-w-3xl">
                            Resultados visibles con técnicas modernas de implante capilar
                        </h1>
                        <p className="text-white text-base md:text-lg max-w-xl mb-6">
                            Observa cómo la confianza se transforma con microinjerto capilar, mesoterapia y tratamientos de última generación.
                        </p>
                        <button
                            onClick={() => setMute(!mute)}
                            className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
                        >
                            {mute ? 'Activar sonido' : 'Silenciar'}
                        </button>
                    </div>
                </div>

                {/* SECCIÓN TIPO FEED */}
                <div className="py-16 px-4 md:px-24 text-center bg-gray-50">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                        Galería de Casos Reales
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {imagenes.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Resultado ${i + 1}`}
                                className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform"
                            />
                        ))}
                    </div>

                    {/* Botones CTA */}
                    <div className="mt-10 flex justify-center gap-6">
                        <a
                            href="https://www.instagram.com/capill.arte/"
                            target="_blank"
                            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full flex items-center gap-2"
                        >
                            <FaInstagram /> Instagram
                        </a>
                        <a
                            href="https://www.tiktok.com/@capillarte"
                            target="_blank"
                            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full flex items-center gap-2"
                        >
                            <FaTiktok /> TikTok
                        </a>
                    </div>
                </div>

                {/* SECCIÓN DE RESEÑAS */}
                <div className="py-20 px-6 md:px-24 bg-white text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
                        Lo que opinan nuestros pacientes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[{
                            nombre: 'Andrea Cardenas.',
                            texto: 'Excelente atención, muy profesional el doctor, y excelentes resultados en poco tiempo.',
                            link: 'https://maps.app.goo.gl/RQMDGKNQgSZY7DGw5'
                        }, {
                            nombre: 'Ricardo Duran.',
                            texto: 'La atención es excelente, el Dr. Adrián explicó todas mis dudas sobre la aplicación de medicamento para fortalecer los folículos y a 3 meses de la aplicación las zonas afectadas se han recuperado al 100%.',
                            link: 'https://maps.app.goo.gl/NLHjyn57FZMJ5vvR6'
                        }, {
                            nombre: 'Edgar Jose Rodriguez Rodriguez',
                            texto: 'La verdad 100% recomendable, atención, confianza ahora si que de todo me vine contento desde el trabajo de injerto de pelo, asta la atención del doctor Adrian y sus compañeros',
                            link: 'https://maps.app.goo.gl/xaCPba4ZF7j8gdBK9'
                        }].map((review, i) => (
                            <motion.a
                                key={i}
                                href={review.link}
                                target="_blank"
                                whileHover={{ scale: 1.03 }}
                                className="block bg-gray-100 p-6 rounded-xl shadow-sm text-left transition hover:shadow-md"
                            >
                                <p className="text-sm text-gray-600 italic mb-2">“{review.texto}”</p>
                                <span className="text-sm font-semibold text-slate-800">— {review.nombre}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
            <FooterSitio />
        </>
    )
}

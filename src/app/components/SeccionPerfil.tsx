'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    GraduationCap,
    Hospital,
    BookOpenCheck,
    Stethoscope,
    Microscope,
    MonitorCheck,
    Instagram,
    Facebook
} from 'lucide-react'

const credenciales = [
    {
        icon: <BookOpenCheck className="text-teal-600 w-5 h-5" />,
        titulo: 'Médico Cirujano',
        detalle: 'Universidad del Valle de Atemajac (2018)',
    },
    {
        icon: <Hospital className="text-teal-600 w-5 h-5" />,
        titulo: 'Residencia en Hospital Salud de los Enfermos',
        detalle: '(2019)',
    },
    {
        icon: <Hospital className="text-teal-600 w-5 h-5" />,
        titulo: 'Estancia en Hospital Regional Ciudad Guzmán',
        detalle: '(2020)',
    },
    {
        icon: <Stethoscope className="text-teal-600 w-5 h-5" />,
        titulo: 'Médico pasante',
        detalle: 'Centro de Salud San Gabriel (2021)',
    },
    {
        icon: <Hospital className="text-teal-600 w-5 h-5" />,
        titulo: 'Unidad Médica FARMALIFE',
        detalle: '(2020 - 2023)',
    },
    {
        icon: <GraduationCap className="text-teal-600 w-5 h-5" />,
        titulo: 'Implante Capilar Técnica F.U.E.',
        detalle: 'Instituto Panamericano de Profesionales Científicos, UNAM (2024)',
    },
    {
        icon: <GraduationCap className="text-teal-600 w-5 h-5" />,
        titulo: 'Máster en Tricología y Microinjerto Capilar',
        detalle: 'Universidad en Línea de Madrid (UDIMA), 2024',
    },
    {
        icon: <Microscope className="text-teal-600 w-5 h-5" />,
        titulo: 'Publicación',
        detalle: '“Diferencias en el dímero D en pacientes diabéticos y no diabéticos con diagnóstico de TVP”',
    },
    {
        icon: <MonitorCheck className="text-teal-600 w-5 h-5" />,
        titulo: 'Actualización Profesional',
        detalle: 'Instituto Panamericano de Profesionales Científicos (2024)',
    },
]

export default function SeccionPerfilDoctor() {
    return (
        <section className="bg-white py-20 px-6 md:px-24" style={{ backgroundColor: '#CBFBF1' }}>
            <motion.h2
                className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Perfil del Especialista
            </motion.h2>

            <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
                {/* Imagen */}
                <motion.div
                    className="md:w-1/3 flex justify-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/capillarte_dr.jpeg"
                        alt="Doctor especialista"
                        width={300}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </motion.div>

                {/* Línea de tiempo */}
                <div className="md:w-2/3 border-l-4 border-teal-500 pl-6 space-y-6">
                    {credenciales.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[30px] top-1">{item.icon}</div>
                            <h4 className="text-md font-semibold text-slate-800">{item.titulo}</h4>
                            <p className="text-sm text-gray-600">{item.detalle}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-12 flex justify-center gap-6">
                <a
                    href="https://www.instagram.com/capill.arte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                >
                    Instagram
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61560880023653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                >
                    Facebook
                </a>
            </div>
        </section>
    )
}

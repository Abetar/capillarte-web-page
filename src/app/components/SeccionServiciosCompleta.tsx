'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    MonitorSmartphone,
    Stethoscope,
    Droplets,
    Scissors,
    UserRound,
    Pill,
    CalendarClock,
    Plus,
    Droplet,
    UserCircle,
    X
} from 'lucide-react'

const servicios = [
    {
        titulo: 'Valoración en línea',
        descripcion: 'Valoración capilar personalizada desde la comodidad de tu casa.',
        detalles: 'Se realiza una evaluación médica capilar utilizando videollamada.',
        imagenes: [],
        icon: <MonitorSmartphone className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
        titulo: 'Consulta presencial',
        descripcion: 'Diagnóstico médico clínico en consultorio.',
        detalles: 'Evaluación profesional con tricoscopía.',
        imagenes: [],
        icon: <Stethoscope className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
        titulo: 'Microinjerto capilar (FUE)',
        descripcion: 'Técnica avanzada para restaurar zonas con pérdida de cabello.',
        detalles: 'Se extraen folículos uno por uno.',
        imagenes: ['/fue_zafiro.jpg', '/Capillarte_2.jpg'],
        icon: <Scissors className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
        titulo: 'Mesoterapia capilar',
        descripcion: 'Aplicación de nutrientes en el cuero cabelludo.',
        detalles: 'Se aplican complejos vitamínicos con microinyecciones.',
        imagenes: ['/implantacion_nutrientes.jpg'],
        icon: <Droplets className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
        titulo: 'Injerto Capilar Facial',
        descripcion: 'Restauración estética de barba, cejas y otras áreas.',
        detalles: 'Procedimiento quirúrgico mínimamente invasivo.',
        imagenes: ['injerto_barba.jpg', 'injerto_cejas.jpg'],
        icon: <UserRound className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
        titulo: 'Aplicación de dutasteride',
        descripcion: 'Tratamiento médico para frenar la caída capilar hormonal.',
        detalles: 'Medicamento antiandrogénico para tratar la alopecia androgenética.',
        imagenes: [],
        icon: <Pill className="w-10 h-10 text-blue-600 mb-4" />,
    },
    {
        titulo: 'Consulta subsecuente',
        descripcion: 'Seguimiento clínico para evaluar la evolución del tratamiento.',
        detalles: 'Evaluación del progreso y ajustes en el tratamiento.',
        imagenes: [],
        icon: <CalendarClock className="w-10 h-10 text-blue-600 mb-4" />,
    },
    {
        titulo: 'PRP (Plasma Rico en Plaquetas)',
        descripcion: 'Estimulación del crecimiento capilar con factores regenerativos.',
        detalles: 'Tratamiento que utiliza la sangre del paciente para promover la regeneración capilar.',
        imagenes: ['/implantacion_nutrientes.jpg'],
        icon: <Droplet className="w-10 h-10 text-blue-600 mb-4" />,
    },
    {
        titulo: 'Microinjerto frontal–coronilla',
        descripcion: 'Redensificación capilar en zonas clave con técnica FUE.',
        detalles: 'Procedimiento quirúrgico para restaurar el cabello en la zona frontal y coronilla.',
        imagenes: ['/injerto_coronilla.jpg'],
        icon: <Scissors className="w-10 h-10 text-blue-600 mb-4" />,
    },
    {
        titulo: 'Tricología + Cirugía Capilar',
        descripcion: 'Análisis clínico y tratamiento quirúrgico para alopecia avanzada.',
        detalles: 'Combinación de diagnóstico médico y técnica quirúrgica para casos complejos de alopecia.',
        imagenes: [],
        icon: <Stethoscope className="w-10 h-10 text-blue-600 mb-4" />,
    },
    {
        titulo: 'Primera visita de medicina estética',
        descripcion: 'Evaluación estética facial inicial para tratamientos complementarios.',
        detalles: 'Consulta para valorar posibles tratamientos estéticos complementarios al injerto capilar.',
        imagenes: [],
        icon: <UserCircle className="w-10 h-10 text-blue-600 mb-4" />,
    },
]

export default function SeccionServicios() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    const [servicioActivo, setServicioActivo] = useState<null | typeof servicios[0]>(null)

    return (
        <motion.section
            ref={ref}
            className="bg-blue-100 py-20 px-4 sm:px-6 md:px-16 lg:px-24 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h3 className="text-sm uppercase tracking-wide text-teal-700 mb-2">
                Nuestros Servicios
            </h3>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-10">
                Atención capilar especializada y de alta precisión
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {servicios.map((servicio, index) => (
                    <>
                        <motion.div
                            key={index}
                            className={`bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition text-center cursor-pointer ${index === 0 ? 'animate-pulse' : ''
                                }`}
                            onClick={() => setServicioActivo(servicio)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {servicio.icon}
                            <h4 className="text-lg font-semibold text-slate-800 mb-2">{servicio.titulo}</h4>
                            <p className="text-sm text-gray-600 mb-4">{servicio.descripcion}</p>
                            <Plus className="w-5 h-5 text-blue-500" />
                        </motion.div>
                    </>


                ))}
            </div>

            {servicioActivo && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white p-6 rounded-xl max-w-lg w-full relative text-left overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setServicioActivo(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h3 className="text-xl font-semibold text-teal-700 mb-2">{servicioActivo.titulo}</h3>
                        <p className="text-gray-700 text-sm mb-2">{servicioActivo.descripcion}</p>
                        <p className="text-gray-600 text-sm whitespace-pre-line mb-4">{servicioActivo.detalles}</p>

                        {servicioActivo.imagenes?.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {servicioActivo.imagenes.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`Imagen de ${servicioActivo.titulo}`}
                                        className="rounded shadow w-full object-cover"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </motion.section>
    )
}

'use client'

import { useRef } from 'react' import { motion, useInView } from 'framer-motion' import { MonitorSmartphone, Stethoscope, Droplets, Scissors, UserRound, Pill, CalendarClock, Plus, Droplet, UserCircle, } from 'lucide-react'

const servicios = [ { titulo: 'Consulta en línea', descripcion: 'Valoración capilar personalizada desde la comodidad de tu casa.', icon: <MonitorSmartphone className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Consulta presencial', descripcion: 'Diagnóstico médico clínico de tu salud capilar en consultorio.', icon: <Stethoscope className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Mesoterapia capilar', descripcion: 'Aplicación de nutrientes en el cuero cabelludo para fortalecer folículos.', icon: <Droplets className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Microinjerto capilar (FUE)', descripcion: 'Técnica avanzada para restaurar zonas con pérdida de cabello.', icon: <Scissors className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Injerto capilar facial', descripcion: 'Restauración estética de barba, cejas u otras zonas.', icon: <UserRound className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Aplicación de dutasteride', descripcion: 'Tratamiento médico para frenar la caída capilar hormonal.', icon: <Pill className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Consulta subsecuente', descripcion: 'Seguimiento clínico para evaluar la evolución del tratamiento.', icon: <CalendarClock className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'PRP (Plasma Rico en Plaquetas)', descripcion: 'Estimulación del crecimiento capilar con factores regenerativos.', icon: <Droplet className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Microinjerto frontal–coronilla', descripcion: 'Redensificación capilar en zonas clave con técnica FUE.', icon: <Scissors className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Tricología + Cirugía Capilar', descripcion: 'Análisis clínico y tratamiento quirúrgico para alopecia avanzada.', icon: <Stethoscope className="w-10 h-10 text-teal-600 mb-4" />, }, { titulo: 'Primera visita de medicina estética', descripcion: 'Evaluación estética facial inicial para tratamientos complementarios.', icon: <UserCircle className="w-10 h-10 text-teal-600 mb-4" />, }, ]

export default function SeccionServicios() { const ref = useRef(null) const isInView = useInView(ref, { once: false, amount: 0.3 })

return (
    <section className="bg-teal-100 py-20 px-4 sm:px-6 md:px-16 lg:px-24 text-center" ref={ref}>
        <motion.h3
            className="text-sm uppercase tracking-wide text-teal-700 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
        >
            Nuestros Servicios
        </motion.h3>

        <motion.h2
            className="text-2xl md:text-3xl font-semibold text-slate-800 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1, duration: 0.5 }}
        >
            Atención capilar especializada y de alta precisión
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.15 * index, duration: 0.6 }}
                >
                    {servicio.icon}
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{servicio.titulo}</h4>
                    <p className="text-sm text-gray-600 mb-4">{servicio.descripcion}</p>
                    <Plus className="w-5 h-5 text-teal-500" />
                </motion.div>
            ))}
        </div>
    </section>
)

}


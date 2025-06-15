'use client'

import { motion } from 'framer-motion'

export default function SeccionAntesDespuesEstatico() {
    const casos = [
        {
            antes: '/Before-After3_1.JPG',
            despues: '/Before-After3_2.JPG',
        },
        {
            antes: '/Before-After2_1.JPG',
            despues: '/Before-After2_2.JPG',
        },
        {
            antes: '/Before-After-1.JPG',
            despues: '/Before-After-1_1.JPG',
        },
        {
            antes: '/Before-After4_1.jpg',
            despues: '/Before-After4_2.jpg',
        },
    ]

    return (
        <section
            className="py-20 px-6 md:px-24 text-center"
            style={{ backgroundColor: '#CBFBF1' }}
        >
            <motion.h2
                className="text-2xl md:text-3xl font-semibold text-slate-800 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                Resultados visibles de nuestros pacientes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {casos.map((caso, index) => (
                    <motion.div
                        key={index}
                        className="bg-teal-50 rounded-lg shadow p-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.6 }}
                        viewport={{ once: false }}
                    >
                        <h3 className="text-lg font-medium text-slate-700 mb-2">Caso #{index + 1}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <img
                                    src={caso.antes}
                                    alt={`Antes ${index + 1}`}
                                    className="rounded w-full object-cover"
                                />
                                <p className="mt-2 text-sm text-gray-600 font-bold">Antes</p>
                            </div>
                            <div>
                                <img
                                    src={caso.despues}
                                    alt={`Después ${index + 1}`}
                                    className="rounded w-full object-cover"
                                />
                                <p className="mt-2 text-sm text-gray-600 font-bold">Después</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

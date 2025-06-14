'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SeccionPerfilDoctor() {
    return (
        <section className="bg-white py-20 px-6 md:px-24 text-center">
            <motion.h2
                className="text-2xl md:text-3xl font-bold text-slate-800 mb-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Conoce al Doctor
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                {/* Imagen del Doctor */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/capillarte_dr.jpeg"
                        alt="Doctor especialista"
                        width={400}
                        height={500}
                        className="rounded-xl shadow-lg mx-auto"
                    />
                </motion.div>

                {/* Credenciales */}
                <motion.div
                    className="md:w-1/2 text-left space-y-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-teal-700">Formación y Experiencia</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>MEDICO CIRUJANO - Universidad del Valle de Atemajac (2018)</li>
                        <li>Residencia - Hospital Salud de los Enfermos (2019)</li>
                        <li>Hospital Regional Ciudad Guzmán (2020)</li>
                        <li>Médico Pasante - Centro de Salud San Gabriel (2021)</li>
                        <li>Unidad Médica FARMALIFE (2020-2023)</li>
                        <li>INSTITUTO PANAMERICANO DE PROFESIONALES CIENTÍFICOS (2024)</li>
                        <li>Implante Capilar Técnica F.U.E. - INSTITUTO PANAMERICANO (2024)</li>
                        <li>Implante Capilar Técnica F.U.E. - UNAM (2024)</li>
                        <li>Universidad en Línea de Madrid (UDIMA) (2024)</li>
                        <li><strong>MASTER en Tricología y Microinjerto Capilar</strong></li>
                    </ul>

                    <h3 className="text-lg font-semibold text-teal-700 mt-6">Publicaciones</h3>
                    <p className="text-gray-700">
                        "Diferencias en el Dímero D en pacientes diabéticos y no diabéticos con diagnóstico de TVP"
                    </p>
                </motion.div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex justify-center gap-6">
                <a
                    href="https://www.instagram.com/capill.arte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition text-lg font-semibold underline"
                >
                    Instagram
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61560880023653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition text-lg font-semibold underline"
                >
                    Facebook
                </a>
            </div>
        </section>
    )
}

'use client'

import Image from 'next/image'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { MdLocalHospital } from 'react-icons/md'
import Navbar from '../components/Navbar'
import FooterSitio from '../components/FooterSitio'
import BotonWhatsapp from '../components/BotonWhatsApp'
import Head from 'next/head'

export default function SobreElDoctor() {
    return (
        <>
            <Head>
                <title>Sobre el Doctor | Capillarte</title>
                <meta name="description" content="Conoce la experiencia, formación y publicaciones del Dr. Adrián, especialista en tricología e injerto capilar." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />

            <section className="bg-white py-20 px-6 md:px-24 text-center text-slate-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Conoce al Dr. Adrián M. Hernández
                </h2>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 text-left">
                    {/* Imagen del doctor */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/capillarte_dr.jpeg"
                            alt="Dr. Adrián M. Hernández"
                            width={400}
                            height={500}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>

                    {/* Credenciales y experiencia */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <p className="text-lg">
                            Médico cirujano con formación nacional e internacional en tricología e injerto capilar.
                            Su enfoque se basa en la precisión médica, la estética facial natural y un acompañamiento cercano a cada paciente.
                        </p>

                        {/* No. de cédula: 12963161 */}
                        <p className="text-sm text-slate-600">
                            Cédula Profesional: 12963161
                        </p>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Formación Académica</h3>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                                <li>Universidad del Valle de Atemajac – Médico Cirujano (2018)</li>
                                <li>Instituto Panamericano – Técnica F.U.E (2024)</li>
                                <li>Universidad Autónoma de México – Injerto Capilar Avanzado (2024)</li>
                                <li>Universidad en Línea de Madrid (UDIMA) – Máster en Tricología (2024)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Publicaciones</h3>
                            <p className="text-sm italic text-slate-700">
                                “Diferencias en el dímero D en pacientes diabéticos y no diabéticos con diagnóstico de TVP”
                            </p>
                        </div>
                    </div>
                </div>

                {/* Botones CTA */}
                <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
                    <a
                        href="https://www.doctoralia.com.mx/z/pBdDdj"
                        target="_blank"
                        className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                    >
                        <MdLocalHospital /> Doctoralia
                    </a>
                    <a
                        href="https://www.instagram.com/capill.arte/"
                        target="_blank"
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                    >
                        <FaInstagram /> Instagram
                    </a>
                    <a
                        href="https://www.tiktok.com/@capillarte"
                        target="_blank"
                        className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                    >
                        <FaTiktok /> TikTok
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61560880023653"
                        target="_blank"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                    >
                        <FaFacebook /> Facebook
                    </a>
                </div>

            </section>
            <BotonWhatsapp />

            <FooterSitio />
        </>
    )
}

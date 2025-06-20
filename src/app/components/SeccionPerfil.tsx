'use client'

import Image from 'next/image'
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { MdLocalHospital } from 'react-icons/md'

export default function SeccionPerfilDoctor() {
    return (
        <section className="bg-white py-20 px-6 md:px-24 text-slate-800" id='perfil'>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Perfil del Especialista</h2>
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-10">Dr. Adrian Hernandez Lopez</h4>

            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-start justify-center">
                {/* Imagen del doctor */}
                <div className="w-full md:w-1/1 flex justify-center">
                    <Image
                        src="/capillarte_dr.jpeg"
                        alt="Foto del Doctor"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-md object-cover"
                    />
                </div>

                {/* Línea vertical + texto */}
                <div className="w-full md:w-2/3 border-l-4 border-teal-500 pl-6 space-y-5">
                    <div>
                        <h3 className="font-bold text-lg">Médico Cirujano</h3>
                        <p className="text-sm">Universidad del Valle de Atemajac (2018)</p>
                        <p className="text-sm text-slate-600">
                            Cédula Profesional: 12963161
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Implante Capilar Técnica F.U.E.</h3>
                        <p className="text-sm">Instituto Panamericano de Profesionales Científicos, UNAM (2024)</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Máster en Tricología y Microinjerto Capilar</h3>
                        <p className="text-sm">Universidad en Línea de Madrid (UDIMA), 2024</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Publicación</h3>
                        <p className="text-sm">“Diferencias en el dímero D en pacientes diabéticos y no diabéticos con diagnóstico de TVP”</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Actualización Profesional</h3>
                        <p className="text-sm">Instituto Panamericano de Profesionales Científicos (2024)</p>
                    </div>
                </div>

                {/* Ubicación Google Maps */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Ubicación Capillarte"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.016646384492!2d-103.4226863!3d20.6330821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad0a017f851d%3A0x88146434d7d2591d!2sCapillarte!5e0!3m2!1ses-419!2smx!4v1718732465421!5m2!1ses-419!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

            {/* Botones redes sociales */}

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
    )
}

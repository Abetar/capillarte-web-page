'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SeccionPerfilDoctor() {
    return (
        <section className="bg-white py-20 px-6 md:px-24 text-slate-800" id='perfil'>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Perfil del Especialista</h2>
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-10">Dr. Adrian Hernandez Lopez</h4>

            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-start justify-center">
                {/* Imagen del doctor */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                        src="/capillarte_dr.jpeg"
                        alt="Foto del Doctor"
                        width={250}
                        height={250}
                        className="rounded-xl shadow-md object-cover"
                    />
                </div>

                {/* Línea vertical + texto */}
                <div className="w-full md:w-2/3 border-l-4 border-teal-500 pl-6 space-y-5">
                    <div>
                        <h3 className="font-bold text-lg">Médico Cirujano</h3>
                        <p className="text-sm">Universidad del Valle de Atemajac (2018)</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Residencia en Hospital Salud de los Enfermos</h3>
                        <p className="text-sm">(2019)</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Estancia en Hospital Regional Ciudad Guzmán</h3>
                        <p className="text-sm">(2020)</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Médico pasante</h3>
                        <p className="text-sm">Centro de Salud San Gabriel (2021)</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Unidad Médica Farmalife</h3>
                        <p className="text-sm">(2020 - 2023)</p>
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
                <div className="w-full md:w-1/3 flex justify-center">
                    <iframe
                        src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Allioth 3952, Arboledas, 45070 Zapopan, Jal.&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="250"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl shadow-md"
                    ></iframe>
                </div>
            </div>

            {/* Botones redes sociales */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <Link
                    href="https://www.instagram.com/capill.arte/"
                    target="_blank"
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                >
                    Instagram
                </Link>
                <Link
                    href="https://www.doctoralia.com.mx/z/pBdDdj"
                    target="_blank"
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                >
                    Doctoralia
                </Link>
                <Link
                    href="https://www.facebook.com/profile.php?id=61560880023653"
                    target="_blank"
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                >
                    Facebook
                </Link>
            </div>
        </section>
    )
}

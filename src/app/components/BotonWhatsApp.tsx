
'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function BotonWhatsapp() {
    return (
        <a
            href="https://wa.me/5213313572842?text=Hola%2C%20quiero%20agendar%20una%20consulta%20capilar"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
            aria-label="Chatear por WhatsApp"
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    )
}
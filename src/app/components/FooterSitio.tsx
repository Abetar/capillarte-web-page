export default function FooterSitio() {
    return (
        <footer className="bg-teal-100 text-center text-sm text-teal-800 py-6">
            <p className="mb-2">© {new Date().getFullYear()} Capillarte. Todos los derechos reservados.</p>
            <p className="text-xs text-teal-700">
                Sitio desarrollado por{" "}
                <a
                    href="https://agsolutions.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal-900 transition"
                >
                    AG Solutions Dev
                </a>
            </p>
        </footer>
    )
}
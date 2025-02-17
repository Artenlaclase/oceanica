"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Función para abrir/cerrar el menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Cerrar el menú si el usuario hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-gray-800 bg-opacity-75 fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between px-6 py-4 text-white relative">
                {/* Logo */}
                <div className="logo">
                    <a href="#">
                        <img src="/assets/img/logo2.png" alt="Logo" className="h-12" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</a></li>
                    <li><a href="#productos" className="hover:underline">Servicios</a></li>
                </ul>

                {/* Social Icons (Solo en escritorio) */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                    </a>
                    <a href="https://www.instagram.com/oceanicaweb/" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    </a>
                </div>

                {/* Botón Hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 my-1 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </nav>

            {/* Menú móvil (fuera del nav para evitar problemas de cierre) */}
            <div
                ref={menuRef}
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center transition-transform duration-300 ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center space-y-6 text-white text-lg">
                    <li><a href="#sobre-nosotros" className="hover:underline" onClick={() => setIsOpen(false)}>Sobre Nosotros</a></li>
                    <li><a href="#productos" className="hover:underline" onClick={() => setIsOpen(false)}>Servicios</a></li>
                </ul>
                
                {/* Redes sociales en el menú móvil */}
                <div className="flex space-x-6 mt-6">
                    <a href="#" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-white" />
                    </a>
                    <a href="https://www.instagram.com/oceanicaweb/" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white" />
                    </a>
                </div>
            </div>
        </header>
    );
}

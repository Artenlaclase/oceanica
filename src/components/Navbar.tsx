"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 bg-opacity-75 text-white fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src="/assets/img/logo2.png" alt="Logo" className="h-12" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</a></li>
          <li><a href="#productos" className="hover:underline">Productos</a></li>
          <li><a href="#contacto" className="hover:underline">Contacto</a></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          </a>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          </a>
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-16 left-0 w-full bg-opacity-75 text-white flex flex-col items-center space-y-4 py-4 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</a></li>
          <li><a href="#productos" className="hover:underline">Productos</a></li>
          <li><a href="#contacto" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

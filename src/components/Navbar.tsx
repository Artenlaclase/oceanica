export default function Navbar() {
    return (
      <header>
        <nav className="flex items-center justify-between p-4 bg-blue-900 text-white">
          <div className="logo">
            <a href="#">
              <img src="/assets/img/logo2.png" alt="Logo" className="h-12" />
            </a>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#productos" className="hover:underline">Productos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="md:hidden">
            <button id="hamburger" className="flex flex-col space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </nav>
      </header>
    );
  }
  
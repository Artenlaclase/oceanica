import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <a
          href="https://wa.me/56964126899?text=Quiero cotizar Pagina web para mi negocio"
          className="fixed bottom-5 right-5"
        >
          <img
            src="/assets/img/whatsapp-logo.png"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </main>
      <footer className="text-center py-4 text-gray-600">
        &copy; Oceánica Web. 2024
      </footer>
    </div>
  );
}
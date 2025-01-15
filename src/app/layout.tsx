import type { Metadata } from "next";
import "./globals.css"; // Asegúrate de que Tailwind CSS esté configurado aquí
import Navbar from "../components/Navbar"; // Importa el Navbar

export const metadata: Metadata = {
  title: "Oceánica Web",
  description: "Sitio oficial de Oceánica Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 text-gray-900">
        {/* Navbar global */}
        <Navbar />
        {/* Contenido dinámico de las páginas */}
        {children}
      </body>
    </html>
  );
}

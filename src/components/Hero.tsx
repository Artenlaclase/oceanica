export default function Hero() {
    return (
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/video/oceano1.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Donde la tecnología y la naturaleza se encuentran para crear
            experiencias digitales inolvidables.
          </h1>
        </div>
      </section>
    );
  }
  
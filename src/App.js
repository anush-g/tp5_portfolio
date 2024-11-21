import './App.css';
import React from "react";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <h1 className="text-4xl font-bold">¡Hola! Soy Anush</h1>
        <p className="text-xl mt-4">UX Designer creando experiencias significativas</p>
      </header>

      {/* Sobre Mí */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Sobre Mí</h2>
        <p className="text-lg text-center">
          Me especializo en diseñar y desarrollar experiencias de usuario intuitivas, atractivas y funcionales. Con un enfoque en la investigación y el diseño centrado en el usuario, mi objetivo es mejorar la interacción digital.
        </p>
      </section>

      {/* Proyectos */}
      <section className="bg-white py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Proyectos</h2>
        <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 px-6">
          {/* Proyecto 1 */}
          <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Proyecto 1" className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Proyecto 1</h3>
              <p className="text-sm mt-2">Descripción breve del proyecto. Qué lograste y cómo impactó.</p>
            </div>
          </div>
          {/* Proyecto 2 */}
          <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Proyecto 2" className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Proyecto 2</h3>
              <p className="text-sm mt-2">Descripción breve del proyecto. Qué lograste y cómo impactó.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Herramientas que Uso</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full">Figma</span>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full">Illustrator</span>
          <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">Photoshop</span>
          <span className="bg-red-200 text-red-800 px-4 py-2 rounded-full">Github</span>
        </div>
      </section>

      {/* Contacto */}
      <footer className="text-center py-10 bg-gray-800 text-white">
        <p>Encuéntrame en: <a href="#" className="underline text-blue-400">LinkedIn</a></p>
        <p className="mt-4">© 2024 Anush. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

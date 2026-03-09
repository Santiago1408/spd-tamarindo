"use client";

import { Newspaper, ExternalLink } from "lucide-react";

interface Noticia {
  id: string;
  titulo: string;
  fuente: string;
  fecha: string;
  descripcion: string;
  imagen: string;
}

const noticias: Noticia[] = [
  {
    id: "noticia-1",
    titulo:
      "Captaba a sus víctimas en redes sociales y luego las explotaba sexualmente",
    fuente: "EL DEBER",
    fecha: "21 de julio de 2023",
    descripcion:
      "La policía informó sobre la aprehensión de un individuo que utilizaba redes sociales para contactar a menores de edad y manipularlas con falsas promesas.",
    imagen:
      "/noticias/Captura de pantalla 2026-03-08 194844.png"
  },
  {
    id: "noticia-2",
    titulo:
      "Aprehenden a personas que captaban a menores por redes sociales",
    fuente: "Opinión",
    fecha: "19 de abril de 2016",
    descripcion:
      "Tres personas fueron arrestadas luego de una investigación por presunta captación de menores a través de redes sociales con fines de explotación.",
    imagen:
      "/noticias/Captura de pantalla 2026-03-08 194912.png"
  }
];

export default function CasosPenalesNoticias() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Noticias sobre violencia digital
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Casos reales reportados por medios de comunicación que evidencian
          cómo la violencia digital puede tener consecuencias legales graves.
        </p>
      </div>

      {/* Noticias */}
      <div className="grid md:grid-cols-2 gap-8">
        {noticias.map((noticia) => (
          <article
            key={noticia.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* Imagen */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-4">

              {/* Fuente */}
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="font-semibold text-red-600 uppercase tracking-wide">
                  {noticia.fuente}
                </span>
                <span>{noticia.fecha}</span>
              </div>

              {/* Titular */}
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {noticia.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {noticia.descripcion}
              </p>

              {/* Botón */}
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                Leer caso completo
                <ExternalLink className="w-4 h-4" />
              </button>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
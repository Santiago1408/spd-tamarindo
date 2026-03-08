"use client";

import { 
  Search, MapPin, Users, 
  Mail, Phone, Briefcase, 
  Calendar, Image, AlertTriangle 
} from "lucide-react";

import { useSimulador } from "@/features/useSimulador";

const datosSimulados = [
  { id: 1, icono: MapPin, titulo: "Ubicación", riesgo: "Alto", descripcion: "Ciudad visible en publicaciones recientes", color: "text-red-500", fondo: "bg-red-50" },
  { id: 2, icono: Users, titulo: "Familiares", riesgo: "Alto", descripcion: "3 familiares identificados en tu perfil", color: "text-red-500", fondo: "bg-red-50" },
  { id: 3, icono: Mail, titulo: "Correo Electrónico", riesgo: "Medio", descripcion: "Email visible en información de contacto", color: "text-yellow-600", fondo: "bg-yellow-50" },
  { id: 4, icono: Phone, titulo: "Teléfono", riesgo: "Medio", descripcion: "Número parcialmente expuesto", color: "text-yellow-600", fondo: "bg-yellow-50" },
  { id: 5, icono: Briefcase, titulo: "Trabajo/Escuela", riesgo: "Medio", descripcion: "Información laboral pública", color: "text-yellow-600", fondo: "bg-yellow-50" },
  { id: 6, icono: Calendar, titulo: "Fecha de Nacimiento", riesgo: "Bajo", descripcion: "Fecha completa visible", color: "text-green-600", fondo: "bg-green-50" },
  { id: 7, icono: Image, titulo: "Fotos Públicas", riesgo: "Medio", descripcion: "47 fotos accesibles públicamente", color: "text-yellow-600", fondo: "bg-yellow-50" },
];

export default function SimuladorHuella() {
  const { 
    nombreUsr, setNombreUsr, 
    estaAnalizando, mostrarResultados, analizarHuella 
  } = useSimulador();

  return (
    <div className="max-w-5xl mx-auto p-6 font-display text-primary">
      
      <div className="text-center mb-10 space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-secondary bg-indigo-50 border border-indigo-100 rounded-full">
          <Search className="w-4 h-4" /> Herramienta Interactiva
        </span>
        <h1 className="text-3xl md:text-4xl font-bold">Simulador de Huella Digital</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Descubre qué información personal podría estar expuesta en tus redes sociales y aprende cómo protegerla.
        </p>
      </div>

      {/* Buscador */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="relative w-full sm:w-2/3">
            <input 
              type="text" 
              placeholder="@tu_usuario"
              value={nombreUsr}
              onChange={(e) => setNombreUsr(e.target.value)} 
              className="w-full pl-4 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
            />
          </div>
          <button 
            onClick={analizarHuella} 
            disabled={estaAnalizando}
            className="w-full sm:w-auto px-8 py-3 bg-secondary text-white font-medium rounded-full hover:bg-opacity-90 transition-all disabled:opacity-70 flex justify-center"
          >
            {estaAnalizando ? "Analizando..." : "Analizar mi huella"}
          </button>
        </div>
      </div>

      {/* Resultados */}
      {mostrarResultados && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/*Puntaje*/}
          <div className="col-span-1 md:col-span-5 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-8">Puntaje de Vulnerabilidad al Doxing</h2>
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#eab308" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="85.4" strokeLinecap="round" />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-yellow-500">66</span>
                <span className="text-sm text-gray-400 font-medium">/100</span>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-yellow-50 text-yellow-700 font-medium rounded-full text-sm mb-8">Riesgo Moderado</span>
            
            <div className="bg-slate-50 p-4 rounded-xl flex gap-3 text-sm text-gray-600 border border-slate-100 mt-auto">
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
              <p>Tu perfil muestra información que podría ser utilizada para identificarte o localizarte. Revisa las recomendaciones para mejorar tu privacidad.</p>
            </div>
          </div>

          {/* Columna Derecha: Datos Expuestos */}
          <div className="col-span-1 md:col-span-7 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Datos Expuestos Encontrados</h2>
            <div className="space-y-4">
              {datosSimulados.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${item.fondo} ${item.color}`}>
                      <item.icono className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{item.titulo}</h3>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm ${item.fondo} ${item.color}`}>{item.riesgo}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
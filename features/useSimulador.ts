import { useState, ElementType } from "react";
import { MapPin, Users, Mail, Phone, Briefcase,Calendar, Image as ImageIcon, ShieldCheck } from "lucide-react";

export interface DatoExpuesto {
  id: number;
  icono: ElementType;
  titulo: string;
  riesgo: string;
  descripcion: string;
  color: string;
  fondo: string;
}

export interface PerfilUsuario {
  puntaje: number;
  nivel: string;
  colorNivel: string;
  colorPuntaje: string;
  colorGrafico: string;
  mensaje: string;
  datos: DatoExpuesto[];
}

const perfilesPrueba: Record<string, PerfilUsuario> = {
  "usr_bajo": {
    puntaje: 15, nivel: "Riesgo Bajo", colorNivel: "text-green-700 bg-green-50", colorPuntaje: "text-green-500", colorGrafico: "#22c55e",
    mensaje: "¡Excelente! Tu configuración de privacidad es fuerte.",
    datos: [
      { id: 1, icono: Calendar, titulo: "Año de Nacimiento", riesgo: "Bajo", descripcion: "Solo el año es visible", color: "text-green-600", fondo: "bg-green-50" },
      { id: 2, icono: ShieldCheck, titulo: "Perfil Privado", riesgo: "Bajo", descripcion: "Fotos y posts protegidos", color: "text-green-600", fondo: "bg-green-50" }
    ]
  },
  "usr_medio": {
    puntaje: 66, nivel: "Riesgo Moderado", colorNivel: "text-yellow-700 bg-yellow-50", colorPuntaje: "text-yellow-500", colorGrafico: "#eab308",
    mensaje: "Tu perfil muestra información que podría ser utilizada para identificarte.",
    datos: [
      { id: 1, icono: Mail, titulo: "Correo Electrónico", riesgo: "Medio", descripcion: "Email visible en contacto", color: "text-yellow-600", fondo: "bg-yellow-50" },
      { id: 2, icono: Phone, titulo: "Teléfono", riesgo: "Medio", descripcion: "Últimos 4 dígitos expuestos", color: "text-yellow-600", fondo: "bg-yellow-50" },
      { id: 3, icono: ImageIcon, titulo: "Fotos Públicas", riesgo: "Medio", descripcion: "47 fotos accesibles", color: "text-yellow-600", fondo: "bg-yellow-50" },
    ]
  },
  "usr_alto": {
    puntaje: 92, nivel: "Riesgo Alto", colorNivel: "text-red-700 bg-red-50", colorPuntaje: "text-red-500", colorGrafico: "#ef4444",
    mensaje: "¡Peligro de Doxing! Estás exponiendo datos críticos.",
    datos: [
      { id: 1, icono: MapPin, titulo: "Ubicación Exacta", riesgo: "Alto", descripcion: "Dirección de casa visible", color: "text-red-600", fondo: "bg-red-50" },
      { id: 2, icono: Users, titulo: "Familiares Directos", riesgo: "Alto", descripcion: "Perfiles de padres expuestos", color: "text-red-600", fondo: "bg-red-50" },
      { id: 3, icono: Phone, titulo: "Teléfono Celular", riesgo: "Alto", descripcion: "Número completo disponible", color: "text-red-600", fondo: "bg-red-50" },
      { id: 4, icono: Briefcase, titulo: "Lugar de Estudio", riesgo: "Alto", descripcion: "Horarios de universidad públicos", color: "text-red-600", fondo: "bg-red-50" }
    ]
  }
};

export const useSimulador = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [estaAnalizando, setEstaAnalizando] = useState(false);
  const [resultado, setResultado] = useState<PerfilUsuario | null>(null);

  const analizarHuella = () => {
    if (!nombreUsuario) return; 
    
    setEstaAnalizando(true);
    setResultado(null);
    
    setTimeout(() => {
      setEstaAnalizando(false);
      const usuarioLimpio = nombreUsuario.replace('@', '').trim().toLowerCase();
      
      if (perfilesPrueba[usuarioLimpio]) {
        setResultado(perfilesPrueba[usuarioLimpio]);
      } else {
        setResultado(perfilesPrueba["usr_moderado"]);
      }
    }, 2000);
  };

  return { nombreUsuario, setNombreUsuario, estaAnalizando, resultado, analizarHuella };
};
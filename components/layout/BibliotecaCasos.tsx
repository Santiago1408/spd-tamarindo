"use client";

import { useState, ElementType } from "react";
import { 
  BookOpen, ChevronDown, ChevronUp, AlertOctagon, 
  ShieldAlert, UserX, HeartCrack, ImageOff, MapPin, Headphones, Play
} from "lucide-react";

export interface CasoReal {
  id: string;
  tipo: string;
  titulo: string;
  icono: ElementType;
  color: string;
  fondo: string;
  historia: string;
  errores: string[];
  prevencion: string[];
}

const casosReales: CasoReal[] = [
  {
    id: "caso-1",
    tipo: "Doxing",
    titulo: "El caso de Valeria: Cuando la ubicación en tiempo real salió mal",
    icono: MapPin,
    color: "text-red-600",
    fondo: "bg-red-50",
    historia: "Valeria (16 años) solía subir historias a Instagram mostrando exactamente en qué cafetería o parque estaba en tiempo real. Un día, comenzó a recibir mensajes amenazantes de un perfil anónimo que describía la ropa que llevaba puesta en ese momento. A los pocos días, esta persona publicó en un foro anónimo la dirección de su casa, el colegio al que asistía y la ruta que tomaba todos los días.",
    errores: [
      "Publicar la ubicación en tiempo real (geolocalización activa).",
      "Mostrar el uniforme del colegio y fachadas reconocibles de su casa en fotos públicas.",
      "Tener un perfil público donde cualquier desconocido podía ver sus rutinas diarias."
    ],
    prevencion: [
      "Publicar fotos de los lugares después de haberte ido, nunca en tiempo real.",
      "Desactivar la geolocalización de la cámara del celular.",
      "Revisar el fondo de las fotos para no revelar direcciones o rutinas."
    ]
  },
  {
    id: "caso-2",
    tipo: "Phishing Romántico",
    titulo: "La ilusión de Mateo: Un amor que costó caro",
    icono: HeartCrack,
    color: "text-pink-600",
    fondo: "bg-pink-50",
    historia: "Mateo (19 años) conoció a 'Sofía' en una app de citas. Después de semanas de chatear y forjar un vínculo emocional profundo, ella le dijo que tenía una emergencia médica familiar y necesitaba dinero urgente para un vuelo. Mateo confió y le transfirió sus ahorros. Al día siguiente, el perfil de Sofía había desaparecido y el número de teléfono fue bloqueado.",
    errores: [
      "Confiar ciegamente en un perfil sin haber hecho nunca una videollamada.",
      "Enviar dinero a una persona que nunca conoció en el mundo físico.",
      "Ignorar que las fotos del perfil de 'Sofía' parecían sacadas de un catálogo de internet."
    ],
    prevencion: [
      "Hacer búsqueda inversa en Google de las fotos de perfil para verificar si son robadas.",
      "Exigir una videollamada temprana para comprobar la identidad de la persona.",
      "Nunca, bajo ninguna circunstancia, enviar dinero o datos bancarios a alguien de internet."
    ]
  },
  {
    id: "caso-3",
    tipo: "Sextorsión",
    titulo: "El error de Carlos: Una amenaza silenciosa",
    icono: ImageOff,
    color: "text-purple-600",
    fondo: "bg-purple-50",
    historia: "Carlos (17 años) conoció a una chica en Discord. Tras varias conversaciones íntimas, ella le pidió intercambiar fotografías comprometedoras (sexting). Inmediatamente después de enviar la foto, la actitud de la chica cambió y le exigió el pago de $500 dólares, amenazándolo con enviar la imagen a todos sus contactos de Facebook e Instagram si no pagaba en 24 horas.",
    errores: [
      "Compartir contenido íntimo digital (que una vez enviado, pierde totalmente tu control).",
      "Tener la lista de amigos e información familiar visible públicamente en redes sociales.",
      "Ceder ante la presión de una persona desconocida en internet."
    ],
    prevencion: [
      "Evitar el envío de material íntimo; internet no tiene botón de borrado real.",
      "Si ocurre, NUNCA pagar la extorsión (el extorsionador siempre pedirá más).",
      "Bloquear al contacto, guardar capturas de pantalla de la amenaza y denunciar ante las autoridades cibernéticas locales."
    ]
  },
  {
    id: "caso-4",
    tipo: "Grooming",
    titulo: "El engaño a Lucía: El falso cazatalentos",
    icono: UserX,
    color: "text-orange-600",
    fondo: "bg-orange-50",
    historia: "Lucía (14 años), apasionada por el baile, fue contactada por Instagram por un supuesto 'productor de talentos' de 35 años. Él le prometió fama y la invitó a enviarle videos bailando 'con ropa más ligera' para un supuesto casting. Luego de ganarse su confianza durante meses, intentó convencerla de encontrarse en persona a escondidas de sus padres.",
    errores: [
      "Aceptar solicitudes de amistad y mensajes directos de adultos desconocidos.",
      "Creer en promesas grandiosas sin verificar la identidad o la empresa del contacto.",
      "Ocultar a sus padres las conversaciones que mantenía por internet."
    ],
    prevencion: [
      "Configurar las cuentas de menores de edad como privadas, limitando quién puede enviar mensajes.",
      "Educar a los adolescentes para que avisen a un adulto si un desconocido les pide fotos o secretos.",
      "Desconfiar siempre de oportunidades increíbles o perfiles que exigen mantener la relación en secreto."
    ]
  }
];

export default function BibliotecaCasos() {
  const [casoAbierto, setCasoAbierto] = useState<string | null>(null);

  const alternarCaso = (id: string) => {
    if (casoAbierto === id) {
      setCasoAbierto(null); 
    } else {
      setCasoAbierto(id); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-display text-primary">
      
      <div className="text-center mb-12 space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-secondary bg-indigo-50 border border-indigo-100 rounded-full">
          <BookOpen className="w-4 h-4" /> Concientización
        </span>
        <h1 className="text-3xl md:text-4xl font-bold">Biblioteca de Casos</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Aprende de historias cortas. Conoce cómo operan los atacantes esto es el primer paso para evitar convertirte en la próxima víctima.
        </p>
      </div>

      <div className="space-y-4">
        {casosReales.map((caso) => (
          <div 
            key={caso.id} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              casoAbierto === caso.id ? "border-indigo-200 bg-white shadow-lg" : "border-gray-100 bg-white shadow-sm hover:border-gray-200"
            }`}
          >
            <button 
              onClick={() => alternarCaso(caso.id)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full shrink-0 ${caso.fondo} ${caso.color}`}>
                  <caso.icono className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${caso.color}`}>
                    {caso.tipo}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">{caso.titulo}</h3>
                </div>
              </div>
              <div className="shrink-0 text-gray-400">
                {casoAbierto === caso.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
            </button>

            {casoAbierto === caso.id && (
              <div className="p-6 pt-0 border-t border-gray-50 animate-in slide-in-from-top-2 duration-300">
                <div className="mt-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5 text-gray-400" /> ¿Qué ocurrió?
                  </h4>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
                    {caso.historia}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                      <UserX className="w-5 h-5" /> Errores de seguridad
                    </h4>
                    <ul className="space-y-2">
                      {caso.errores.map((error, index) => (
                        <li key={index} className="text-sm text-red-900/80 flex items-start gap-2">
                          <span className="text-red-400 font-bold mt-0.5">•</span> {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50/50 p-5 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5" /> Cómo prevenirlo
                    </h4>
                    <ul className="space-y-2">
                      {caso.prevencion.map((tip, index) => (
                        <li key={index} className="text-sm text-green-900/80 flex items-start gap-2">
                          <span className="text-green-500 font-bold mt-0.5">✓</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Podcast de orientación */}
                    <div className="mt-5 md:col-span-2 rounded-xl border-indigo-100">

                      <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                        <Headphones className="w-5 h-5" />
                        Podcast de orientación psicológica
                      </h4>

                      <p className="text-sm text-indigo-900/80 mb-4">
                        Un profesional en psicología explica cómo afrontar este tipo de situación
                        y qué pasos tomar si estás pasando por algo similar.
                      </p>

                      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-indigo-100">

                        {/* Botón play */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>

                        {/* Información del podcast */}
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">
                            Orientación profesional sobre este caso
                          </p>
                          <p className="text-xs text-gray-500">
                            Psicólogo especialista en violencia digital
                          </p>

                          {/* Barra de progreso falsa */}
                          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                            <div className="w-1/3 h-full bg-indigo-500"></div>
                          </div>
                        </div>

                        {/* Duración */}
                        <span className="text-xs text-gray-500">08:24</span>

                      </div>

                    </div>
                </div>
                
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}
"use client";

import { useState } from "react";

export type ThreatLevel = "high" | "medium" | "low";

export interface Threat {
  id: string;
  title: string;
  description: string;
  level: ThreatLevel;
  icon: string;
  recommendation: string;
}

export interface ScanResult {
  threats: Threat[];
  summary: string;
  overallRisk: ThreatLevel | "safe";
  scannedAt: Date;
}

export interface ScanState {
  status: "idle" | "scanning" | "done" | "error";
  progress: number;
  progressLabel: string;
  result: ScanResult | null;
  error: string | null;
  previewUrl: string | null;
}

const SCAN_STEPS = [
  { progress: 15, label: "Leyendo metadatos EXIF..." },
  { progress: 30, label: "Analizando objetos en la imagen..." },
  { progress: 50, label: "Detectando texto y carteles..." },
  { progress: 70, label: "Buscando datos sensibles..." },
  { progress: 85, label: "Evaluando nivel de riesgo..." },
  { progress: 95, label: "Generando recomendaciones..." },
];

const MOCK_THREATS_POOL: Threat[] = [
  {
    id: "placa",
    title: "Placa de vehículo visible",
    description:
      "Se detectó una placa vehicular en la imagen. Esto puede usarse para rastrear tu vehículo, conocer tu domicilio o identificarte.",
    level: "high",
    icon: "directions_car",
    recommendation:
      "Aplica desenfoque sobre la placa antes de publicar. Puedes usar apps como Snapseed o el editor de Google Fotos.",
  },
  {
    id: "uniforme",
    title: "Uniforme institucional",
    description:
      "Se detectó un uniforme escolar o institucional con logo visible. Esto revela la institución a la que asistes y tu rutina diaria.",
    level: "high",
    icon: "school",
    recommendation:
      "Evita publicar fotos con uniformes que identifiquen tu colegio o trabajo. Si es necesario, cubre el logo con un sticker o recorta la imagen.",
  },
  {
    id: "direccion",
    title: "Dirección en cartel",
    description:
      "Se detectó texto en un letrero o cartel que podría revelar una dirección o ubicación específica cercana a tu domicilio.",
    level: "high",
    icon: "location_on",
    recommendation:
      "Elimina o desenfoca cualquier texto visible en carteles antes de compartir la imagen públicamente.",
  },
  {
    id: "rostro",
    title: "Rostro de menor de edad",
    description:
      "Se detectó el rostro de lo que podría ser un menor de edad. Publicar imágenes de menores sin consentimiento puede vulnerar su privacidad.",
    level: "medium",
    icon: "face",
    recommendation:
      "Considera difuminar los rostros de menores antes de publicar, especialmente en redes públicas.",
  },
  {
    id: "documento",
    title: "Documento visible",
    description:
      "Se detectó lo que parece ser un documento, carnet o papel con información personal que podría ser legible.",
    level: "high",
    icon: "badge",
    recommendation:
      "Nunca publiques fotos donde aparezcan documentos de identidad, aunque sea parcialmente visibles.",
  },
  {
    id: "gps",
    title: "Metadatos GPS en la imagen",
    description:
      "Los metadatos EXIF de esta imagen contienen coordenadas GPS que revelan exactamente dónde fue tomada la foto.",
    level: "medium",
    icon: "my_location",
    recommendation:
      "Desactiva la ubicación en tu cámara o elimina los metadatos antes de compartir. En iOS ve a Ajustes > Privacidad > Localización > Cámara.",
  },
  {
    id: "telefono",
    title: "Número de teléfono visible",
    description:
      "Se detectó lo que parece ser un número de teléfono visible en la imagen, lo que podría usarse para contacto no deseado.",
    level: "medium",
    icon: "phone",
    recommendation:
      "Cubre o elimina cualquier número de teléfono visible antes de publicar la imagen.",
  },
];

const MOCK_SCENARIOS: {
  overallRisk: ThreatLevel | "safe";
  threatIds: string[];
  summary: string;
}[] = [
  {
    overallRisk: "high" as const,
    threatIds: ["placa", "direccion", "uniforme"],
    summary:
      "Se detectaron 3 amenazas críticas. Esta imagen revela tu ubicación, institución y vehículo. No es seguro publicarla.",
  },
  {
    overallRisk: "medium" as const,
    threatIds: ["rostro", "gps"],
    summary:
      "Se detectaron 2 amenazas moderadas. Los metadatos y el rostro visible podrían comprometer la privacidad.",
  },
  {
    overallRisk: "high" as const,
    threatIds: ["documento", "telefono"],
    summary:
      "Se detectaron datos personales sensibles. Un documento y un número de teléfono son visibles en la imagen.",
  },
  {
    overallRisk: "low" as const,
    threatIds: ["gps"],
    summary:
      "La imagen parece segura visualmente, pero contiene metadatos de ubicación que conviene eliminar.",
  },
  {
    overallRisk: "safe" as const,
    threatIds: [],
    summary:
      "No se detectaron amenazas visibles. La imagen parece segura para publicar.",
  },
];

export function escanearImagen() {
  const [state, setState] = useState<ScanState>({
    status: "idle",
    progress: 0,
    progressLabel: "",
    result: null,
    error: null,
    previewUrl: null,
  });

  const simulateScan = async (): Promise<ScanResult> => {
    for (const step of SCAN_STEPS) {
      await new Promise((res) => setTimeout(res, 400 + Math.random() * 350));
      setState((prev) => ({
        ...prev,
        progress: step.progress,
        progressLabel: step.label,
      }));
    }

    const scenario = MOCK_SCENARIOS[Math.floor(Math.random() * MOCK_SCENARIOS.length)];
    const threats = MOCK_THREATS_POOL.filter((t) =>
      scenario.threatIds.includes(t.id)
    );

    return {
      threats,
      summary: scenario.summary,
      overallRisk: scenario.overallRisk,
      scannedAt: new Date(),
    };
  };

  const scanImage = async (file: File) => {
    const previewUrl = URL.createObjectURL(file);

    setState({
      status: "scanning",
      progress: 5,
      progressLabel: "Preparando imagen...",
      result: null,
      error: null,
      previewUrl,
    });

    try {
      const result = await simulateScan();

      setState((prev) => ({
        ...prev,
        status: "done",
        progress: 100,
        progressLabel: "Análisis completado",
        result,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        status: "error",
        error: err instanceof Error ? err.message : "Error desconocido",
      }));
    }
  };

  const reset = () => {
    if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
    setState({
      status: "idle",
      progress: 0,
      progressLabel: "",
      result: null,
      error: null,
      previewUrl: null,
    });
  };

  return { state, scanImage, reset };
}
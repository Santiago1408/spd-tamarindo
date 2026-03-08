
"use client";

import { useState } from "react";

export type ThreatLevel = "high" | "medium" | "low";

export interface Threat {
  id: string;
  title: string;
  description: string;
  level: ThreatLevel;
  icon: string; // material symbol name
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

const SYSTEM_PROMPT = `Eres un sistema experto en privacidad y seguridad digital. Tu tarea es analizar imágenes para detectar información potencialmente peligrosa que podría comprometer la seguridad o privacidad de una persona.

Analiza la imagen proporcionada y detecta amenazas como:
- Placas de autos o vehículos
- Uniformes escolares o institucionales con logos visibles
- Direcciones en carteles, letreros o documentos
- Números de teléfono o correos visibles
- Documentos de identidad o tarjetas
- Ubicaciones geográficas identificables
- Información financiera
- Rostros de menores de edad
- Cualquier otro dato que pueda revelar identidad, ubicación o rutina

Responde ÚNICAMENTE con un JSON válido con esta estructura exacta, sin texto adicional ni backticks:
{
  "overallRisk": "high" | "medium" | "low" | "safe",
  "summary": "Resumen breve de 1-2 oraciones sobre el análisis",
  "threats": [
    {
      "id": "unique_id",
      "title": "Nombre corto de la amenaza",
      "description": "Descripción específica de qué se detectó y por qué es peligroso",
      "level": "high" | "medium" | "low",
      "icon": "nombre_icono_material_symbols",
      "recommendation": "Acción concreta que el usuario debe tomar"
    }
  ]
}

Para el campo "icon" usa nombres válidos de Material Symbols como: location_on, directions_car, school, badge, phone, credit_card, face, home, visibility, warning, person.

Si la imagen es segura y no tiene amenazas, devuelve threats: [] y overallRisk: "safe".
Si no puedes analizar la imagen claramente, indícalo en el summary con overallRisk: "low".`;

export function escanearImagen() {
  const [state, setState] = useState<ScanState>({
    status: "idle",
    progress: 0,
    progressLabel: "",
    result: null,
    error: null,
    previewUrl: null,
  });

  const simulateProgress = async (): Promise<void> => {
    for (const step of SCAN_STEPS) {
      await new Promise((res) => setTimeout(res, 400 + Math.random() * 300));
      setState((prev) => ({
        ...prev,
        progress: step.progress,
        progressLabel: step.label,
      }));
    }
  };

  const scanImage = async (file: File) => {
    // Generate preview URL
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
      // Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Determine media type
      const mediaType = file.type as
        | "image/jpeg"
        | "image/png"
        | "image/gif"
        | "image/webp";

      // Start fake progress simulation in parallel
      const progressPromise = simulateProgress();

      // Call Claude Vision API
      const apiPromise = fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: mediaType,
                    data: base64,
                  },
                },
                {
                  type: "text",
                  text: "Analiza esta imagen y detecta cualquier información que pueda comprometer la privacidad o seguridad de la persona.",
                },
              ],
            },
          ],
        }),
      });

      // Wait for both to finish
      const [apiResponse] = await Promise.all([apiPromise, progressPromise]);

      if (!apiResponse.ok) {
        throw new Error(`Error de API: ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      const rawText = data.content
        .map((item: { type: string; text?: string }) =>
          item.type === "text" ? item.text : ""
        )
        .join("");

      // Parse JSON response
      const cleaned = rawText.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned) as Omit<ScanResult, "scannedAt">;

      setState((prev) => ({
        ...prev,
        status: "done",
        progress: 100,
        progressLabel: "Análisis completado",
        result: {
          ...parsed,
          scannedAt: new Date(),
        },
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        status: "error",
        error:
          err instanceof Error
            ? err.message
            : "Error desconocido al analizar la imagen",
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
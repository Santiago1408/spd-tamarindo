"use client";

import { useRef, useState } from "react";
import { escanearImagen, Threat, ThreatLevel } from "@/features/escanearImagen";

const riskConfig: Record<
  string,
  { label: string; color: string; bg: string; border: string; icon: string }
> = {
  high: {
    label: "Alto riesgo",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
    icon: "gpp_bad",
  },
  medium: {
    label: "Riesgo medio",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    icon: "gpp_maybe",
  },
  low: {
    label: "Riesgo bajo",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
    icon: "info",
  },
  safe: {
    label: "Sin amenazas",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    icon: "verified_user",
  },
};

function ThreatCard({ threat }: { threat: Threat }) {
  const cfg = riskConfig[threat.level];
  return (
    <div
      className="rounded-xl p-4 border transition-all duration-200"
      style={{ backgroundColor: cfg.bg, borderColor: cfg.border }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${cfg.color}18` }}
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{ color: cfg.color }}
          >
            {threat.icon}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h4 className="font-bold text-sm" style={{ color: "var(--color-primary)" }}>
              {threat.title}
            </h4>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${cfg.color}18`, color: cfg.color }}
            >
              {cfg.label}
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: "color-mix(in srgb, var(--color-primary) 65%, transparent)" }}>
            {threat.description}
          </p>
          {/* Recommendation */}
          <div
            className="flex items-start gap-2 rounded-lg px-3 py-2"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
          >
            <span
              className="material-symbols-outlined text-base shrink-0 mt-0.5"
              style={{ color: "var(--color-primary)" }}
            >
              lightbulb
            </span>
            <p className="text-xs leading-relaxed" style={{ color: "color-mix(in srgb, var(--color-primary) 70%, transparent)" }}>
              {threat.recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function EscanearImagen() {
  const { state, scanImage, reset } = escanearImagen();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    scanImage(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const isScanning = state.status === "scanning";
  const isDone = state.status === "done";
  const isError = state.status === "error";
  const threatCount = state.result?.threats.length ?? 0;
  const overallRisk = state.result?.overallRisk ?? "safe";
  const riskCfg = riskConfig[overallRisk];

  return (
    <div style={{ backgroundColor: "#eef0f2" }} className="min-h-screen py-16 px-6">
      <div className="mx-auto max-w-2xl">

        {/* ── Header ── */}
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
              color: "var(--color-primary)",
            }}
          >
            <span className="material-symbols-outlined text-sm">security</span>
            Escáner de Privacidad
          </div>
          <h1 className="text-4xl font-black mb-3" style={{ color: "var(--color-primary)" }}>
            Tu privacidad es{" "}
            <span style={{ color: "#2563eb" }}>lo primero</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "color-mix(in srgb, var(--color-primary) 60%, transparent)" }}>
            Escanea tus fotos antes de publicarlas. Nuestra IA detecta automáticamente
            placas, uniformes escolares, direcciones y otros datos que podrían comprometer tu seguridad.
          </p>
        </div>
        
        {state.status === "idle" && (
          <div
            className="rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-200 cursor-pointer mb-6"
            style={{
              backgroundColor: dragging
                ? "color-mix(in srgb, var(--color-primary) 6%, white)"
                : "white",
              borderColor: dragging
                ? "var(--color-primary)"
                : "color-mix(in srgb, var(--color-primary) 20%, transparent)",
            }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}
            >
              <span
                className="material-symbols-outlined text-3xl"
                style={{ color: "var(--color-primary)" }}
              >
                cloud_upload
              </span>
            </div>
            <p className="font-bold text-lg mb-1" style={{ color: "var(--color-primary)" }}>
              Arrastra tu imagen aquí
            </p>
            <p className="text-sm mb-6" style={{ color: "color-mix(in srgb, var(--color-primary) 45%, transparent)" }}>
              Soporta JPG, PNG y WEBP hasta 20MB
            </p>
            <button
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "var(--color-primary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "color-mix(in srgb, var(--color-primary) 85%, black)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-primary)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
              onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
            >
              <span className="material-symbols-outlined text-base">folder_open</span>
              Seleccionar Archivo
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
            />
          </div>
        )}

        {/* ── Scanning State ── */}
        {isScanning && (
          <div className="rounded-2xl bg-white shadow-sm border p-8 mb-6"
            style={{ borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)" }}
          >
            {state.previewUrl && (
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={state.previewUrl}
                  alt="Imagen siendo analizada"
                  className="w-full object-cover max-h-56"
                  style={{ filter: "brightness(0.92)" }}
                />
              </div>
            )}

            {/* Scanning animation */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-5 w-5 shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <span
                  className="relative inline-flex h-5 w-5 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                Análisis en curso...
              </p>
              <span className="ml-auto text-sm font-bold" style={{ color: "var(--color-primary)" }}>
                {state.progress}%
              </span>
            </div>

            {/* Progress bar */}
            <div
              className="h-2 rounded-full overflow-hidden mb-3"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${state.progress}%`,
                  backgroundColor: "var(--color-primary)",
                }}
              />
            </div>

            <p className="text-xs" style={{ color: "color-mix(in srgb, var(--color-primary) 50%, transparent)" }}>
              {state.progressLabel}
            </p>
          </div>
        )}

        {/* ── Error State ── */}
        {isError && (
          <div className="rounded-2xl bg-white shadow-sm border p-8 mb-6 text-center"
            style={{ borderColor: "#fecaca" }}
          >
            <span className="material-symbols-outlined text-4xl text-red-500 mb-3 block">error</span>
            <p className="font-bold text-red-600 mb-2">Error al analizar la imagen</p>
            <p className="text-sm text-slate-500 mb-6">{state.error}</p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <span className="material-symbols-outlined text-base">refresh</span>
              Intentar de nuevo
            </button>
          </div>
        )}

        {/* ── Results ── */}
        {isDone && state.result && (
          <div className="space-y-4">

            {/* Image preview + risk badge */}
            <div className="rounded-2xl bg-white shadow-sm border overflow-hidden"
              style={{ borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)" }}
            >
              {state.previewUrl && (
                <div className="relative">
                  <img
                    src={state.previewUrl}
                    alt="Imagen analizada"
                    className="w-full object-cover max-h-56"
                  />
                  {/* Risk overlay badge */}
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-lg"
                    style={{ backgroundColor: riskCfg.color, color: "white" }}
                  >
                    <span className="material-symbols-outlined text-sm">{riskCfg.icon}</span>
                    {threatCount > 0 ? `${threatCount} amenaza${threatCount > 1 ? "s" : ""} detectada${threatCount > 1 ? "s" : ""}` : "Sin amenazas"}
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-black text-lg mb-1" style={{ color: "var(--color-primary)" }}>
                      Análisis completado
                    </h3>
                    <p className="text-sm" style={{ color: "color-mix(in srgb, var(--color-primary) 60%, transparent)" }}>
                      {state.result.summary}
                    </p>
                  </div>
                </div>

                {/* Progress bar full */}
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: "100%", backgroundColor: riskCfg.color }}
                  />
                </div>
              </div>
            </div>

            {/* Threats list */}
            {threatCount > 0 && (
              <div className="rounded-2xl bg-white shadow-sm border p-6"
                style={{ borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)" }}
              >
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: "var(--color-primary)" }}>
                  <span className="material-symbols-outlined text-xl">crisis_alert</span>
                  Amenazas detectadas
                </h3>
                <div className="space-y-3">
                  {state.result.threats.map((threat) => (
                    <ThreatCard key={threat.id} threat={threat} />
                  ))}
                </div>
              </div>
            )}

            {/* Safe result */}
            {threatCount === 0 && (
              <div className="rounded-2xl border p-6 text-center"
                style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
              >
                <span className="material-symbols-outlined text-4xl mb-2 block" style={{ color: "#16a34a" }}>
                  verified_user
                </span>
                <p className="font-bold text-lg" style={{ color: "#16a34a" }}>
                  ¡Tu imagen es segura!
                </p>
                <p className="text-sm mt-1" style={{ color: "#15803d" }}>
                  No se detectaron datos sensibles visibles en esta imagen.
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={reset}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: "var(--color-primary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, var(--color-primary) 85%, black)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-primary)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <span className="material-symbols-outlined text-base">add_photo_alternate</span>
                Analizar otra imagen
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
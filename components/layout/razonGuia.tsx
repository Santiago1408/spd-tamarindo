"use client";

import Link from "next/link";
import { useState } from "react";

const reasons = [
  {
    number: 1,
    title: "Detección Temprana",
    description:
      "Identifica señales de advertencia antes de que escalen a situaciones críticas.",
  },
  {
    number: 2,
    title: "Protege tu Privacidad",
    description:
      "Comprende qué información estás compartiendo en línea y cómo limitar tu exposición ante terceros.",
  },
  {
    number: 3,
    title: "Toma Acción con Confianza",
    description:
      "Conoce exactamente qué pasos seguir cuando tú o alguien que conoces enfrenta violencia digital.",
  },
  {
    number: 4,
    title: "Apoya a Otros",
    description:
      "Con el conocimiento adecuado, puedes ayudar a tus amigos y familiares a mantenerse seguros en línea.",
  },
];

export default function RazonGuia() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="razon-guia"
      style={{ backgroundColor: "#eef0f2" }}
      className="py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <button
          onClick={() => setOpen(!open)}
          className="w-full mb-4 flex items-center justify-between rounded-2xl px-6 py-5 shadow-sm border transition-all duration-200 text-left"
          style={{
            backgroundColor: "white",
            borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#f8f9fb";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "white";
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{ color: "var(--color-primary)" }}
              >
                menu_book
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>
                ¿Por qué necesitas esta guía?
              </h2>
              <p className="text-sm" style={{ color: "color-mix(in srgb, var(--color-primary) 55%, transparent)" }}>
                La alfabetización digital es la primera línea de defensa en un mundo hiperconectado.
              </p>
            </div>
          </div>

          <span
            className="material-symbols-outlined text-2xl select-none transition-transform duration-300"
            style={{
              color: "color-mix(in srgb, var(--color-primary) 40%, transparent)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            expand_more
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div
            className="rounded-2xl shadow-sm border px-8 pt-8 pb-6 mb-4"
            style={{
              backgroundColor: "white",
              borderColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 rounded-xl p-4 transition-colors duration-200 cursor-default"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "color-mix(in srgb, var(--color-primary) 5%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-all duration-200"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      color: "var(--color-primary)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "var(--color-primary)";
                      el.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 12%, transparent)";
                      el.style.color = "var(--color-primary)";
                    }}
                  >
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--color-primary)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--color-primary) 60%, transparent)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-6 flex gap-3 rounded-xl px-5 py-4"
              style={{
                borderLeft: "4px solid var(--color-primary)",
                backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)",
              }}
            >
              <span
                className="material-symbols-outlined text-xl shrink-0 mt-0.5"
                style={{ color: "var(--color-primary)" }}
              >
                warning
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--color-primary) 70%, transparent)" }}>
                <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                  Recuerda:
                </span>{" "}
                La violencia digital es violencia real. Puede tener consecuencias psicológicas,
                emocionales e incluso físicas graves. Mereces sentirte seguro/a en línea.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <Link
            href="/simuladorHuella"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--color-primary)" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 85%, black)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 20px color-mix(in srgb, var(--color-primary) 30%, transparent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "var(--color-primary)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <span className="material-symbols-outlined text-lg">fingerprint</span>
            Descubrir mi huella digital
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
          <Link
            href="/escanearImg"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--color-primary)" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 85%, black)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 20px color-mix(in srgb, var(--color-primary) 30%, transparent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "var(--color-primary)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <span className="material-symbols-outlined text-lg">fingerprint</span>
            Buscar vulnerabilidades en imágenes
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
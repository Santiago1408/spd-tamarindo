import ConceptCard from "@/components/ui/ConceptCard";
import RazonGuia from "@/components/layout/razonGuia";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-800 dark:bg-black font-sans">

      {/* Hero section — ancho limitado y centrado */}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start mx-auto">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Hub de Educación Digital
        </div>
        <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
          Guía de Defensa contra la <span className="text-primary">Violencia Digital</span>
        </h1>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Herramientas y conocimientos actualizados para proteger tu integridad y privacidad en el entorno digital. Tu seguridad comienza con la prevención y el conocimiento de tus derechos.
        </p>
        <ConceptCard
          image="/concepts/grooming.png"
          title="Grooming"
          content="Building trust to exploit someone, especially minors, for harmful purposes."
        />
      </main>

      {/* Secciones de ancho completo */}
      <RazonGuia />

    </div>
  );
}
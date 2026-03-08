import ConceptCard from "@/components/ui/ConceptCard";
import RazonGuia from "@/components/layout/razonGuia";
import ImportantConcepts from "@/components/layout/ImportantConcepts";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero section — ancho limitado y centrado */}
      <main className="mx-auto max-w-7xl py-32 px-26 bg-white">
        <section className=" px-6 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">

            {/* COLUMNA TEXTO */}
            <div className="flex flex-col gap-6">

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Hub de Educación Digital
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
                Guía de Defensa contra la <span className="text-primary">Violencia Digital</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Herramientas y conocimientos actualizados para proteger tu integridad y privacidad en el entorno digital.
                Tu seguridad comienza con la prevención y el conocimiento de tus derechos.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Comenzar Guía
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 px-8 py-4 text-base font-bold text-primary hover:bg-primary/5 transition-all">
                  Ver Recursos
                </button>
              </div>
            </div>

            {/* COLUMNA IMAGEN */}
            <div className="relative h-[400px] w-full lg:h-[500px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-10 blur-3xl"></div>
              <div
                className="h-full w-full overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 shadow-2xl"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyxVgpMYiEQo36z0VefUEhN21fFFAAy_J5uXmVuoiy4P6Lt3XO7m9jygNoFiWZQS_9K6HnlH9J-OOSY0q2W9Lw8JObEv4bJWNRySr8KVdkbcEo2pX6bs1mfTETQ2BrNVqT1OXpHhr9oKlPcT_uHxUusGDxyvN3OkHf6IGt7DX3AJAQcVkCikwQQwSqPiB6e7gursdEZFnLSYM4ZiBe8bGglWlvfhvtaoDtVHC1xHL6cfig4SkwMNH9azu3-irWYMEtiZkcYmu_jxZR')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </section>

      </main>
      <RazonGuia />
      <ImportantConcepts />
    </div>
  );
}
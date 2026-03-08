import SimuladorHuella from "@/components/layout/SimuladorHuella";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light py-10">
      {/* Aquí estamos "inyectando" tu componente en la página principal */}
      <SimuladorHuella />
    </main>
  );
}
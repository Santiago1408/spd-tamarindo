import SimuladorHuella from "@/components/layout/SimuladorHuella";
import BibliotecaCasos from "@/components/layout/BibliotecaCasos"; 

export default function PaginaSimulador() {
  return (
    <div className="min-h-screen bg-background-light py-10">
      
      <SimuladorHuella />
      <div className="max-w-5xl mx-auto my-16 border-t border-gray-200"></div>
      <BibliotecaCasos />

    </div>
  );
}
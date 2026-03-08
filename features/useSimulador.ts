import { useState } from "react";

export const useSimulador = () => {
  const [nombreUsr, setNombreUsr] = useState("");
  const [estaAnalizando, setEstaAnalizando] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const analizarHuella = () => {
    if (!nombreUsr) return; 
    
    setEstaAnalizando(true);
    setMostrarResultados(false);
    
    // Simular una espera de busqueda
    setTimeout(() => {
      setEstaAnalizando(false);
      setMostrarResultados(true);
    }, 2000);
  };

  return {
    nombreUsr,
    setNombreUsr,
    estaAnalizando,
    mostrarResultados,
    analizarHuella
  };
};
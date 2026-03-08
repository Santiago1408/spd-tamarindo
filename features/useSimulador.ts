import { useState } from "react";

export const useSimulador = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [estaAnalizando, setEstaAnalizando] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const analizarHuella = () => {
    if (!nombreUsuario) return; 
    
    setEstaAnalizando(true);
    setMostrarResultados(false);
    
    setTimeout(() => {
      setEstaAnalizando(false);
      setMostrarResultados(true);
    }, 2000);
  };


  return {
    nombreUsuario,
    setNombreUsuario,
    estaAnalizando,
    mostrarResultados,
    analizarHuella
  };
};
// src/context/usePokemon.ts
import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export function usePokemon() {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon deve ser usado dentro de PokemonProvider");
  }

  return context;
}

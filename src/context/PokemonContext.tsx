// src/context/PokemonContext.tsx
import { createContext } from "react";
import type { PokemonState } from "./pokemonTypes";

export type PokemonContextType = {
  state: PokemonState;
  capturePokemon: (name: string, type: string) => void;
  gainHp: (name: string, hp: number) => Promise<void>;
  resetGame: () => void;
};

export const PokemonContext =
  createContext<PokemonContextType | null>(null);

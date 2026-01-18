// src/context/PokemonContext.tsx
import { createContext } from "react";
import type { PokemonState, UserStatus } from "./pokemonTypes";

export type PokemonContextType = {
  state: PokemonState;
  capturePokemon: (name: string, type: string) => void;
  gainHp: (name: string, hp: number) => Promise<void>;
  gainPokeball : (gain : number) => void
  usePokeball : (lose : number) => void
  resetGame: () => void;
};

export const PokemonContext =
  createContext<PokemonContextType | null>(null);

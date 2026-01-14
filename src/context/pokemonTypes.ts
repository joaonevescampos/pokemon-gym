// src/context/pokemonTypes.ts
export type Pokemon = {
  name: string;
  type: string;
  hp: number;
  level: number;
};

export type PokemonState = {
  myPokemons: Pokemon[];
};

export type PokemonAction =
  | { type: "CAPTURE_POKEMON"; payload: { name: string; type: string } }
  | { type: "GAIN_HP"; payload: { name: string; hp: number } }
  | { type: "EVOLVE_POKEMON"; payload: { name: string; newName: string } }
  | { type: "RESET_GAME" };

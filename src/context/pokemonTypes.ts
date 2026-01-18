// src/context/pokemonTypes.ts
export type Pokemon = {
  name: string;
  type: string;
  hp: number;
  level: number;
};

export type UserStatus = {
  pokeball: number;
};

export type PokemonState = {
  userStatus : UserStatus
  myPokemons: Pokemon[];
};

export type PokemonAction =
  | { type: "CAPTURE_POKEMON"; payload: { name: string; type: string } }
  | { type: "GAIN_HP"; payload: { name: string; hp: number } }
  | { type: "EVOLVE_POKEMON"; payload: { name: string; newName: string } }
  | { type: "GAIN_POKEBALL"; payload: { gain: number } }
  | { type: "USE_POKEBALL"; payload: { lose : number } }
  | { type: "RESET_GAME" };

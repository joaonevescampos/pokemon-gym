// src/context/pokemonReducer.ts
import type { PokemonState, PokemonAction } from "./pokemonTypes";

export const initialPokemonState: PokemonState = {
  myPokemons: [],
};

function calculateLevel(hp: number) {
  return Math.min(Math.floor(hp / 10), 10);
}

export function pokemonReducer(
  state: PokemonState,
  action: PokemonAction
): PokemonState {
  switch (action.type) {
    case "CAPTURE_POKEMON":
      const alreadyCaptured = state.myPokemons.some(
        (p) => p.name === action.payload.name
      );

      if (alreadyCaptured) {
        return state;
      }
      return {
        ...state,
        myPokemons: [
          ...state.myPokemons,
          {
            name: action.payload.name,
            type: action.payload.type,
            hp: 0,
            level: 0,
          },
        ],
      };

    case "GAIN_HP":
      return {
        ...state,
        myPokemons: state.myPokemons.map((p) => {
          if (p.name !== action.payload.name) return p;

          const newHp = Math.min(p.hp + action.payload.hp, 100);
          const newLevel = calculateLevel(newHp);

          return {
            ...p,
            hp: newHp,
            level: newLevel,
          };
        }),
      };

    case "EVOLVE_POKEMON":
      return {
        ...state,
        myPokemons: state.myPokemons.map((p) =>
          p.name === action.payload.name
            ? { ...p, name: action.payload.newName }
            : p
        ),
      };

    case "RESET_GAME":
      return initialPokemonState;

    default:
      return state;
  }
}

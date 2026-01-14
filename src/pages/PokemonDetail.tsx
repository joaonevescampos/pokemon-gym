import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const myPokemons = [
  { name: "pichu", type: "electric", hp: 43, level: 1 },
  { name: "bulbasaur", type: "grass", hp: 10, level: 1 },
  { name: "charmander", type: "fire", hp: 10, level: 1 },
  { name: "squirtle", type: "squirtle", hp: 10, level: 1 },
];

const PokemonDetail = () => {
  const pokemonName = useParams().pokemonName;
  const [pokemonImage, setpokemonImage] = useState("");

  useEffect(() => {
    getPokemonImage(name);
  }, []);

  const getPokemonImage = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setpokemonImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
      );
    } catch (error) {
      console.log("cannot get pokemon image");
    }
  };

  const { name, type, hp, level } = myPokemons.filter(
    (pokemon) => pokemon.name === pokemonName
  )[0];

  const widthHP = hp%10*10

  return (
    <main className="flex max-lg:flex-col">
      <section
        className={`flex-2 max-lg:flex-none flex flex-col items-center justify-center gap-2  max-lg:w-full h-screen max-lg:h-100 bg-linear-to-br ${
          type === "electric"
            ? "from-gd-eletric1 to-gd-eletric2"
            : type === "grass"
            ? "from-gd-grass1 to-gd-grass2"
            : type === "water"
            ? "from-gd-water1 to-gd-water2"
            : type === "fire"
            ? "from-gd-fire1 to-gd-fire2"
            : "from-gd-orange to-gd-blue"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <img
            src={pokemonImage}
            alt={pokemonName}
            className="w-80 max-lg:w-50"
          />
          <span className="text-2xl font-bold">{name}</span>
          <span
        className={`font-bold text-sm ${
          type === "electric"
            ? "bg-amber-500"
            : type === "grass"
            ? "bg-emerald-700"
            : type === "water"
            ? "bg-blue-700"
            : "bg-amber-700"
        }  text-white rounded-2xl px-2 z-10`}
      >
        {type}
      </span>
          <span className="text-sm opacity-80 font-bold">Level: {level}</span>
          <div className="h-3 rounded-4xl bg-gray-800 w-50">
            {hp && (
            <hr className={`border-6 rounded-4xl text-green-300`} style={{ width: `${widthHP}%` }} />
            )}
          </div>
          <span className="text-sm opacity-80 font-bold">HP: {hp}</span>
        </div>
      </section>
      <section className="flex-3 max-lg:flex-none"></section>
    </main>
  );
};

export default PokemonDetail;

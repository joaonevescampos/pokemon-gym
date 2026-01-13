import { useEffect, useState } from "react";
import Button from "./Button";

interface PokemonCard {
  name: string;
  pokemonSelected: string;
}

const PokemonCard = ({ name, pokemonSelected }: PokemonCard) => {
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    takePokemonInfos(name);
  }, [name]);

  const takePokemonInfos = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setImageURL(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
      );
      setType(data.types[0].type.name);
    } catch (error) {
      console.log("cannot get pokemon image");
    }
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center p-4 gap-2 bg-linear-to-br ${
        type === "electric"
          ? "from-gd-eletric1 to-gd-eletric2"
          : type === "grass"
          ? "from-gd-grass1 to-gd-grass2"
          : type === "water"
          ? "from-gd-water1 to-gd-water2"
          : type === "fire"
          ? "from-gd-fire1 to-gd-fire2"
          : "from-gd-orange to-gd-blue"
      } rounded-xl max-w-64 p-4`}
    >
      <div className="absolute w-full h-full z-0 bg-black opacity-50 rounded-xl"></div>
      {imageURL ? (
        <img src={imageURL} alt={name} className="w-40 z-10" />
      ) : (
        <span>sem imagem</span>
      )}
      <h2 className="font-bold z-10">{name}</h2>
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
      <Button
        text={`${pokemonSelected === name ? "selecionado" : "selecionar"}`}
        style="z-10"
        selected={pokemonSelected}
        pokemonName={name}
      />
    </section>
  );
};

export default PokemonCard;

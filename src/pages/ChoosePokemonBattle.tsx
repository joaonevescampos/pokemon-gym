import PokemonCard from "../components/PokemonCard";
import florestImage from "../assets/florest.png";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../context/usePokemon";
import { useEffect, useState } from "react";
import Button from "../components/Button";
// import { isNumberObject } from "util/types";

const ChoosePokemonBattle = () => {
  const { state } = usePokemon();
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<
    number | undefined
  >(undefined);
  const [imageURL, setImageURL] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    setSelectedPokemonIndex(index);
  };

  const getPokemonImage = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setImageURL(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
      );
    } catch (error) {
      console.log("cannot get pokemon image");
    }
  };

  useEffect(() => {
    if (param.pokemonOponent) {
      getPokemonImage(param.pokemonOponent);
    }
  }, []);
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen max-lg:h-full max-lg:min-h-100 text-white">
        <section className="relative w-full h-150 max-lg:h-80">
          <img
            src={florestImage}
            alt="florest"
            className="absolute w-full h-full z-0 object-cover"
          />
          {imageURL && (
            <img
              src={imageURL}
              alt="florest"
              className="absolute left-1/2 top-1/2 w-48 h-48 -translate-1/2 z-0"
            />
          )}
        </section>
        <section className="flex flex-col gap-12 items-center justify-start px-4 py-8 h-full">
          <h1 className="text-white font-bold text-xl text-center">
            Escolha um dos seus pokémons para batalhar contra o{" "}
            {param.pokemonOponent}
          </h1>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 items-center justify-center text-xl max-w-300">
            {state.myPokemons.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                buttonText={`${
                  selectedPokemonIndex === index ? "selecionado" : "selecionar"
                }`}
                buttonStyle={`${
                  selectedPokemonIndex === index && "bg-bt-purple! text-white!"
                }`}
                level={pokemon.level}
                inactive={false}
                buttonClick={() => handleClick(index)}
              />
            ))}
          </div>
        </section>
        {typeof selectedPokemonIndex === "number" ? (
          <div>
            <Button
              text="Iniciar batalha!"
              onClick={() =>
                navigate(
                  `/pokemon-battle/${param?.pokemonOponent}/${state.myPokemons[selectedPokemonIndex].name}`
                )
              }
            />
          </div>
        ) : (
          <div className="h-10"></div>
        )}
      </main>
    </>
  );
};

export default ChoosePokemonBattle;

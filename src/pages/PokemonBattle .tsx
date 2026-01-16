import florestImage from "../assets/florest.png";
import battleIcon from "../assets/battle-icon.png";
import pokeball from "../assets/pokeball-animation.png";
import lightCircle from "../assets/light-circle.png";



import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonBattle = () => {
  const [pokemonOponent, setPokemonOponent] = useState("");
  const [myPokemon, setMyPokemon] = useState("");

  const param = useParams();

  const getPokemonImage = async (name: string, isOponent: boolean) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      if (isOponent) {
        setPokemonOponent(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
        );
      } else {
        setMyPokemon(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
        );
      }
    } catch (error) {
      console.log("cannot get pokemon image");
    }
  };

  const [attacker, setAttacker] = useState<"top" | "bottom">("top");

  useEffect(() => {
    if (param.pokemonOponent) {
      getPokemonImage(param.pokemonOponent, true);
    }

    if (param.pokemonChose) {
      getPokemonImage(param.pokemonChose, false);
    }

    const interval = setInterval(() => {
      setAttacker((prev) => (prev === "top" ? "bottom" : "top"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [isFighting, setIsFighting] = useState(true);
  const [isCapturing, setIsCapturing] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFighting(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isFighting) {
      console.log("acabou a luta");
      // navigate(`/capture-animation/${pokemonOponent}`);
      const timer = setTimeout(() => {
        setIsCapturing(false);
        console.log("a captura acabou")
      }, 1500);
      return () => clearTimeout(timer);
    }

  }, [isFighting]);

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen max-lg:h-full max-lg:min-h-100 text-white">
        <section className="relative w-full h-screen">
          <img
            src={florestImage}
            alt="florest"
            className="absolute w-full h-full z-0 object-cover"
          />
          {(pokemonOponent && isCapturing) && (
            <img
              src={pokemonOponent}
              alt=""
              className={`absolute left-1/2 top-3/7 w-36 h-36 -translate-1/2 z-0 ${
                isFighting
                  ? attacker === "top"
                    ? "animate-attack-down"
                    : "animate-hit-right"
                  : ""
              }`}
            />
          )}
          {!isCapturing && (
            <img
              src={lightCircle}
              alt=""
              className={`absolute left-1/2 top-3/7 w-24 opacity-0 -translate-1/2 z-0 animate-circle-effect`}
            />
          )}
          {isFighting && (
            <div
              className={`flex flex-col items-center absolute left-1/2 bottom-[28%] -translate-1/2 z-0 ${
                isFighting ? "animate-float" : ""
              }`}
            >
              <img src={battleIcon} alt="florest" className="w-12 h-12 " />
              <span className="font-bold text-xl max-lg:text-sm text-center">
                Batalha em andamento
              </span>
            </div>
          )}
          {myPokemon && isFighting && (
            <img
              src={myPokemon}
              alt="florest"
              className={`absolute left-1/2 bottom-0 w-48 h-48 -translate-1/2 z-0 ${
                isFighting
                  ? attacker === "top"
                    ? "animate-hit-left"
                    : "animate-attack-up"
                  : ""
              }`}
            />
          )}
          {!isFighting && (
            <img
              src={pokeball}
              alt="florest"
              className={`absolute left-1/2 bottom-0 opacity-0 w-12 -translate-1/2 z-0 ${
                !isFighting ? "animate-pokeball-hit" : ""
              }`}
            />
          )}
          {!isCapturing && (
            <img
              src={pokeball}
              alt="florest"
              className={`absolute left-1/2 bottom-75 w-12 -translate-1/2 z-0 animate-pokeball-captured`}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default PokemonBattle;

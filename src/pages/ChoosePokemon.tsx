import { useEffect, useState } from "react";
import Button from "../components/Button";
import PokemonCard from "../components/PokemonCard";
import pokebola from "../assets/pokeball.png";
import { Link } from "react-router-dom";

const ChoosePokemon = () => {
  const [inactive, setinactive] = useState(true);
  const [initialPokemons, setInitialPokemons] = useState([
    { name: "pichu", selected: false },
    { name: "bulbasaur", selected: false },
    { name: "charmander", selected: false },
    { name: "squirtle", selected: false },
  ]);

  const handleClick = (index : number) => {
    const updateSelection = initialPokemons.map((pokemon, i) => index === i ? {...pokemon, selected: true} : {...pokemon, selected: false
    })
    setInitialPokemons(updateSelection)
    //adicionar o pokemon escolhido a listagem dos meus pokemons capturados
  }

  useEffect(() => {
    const oneSelected: boolean = initialPokemons.some(
      (pokemon) => pokemon.selected === true
    );
    setinactive(!oneSelected);
  }, [initialPokemons]);

  return (
    <>
      <header className="relative w-full h-12 text-white">
        <div className="absolute flex items-end gap-2 top-4 left-4">
          <Link to="/" className="text-sm  font-bold opacity-70">
            voltar
          </Link>
        </div>
        <div className="absolute flex items-end gap-2 top-4 right-4">
          <span className="text-sm font-bold opacity-70">x 0 </span>
          <img src={pokebola} alt="pokebola" width={28} />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center h-[calc(100vh-48px)] max-lg:h-full text-white">
        <div className="flex flex-col gap-4">
          <section className="relative flex items-center justify-center w-full h-full pt-4">
            <div className="flex flex-col gap-4 items-center justify-center p-4 max-w-150 max-lg:max-w-120">
              <h1 className="text-2xl text-center font-extrabold">
                Escolha seu pokemon inicial
              </h1>
              <p className="text-sm font-medium text-center">
                Escolha com sabedoria, ele vai seguir com você um bom tempo!
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-8 items-center justify-center px-4 py-8 h-full">
            <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 items-center justify-center text-xl h-full max-w-300 m-auto">
              {initialPokemons.map((pokemon, index) => (
                <PokemonCard
                  key={index}
                  name={pokemon.name}
                  pokemonSelected={pokemon.selected ? pokemon.name : ""}
                  buttonText={`${
                    pokemon.selected ? "selecionado" : "selecionar"
                  }`}
                  buttonClick={() => handleClick(index)}
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Button path="/my-pokemons" text="próximo" inactive={inactive} />
              {inactive && (
                <p className="text-red-300 text-sm">
                  Selecione um pokemon para prosseguir!
                </p>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ChoosePokemon;

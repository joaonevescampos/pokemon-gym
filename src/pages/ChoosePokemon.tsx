import Button from "../components/Button"
import PokemonCard from "../components/PokemonCard"

const initialPokemons = [
  "pichu",
  "bulbasaur",
  "charmander",
  "squirtle",
]

const ChoosePokemon = () => {
  return (
    <main className="flex flex-col h-screen max-lg:h-full text-white">
      <section className="relative bg-linear-to-br from-gd-orange to-gd-blue flex items-center justify-center w-full">
        <div className="flex flex-col gap-8 items-center justify-center p-8 max-w-150 max-lg:max-w-120">
          <h1 className="text-3xl text-center font-extrabold">Escolha seu pokemon inicial</h1>
          <p className="text-xl font-medium text-center">
            Escolha com sabedoria, ele vai seguir com você um bom tempo!
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-12 items-center justify-center bg-bg-blue px-4 py-16 h-full">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 items-center justify-center text-xl h-full max-w-300 m-auto">
          {initialPokemons.map(pokemon => <PokemonCard name={pokemon} />)} 
        </div>
        <Button path="/my-pokemons" text="próximo" />
      </section>
    </main>
  )
}

export default ChoosePokemon
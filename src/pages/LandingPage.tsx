import charizardImage from "../assets/charizard.png";
import ivysaurImage from "../assets/bulbasaur.png";
import bgPokeball from "../assets/pokeball-background.png";

import Button from "../components/Button";

const LandingPage = () => {
  return (
    <main className="relative bg-linear-to-tl from-gray-800 to-gray-950 flex max-lg:flex-col justify-between items-center h-full max-lg:h-full text-white overflow-x-hidden">
      <section className=" flex-2 max-lg:flex-none flex items-center justify-center h-screen max-lg:h-130 w-full max-lg:overflow-x-hidden">
        <img
          src={bgPokeball}
          alt="pokeball"
          className="absolute bottom-12 left-0 max-lg:w-52"
        />
        <img
          src={charizardImage}
          alt="charizard"
          className="absolute top-0 left-0 w-60 max-lg:w-50"
        />
        <img
          src={ivysaurImage}
          alt="ivysaur"
          className="absolute bottom-0 max-lg:top-85 -right-10 max-lg:-right-10 w-50 max-lg:w-50 z-50"
        />
        <div className="flex flex-col gap-8 items-center justify-center p-8 max-w-150 max-lg:max-w-100">
          <h1 className="text-5xl pt-8 font-extrabold">POKEGYM</h1>
          <p className="text-xl font-medium text-center">
            Se aventure nessa jormada! Seja produtivo e veja seus pokemons
            evoluirem junto com você.
          </p>
        </div>
      </section>
      <section className="flex-3 max-lg:flex-none flex flex-col gap-8 items-start max-lg:items-center p-12 max-lg:p-4 h-full w-full z-0">
        <h2 className="text-2xl font-extrabold">TUTORIAL</h2>
        <div className="flex flex-col gap-4 max-w-150 text-sm">
          <p>
            1 - Inicialmente você escolhe um pokemon para compor seu time
            inicial.
          </p>

          <p>
            2 - Crie sua lista de tarefas do dia e conclua cada uma delas para
            treinar seu pokémon. Só é possível treinar seu pokémon 1x no dia.
          </p>

          <p>
            3 - Após concluir todas tarefas do dia, seu pokémon escolhido vai
            ficar mais forte. Assim, ele vai ganhando níveis e com o
            tempo podem evoluir para sua segunda e terceira forma.
          </p>

          <p>
            4 - Depois de evoluir seu pokemon, você receberá 3 pokebolas para
            capturar até 3 novos pokémons. Para capturar um novo pokémon você deve ganhar uma batalha contra ele. São 4 níveis de batalha a
            depender a força do pokémon. Caso não consiga ganhar, você pode
            continuar treinando seu pokémon até receber mais pokebolas para tentar novamente.
          </p>

          <p>
            Dica: pokémon num nível mais alto batalhando e ter mais pokemons
            capturados, tem mais chances de ganhar as batalhas! Além disso, você
            pode escolher pokémons mais fracos selecionando o filtro - fácil.
          </p>

          <p>
            5 - O pokémon que for treinado todos os dias ganha bônus de
            experiência, evoluindo mais rápido.{" "}
          </p>

          <p>
            6 - O pokémon que não evoluiu para sua terceira forma, se não for
            treinado por vários dias consecutivos, pode ir baixando de nível...
          </p>
        </div>
        <Button text="Começar" path="/choose-pokemon" />
      </section>
    </main>
  );
};

export default LandingPage;

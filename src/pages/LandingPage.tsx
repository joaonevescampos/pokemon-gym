import charizardImage from "../assets/charizard.png"
import ivysaurImage from "../assets/bulbasaur.png"
import bgPokeball from "../assets/pokeball-background.png"

import Button from "../components/Button";


const LandingPage = () => {
  return (
    <main className="flex max-lg:flex-col justify-between items-center h-screen max-lg:h-full text-white">
      <section className="relative bg-linear-to-br from-gd-orange to-gd-blue flex-2 max-lg:flex-none flex items-center justify-center h-screen max-lg:h-130 w-full max-lg:overflow-x-hidden">
        <img src={bgPokeball} alt="pokeball" className="absolute bottom-12 left-0 max-lg:w-52"/>
        <img src={charizardImage} alt="charizard" className="absolute top-0 left-0 w-100 max-lg:w-50"/>
        <img src={ivysaurImage} alt="ivysaur" className="absolute bottom-0 -right-25 max-lg:-right-10 w-80 max-lg:w-50 z-50"/>
        <div className="flex flex-col gap-8 items-center justify-center p-8 max-w-150 max-lg:max-w-100">
          <h1 className="text-6xl font-extrabold">POKEGYM</h1>
          <p className="text-xl font-medium text-center">
            Se aventure nessa jormada! Seja produtivo e veja seus
            pokemons evoluirem junto com você.
          </p>
        </div>
      </section>
      <section className="flex-3 max-lg:flex-none flex flex-col gap-12 items-center justify-center bg-bg-blue p-12 h-full z-0">
        <h2 className="text-2xl font-extrabold">TUTORIAL</h2>
        <div className="flex flex-col gap-4 max-w-200 text-xl">
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
            ganhar experiência (1 HP). Assim, ele vai ganhando níveis e com o
            tempo podem evoluir para sua segunda e terceira forma.{" "}
          </p>

          <p>
            4 - Depois de evoluir seu pokemon, você receberá 3 pokebolas para
            capturar até 3 novos pokémons na batalha. São 4 níveis de batalha a
            depender a força do pokémon. Caso não consiga ganhar, você pode
            continuar treinando seu pokémon até receber mais pokebolas e
            participar de novas batalhas.
          </p>

          <p>
            Dica: pokémon num nível mais alto batalhando e ter mais pokemons
            capturados, tem mais chances de ganhar as batalhas! Além disso, você
            pode escolher pokémons mais fracos selecionando o filtro - fácil.
            Estes, são mais facilmente capturáveis.
          </p>

          <p>
            5 - O pokémon que for treinado todos os dias ganha bônus de
            experiência, evoluindo mais rápido.{" "}
          </p>

          <p>
            6 - O pokémon que não evoluiu para sua terceira forma, se não for
            treinado por vários dias consecutivos, pode ir baixando de nível...
          </p>

          <p>
            Dica: Evite treinar vários pokémons ao mesmo tempo, que não estejam
            na sua forma mais evoluida, para não perder experiencia caso esqueça
            de treinar um.
          </p>
        </div>
        <Button text="Começar" path="/my-pokemons" />
      </section>
    </main>
  );
};

export default LandingPage;

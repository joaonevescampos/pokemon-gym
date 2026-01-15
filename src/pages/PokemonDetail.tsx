import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { usePokemon } from "../context/usePokemon";

interface ChecklistType {
  task: string;
  checked: boolean;
}

const PokemonDetail = () => {
  const { state, gainHp } = usePokemon();
  const pokemonName = useParams().pokemonName;
  const [pokemonImage, setpokemonImage] = useState("");
  const [pokemonData, setPokemonData] = useState({
    name: pokemonName,
    type: "",
    hp: 0,
    level: 0,
  });
  const [checklist, setChecklist] = useState<ChecklistType[]>([
    { task: "escreva sua tarefa aqui", checked: false },
  ]);
  const [date, setDate] = useState("");

  useEffect(() => {
    getPokemonInfos(pokemonName!);
    formatDate();
  }, []);

  const getPokemonInfos = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setpokemonImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
      );

      const updatePokemonData = state.myPokemons.filter(
        (pokemon) => pokemon.name === pokemonName
      )[0];
      setPokemonData(updatePokemonData);
    } catch (error) {
      console.log("cannot get pokemon image");
    }
  };

  const { name, type, hp, level } = pokemonData;

  const widthHP = (hp % 10) * 10;

  const handleClick = () => {
    const newChecklist = [...checklist, { task: "", checked: false }];
    console.log(newChecklist);
    setChecklist(newChecklist);
  };

  const handleChange = (e: any, index: number) => {
    e.preventDefault();
    const newChecklist = checklist.map((item, i) =>
      i === index ? { ...item, task: e.target.value } : item
    );
    setChecklist(newChecklist);
  };

  const handleCheck = (e: any, index: number) => {
    const newChecklist = checklist.map((item, i) =>
      i === index ? { ...item, checked: e.target.checked } : item
    );
    console.log(newChecklist);
    setChecklist(newChecklist);
  };

  const handleFinish = () => {
    gainHp(name!, 1);
  };

  const formatDate = () => {
    const today = new Date();

    const week = [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
    ];
    const month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    setDate(
      `${today.getDate()}, ${
        month[today.getMonth()]
      }, ${today.getFullYear()} - ${week[today.getDay()]}`
    );
  };

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
          {pokemonImage && (
            <img
              src={pokemonImage}
              alt={pokemonName}
              className="w-80 max-lg:w-50"
            />
          )}
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
            <hr
              className={`border-6 rounded-4xl text-green-300`}
              style={{ width: `${widthHP}%` }}
            />
          </div>
          <span className="text-sm opacity-80 font-bold">HP: {hp}</span>
        </div>
      </section>
      <section className="flex-3 flex flex-col gap-2 items-center justify-center max-lg:flex-none px-4 py-8">
        <div className="flex flex-col gap-4 w-full max-w-150 max-lg:max-w-100">
          <span className="text-white text-sm opacity-50 font-medium">
            {date}
          </span>
          <p className="text-white text-center text-sm">
            Crie seu checklist do dia, conclua todas suas tarefas e veja seu
            pokemon ganhar experiência a cada dia
          </p>
          <Button
            path="/"
            text="Ver progresso mensal"
            style="w-full text-white my-8"
          />
          <ul className="flex flex-col gap-4 w-full">
            {checklist?.map((item, index) => (
              <li className="flex items-center gap-4" key={index}>
                <input
                  type="checkbox"
                  name={`${index}`}
                  id={`${index}`}
                  className="w-8 h-8 cursor-pointer accent-bt-purple"
                  checked={item.checked}
                  onChange={(e) => handleCheck(e, index)}
                />
                <input
                  type="text"
                  className={`w-full h-8 bg-white rounded-3xl p-4 ${
                    item.checked && "bg-bt-purple! text-white!"
                  }`}
                  defaultValue={item.task}
                  id={`${index}`}
                  name={`${index}`}
                  onChange={(e) => handleChange(e, index)}
                />
              </li>
            ))}
          </ul>
          <Button
            text="Adicionar tarefa"
            style="w-full text-black! bg-gray-400! hover:bg-gray-200!"
            onClick={() => handleClick()}
          />
          {checklist.every((item) => item.checked) && (
            <Link to="/home">
              <Button
                text="Finalizar treino"
                style="w-full text-white! bg-green-600! hover:bg-green-900! hover:text-white! mt-8"
                onClick={() => handleFinish()}
              />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};

export default PokemonDetail;

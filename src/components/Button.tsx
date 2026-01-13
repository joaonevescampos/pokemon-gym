import { Link } from "react-router";

interface ButtonProps {
  path?: string;
  style?: string;
  text: string;
  inative?: boolean;
  selected?: string;
  pokemonName?: string;
}

const Button = ({
  path,
  text,
  style,
  inative,
  selected,
  pokemonName,
}: ButtonProps) => {
  return (
    <>
      {path && !inative ? (
        <Link to={path}>
          <button
            className={`flex items-center justify-center ${
              selected === pokemonName ? "bg-bt-purple" : "text-black bg-white"
            } h-10 w-36 cursor-pointer rounded-3xl  ${style}`}
          >
            <span className=" text-sm max-lg:text-sm font-bold">{text}</span>
          </button>
        </Link>
      ) : (
        <button
          className={`flex items-center justify-center ${
            selected ? "bg-bt-purple" : "text-black bg-white"
          }  h-10 w-36 cursor-pointer rounded-3xl  ${style} ${
            inative && "bg-gray-500!"
          }`}
        >
          <span className=" text-sm max-lg:text-sm font-bold">{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;

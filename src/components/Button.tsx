import { Link } from "react-router";

interface ButtonProps {
  path?: string;
  style?: string;
  text: string;
  inactive?: boolean;
  selected?: string;
  pokemonName?: string;
  onClick?: () => void;
}

const Button = ({
  path,
  text,
  style,
  inactive,
  selected,
  pokemonName,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {path && !inactive ? (
        <Link to={path} className="z-10">
          <button
            className={`flex items-center justify-center ${
              selected === pokemonName ? "bg-bt-purple" : "text-black bg-white"
            } h-10 w-36 cursor-pointer rounded-3xl ${style}`}
          >
            <span className=" text-sm max-lg:text-sm font-bold">{text}</span>
          </button>
        </Link>
      ) : onClick ? (
        <button
          className={`flex items-center justify-center ${
            selected ? "bg-bt-purple" : "text-black bg-white"
          }  h-10 w-36 cursor-pointer rounded-3xl z-10 ${style} ${
            inactive && "bg-gray-500!"
          }`}
          onClick={() => onClick()}
        >
          <span className=" text-sm max-lg:text-sm font-bold">{text}</span>
        </button>
      ) : (
        <button
          className={`flex items-center justify-center ${
            selected ? "bg-bt-purple" : "text-black bg-white"
          }  h-10 w-36 cursor-pointer rounded-3xl z-10 ${style} ${
            inactive && "bg-gray-500!"
          }`}
        >
          <span className=" text-sm max-lg:text-sm font-bold">{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;

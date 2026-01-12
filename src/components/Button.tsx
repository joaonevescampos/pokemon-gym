import { Link } from "react-router";

interface ButtonProps {
  path?: string;
  style?: string;
  text: string;

}

const Button = ({ path, text, style }: ButtonProps) => {
  return (
    <>
      {path ? (
        <Link to={path}>
          <button className={`flex items-center justify-center bg-bt-purple h-12 w-60 max-lg:w-36 cursor-pointer rounded-3xl text-white ${style}`}>
            <span className=" text-xl font-bold">{text}</span>
          </button>
        </Link>
      ) : (
        <button className={`flex items-center justify-center bg-bt-purple h-12 w-60 max-lg:w-36 cursor-pointer rounded-3xl text-white ${style}`}>
          <span className=" text-xl font-bold">{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;

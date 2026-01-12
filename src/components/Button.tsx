import { Link } from "react-router";

interface ButtonProps {
  path: string;
  text: string;
}

const Button = ({ path, text }: ButtonProps) => {
  return (
    <Link to={path}>
      <button className="flex items-center justify-center bg-bt-purple h-12 w-60 cursor-pointer rounded-3xl">
        <span className="text-white text-xl font-bold">{text}</span>
      </button>
    </Link>
  );
};

export default Button;

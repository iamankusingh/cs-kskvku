import { TransitionLink } from "./TransitionLink";

interface buttonPrope {
  title: string;
  path: string;
}

const Button: React.FC<buttonPrope> = ({ title, path }) => {
  return (
    <TransitionLink
      href={path}
      className="p-2 border-2 border-primary border-xl rounded-lg hover:bg-primary active:bg-primary duration-300 cursor-pointer"
    >
      {title}
    </TransitionLink>
  );
};

export default Button;

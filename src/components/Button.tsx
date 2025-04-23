import Link from "next/link";

interface buttonPrope {
  title: string;
  path: string;
}

const Button: React.FC<buttonPrope> = ({ title, path }) => {
  return (
    <Link
      href={path}
      className="p-2 border border-primary border-xl rounded-lg hover:bg-primary duration-300 cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default Button;

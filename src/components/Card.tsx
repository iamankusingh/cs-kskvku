import Button from "./Button";

interface cardProps {
  heading: string;
  title1: string;
  title2: string;
  title3: string;
  path: string;
}

const Card: React.FC<cardProps> = ({
  heading,
  title1,
  title2,
  title3,
  path,
}) => {
  return (
    <div className="p-4 text-left rounded-lg hover:scale-105 duration-400 main-card">
      <h4 className="text-2xl">{heading}</h4>

      <ul className="py-6">
        <li>{title1}</li>
        <li>{title2}</li>
        <li>{title3}</li>
      </ul>

      <Button title="Explore more" path={path} />
    </div>
  );
};

export default Card;

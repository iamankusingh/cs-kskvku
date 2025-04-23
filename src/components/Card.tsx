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
    <div className="p-4 text-left rounded-lg inset-shadow-2xs hover:scale-105 duration-400 [background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)] shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] dark:[background:linear-gradient(to_bottom,#374151,#1f2937)] dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]">
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

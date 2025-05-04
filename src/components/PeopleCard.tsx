import Image, { StaticImageData } from "next/image";
import React from "react";

interface peopleCardProps {
  img: StaticImageData;
  name: string;
  role: string;
}

const PeopleCard: React.FC<peopleCardProps> = ({ img, name, role }) => {
  return (
    <div className="flex items-center">
      <Image
        src={img}
        alt={name}
        className="h-26 w-auto mr-6 aspect-square rounded-lg"
      />
      <div className="text-left">
        <h2 className="text-xl">{name}</h2>
        <p>({role})</p>
      </div>
    </div>
  );
};

export default PeopleCard;

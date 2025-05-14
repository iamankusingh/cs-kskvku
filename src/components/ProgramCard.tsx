import React from "react";

interface programCardProps {
  children: React.ReactNode;
  id: string;
  heading: string;
  p1: string;
  p2: string;
  p3: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
}

const ProgramCard: React.FC<programCardProps> = ({
  children,
  id,
  heading,
  p1,
  p2,
  p3,
  li1,
  li2,
  li3,
  li4,
  ...props
}) => {
  return (
    <div
      id={id}
      className="h-fit p-5 text-left rounded-lg cursor-default main-card"
      {...props}
    >
      <h4 className="text-2xl font-bold">{heading}</h4>

      <div className="py-4">
        <p className="py-2 text-justify">{p1}</p>
        <p className="py-2 text-justify">{p2}</p>
        <p className="py-2 text-justify">{p3}</p>
      </div>

      <ul className="mb-6 list-disc pl-2">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>

      {children}
    </div>
  );
};

export default ProgramCard;

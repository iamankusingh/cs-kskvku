import React from "react";

interface programCardProps {
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
  heading,
  p1,
  p2,
  p3,
  li1,
  li2,
  li3,
  li4,
}) => {
  return (
    <div className="p-5 text-left rounded-lg hover:scale-102 duration-400 cursor-default [background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)] shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] dark:[background:linear-gradient(to_bottom,#374151,#1f2937)] dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]">
      <h4 className="text-2xl font-bold">{heading}</h4>

      <div className="py-4">
        <p className="py-2 text-justify">{p1}</p>
        <p className="py-2 text-justify">{p2}</p>
        <p className="py-2 text-justify">{p3}</p>
      </div>

      <ul className="list-disc pl-2">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>
    </div>
  );
};

export default ProgramCard;

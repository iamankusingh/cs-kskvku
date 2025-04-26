import React from "react";

interface carrerOptionProps {
  children: React.ReactNode;
  head: string;
}

const CarrerOption: React.FC<carrerOptionProps> = ({
  head,
  children,
  ...props
}) => {
  return (
    <div className="py-4 text-left cursor-default" {...props}>
      <h5 className="pb-2 text-xl">{head}</h5>

      <ul>{children}</ul>
    </div>
  );
};

export default CarrerOption;

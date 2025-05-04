import React from "react";

interface resourceCardProps {
  children: React.ReactNode;
  header: string;
}

const ResourceCard: React.FC<resourceCardProps> = ({
  children,
  header,
  ...props
}) => {
  return (
    <div
      className="h-fit p-4 text-left flex flex-col rounded-lg main-card"
      {...props}
    >
      <h3 className="pb-4 text-2xl cursor-default">{header}</h3>

      <div id="a" className="flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ResourceCard;

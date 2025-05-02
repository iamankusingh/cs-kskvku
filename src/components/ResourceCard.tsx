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
      className="h-fit p-4 text-left flex flex-col rounded-lg [background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)] shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] dark:[background:linear-gradient(to_bottom,#374151,#1f2937)] dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]"
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

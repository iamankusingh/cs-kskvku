"use client";

import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

interface courseCardProps {
  children: React.ReactNode;
  sem: number;
  title?: string;
  pdf?: string;
}

const CourseCard: React.FC<courseCardProps> = ({
  children,
  sem,
  title = "Full year PDF",
  pdf,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="my-2 p-4 text-left cursor-default rounded-lg duration-400 ease-in-out main-card">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h6 className="text-lg">Semester {sem}</h6>
        <button
          className={`duration-300 ease-in-out cursor-pointer ${
            open ? "rotate-[0.5turn]" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronCircleDown />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
        {...props}
      >
        {children}
        <br />
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border-2 border-primary border-xl rounded-lg hover:bg-primary active:bg-primary duration-300"
        >
          {title}
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default CourseCard;

"use client";

import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import Button from "./Button";

interface courseCardProps {
  children: React.ReactNode;
  sem: number;
}

const CourseCard: React.FC<courseCardProps> = ({ children, sem, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="my-2 p-4 text-left cursor-default rounded-lg duration-400 ease-in-out[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)] shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] dark:[background:linear-gradient(to_bottom,#374151,#1f2937)] dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052] ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h6 className="text-lg">Semester {sem}</h6>
        <button
          className={`duration-400 ease-in-out cursor-pointer ${
            open ? "rotate-[0.5turn]" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronCircleDown />
        </button>
      </div>

      <div className={`${open ? "h-fit block" : "h-0 hidden"}`} {...props}>
        {children}
        <br />
        <Button title="Full year pfd" path="#" />
      </div>
    </div>
  );
};

export default CourseCard;

"use client";

import Image from "next/image";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel: React.FC = () => {
  const [curr, setCurr] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);
  const autoSlideInterval: number = 3000;

  // images path list
  const imagePath = [one, two, three, four, five, six];

  // previous image button
  const prev = (): void => {
    setCurr((curr) => (curr === 0 ? imagePath.length - 1 : curr - 1));
  };

  // next image button
  const next = (): void => {
    setCurr((curr) => (curr === imagePath.length - 1 ? 0 : curr + 1));
  };

  // auto image change
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide]);

  return (
    <div
      className="overflow-hidden relative lg:h-[575px] lg:w-[766px] lg:rounded-xl"
      onMouseEnter={() => setAutoSlide(false)}
      onMouseLeave={() => setAutoSlide(true)}
    >
      {/* image */}
      <div
        className="flex transition-transform ease-out duration-400"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imagePath.map((data, idx) => {
          return <Image src={data} alt="Glimps" key={idx} />;
        })}
      </div>

      {/* next, forw button */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imagePath.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

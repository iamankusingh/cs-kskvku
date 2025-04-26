"use client";

import Image from "next/image";
import { useState } from "react";
import { TransitionLink } from "./TransitionLink";

interface NavigationItem {
  title: string;
  path: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navigation: NavigationItem[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Programs", path: "/programs" },
    { title: "Courses", path: "/courses" },
    { title: "Resources", path: "/resources" },
    { title: "Facilities", path: "/facilities" },
    { title: "Peoples", path: "/peoples" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="p-1 lg:px-4 flex items-center justify-between md:flex-col lg:flex-row sticky top-0 bg-primary z-20">
      {/* logo and text */}
      <div className="flex items-center gap-1">
        <Image
          width={100}
          height={100}
          src="/logo.png"
          alt="KSKVKU logo"
          className="h-14 w-14 aspect-square"
        />

        <div>
          <TransitionLink
            href="/"
            className="text-black text-md md:text-xl cursor-default"
          >
            <h1>Department of Computer Science</h1>
          </TransitionLink>

          <a href="https://kskvku.ac.in" target="_blank">
            <h2 className="text-black text-[.7rem] md:text-sm">
              Krantiguru Shyamji Krishna Verma Kachchh University
            </h2>
          </a>
        </div>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden">
        <button
          className="h-10 w-10 flex flex-col items-center justify-evenly"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-1 w-full origin-right duration-300 bg-black ${
              menuOpen ? "-rotate-35" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-full origin-right duration-300 bg-black ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-full origin-right duration-300 bg-black ${
              menuOpen ? "rotate-35" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* links */}
      <nav
        className={`md:h-fit w-screen md:w-fit absolute md:static md:block bg-slate-50 dark:bg-[#312f2f] md:bg-transparent md:dark:bg-transparent drop-shadow-2xl ${
          menuOpen ? "top-16 right-0" : "hidden"
        }`}
      >
        <ul className="p-6 md:p-0 flex flex-col justify-center items-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => {
            return (
              <li
                key={idx}
                className="md:text-black text-2xl md:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                <TransitionLink
                  href={item.path}
                  className="hover:text-indigo-600 duration-300"
                >
                  {item.title}
                </TransitionLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

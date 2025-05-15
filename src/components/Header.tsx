"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TransitionLink } from "./TransitionLink";

interface NavigationItem {
  title: string;
  path: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScroll, setLastScroll] = useState<number>(0);

  const navigation: NavigationItem[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Programs", path: "/programs" },
    { title: "Courses", path: "/courses" },
    { title: "Resources", path: "/resources" },
    { title: "Facilities", path: "/facilities" },
    { title: "Faculties", path: "/faculties" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        // if scroll down hide the header
        setScrollingDown(true);
      } else {
        // if scroll up show the header
        setScrollingDown(false);
      }
      // update current page location
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <header
      className={`p-1 lg:px-4 flex items-center justify-between md:flex-col lg:flex-row sticky duration-300 ease-in-out bg-primary z-20 ${
        scrollingDown ? "-top-18" : "top-0"
      }`}
    >
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
          className="h-7 w-7 flex flex-col items-center justify-around"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-[3px] w-full origin-right duration-300 bg-black ${
              menuOpen ? "-rotate-30" : ""
            }`}
          ></div>
          <div
            className={`h-[3px] w-full origin-right duration-300 bg-black ${
              menuOpen ? "rotate-30" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* links */}
      <nav
        className={`md:h-fit w-screen md:w-fit absolute top-16 md:static md:block bg-slate-50 dark:bg-[#312f2f] md:bg-transparent md:dark:bg-transparent drop-shadow-2xl duration-300 ease-in-out ${
          menuOpen ? "right-0" : "right-[100vw]"
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
                  className="hover:text-blue-600 duration-300"
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

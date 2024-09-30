import React from "react";
import { Link } from "react-scroll";

function DesktopHeader() {
  return (
    <>
      <header
        class="header"
        className="bg-lm-dark-green h-24 drop-shadow-2xl w-full flex justify-between items-center px-10  uppercase font-bold"
      >
        <div>
          <h1 className=" sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:text-pink-600 ">
            Rithuan Kobir
          </h1>
        </div>
        <ul className="flex gap-10 md:text-2xl lg:text-3xl xl:text-4xl">
        <Link to="about" smooth={true}>
            <li className="hover:text-pink-600 hover:underline">Home</li>
          </Link>
          <Link to="about-me" smooth={true}>
            <li className="hover:text-pink-600 hover:underline">About Me</li>
          </Link>
          <Link to="projects" smooth={true}>
            <li className="hover:text-pink-600 hover:underline">Projects</li>
          </Link>
          <Link to="footer" smooth={true}>
            <li className="hover:text-pink-600 hover:underline">Contact Me</li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default DesktopHeader;

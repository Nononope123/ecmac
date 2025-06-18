"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:hidden">
      {/* Checkbox to control menu state */}
      <input
        type="checkbox"
        id="hamburger"
        className="absolute -left-full"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      {/* Label to display hamburger icon */}
      <label
        htmlFor="hamburger"
        className="fixed top-4 right-4 z-20 flex items-center justify-center w-16 h-16 bg-[#52bf78] rounded-full shadow-xl cursor-pointer"
        aria-label="Menu"
      >
        <span
          className={`block w-10 h-1 bg-[#130159] relative transition-all duration-300 ${
            isOpen ? "bg-transparent" : ""
          }`}
        >
          <span
            className={`absolute w-full h-full bg-[#130159] top-[-10px] transition-transform duration-300 ${
              isOpen ? "top-[-1px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute w-full h-full bg-[#130159] top-[10px] transition-transform duration-300 ${
              isOpen ? "top-[-1px] -rotate-45" : ""
            }`}
          ></span>
        </span>
      </label>

      {/* Navigation menu */}
      <nav
        className={`fixed z-10 top-0 right-0 h-full w-3/4 max-w-xs bg-[#130159] text-white font-semibold transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500`}
      >
        {/* All text within the ul will now be white due to the parent nav's text-white */}
        <ul className="mt-24 space-y-6 px-6">
          <li>
            <a
              href="/"
              className="text-lg block pr-10 pl-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-2 transition-all"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg block pr-10 pl-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-2 transition-all"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              href="sector"
              className="text-lg block pr-10 pl-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-2 transition-all"
            >
              Filières
            </a>
          </li>
          <li>
            <a
              href="admission"
              className="text-lg block pr-10 pl-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-2 transition-all"
            >
              Admission
            </a>
          </li>
          <li>
            <a
              href="actualites"
              className="text-lg block pr-10 pl-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-2 transition-all"
            >
              Actualités
            </a>
          </li>
          <li>
            <a
              href="galerie"
              className="text-lg block pr-10 pl-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-2 transition-all"
            >
              Galerie
            </a>
          </li>

          <li> {/* Added li to wrap the button for consistent spacing/styling */}
            <a href="/admission" className="">
            <Button className="w-full" variant="default"> {/* Added w-full to make button fill space */}
              <span className="absolute inset-0 w-full h-full bg-[#52bf78] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span> {/* Changed background to match label */}
              <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-[#ffffff]">
                S'inscrire
              </span>
            </Button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
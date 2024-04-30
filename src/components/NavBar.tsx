"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`relative z-50 flex h-screen w-full flex-col items-center justify-center bg-green-800 p-5 md:w-auto ${isMenuOpen ? "md:ml-auto" : ""}`}
    >
      <Button onClick={toggleMenu} className="absolute top-0 block md:hidden">
        <ChevronRight />
      </Button>
      {/* {isMenuOpen ? "Close Menu" : "Open Menu"} */}
      <ul
        className={`flex flex-col gap-5 md:flex-col md:items-center ${isMenuOpen ? "block" : "hidden md:block"}`}
      >
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}

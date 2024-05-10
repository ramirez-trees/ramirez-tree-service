"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 flex h-screen w-full flex-col items-center justify-center bg-green-800 p-5 md:w-auto">
      <Button onClick={toggleMenu} className="absolute top-0 block md:hidden">
        <ChevronRight />
      </Button>
      <ul
        className={`flex flex-col md:flex-col ${isMenuOpen ? "block" : "hidden md:block"} gap-5`}
      >
        <li onClick={toggleMenu}>
          <Link href="/">Home</Link>
        </li>
        <li className="whitespace-nowrap" onClick={toggleMenu}>
          <Link href="/services">Services</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className="whitespace-nowrap" onClick={toggleMenu}>
          <Link href="/contact_us">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

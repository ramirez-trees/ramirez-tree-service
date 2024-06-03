"use client";
import React from "react";
import { Button } from "./ui/button";
import { Menu, Mail, Image, Home, Handshake } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex h-screen">
      <nav className="hidden items-center justify-center bg-green-600 px-2 md:flex">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/contact_us">Contact us</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              className="fixed bottom-4 left-4 rounded-full shadow-lg"
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4">
            <div className="flex flex-col gap-2 bg-white">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Home />
                Home
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Handshake />
                Services
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Image />
                Projects
              </Link>
              <Link
                href="/contact_us"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Mail />
                Contact us
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

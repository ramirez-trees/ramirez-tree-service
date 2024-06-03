"use client";
import React from "react";
import { Button } from "./ui/button";
import { Menu, Mail, Image as Picture, Home, Handshake } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex h-screen">
      <nav className="hidden items-center justify-center bg-green-700 px-3 md:flex">
        <ul className="flex flex-col space-y-4">
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
              className="fixed bottom-4 left-4 rounded-full bg-white shadow-lg"
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 bg-white p-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Handshake className="h-5 w-5" />
                Services
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Picture className="h-5 w-5" />
                Projects
              </Link>
              <Link
                href="/contact_us"
                className="flex items-center gap-2 rounded-md px-3 py-2 font-medium"
              >
                <Mail className="h-5 w-5" />
                Contact us
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

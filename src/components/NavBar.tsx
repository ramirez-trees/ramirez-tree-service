"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex h-screen">
      <nav className="hidden md:flex">
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
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="fixed bottom-4 left-4 rounded-full shadow-lg">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact_us">Contact us</Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

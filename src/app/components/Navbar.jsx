'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import NavigationMenuDemo from './ui/NavigationMenu';
import logo from 'public/logo.svg'
import { Merriweather, PT_Serif } from "next/font/google";

const merrie = Merriweather({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className=" bg-zinc-100 z-0">
      <nav className="flex justify-between items-center w-full bg-zinc-100 text-black px-10 py-8 ">
        <div>
          <div className="flex items-center justify-between">
            <img src="/logo.svg" alt="logo" className="w-16 h-8"></img>
            <h1 className={`${merrie.className} text-font-bold text-xl`}>
              | Hiring Recruitment Solutions
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <Link href="/services" className="hover:text-red-500">
            Services
          </Link>
          <Link href="/services" className="hover:text-red-500">
            About us
          </Link>
          <Link href="/services" className="hover:text-red-500">
            Pricing
          </Link>
          <Link href="/services" className="hover:text-red-500">
            Customers
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
          <button className="bg-zinc-900 text-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-700 hover:text-red-500">
            <Link href="/get-started" className="">
              Get Started
            </Link>
          </button>
          {/* <NavigationMenuDemo className="z-10 w-full" /> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar
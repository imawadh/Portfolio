"use client";

import { useState } from "react";
import navs from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-3 pr-10 lg:mx-0 flex items-center justify-between py-4 lg:justify-around w-[100vw]fixed top-0 left-0  shadow-xl shadow-black-300 bg-[#222831]">
      
      {/* Signature */}
      <Link href="/"> 
        <div className="ml-1 sm:ml-16 lg:ml-0 text-3xl font-bold font-alex hover:cursor-pointer" >
          <span className="text-white">&lt; </span>
          <span className="text-white">Awadh </span>
          <span className="text-white">/&gt;</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:gap-8">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.path}
                className="hover:text-amber-100 text-white font-semibold text-xl p-2 rounded hover:bg-[#393E46]"
                >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile and Tablet Navigation */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Image src={`${menuOpen ? "/closebtn.svg" : "/mobileBar.svg"}`} width={40} height={40} alt="Menu" />
          </button>

          <ul className={`fixed left-0 right-0 bg-white shadow-md z-50 flex flex-col items-center transition-all duration-400 ease-in-out ${menuOpen ? "top-16 opacity-100 p-4" : "top-16 opacity-0 p-0 pointer-events-none"}`}>
            {navs.map((nav, index) => (
              <li
                key={index}
                className="py-2 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                <Link
                  href={nav.path}
                  className="font-semibold text-lg block"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
           
          </ul>

        </div>
      </nav>

      
    </header>
  );
}

export default Header;

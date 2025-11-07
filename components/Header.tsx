// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black-100 text-white">
      <div className="container flex items-center justify-between py-8">
        {/* Logo */}
        <Link href="/" className="text-h6 tracking-[1px] uppercase">
          Audiophile
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {["Home", "Headphones", "Speakers", "Earphones"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/category/${item.toLowerCase()}`}
              className="text-subtitle hover:text-primary transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <button className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-5 h-[2px] bg-white" />
          <span className="w-5 h-[2px] bg-white" />
          <span className="w-5 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black-100 py-6 text-center space-y-4">
          {["Home", "Headphones", "Speakers", "Earphones"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/category/${item.toLowerCase()}`}
              className="block text-subtitle hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

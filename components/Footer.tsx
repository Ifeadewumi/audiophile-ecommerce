// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-100 text-white mt-24">
      <div className="container py-12 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & Nav */}
        <div>
          <Link href="/" className="text-h6 uppercase tracking-[1px]">
            Audiophile
          </Link>
          <nav className="mt-8 flex flex-col md:flex-row md:gap-8 space-y-4 md:space-y-0">
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
        </div>

        {/* Footer Info */}
        <div className="max-w-md text-body text-white/75">
          <p className="mt-8 md:mt-0">
            Audiophile is an all-in-one stop to fulfill your audio needs.
            We’re a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio.
          </p>
          <p className="mt-8 font-bold text-white/50">
            Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

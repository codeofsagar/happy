"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = pathname === "/" ? window.innerHeight * 1.5 : 50;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rates & Memberships", href: "/rates" },
    { name: "Our Facility", href: "/facility" },
    { name: "Events", href: "/events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isMobileMenuOpen ? "bg-black" : "mix-blend-difference"
      } ${
        isScrolled
          ? " py-4 opacity-100"
          : " py-6 opacity-100"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-tight text-white flex items-center gap-2">
          <span>Happy</span> Guilmore Golf
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href ? "text-white underline underline-offset-4" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/rates"
            className="bg-white hover:bg-neutral-200 text-black px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-neutral-300 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl pb-6 pt-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg py-2 border-b border-white/5 ${
                pathname === link.href ? "text-white" : "text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/rates"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-full text-center mt-4 transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}

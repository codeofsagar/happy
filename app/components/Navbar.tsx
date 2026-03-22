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

  // Only hide on desktop home page
  if (pathname === "/" && !isMobile) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md py-4 shadow-lg opacity-100"
          : pathname === "/"
          ? (isMobile ? "bg-black/20 backdrop-blur-sm py-4 opacity-100" : "opacity-0 pointer-events-none py-6")
          : "bg-transparent py-6 opacity-100"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2" style={{ mixBlendMode: 'difference' }}>
          <span className="text-primary">Happy</span> Guilmore Golf
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-white"
              }`}
              style={{ mixBlendMode: 'difference' }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            className="bg-primary hover:bg-primary/90 text-black px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
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
              className={`text-lg font-medium py-2 border-b border-white/5 ${
                pathname === link.href ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-black px-6 py-3 rounded-full font-semibold text-center mt-4"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}

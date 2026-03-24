"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TextAnimation from "./TextAnimation";

export default function Footer() {
  const pathname = usePathname();

  // If in a sub-route where we don't want massive branding or a specific footer, 
  // you could conditionally render. We will show the global footer everywhere.
  
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden pt-12 pb-8" id="footer">
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 md:px-12 pb-4">
            {/* --- GLOBAL FOOTER --- */}
            <div className="w-full flex flex-col pt-12 border-t border-white/10 max-w-7xl">
                {/* Upper Horizon Zone */}
                <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0 pb-12 md:pb-24 px-4 md:px-0">
                    <div className="flex flex-col gap-2">
                        <span className="text-white text-3xl font-normal tracking-tight">Happy Guilmore Golf</span>
                        <span className="text-white text-sm tracking-widest uppercase">Premium Indoor Simulators</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-8 md:gap-16 text-xs md:text-sm tracking-[0.15em] uppercase text-white/80">
                        <Link href="/" className="hover:text-green-400 focus:text-green-400 transition-colors">Home</Link>
                        <Link href="/rates" className="hover:text-green-400 focus:text-green-400 transition-colors">Rates & Memberships</Link>
                        <Link href="/facility" className="hover:text-green-400 focus:text-green-400 transition-colors">Our Facility</Link>
                        <Link href="/events" className="hover:text-green-400 focus:text-green-400 transition-colors">Events</Link>
                        <Link href="/contact" className="hover:text-green-400 focus:text-green-400 transition-colors">Contact</Link>
                    </div>

                    
                </div>

                {/* Massive Typography Bottom */}
                <div className="w-full overflow-hidden flex items-center justify-center select-none pt-4 pb-2 border-t border-white/10">
                    <TextAnimation>
                      <h1 className="text-[12vw] sm:text-[14vw] leading-[0.85] tracking-tighter text-[#22C55E] font-normal text-center w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
                          HAPPY GUILMORE
                      </h1>
                    </TextAnimation>
                </div>

               
            </div>
        </div>
    </footer>
  );
}

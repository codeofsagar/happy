"use client";

import { useRef } from "react";
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import TextAnimation from "./TextAnimation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const simulators = [
  {
    id: "01",
    tag: "Pro's Choice",
    name: "TrackMan iO",
    headline: "The Gold Standard",
    desc: "Unmatched dual-radar accuracy used by the world's best players. Experience tour-level precision in every bay.",
    features: ["Dual-radar tracking", "Ball speed & spin", "Optically enhanced", "Used by PGA pros"],
    imgSrc: "/assets/images/trackman-header.webp",
    videoSrc: null, 
    stats: [
      { label: "Precision", value: "99.9%" },
      { label: "Data Points", value: "26+" },
    ]
  },
  {
    id: "02",
    tag: "Ultra Immersive",
    name: "Uneekor Eye XO 2",
    headline: "Beyond Simulation",
    desc: "A massive group bay featuring high-speed cameras and an integrated entertainment system for the ultimate night out.",
    features: ["Dimple-Optix speed", "Integrated Karaoke", "Auto Tee-Up", "1,000+ Courses"],
    imgSrc: "/assets/images/uneekor-eye-xr.webp",
    videoSrc: "/assets/videos/uneekor-lifestyle.mp4",
    stats: [
      { label: "Frame Rate", value: "3000fps" },
      { label: "Delay", value: "0ms" },
    ]
  },
  {
    id: "03",
    tag: "Studio Precision",
    name: "Foresight GCHawk",
    headline: "Overhead Mastery",
    desc: "Elite overhead camera tracking that captures every nuance of your swing with cinematic detail and GSPro software.",
    features: ["Overhead tracking", "GSPro Integration", "Multi-sport ready", "Larger hitting area"],
    imgSrc: "/assets/images/foresight-siab.jpg",
    videoSrc: null,
    stats: [
      { label: "Sensors", value: "Camera 4x" },
      { label: "Launch Angle", value: "±0.1°" },
    ]
  },
];

export default function SimulatorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // gsap.matchMedia manages responsive animations easily
    const mm = gsap.matchMedia();

    // DESKTOP: Horizontal Scroll (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      const tween = gsap.to(trackRef.current, {
        x: () => -(window.innerWidth * (simulators.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * simulators.length}`, // length of 3 viewports for more scroll room
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true, 
        }
      });

      // Subtle parallax effect on content inside horizontal scroll
      const contents = gsap.utils.toArray<HTMLElement>('.sim-content');
      contents.forEach((content) => {
        gsap.fromTo(content, 
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: content.closest('.sim-item'),
              containerAnimation: tween, // Ties this trigger to the horizontal tween
              start: "left center",
              end: "center center",
              scrub: true,
            }
          }
        );
      });
    });

    // MOBILE: Vertical Scroll (max-width: 767px)
    mm.add("(max-width: 767px)", () => {
      // Natural vertical layout, but we'll add a nice fade-in as they scroll down
      const items = gsap.utils.toArray<HTMLElement>('.sim-item');
      items.forEach((item) => {
        gsap.fromTo(item.querySelector('.sim-content'), 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%", // Starts animating when the top of the item hits 75% down the viewport
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => mm.revert(); // Clean up matchMedia on unmount
  }, { scope: containerRef });

  return (
    // Outer container hides the overflow to prevent ugly scrollbars on desktop
    <div ref={containerRef} className="relative w-full bg-black overflow-hidden" id="simulators">
      
      {/* Grid Overlay (Fixed visually across the whole section) */}
      <div className="absolute inset-0 z-10 pointer-events-none border-x border-white/5 mx-auto max-w-7xl grid grid-cols-4 opacity-[0.03]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border-r border-white/5 h-full" />
        ))}
      </div>

      {/* The Track: 
        Mobile -> flex-col, w-full
        Desktop -> flex-row, explicit width for exact 3 items
      */}
      <div 
        ref={trackRef} 
        className="flex flex-col md:flex-row w-full md:w-[300vw] h-auto md:h-screen"
      >
        {simulators.map((sim, i) => (
          <div 
            key={sim.id} 
            // Mobile -> min-h-[100svh], w-full
            // Desktop -> h-screen, w-screen (takes up exactly 1 viewport width)
            className="sim-item relative flex shrink-0 w-full md:w-screen min-h-[100svh] md:min-h-screen flex-col justify-center items-center px-4 overflow-hidden"
          >
            {/* Background Layer */}
            <div className="sim-bg absolute inset-0 z-0">
              {sim.videoSrc ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[0.4]">
                  <source src={sim.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <Image 
                  src={sim.imgSrc} 
                  alt={sim.name} 
                  fill 
                  className="object-cover grayscale-[0.4]"
                  priority={i === 0}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/95 md:bg-gradient-to-r md:from-black/90 md:via-black/20 md:to-black/90" />
            </div>

            {/* Content Layer */}
            <div className="sim-content relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 pointer-events-auto">
              <div className="flex flex-col items-start gap-4">
                 <div className="flex items-center gap-3">
                    <span className="w-12 h-px bg-primary" />
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-primary drop-shadow-glow">
                      {sim.tag}
                    </span>
                 </div>

                 <TextAnimation>
                   <h2 
                     className="text-[14vw] sm:text-[11vw] font-black text-white leading-[0.8] tracking-tighter uppercase italic"
                   >
                     {sim.name}
                   </h2>
                 </TextAnimation>

                 <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                    <div className="flex flex-col gap-8">
                      <TextAnimation>
                        <p className="text-2xl sm:text-4xl font-black text-white leading-none tracking-tight">
                          {sim.headline}
                        </p>
                      </TextAnimation>
                      <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-sm font-medium">
                        {sim.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sim.features.map((f, fi) => (
                           <span key={fi} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black text-white/30 uppercase tracking-widest whitespace-nowrap">
                             {f}
                           </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-end items-start md:items-end gap-10">
                      <div className="flex gap-12 sm:gap-16">
                         {sim.stats.map((s, si) => (
                           <div key={si} className="flex flex-col gap-1">
                             <span className="text-[9px] font-black text-primary/60 uppercase tracking-widest">{s.label}</span>
                             <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter tabular-nums">{s.value}</span>
                           </div>
                         ))}
                      </div>
                      
                      <button className="group px-8 py-5 sm:px-10 sm:py-6 bg-white text-black font-black text-[10px] sm:text-[11px] uppercase tracking-[0.4em] rounded-full flex items-center gap-5 hover:bg-primary hover:text-white transition-all duration-700 shadow-2xl shadow-white/5">
                        Reserve Session
                        <MousePointer2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </button>
                    </div>
                 </div>
              </div>
            </div>

            {/* Background ID Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none opacity-[0.03]">
               <span className="text-[45vw] md:text-[35vw] font-black text-white leading-none tracking-tighter">{sim.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
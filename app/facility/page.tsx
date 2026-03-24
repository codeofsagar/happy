"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextAnimation from "../components/TextAnimation";

export default function FacilityPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageWraps = gsap.utils.toArray<HTMLElement>(".facility-img-wrap", containerRef.current);
    
    imageWraps.forEach((imgWrap) => {
      gsap.fromTo(imgWrap,
        { clipPath: "inset(0 100% 0 0 round 40px)", scale: 1.1 },
        { 
          clipPath: "inset(0 0% 0 0 round 40px)", 
          scale: 1, 
          duration: 1.1, 
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: imgWrap,
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-32 w-full bg-[#f5f5f5] text-black relative overflow-hidden">
      
      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40 select-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-black rounded-full blur-[180px] opacity-10"></div>
      </div>

      {/* ── HEADER ── */}
      <section className="container mx-auto px-6 lg:px-12 text-center mb-32 relative z-10">
        <span
          className="inline-block mb-4 px-5 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white shadow-sm transition-all bg-black"
        >
          Inside The Lounge
        </span>
        <TextAnimation>
          <h1 className="text-5xl md:text-7xl font-normal mb-8 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
            The <span className="text-[#22C55E]">Facility</span>
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-3xl mx-auto font-normal leading-relaxed">
            Step inside a meticulously crafted sanctuary dedicated to the modern golfer. We've merged bleeding-edge launch monitor technology with uncompromising luxury to deliver an indoor golf experience unlike any other.
          </p>
        </TextAnimation>
      </section>

      {/* ── SECTIONS ── */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-32 border-t border-black/10 pt-24">
        
        {/* SECTION 1: Bays */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="facility-img-wrap w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 bg-white">
            <Image src="/assets/images/fairwaylab-hero.jpg" alt="Premium Simulator Bay" fill className="object-cover transition-transform duration-1000 hover:scale-[1.03]" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-green-600 mb-4">01 — The Bays</span>
            <TextAnimation>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                Spacious & Immersive <br /> Simulator Environments
              </h2>
              <p className="text-lg text-black/70 font-normal leading-relaxed mb-6">
                Our striking bays are engineered to replicate the authentic feel of a premium country club. Each suite boasts 16-foot ultra-widescreen 4K laser projection, delivering crystal-clear, photorealistic course graphics with zero latency.
              </p>
            </TextAnimation>
            <p className="text-lg text-black/70 font-normal leading-relaxed">
              Play off specialized turf that accurately simulates fairway and rough conditions. Surrounding the hitting zone is expansive, deep-cushioned seating to ensure your entire group stays comfortable for epic 18-hole sessions.
            </p>
          </div>
        </section>

        {/* SECTION 2: Tech (Reversed) */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="facility-img-wrap w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 bg-white">
             <Image src="/assets/images/trackman-lifestyle.webp" alt="Industry Leading Tech" fill className="object-cover transition-transform duration-1000 hover:scale-[1.03]" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end lg:text-right">
            <span className="text-xs uppercase tracking-widest text-green-600 mb-4">02 — The Technology</span>
            <TextAnimation>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                Industry Leading <br /> Launch Monitors
              </h2>
              <p className="text-lg text-black/70 font-normal leading-relaxed mb-6">
                Forget guesswork. Every single suite is powered by Tour-validated dual-radar and high-speed camera systems from industry pioneers like Trackman and Uneekor.
              </p>
            </TextAnimation>
            <p className="text-lg text-black/70 font-normal leading-relaxed">
              Capture vital metrics including club path, face angle, spin rate, and smash factor in absolute real-time. Whether you are dialing in your wedges or bombing driver, you receive the exact same data trusted by the world’s best players.
            </p>
          </div>
        </section>

        {/* SECTION 3: Lounge */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="facility-img-wrap w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 bg-white">
             <Image src="/assets/images/nineteenth-hero.jpg" alt="Lounge Area" fill className="object-cover transition-transform duration-1000 hover:scale-[1.03]" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-green-600 mb-4">03 — The 19th Hole</span>
            <TextAnimation>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                A World-Class <br /> Lounge Area
              </h2>
              <p className="text-lg text-black/70 font-normal leading-relaxed mb-6">
                The game doesn't stop when you step off the mat. Our sprawling, luxuriously appointed central lounge is designed as the ultimate post-round gathering spot.
              </p>
            </TextAnimation>
            <p className="text-lg text-black/70 font-normal leading-relaxed">
              Enjoy a rotating selection of local craft brews, signature cocktails, and elevated club fare. Multiple HD screens keep you connected to live PGA Tour coverage, NFL games, and major sporting events exactly when you want them.
            </p>
          </div>
        </section>

        {/* SECTION 4: Training (Reversed) */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="facility-img-wrap w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 bg-white">
             <Image src="/assets/images/uneekor-interior.webp" alt="Training Center" fill className="object-cover transition-transform duration-1000 hover:scale-[1.03]" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end lg:text-right">
            <span className="text-xs uppercase tracking-widest text-green-600 mb-4">04 — Training & Development</span>
            <TextAnimation>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                Precision Coaching <br /> & Club Fitting
              </h2>
              <p className="text-lg text-black/70 font-normal leading-relaxed mb-6">
                Looking to lower your handicap or find the perfect shaft profile? Our dedicated instruction suites provide the quiet focus needed for severe game improvement.
              </p>
            </TextAnimation>
            <p className="text-lg text-black/70 font-normal leading-relaxed">
              Book time with our in-house PGA Professionals who utilize advanced video swing breakdown and pressure mat analysis to optimize your mechanics. Paired with our expansive custom builder matrix, we ensure your gear perfectly matches your swing.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

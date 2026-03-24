"use client";

import { useEffect, useRef } from "react";
import { TransitionLink as Link } from "./pagetrans";
import { ArrowRight } from "lucide-react";
import TextAnimation from "./TextAnimation";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGSAP = () => {
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        initAnimations();
        return;
      }

      const s1 = document.createElement("script");
      s1.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      document.head.appendChild(s1);
      s1.onload = () => {
        const s2 = document.createElement("script");
        s2.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        document.head.appendChild(s2);
        s2.onload = () => initAnimations();
      };
    };

    const initAnimations = () => {
      const { gsap } = window as any;
      const { ScrollTrigger } = window as any;
      gsap.registerPlugin(ScrollTrigger);

      // Heading — fade up
      gsap.fromTo(
        ".hiw-heading",
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-heading", start: "top 88%" },
        }
      );

      // Card 1 — from left
      gsap.fromTo(
        ".hiw-card-1",
        { opacity: 0, x: -72 },
        {
          opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-card-1", start: "top 88%" },
        }
      );

      // Card 3 — premium reveal
      gsap.fromTo(
        ".hiw-card-3",
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1, scale: 1, y: 0, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: ".hiw-card-3", start: "top 90%" },
        }
      );

      // Flow path — draw on scroll
      const path = document.querySelector(".hiw-flow-path");
      if (path) {
        const length = (path as SVGPathElement).getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: ".hiw-card-1",
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          },
        });
      }
    };

    loadGSAP();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-24 relative overflow-hidden"
    >
      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-black rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-9xl mx-auto relative z-10">

        {/* ── HEADING ── */}
        <div className="hiw-heading text-center mb-16 relative">
          <span
            className="inline-block mb-4 px-5 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-[#000] shadow-sm"
            style={{ backgroundColor: "#22c55e" }}
          >
            Our Simple Process
          </span>
          <TextAnimation>
            <h2
              className="text-5xl sm:text-7xl tracking-tighter text-neutral-950 leading-none max-w-4xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get into the bay in <span className="text-green-500">3 simple steps</span>
            </h2>
          </TextAnimation>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* ─── CONNECTING LINE (Desktop Only) ─── */}
          <div className="hidden lg:block absolute top-[20%] left-1/4 right-1/4 h-[60%] pointer-events-none z-0">
             <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" className="opacity-10">
                <path d="M50,100 C200,50 400,350 750,150" stroke="#000" strokeWidth="4" strokeDasharray="12 12" className="hiw-flow-path" />
             </svg>
          </div>

          {/* ─── CARD 1 — Purple ─── */}
          <div
            className="hiw-card-1 rounded-4xl p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="flex justify-between items-start">
               <span className="w-fit rounded-full bg-white/40 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-[10px] uppercase tracking-widest text-neutral-900">
                 Step 1
               </span>
               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
               </div>
            </div>

            <div>
              <TextAnimation>
                <h3
                  className="text-3xl md:text-4xl text-white leading-[1.1] mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Book your bay
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-sm">
                  Reserve your time online. Select your duration, add guests, and
                  even pre-order beverages for your session.
                </p>
              </TextAnimation>
            </div>

            {/* Profile mockup card with Glassmorphism */}
            <div
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 transition-transform duration-700"
              style={{ border: "1px solid rgba(255,255,255,0.5)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Instant Confirmation
                </span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-neutral-200 block"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xl text-neutral-900 tracking-tight">
                  @happyguilmore
                </p>
                <a className="text-xs text-sky-500 uppercase tracking-wider">
                  Booking Confirmed ✓
                </a>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex -space-x-3">
                  {(["#FDBA74", "#A78BFA", "#6EE7B7"] as const).map((bg, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center overflow-hidden shadow-sm"
                      style={{ backgroundColor: bg }}
                    >
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="avatar" className="w-full h-full" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl text-neutral-900">50</span>
                    <span className="text-[9px] text-neutral-400 uppercase">Bookings</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl text-neutral-900">1.2k</span>
                    <span className="text-[9px] text-neutral-400 uppercase">Points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── CARD 2 — Gray ─── */}
          <div
            className="hiw-card-2 rounded-4xl p-8 md:p-10 flex flex-col gap-8 transition-transform duration-500 hover:scale-[1.02] cursor-default group"
            style={{ backgroundColor: "#c9c9c9" }}
          >
            <div className="flex justify-between items-start">
               <span className="w-fit rounded-full bg-black/5 backdrop-blur-sm border border-black/10 px-4 py-1.5 text-[10px] uppercase tracking-widest text-black">
                 Step 2
               </span>
               <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
               </div>
            </div>

            <div>
              <TextAnimation>
                <h3
                  className="text-3xl md:text-4xl text-black leading-[1.1] mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Secure access code
                </h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed max-w-sm">
                  A one-time code is sent straight to your email or phone. No
                  front desk check-ins, no physical keys required.
                </p>
              </TextAnimation>
            </div>

            {/* Secure Code Mockup */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-6 shadow-xl border border-black/5 group-hover:-translate-y-2 transition-transform duration-700">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] text-black/50 uppercase tracking-widest">
                  Access Granted
                </h4>
                <span className="px-2 py-0.5 bg-green-500/20 text-green-700 rounded-md text-[9px] uppercase">Active</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-xl p-3 border border-black/5 flex flex-col gap-1">
                  <span className="text-[8px] text-black/40 uppercase tracking-tighter">Bay Number</span>
                  <p className="text-lg text-black">Bay 03</p>
                </div>
                <div className="bg-white/50 rounded-xl p-3 border border-black/5 flex flex-col gap-1">
                  <span className="text-[8px] text-black/40 uppercase tracking-tighter">Valid Until</span>
                  <p className="text-lg text-black">12:00 PM</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 overflow-hidden relative group/code shadow-sm border border-black/5">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/code:translate-x-full transition-transform duration-1000"></div>
                
                <span className="text-[8px] text-black/40 uppercase tracking-widest relative z-10">Your Entry Code</span>
                <p className="text-3xl text-black tracking-[0.4em] relative z-10">7249</p>
              </div>
            </div>
          </div>

          {/* ─── CARD 3 — Green, full width ─── */}
          <div
            className="hiw-card-3 rounded-4xl p-8 md:p-12 flex flex-col md:flex-row gap-12 md:col-span-2 relative overflow-hidden group/swing transition-all duration-700 hover:shadow-2xl hover:shadow-[#22c55e]/20"
            style={{ backgroundColor: "#22c55e" }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover/swing:bg-black/10 transition-colors duration-700"></div>

            {/* Left — text */}
            <div className="flex flex-col gap-6 md:w-[45%] justify-center relative z-10">
              <span className="w-fit rounded-full bg-black/10 backdrop-blur-sm border border-black/5 px-4 py-1.5 text-[10px] uppercase tracking-widest text-neutral-900">
                Step 3
              </span>
              <div>
              <TextAnimation>
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl text-neutral-950 leading-[0.95]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Walk in and play
                </h3>
                <p className="text-base text-neutral-800/80 leading-relaxed max-w-sm mb-6 pb-2">
                  Enter your code at the door. Your bay is powered on and ready.
                  Enjoy 1,000+ world-class courses, premium launch monitors, driving
                  ranges, and mini golf — yours for the session.
                </p>
              </TextAnimation>
              </div>
              <Link
                href="/rates"
                className="w-fit inline-flex items-center gap-3 bg-neutral-950 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all hover:gap-5 shadow-lg"
              >
                Book your bay
                <ArrowRight className="w-4 h-4 text-green-500" />
              </Link>
            </div>

            {/* Right — social-style collage */}
            <div className="md:w-[55%] relative min-h-[350px] flex items-center justify-center scale-110 md:scale-100">

              {/* Large centre-left photo card */}
              <div
                className="absolute left-0 top-0 w-48 md:w-60 lg:w-72 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover/swing:-translate-x-4 group-hover/swing:-rotate-2"
                style={{ zIndex: 2 }}
              >
                <div className="relative w-full h-64 md:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/nineteenth-action.jpg"
                    alt="Simulator Action"
                    className="w-full h-full object-cover"
                  />
                  {/* URL bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-3 border-t border-black/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span className="text-[10px] uppercase text-neutral-800 tracking-tight">
                      @happyguilmore
                    </span>
                    <div className="ml-auto flex gap-1">
                       <span className="w-4 h-1 rounded-full bg-neutral-200"></span>
                       <span className="w-1 h-1 rounded-full bg-neutral-200"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image card -> Changed to Black card border */}
              <div
                className="absolute bottom-4 left-32 md:left-48 w-36 h-40 rounded-3xl overflow-hidden shadow-2xl border-[4px] border-white transition-transform duration-1000 group-hover/swing:translate-y-4 group-hover/swing:rotate-3"
                style={{ zIndex: 3 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/images/foresight-lifestyle.jpg" alt="Player" className="w-full h-full object-cover" />
              </div>

              {/* Calibrating card with video — right */}
              <div
                className="absolute top-8 right-0 w-36 md:w-48 h-52 md:h-64 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover/swing:translate-x-4 group-hover/swing:rotate-2"
                style={{ zIndex: 2 }}
              >
                <div className="w-full h-full relative flex flex-col">
                   <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                     <source src="/assets/videos/dimple-optix.mp4" type="video/mp4" />
                   </video>
                   <div className="absolute inset-0 bg-black/50 z-0"></div>
                   
                   <div className="relative z-10 flex-1 p-6 flex flex-col items-center justify-center gap-4">
                   </div>
                   <div className="relative z-10 h-12 bg-black/60 backdrop-blur-md border-t border-white/10 px-4 flex items-center justify-between">
                      <div className="flex gap-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                         <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      </div>
                      <span className="text-[8px] text-white/80 uppercase">V-2.4</span>
                   </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

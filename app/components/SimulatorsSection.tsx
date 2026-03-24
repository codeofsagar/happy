"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MousePointer2 } from "lucide-react";
import { TransitionLink as Link } from "./pagetrans";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    ],
    bg: "#000000",       // black
    accent: "#22c55e",   // green
    dark: true,
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
    ],
    bg: "#22c55e",       // green
    accent: "#000000",   // black
    dark: false,
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
    ],
    bg: "#ffffff",       // white
    accent: "#22c55e",   // green
    dark: false,
  },
];

export default function SimulatorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const rows = gsap.utils.toArray<HTMLElement>(".sim-row");

    rows.forEach((row) => {
      const imgWrap  = row.querySelector<HTMLElement>(".sim-img-wrap");
      const tag      = row.querySelector<HTMLElement>(".sim-tag");
      const idNum    = row.querySelector<HTMLElement>(".sim-id");
      const name     = row.querySelector<HTMLElement>(".sim-name");
      const headline = row.querySelector<HTMLElement>(".sim-headline");
      const desc     = row.querySelector<HTMLElement>(".sim-desc");
      const features = row.querySelectorAll<HTMLElement>(".sim-feature");
      const stats    = row.querySelectorAll<HTMLElement>(".sim-stat");
      const btn      = row.querySelector<HTMLElement>(".sim-btn");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Image wipe-in
      tl.fromTo(imgWrap,
        { clipPath: "inset(0 100% 0 0 round 16px)", scale: 1.1 },
        { clipPath: "inset(0 0% 0 0 round 16px)", scale: 1, duration: 1.1, ease: "expo.inOut" },
        0
      );

      // Big ID number slams in
      tl.fromTo(idNum,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
        0.1
      );

      // Tag slides in
      tl.fromTo(tag,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        0.25
      );

      // Name crashes down
      tl.fromTo(name,
        { y: 80, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.75, ease: "expo.out" },
        0.3
      );

      // Headline
      tl.fromTo(headline,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        0.45
      );

      // Desc
      tl.fromTo(desc,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        0.55
      );

      // Stats stagger
      tl.fromTo(stats,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out", stagger: 0.1 },
        0.6
      );

      // Features stagger
      tl.fromTo(features,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)", stagger: 0.06 },
        0.65
      );

      // Button pops in
      tl.fromTo(btn,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        0.8
      );
    });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="simulators" className="w-full">

      {/* Section intro — white */}
      <div className="bg-white w-full px-6 sm:px-12 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-black" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-black">
              Our Simulators
            </span>
          </div>
          <h2 className="text-7xl sm:text-9xl uppercase tracking-tighter text-black leading-none">
            The Bays
          </h2>
        </div>
      </div>

      {/* One full-width row per simulator */}
      {simulators.map((sim, i) => {
        const textColor = sim.dark ? "text-white" : "text-black";
        const borderColor = sim.dark ? "border-white/20" : "border-black/20";
        const isEven = i % 2 === 0;

        // Custom features pill colors as requested
        let featureBgColor = "bg-white";
        let featureTextColor = "text-black";
        if (sim.id === "03") {
          featureBgColor = "bg-black";
          featureTextColor = "text-white";
        }

        return (
          <div
            key={sim.id}
            className="sim-row w-full"
            style={{ backgroundColor: sim.bg }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 sm:py-28">
              <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-20 items-center`}>

                {/* ── Image ── */}
                <div
                  className="sim-img-wrap w-full md:w-1/2 rounded-2xl overflow-hidden shrink-0"
                  style={{ aspectRatio: "3/2" }}
                >
                  {sim.videoSrc ? (
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={sim.videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={sim.imgSrc}
                      alt={sim.name}
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  )}
                </div>

                {/* ── Text ── */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">

                  {/* ID + Tag row */}
                  <div className="flex items-center gap-4">
                    <span
                      className="sim-id text-8xl leading-none tracking-tighter select-none"
                      style={{ color: sim.accent }}
                    >
                      {sim.id}
                    </span>
                    <span
                      className="sim-tag text-[10px] uppercase tracking-[0.4em]"
                      style={{ color: sim.accent }}
                    >
                      {sim.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className={`sim-name text-5xl sm:text-6xl uppercase tracking-tighter leading-none ${textColor}`}
                  >
                    {sim.name}
                  </h3>

                  {/* Headline */}
                  <p
                    className={`sim-headline text-xl tracking-tight ${textColor}`}
                  >
                    {sim.headline}
                  </p>

                  {/* Divider */}
                  <div className={`w-full h-px ${sim.dark ? "bg-white/20" : "bg-black/15"}`} />

                  {/* Desc */}
                  <p className={`sim-desc text-base leading-relaxed ${textColor}`}>
                    {sim.desc}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-10">
                    {sim.stats.map((s, si) => (
                      <div key={si} className="sim-stat flex flex-col gap-1">
                        <span
                          className="text-[9px] uppercase tracking-widest"
                          style={{ color: sim.accent }}
                        >
                          {s.label}
                        </span>
                        <span className={`text-4xl tracking-tighter tabular-nums ${textColor}`}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {sim.features.map((f, fi) => (
                      <span
                        key={fi}
                        className={`sim-feature px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest ${featureBgColor} ${featureTextColor}`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/rates"
                    className="sim-btn self-start mt-2 px-8 py-4 text-[10px] uppercase tracking-[0.4em] rounded-full flex items-center gap-4 transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: sim.accent,
                      color: sim.dark ? "#000" : "#fff",
                    }}
                  >
                    Reserve Session
                    <MousePointer2 className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
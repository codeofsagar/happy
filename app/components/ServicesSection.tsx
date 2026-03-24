"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TransitionLink as Link } from "./pagetrans";
import {
  MonitorPlay,
  Mic2,
  Map,
  CalendarRange,
  ArrowUpRight,
} from "lucide-react";
import TextAnimation from "./TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: "01",
    title: "Golf Simulators",
    desc: "Expertly installed top-tier simulation technology for serious training, immersive play, and a premium indoor golf experience.",
    icon: <MonitorPlay className="h-5 w-5" />,
    bgColor: "#000000",
    image: "/assets/images/uneekor-interior.webp",
    tag: "Precision Setup",
    dark: true,
  },
  {
    number: "02",
    title: "Karaoke Playable",
    desc: "Turn every session into a social moment with built-in karaoke entertainment while guests relax, wait, and enjoy the atmosphere.",
    icon: <Mic2 className="h-5 w-5" />,
    bgColor: "#22c55e",
    image: "/assets/images/uneekor-lifestyle.webp",
    tag: "Social Energy",
    dark: false,
  },
  {
    number: "03",
    title: "1000+ Courses",
    desc: "Travel through iconic championship courses, dynamic ranges, and fun mini-golf environments without leaving the venue.",
    icon: <Map className="h-5 w-5" />,
    bgColor: "#ffffff",
    image: "/assets/images/uneekor-pebble-beach.webp",
    tag: "Global Play",
    dark: false,
  },
  {
    number: "04",
    title: "Corporate & Social",
    desc: "Designed for team events, private celebrations, brand activations, and unforgettable group experiences.",
    icon: <CalendarRange className="h-5 w-5" />,
    bgColor: "#000000",
    image: "/assets/images/fairwaylab-hero.jpg",
    tag: "Events Ready",
    dark: true,
  },
];

/** Animated fairway arc lines — clean, golf-course inspired */
function FairwayLines({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 500 300" className={className} aria-hidden="true" fill="none">
      {/* Thin static guide lines */}
      <path d="M0 260 Q125 180 250 200 Q375 220 500 140" stroke="rgba(34,197,94,0.12)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M0 290 Q140 210 270 230 Q390 248 500 170" stroke="rgba(34,197,94,0.07)" strokeWidth="1" strokeLinecap="round" />

      {/* Animated trail */}
      <path d="M0 260 Q125 180 250 200 Q375 220 500 140" className="animated-trail stroke-green-500/40" strokeWidth="1.5" strokeLinecap="round" />
      {/* Animated ball dot */}
      <path d="M0 260 Q125 180 250 200 Q375 220 500 140" className="animated-ball stroke-green-600" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

/** Dot-grid pattern — minimal coordinate marker feel */
function DotGrid({ className }: { className: string }) {
  const dots = [];
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * 32 + 16}
          cy={row * 32 + 16}
          r={row % 2 === col % 2 ? 1.5 : 1}
          fill={row % 2 === col % 2 ? "rgba(34,197,94,0.25)" : "rgba(0,0,0,0.08)"}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 272 208" className={className} aria-hidden="true" fill="none">
      {dots}
    </svg>
  );
}

/** Animated trajectory arc — single clean ball path */
function TrajectoryArc({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} aria-hidden="true" fill="none">
      {/* Shadow path */}
      <path d="M20 180 C80 20, 320 20, 380 180" stroke="rgba(0,0,0,0.05)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" />
      {/* Animated trail */}
      <path d="M20 180 C80 20, 320 20, 380 180" className="animated-trail stroke-green-500/35" strokeWidth="2" strokeLinecap="round" />
      {/* Animated ball */}
      <path d="M20 180 C80 20, 320 20, 380 180" className="animated-ball stroke-green-600" strokeWidth="8" strokeLinecap="round" />
      {/* Pin at end */}
      <line x1="380" y1="160" x2="380" y2="185" stroke="rgba(34,197,94,0.5)" strokeWidth="2" />
      <circle cx="380" cy="185" r="5" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5" />
    </svg>
  );
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card", containerRef.current);
      const bgImages = gsap.utils.toArray<HTMLElement>(".bg-image-layer", containerRef.current);

      const totalCards = cards.length;
      const segmentSize = 1 / Math.max(totalCards - 1, 1);
      const wrapper = containerRef.current?.querySelector(".sticky-cards-wrapper");

      const cardYOffset = 5;
      const cardScaleStep = 0.05;

      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50 + i * cardYOffset,
          scale: 1 - i * cardScaleStep,
          zIndex: totalCards - i,
          transformPerspective: 1000,
          transformOrigin: "bottom center",
        });
      });

      // Initial background images setup
      bgImages.forEach((bg, i) => {
        gsap.set(bg, { opacity: i === 0 ? 1 : 0 });
      });

      let mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const trails = gsap.utils.toArray<SVGGeometryElement>(".animated-trail", containerRef.current);
        const balls = gsap.utils.toArray<SVGGeometryElement>(".animated-ball", containerRef.current);

        trails.forEach((trail, i) => {
          const length = trail.getTotalLength();
          const ball = balls[i];

          gsap.set(trail, { strokeDasharray: length, strokeDashoffset: length });
          gsap.set(ball, { strokeDasharray: `1 ${length + 1}`, strokeDashoffset: length });

          gsap.to([trail, ball], {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: () => `+=${window.innerHeight * Math.max(totalCards - 1, 1)}`,
              scrub: 1,
            },
          });
        });
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => gsap.to("body", { backgroundColor: "#f0fdf4", duration: 0.35, overwrite: "auto" }),
        onLeave: () => gsap.to("body", { backgroundColor: "#050505", duration: 0.35, overwrite: "auto" }),
        onEnterBack: () => gsap.to("body", { backgroundColor: "#f0fdf4", duration: 0.35, overwrite: "auto" }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "#050505", duration: 0.35, overwrite: "auto" }),
      });

      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${window.innerHeight * Math.max(totalCards - 1, 1)}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.min(Math.floor(progress / segmentSize), totalCards - 1);
          let segProgress = (progress - activeIndex * segmentSize) / segmentSize;
          segProgress = Math.max(0, Math.min(segProgress, 1));

          // Crossfade background images
          bgImages.forEach((img, i) => {
            if (i === activeIndex) {
              gsap.set(img, { opacity: 1 - segProgress });
            } else if (i === activeIndex + 1) {
              gsap.set(img, { opacity: segProgress });
            } else {
              gsap.set(img, { opacity: 0 });
            }
          });

          cards.forEach((card, i) => {
            if (i < activeIndex) {
              gsap.set(card, { yPercent: -250, rotationX: 35, scale: 1 });
            } else if (i === activeIndex) {
              gsap.set(card, {
                yPercent: gsap.utils.interpolate(-50, -250, segProgress),
                rotationX: gsap.utils.interpolate(0, 35, segProgress),
                scale: 1,
              });
            } else {
              const behindIndex = i - activeIndex;
              const currentYOffset = (behindIndex - segProgress) * cardYOffset;
              const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;

              gsap.set(card, {
                yPercent: -50 + currentYOffset,
                rotationX: 0,
                scale: currentScale,
              });
            }
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-[1] w-full overflow-hidden text-black transition-colors duration-500 bg-white"
    >
      {/* ── Unified green gradient background covering the full section ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* ── Title / Header ── */}
      <div className="relative z-10 container mx-auto px-5 pt-20 pb-10 sm:px-6 md:pt-28 md:pb-16 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left aligned title */}
          <TextAnimation>
            <h2 className="text-balance text-4xl leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl md:text-6xl lg:text-7xl text-left">
              Crafted for play,
              <br className="hidden sm:block" />
              built for impact.
            </h2>
          </TextAnimation>

          {/* Right aligned text */}
          <TextAnimation delay={0.1}>
            <p className="max-w-md text-sm leading-7 text-black sm:text-base md:text-2xl text-left md:text-right">
              From high-performance simulator bays to social-first entertainment, every detail is designed to feel elevated, immersive, and unforgettable.
            </p>
          </TextAnimation>
        </div>
      </div>

      {/* ── Sticky Cards ── */}
      <div className="sticky-cards-wrapper relative h-[100svh] overflow-hidden md:h-screen">

        {/* Dynamic Image Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden ">
          {servicesData.map((service, i) => (
            <img
              key={`bg-${i}`}
              src={service.image}
              alt=""
              className="bg-image-layer absolute inset-0 h-full w-full object-cover transition-none will-change-[opacity]"
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Background layer — overlaid on top of images */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Dot grid — top-left */}
          <DotGrid className="absolute left-4 top-8 h-40 w-48 opacity-80 md:left-8 md:top-12 md:h-52 md:w-64" />

          {/* Dot grid — bottom-right */}
          <DotGrid className="absolute right-4 bottom-8 h-36 w-44 opacity-60 md:right-10 md:bottom-12 md:h-48 md:w-60" />

          {/* Fairway arc — bottom sweep */}
          <FairwayLines className="absolute bottom-0 left-0 right-0 h-32 w-full opacity-90 md:h-44" />

          {/* Trajectory arc — upper right */}
          <TrajectoryArc className="absolute right-0 top-8 h-24 w-64 opacity-70 md:right-6 md:top-14 md:h-32 md:w-96" />

          {/* Trajectory arc — lower left (mirrored via transform) */}
          <TrajectoryArc className="absolute left-0 bottom-20 h-20 w-52 opacity-50 md:left-4 md:bottom-28 md:h-28 md:w-80 scale-x-[-1]" />
        </div>

        {/* The Cards themselves */}
        {servicesData.map((service, i) => {
          const textColor = service.dark ? "text-white" : "text-black";
          const mutedTextColor = service.dark ? "text-white" : "text-black";
          const faintTextColor = service.dark ? "text-white" : "text-black";
          const iconColor = service.dark ? "text-green-400" : "text-green-700";

          return (
            <div
              key={i}
              className="service-card absolute left-1/2 top-1/2 z-10 w-[94%] max-w-6xl overflow-hidden rounded-[1.5rem] border border-black/8 shadow-md md:shadow-[0_18px_80px_rgba(0,0,0,0.10)] md:w-[92%] md:rounded-[2rem] will-change-transform"
              style={{ backgroundColor: service.bgColor, backfaceVisibility: "hidden" }}
            >
              <div className="grid min-h-[78svh] grid-cols-1 md:min-h-[70vh] lg:grid-cols-[1.02fr_0.98fr]">
                <div className="relative flex flex-col justify-between p-5 sm:p-7 md:p-10 lg:p-12 xl:p-14">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.07),transparent_34%)]" />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className={`inline-flex items-center gap-2 rounded-full border ${service.dark ? "border-white/20 bg-black/50" : "border-black/8 bg-white/70"} px-3 py-2 text-[10px] uppercase tracking-[0.22em] ${mutedTextColor} md:backdrop-blur-md sm:text-[11px]`}>
                      <span className={iconColor}>{service.icon}</span>
                      <span className="truncate">{service.tag}</span>
                    </div>

                    <span className={`shrink-0 text-[11px] tracking-[0.26em] ${faintTextColor} sm:text-sm`}>
                      {service.number}
                    </span>
                  </div>

                  <div className="relative z-10 my-8 md:my-10 lg:my-0">
                    <p className={`mb-3 text-[10px] uppercase tracking-[0.3em] ${iconColor} sm:mb-4 sm:text-xs`}>
                      Signature Service
                    </p>

                    <TextAnimation>
                      <h3 className={`max-w-xl text-3xl uppercase leading-[0.95] tracking-[-0.04em] ${textColor} sm:text-4xl md:text-5xl lg:text-6xl`}>
                        {service.title}
                      </h3>
                      <p className={`mt-4 max-w-lg text-sm leading-6 ${mutedTextColor} sm:mt-5 sm:text-[15px] sm:leading-7 md:mt-6 md:text-lg`}>
                        {service.desc}
                      </p>
                    </TextAnimation>
                  </div>

                  <Link href="/rates" className="relative z-10 flex items-center gap-3 pt-5 md:pt-8 group/ext">
                    <div className={`inline-flex items-center gap-2 text-sm ${textColor} group-hover/ext:opacity-70 transition-opacity`}>
                      Explore experience
                      <ArrowUpRight className={`h-4 w-4 ${iconColor} group-hover/ext:translate-x-1 group-hover/ext:-translate-y-1 transition-transform`} />
                    </div>
                  </Link>
                </div>

                <div className="relative h-[240px] min-h-[240px] sm:h-[290px] sm:min-h-[290px] lg:h-auto">
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/5 via-transparent to-black/15" />
                  <div className="absolute left-4 top-4 z-20 rounded-full border border-white/20 bg-black/60 md:bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white md:backdrop-blur sm:left-5 sm:top-5">
                    Experience
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
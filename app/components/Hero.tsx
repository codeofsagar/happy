"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";
import { ArrowRight, MoveUpRight } from "lucide-react";
import styles from "./Hero.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navbarBackdropRef = useRef<HTMLDivElement>(null);
  const navbarBgRef = useRef<HTMLDivElement>(null);
  const navbarLogoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      
      // 1. Setup the Auto-Filling Path animations
      const trails = gsap.utils.toArray<SVGGeometryElement>(".auto-trail", containerRef.current);
      const balls = gsap.utils.toArray<SVGGeometryElement>(".auto-ball", containerRef.current);

      trails.forEach((trail, i) => {
        const length = trail.getTotalLength();
        const ball = balls[i];

        gsap.set(trail, { strokeDasharray: `${length} ${length}`, strokeDashoffset: length });
        gsap.set(ball, { strokeDasharray: `2 ${length}`, strokeDashoffset: length });

        gsap.to([trail, ball], {
          strokeDashoffset: -length,
          duration: 12,
          ease: "none",
          repeat: -1,
        });
      });

      const initNavbarAnimations = () => {
        const navbarBg = navbarBgRef.current;
        const navbarLogo = navbarLogoRef.current;
        const navbarBackdrop = navbarBackdropRef.current;

        if (!navbarBg || !navbarLogo || !navbarBackdrop) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const initialWidth = navbarBg.offsetWidth;
        const initialHeight = navbarBg.offsetHeight;

        // Logo Flip animation: starts at center of video, flips to top center
        const state = Flip.getState(navbarLogo);
        navbarLogo.classList.add(styles.navbarLogoPinned);
        gsap.set(navbarLogo, { width: 250 });
        
        // Create the animation from centered to pinned
        const flip = Flip.from(state, { duration: 1, ease: "none", paused: true });
        
        // Ensure logo starts at its original center position on load
        flip.progress(0);

        // 2. Expand video to full screen on scroll
        ScrollTrigger.create({
          trigger: navbarBackdrop,
          start: "top top",
          end: `+=${viewportHeight}px`,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress;

            // Only the video container expands
            gsap.set(navbarBg, {
              width: gsap.utils.interpolate(initialWidth, viewportWidth, p),
              height: gsap.utils.interpolate(initialHeight, viewportHeight, p),
            });

            // Logo flip animation
            flip.progress(p);
          },
        });

        // 3. Animate Hero Text AFTER video starts expanding
        if (heroContentRef.current) {
          gsap.fromTo(
            heroContentRef.current.children,
            { y: 60, opacity: 0, rotationX: 15 },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              stagger: 0.1,
              duration: 1.2,
              ease: "expo.out",
              scrollTrigger: {
                trigger: navbarBackdrop,
                start: `top+=${viewportHeight * 0.7}px top`,
                end: `top+=${viewportHeight * 1.2}px top`,
                scrub: 1,
              },
            }
          );

          gsap.to(heroContentRef.current, {
            y: -150, 
            autoAlpha: 0, 
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${viewportHeight * 1.3}px top`, 
              end: `top+=${viewportHeight * 1.7}px top`, 
              scrub: 1,
            },
          });
        }

        // 4. Fade out the entire fixed hero layer (backdrop + nav + logo)
        //    just before ServicesSection arrives so there's no bleed-through
        const heroFixedEls = [
          navbarBackdropRef.current,
          navLinksRef.current,
          navbarLogoRef.current,
        ].filter(Boolean);

        gsap.to(heroFixedEls, {
          autoAlpha: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${viewportHeight * 1.75}px top`,
            end: `top+=${viewportHeight * 1.95}px top`,
            scrub: 1,
          },
        });
      };

      initNavbarAnimations();

      let timer: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          const elements = [navbarBgRef.current, navbarLogoRef.current].filter(Boolean);
          gsap.set(elements, { clearProps: "all" });
          navbarLogoRef.current?.classList.remove(styles.navbarLogoPinned);
          initNavbarAnimations();
        }, 250);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
      };
    }, containerRef); 

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, [isMobile]);

  return (
    <div className={`${styles.container} -mt-20 ${isMobile ? styles.mobileHero : ""}`} ref={containerRef}>
      {!isMobile && (
        <div className={styles.navbarBackdrop} ref={navbarBackdropRef}>
          
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.25),transparent_70%)]" />
            
            <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <path d="M -100 800 C 300 200, 700 900, 1100 300" className="stroke-black/85" fill="none" strokeWidth="2" />
              <path d="M -100 800 C 300 200, 700 900, 1100 300" className="auto-trail stroke-green-500/40" fill="none" strokeWidth="2" />
              <path d="M -100 800 C 300 200, 700 900, 1100 300" className="auto-ball stroke-green-400" fill="none" strokeWidth="12" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 8px rgba(74, 222, 128, 0.8))' }} />
            </svg>
          </div>

          {/* VIDEO CONTAINER — expands on scroll, NO rounded corners */}
          <div className={`${styles.navbarBackground} flex flex-col items-center justify-center relative`} ref={navbarBgRef}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none"></div>

            {/* BLACK BAR at bottom with white marquee text */}
            <div className={styles.videoBottomBar}>
              <div className={styles.marqueeTrack}>
                <div className={styles.marqueeItem}>INDOOR GOLF REIMAGINED •</div>
                <div className={styles.marqueeItem}>PREMIUM SIMULATORS •</div>
                <div className={styles.marqueeItem}>BOOK YOUR BAY TODAY •</div>
                <div className={styles.marqueeItem}>24/7 ACCESS •</div>
                <div className={styles.marqueeItem}>INDOOR GOLF REIMAGINED •</div>
                <div className={styles.marqueeItem}>PREMIUM SIMULATORS •</div>
                <div className={styles.marqueeItem}>BOOK YOUR BAY TODAY •</div>
                <div className={styles.marqueeItem}>24/7 ACCESS •</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={styles.mobileVideoBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
        </div>
      )}

      {/* HERO TEXT OVERLAY — ALL WHITE TEXT */}
      <div className={`${isMobile ? "relative h-screen" : "fixed inset-0"} w-full flex flex-col justify-end pb-32 md:pb-40 z-0 pointer-events-none`} ref={heroContentRef}>
        
        <div className="container mx-auto px-6 md:px-12 pointer-events-auto">
          
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="h-px w-12 bg-green-500"></span>
            <span className="text-green-400 font-medium tracking-[0.25em] uppercase text-[11px] md:text-xs drop-shadow-lg">
              Next Generation Experience
            </span>
          </div>

          <h1 className="text-5xl sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-[-0.02em] uppercase text-white flex flex-col drop-shadow-md">
            <span className="text-white">Happy</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 md:ml-12">
              Guilmore
            </span>
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0 max-w-5xl">
            <p className="text-sm sm:text-base md:text-lg text-white max-w-md font-light leading-relaxed">
              Precision technology meets world-class entertainment. Play iconic courses and elevate your game, regardless of the weather outside.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/rates"
                className="group relative flex items-center justify-between gap-6 bg-white text-black px-6 py-4 rounded-lg overflow-hidden transition-all duration-500 hover:text-white"
              >
                <div className="absolute inset-0 bg-green-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">Book Your Bay</span>
                <span className="relative z-10 p-1.5 rounded-full bg-black/5 group-hover:bg-white/20 transition-colors duration-500">
                  <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-500" />
                </span>
              </Link>
              
              <Link
                href="/facility"
                className="group flex items-center justify-between gap-6 px-6 py-4 rounded-lg border border-white/20 bg-black text-white backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/30"
              >
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">The Facility</span>
                <MoveUpRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* STATIC NAV LINKS — stay at top always */}
      {!isMobile && (
        <div className={styles.staticNavLinks} ref={navLinksRef}>
          <div className={styles.navLinksLeft}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/rates" className={styles.link}>Rates &amp; Memberships</Link>
          </div>
          <div className={styles.navCenterSpacer}></div>
          <div className={styles.navLinksRight}>
            <Link href="/facility" className={styles.link}>Our Facility</Link>
            <Link href="/events" className={styles.link}>Events</Link>
          </div>
        </div>
      )}

      {/* LOGO — starts at CENTER of video alongside nav links, Flip animates to top center on scroll */}
      {!isMobile && (
        <div className={styles.navbarLogo} ref={navbarLogoRef}>
          <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2 w-full whitespace-nowrap">
            <span className="text-green-500">Happy Guilmore</span>
          </Link>
        </div>
      )}

      <section className={isMobile ? "hidden" : styles.heroSpacer}></section>
    </div>
  );
};

export default Hero;
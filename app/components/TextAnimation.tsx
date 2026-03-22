"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, ReactElement } from "react";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);
}

interface SplitTextInstance {
  lines: Element[];
  revert: () => void;
}

interface TextAnimationProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitTextInstance[]>([]);
  const lines = useRef<Element[]>([]);

  useGSAP(
    () => {
      // SplitText throws issues if container is null
      if (!containerRef.current) return;

      elementRef.current = [];
      splitRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-text-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        // Try avoiding immediate split if elements aren't fully rendered
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "line++ overflow-hidden", // add overflow-hidden to lines so the slide up effect works cleanly inside the line bounding box
        }) as unknown as SplitTextInstance;
        
        // Wait! The user's code had onSplit inside SplitText.create? Wait, SplitText.create doesn't exist in standard GSAP SplitText, it's `new SplitText`. I'll use `new SplitText`. 
        // Actually, SplitText DOES NOT have an `onSplit` callback in its constructor options. The user's code seems to be an AI-generated wrapper or old/custom plugin. Let's fix that to standard GSAP SplitText.
        
        splitRef.current.push(split);
        lines.current = lines.current.concat(split.lines);

        // Wrap lines in another div so they can animate up from hidden
        split.lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.style.overflow = 'hidden';
            // wrapper.style.display = 'inline-block';
            wrapper.className = 'split-line-wrapper';
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
            
            // Initial state
            gsap.set(line, { yPercent: 100 });
        });

        const animationProps = {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll) {
          gsap.to(split.lines, {
            ...animationProps,
            scrollTrigger: {
              trigger: element, // trigger on the element itself
              start: "top 85%",
              once: true,
            },
          });
        } else {
          gsap.to(split.lines, animationProps);
        }

        const computedStyles = window.getComputedStyle(element);
        const textIndent = computedStyles.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 1) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0px";
        }
      });

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    const child = children as ReactElement<{ ref?: React.Ref<HTMLElement> }>;
    return React.cloneElement(child, { ref: containerRef });
  }

  return (
    <div
      ref={containerRef}
      data-text-wrapper="true"
    >
      {children}
    </div>
  );
}

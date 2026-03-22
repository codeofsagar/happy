"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ComponentProps, ReactNode, MouseEvent } from "react";

// Register GSAP plugins once
if (typeof window !== "undefined") {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
}

/**
 * Check if View Transitions API is supported
 */
function supportsViewTransitions(): boolean {
    if (typeof document === "undefined") return false;
    return "startViewTransition" in document;
}

/**
 * THE ANIMATION LOGIC
 * Defines the geometric clip-path transition for the incoming page
 */
function triggerPageTransition() {
    // Only run animation if View Transitions API is supported
    if (!supportsViewTransitions()) return;

    document.documentElement.animate(
        [
            {
                clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
            },
            {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            },
        ],
        {
            duration: 1500,
            easing: "cubic-bezier(0.9, 0, 0.1, 1)",
            pseudoElement: "::view-transition-new(root)",
        }
    );
}

/**
 * COMPONENT 1: TransitionLink
 * Use this instead of next/link to trigger the animation
 */
interface TransitionLinkProps extends ComponentProps<typeof Link> {
    children: ReactNode;
    className?: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const TransitionLink = ({
    href,
    children,
    className,
    onClick,
    ...props
}: TransitionLinkProps) => {
    const router = useTransitionRouter();
    const pathname = usePathname();

    const handleNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Call the external onClick if provided (e.g., closeMenu)
        if (onClick) {
            onClick(e);
        }

        const targetPath = href.toString();

        // Don't navigate if already on the same page
        if (targetPath === pathname) return;

        // Check if View Transitions are supported
        if (supportsViewTransitions()) {
            router.push(targetPath, {
                onTransitionReady: triggerPageTransition,
            });
        } else {
            // Fallback: use regular navigation for unsupported browsers (Safari, older mobile browsers)
            router.push(targetPath);
        }
    };

    return (
        <Link
            href={href}
            onClick={handleNavigation}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
};

/**
 * COMPONENT 2: PageLoadRevealer
 * Places the black overlay that slides up on initial site load
 */
export const PageLoadRevealer = () => {
    useGSAP(() => {
        gsap.to(".revealer", {
            scaleY: 0,
            duration: 1.25,
            delay: 0.5,
            ease: "hop",
        });
    }, {});

    return (
        <div
            className="revealer fixed top-0 left-0 h-screen w-screen bg-black origin-top z-[50] pointer-events-none will-change-transform"
        />
    );
};
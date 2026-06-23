'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
    triggerStart?: string;     // When the animation should start (e.g., 'top 80%')
    yOffset?: number;          // Distance elements slide up
    staggerAmount?: number;    // Delay between consecutive items
    duration?: number;         // Animation length in seconds
    }

    export function useScrollReveal(
    containerRef: RefObject<HTMLElement | null>,
    options: RevealOptions = {}
    ) {
    const {
        triggerStart = 'top 85%',
        yOffset = 50,
        staggerAmount = 0.15,
        duration = 0.6,
    } = options;

    useGSAP(() => {
        if (!containerRef.current) return;

        // Build a reusable timeline locked to the container's viewport entry
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            toggleActions: 'play none none reverse',
        },
        });

        // Look for any child element with the 'reveal-item' class name
        tl.fromTo(
        '.reveal-item',
        { 
            opacity: 0, 
            y: yOffset 
        },
        {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: staggerAmount,
            ease: 'power2.out',
        }
        );
    }, { scope: containerRef }); // Scope ensures animations stay inside this component
}
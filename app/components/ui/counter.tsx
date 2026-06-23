"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface GsapCounterProps {
    to: number;
    duration?: number;
    }

    export default function Counter({ to, duration = 0.5 }: GsapCounterProps) {
    const elementRef = useRef<HTMLSpanElement>(null);
    
    // Track the previous value so GSAP can animate from it
    const previousValue = useRef(to);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Create a mutable object for GSAP to animate
        const obj = { val: previousValue.current };

        // Create the GSAP tween
        const ctx = gsap.context(() => {
        gsap.to(obj, {
            val: to,
            duration: duration,
            ease: "power2.out",
            onUpdate: () => {
            // Update the text content directly on every frame for peak performance
            if (element) {
                element.textContent = Math.round(obj.val).toLocaleString("en-PH");
            }
            },
        });
        });

        // Save the current target as the starting point for the next update
        previousValue.current = to;

        // Clean up the animation context when the component unmounts or updates
        return () => ctx.revert();
    }, [to, duration]);

    // Set the initial text value on the first render
    return (
        <span 
        ref={elementRef} 
        className="font-body tabular-nums"
        >
        {to.toLocaleString("en-PH")}
        </span>
    );
}
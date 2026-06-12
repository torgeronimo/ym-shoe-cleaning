"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";



interface PreloaderProps {
  /** Called once the preloader has fully finished animating out */
  onComplete?: () => void;
  /** Minimum time (ms) the preloader stays visible, even if page loads instantly */
  minDuration?: number;
}

export default function Preloader({
  onComplete,
  minDuration = 2200,
}: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          setIsDone(true);
          onComplete?.();
        },
      });

      // Entrance — logo + tagline pop in
      tl.from(logoRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      }).from(
        tagRef.current,
        { y: 12, opacity: 0, duration: 0.4, ease: "power3.out" },
        "-=0.25"
      );

      // Continuous spinning ring (independent loop, killed on exit)
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 6,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      // Counter + progress bar — drives the whole timeline length
      tl.to(
        counter,
        {
          value: 100,
          duration: Math.max((minDuration - 900) / 1000, 0.8),
          ease: "power1.inOut",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = Math.floor(
                counter.value
              ).toString().padStart(3, "0");
            }
            if (barFillRef.current) {
              barFillRef.current.style.width = `${counter.value}%`;
            }
          },
        },
        0.2
      );

      // Hold briefly at 100
      tl.to({}, { duration: 0.25 });

      // Exit — text/logo fade + scale down
      tl.to(
        [logoRef.current, tagRef.current, counterRef.current?.parentElement],
        {
          opacity: 0,
          y: -16,
          duration: 0.35,
          ease: "power2.in",
        }
      );

      // Sole-style split reveal: two panels slide apart vertically
      tl.to(
        panelTopRef.current,
        { yPercent: -100, duration: 0.7, ease: "power4.inOut" },
        "+=0.05"
      ).to(
        panelBottomRef.current,
        { yPercent: 100, duration: 0.7, ease: "power4.inOut" },
        "<"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [minDuration, onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      {/* Top panel */}
      <div
        ref={panelTopRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-[#0a0a0a] border-b-[3px] border-[#0a0a0a]"
      />
      {/* Bottom panel */}
      <div
        ref={panelBottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0a0a0a]"
      />

      {/* Content layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f5f2ee] px-6">
        {/* Spinning ring badge */}
        <div className="relative w-24 h-24 mb-8 md:w-28 md:h-28">
          <svg
            viewBox="0 0 110 110"
            className="absolute inset-0 w-full h-full"
          >
            
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display text-3xl tracking-wider">
            ✦
          </div>
        </div>

        {/* Logo / wordmark */}
        <div
          ref={logoRef}
          className="font-display text-6xl md:text-8xl tracking-tight leading-none flex items-center gap-1"
        >
          YM
          
        </div>

        {/* Tagline */}
        <div
          ref={tagRef}
          className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase mt-3 text-[#cccccc]"
        >
          Premium Shoe Cleaning &amp; Restoration
        </div>

        {/* Counter + progress bar */}
        <div className="mt-12 w-full max-w-xs flex flex-col items-center gap-3">
          <div className="flex items-baseline gap-2 font-mono">
            <span
              ref={counterRef}
              className="text-4xl md:text-5xl font-bold tabular-nums"
            >
              000
            </span>
            <span className="text-sm tracking-widest text-[#cccccc]">
              / 100
            </span>
          </div>

          <div className="w-full h-[3px] bg-[#444444] overflow-hidden">
            <div
              ref={barFillRef}
              className="h-full bg-[#f5f2ee]"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

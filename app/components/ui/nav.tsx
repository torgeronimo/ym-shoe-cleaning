"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";


/**
 * SOLE. Navbar + Full-Page Menu
 * ─────────────────────────────────────────────────────────
 * - Sticky nav bar with logo, links (desktop), CTA, and a
 *   hamburger / close toggle (neubrutalist square button).
 * - Clicking the toggle opens a full-viewport overlay menu:
 *   black background slides up from the bottom (GSAP),
 *   large Bebas Neue nav links stagger in, plus a footer-style
 *   info block (socials, contact, hours).
 * - Body scroll is locked while the menu is open.
 *
 * Usage:
 *   import Navbar from "@/components/Navbar";
 *   ...
 *   <Navbar />
 */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Feed", href: "#feed" },
  { label: "Product", href: "#product" },
  { label: "Branch", href: "#branch" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  // Build the open/close timeline once
  useEffect(() => {
    if (
      !overlayRef.current ||
      !panelRef.current ||
      !linksRef.current ||
      !metaRef.current
    )
      return;

    const linkItems = gsap.utils.toArray<HTMLElement>(
      linksRef.current.querySelectorAll(".menu-link")
    );
    const metaItems = gsap.utils.toArray<HTMLElement>(
      metaRef.current.querySelectorAll(".menu-meta-item")
    );

    gsap.set(overlayRef.current, { display: "none" });
    gsap.set(panelRef.current, { yPercent: 100 });
    gsap.set(linkItems, { yPercent: 120, opacity: 0 });
    gsap.set(metaItems, { y: 20, opacity: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .set(overlayRef.current, { display: "block" })
      .to(panelRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "power4.inOut",
      })
      .to(
        linkItems,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.25"
      )
      .to(
        metaItems,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.4"
      );

    return () => {
      tl.current?.kill();
    };
  }, []);

  // Play / reverse + lock scroll
  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      document.body.style.overflow = "clip";
      tl.current.play();
    } else {
      document.body.style.overflow = "";
      tl.current.eventCallback("onReverseComplete", () => {
        gsap.set(overlayRef.current, { display: "none" });
      });
      tl.current.reverse();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  //Closes the sm Nav
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768 && isOpen) {
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault(); // Stops the URL change
  
  const target = document.querySelector(href);
  if (target) {
    // Calculates header height dynamically to avoid cutting off your content
    const navHeight = document.querySelector('nav')?.clientHeight || 0;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({
      top: targetPosition - navHeight,
      behavior: 'smooth',
    });
  }
};

useEffect(() => {
  // Finds all <section id="..."> tags on your page
  const sections = document.querySelectorAll('section[id]');
  
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When a section takes up 50% of the viewport, mark it active
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { 
        // Adjusts the trigger boundary line closer to the top of your screen
        rootMargin: '-20% 0px -60% 0px' 
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleans up observers when component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#f5f2ee] border-b-[3px] border-[#0a0a0a]">
        <Link
          href="#"
          className="font-display text-3xl md:text-4xl tracking-wide text-[#0a0a0a] flex items-center gap-1"
          onClick={handleLinkClick}
        >
          YM
          <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] inline-block mb-2" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`font-body font-bold text-sm tracking-[0.2em] uppercase text-[#0a0a0a] transition-all duration-200
                    ${isActive ? 'opacity-100 border-main px-4 py-2 shadow-sm decoration-[2px]' : 'opacity-60 hover:opacity-100'}
                  `}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className={`font-body font-bold text-sm tracking-[0.2em] uppercase px-6 py-2.5 border-[3px] border-[#0a0a0a] transition-all block
                ${activeSection === '#contact' 
                  ? 'bg-[#555] text-[#f5f2ee] shadow-none' 
                  : 'bg-[#0a0a0a] text-[#f5f2ee] shadow-[3px_3px_0_#555] hover:shadow-none'
                }
              `}
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu toggle — fixed so it stays above the overlay and acts as the close button when open */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`lg:hidden fixed top-5 right-6 md:right-10 z-[70] w-12 h-12 flex items-center justify-center transition-colors ${
          isOpen
            ? "bg-[#f5f2ee] border-[#f5f2ee] [&_span]:bg-[#0a0a0a]"
            : "bg-[#f5f2ee] border-[#0a0a0a] hover:bg-[#0a0a0a] [&:hover_span]:bg-[#f5f2ee] [&_span]:bg-[#0a0a0a]"
        }`}
      >
        
        <span className="relative w-6 h-[2px] block">
          <span
            className={`absolute left-0 top-0 w-6 h-[2px] transition-all duration-300 ${
              isOpen ? "rotate-45 top-0" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute left-0 top-0 w-6 h-[2px] transition-all duration-300 ${
              isOpen ? "-rotate-45 top-0" : "translate-y-[5px]"
            }`}
          />
        </span>
      </button>

      {/* FULL PAGE MENU OVERLAY */}
      <div ref={overlayRef} className="fixed inset-0 z-55 h-dvh">
        <div
          ref={panelRef}
          className="absolute inset-0 h-dvh bg-[#0a0a0a] text-[#f5f2ee] flex flex-col"
        >
          {/* Top bar inside overlay */}
          <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b-[3px] border-[#f5f2ee]/15">
            <span className="font-display text-2xl md:text-3xl tracking-wide flex items-center gap-1">
              YM
              <span className="w-2 h-2 rounded-full bg-[#f5f2ee] inline-block mb-1.5" />
            </span>
          </div>

          {/* Main nav links */}
          <div className="flex-1 flex flex-col md:flex-row overflow-y-auto">
            <div
              ref={linksRef}
              className="flex-1 flex flex-col justify-center gap-0 md:gap-1 px-6 md:px-16 py-6 md:py-8"
            >

              
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href;
                return(
                <div key={link.label} className="overflow-hidden">
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="menu-link group flex items-baseline gap-3 md:gap-6 py-1.5 md:py-2"
                  >
                    <span className="font-mono text-[10px] md:text-sm text-[#777777] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display text-4xl sm:text-5xl md:text-7xl leading-none tracking-tight group-hover:opacity-50 group-hover:translate-x-3 transition-all duration-300 
                    ${isActive ? 'translate-x-3 opacity-50' : 'opacity-100'}
                    `}>
                      {link.label}
                    </span>
                  </a>
                </div>
                )
            })}
            </div>

            {/* Side info / meta block */}
            <div
              ref={metaRef}
              className="md:w-72 border-t-[3px] md:border-t-0 md:border-l-[3px] border-[#f5f2ee]/15 px-6 md:px-8 py-6 flex flex-col justify-center gap-6 md:gap-8"
            >
              <div className="menu-meta-item">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#777777] mb-2 pb-2 border-b-2 border-[#f5f2ee]/20">
                  Get in Touch
                </div>
                <Link
                  href="tel:+63912345678"
                  className="block font-body text-lg font-bold hover:opacity-60 transition-opacity"
                >
                  +63 912 345 6789
                </Link>
                <Link
                  href="mailto:ymshoecleaning@gmail.com"
                  className="block font-body text-base text-[#cccccc] hover:opacity-60 transition-opacity mt-1"
                >
                  ymshoecleaning@gmail.com
                </Link>
              </div>

              <div className="menu-meta-item">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#777777] mb-2 pb-2 border-b-2 border-[#f5f2ee]/20">
                  Visit Us
                </div>
                <p className="font-body text-base text-[#cccccc] leading-relaxed">
                  123 Bonifacio St., Calamba
                  <br />
                  Mon–Sat 9am–7pm
                  <br />
                  Sunday by appt.
                </p>
              </div>

              <div className="menu-meta-item flex gap-4">
                {["IG", "FB", "TT"].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="font-mono text-[10px] tracking-[0.15em] uppercase border-b-2 border-[#f5f2ee] pb-0.5 hover:opacity-60 transition-opacity"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="px-6 md:px-10 py-3 border-t-[3px] border-[#f5f2ee]/15 font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#777777] flex items-center justify-between">
            <span>© 2026 YM.</span>
            <span>Premium Shoe Care Studio</span>
          </div>
        </div>
      </div>
    </>
  );
}

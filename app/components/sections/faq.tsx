"use client";

import { useState, useRef, useEffect } from "react";
import SectionTitle from "../ui/section-title";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  
  /** Override the default FAQ items */
  items?: FAQItem[];
}



const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "SERVICE",
    question: "What types of sneakers do you clean?",
    answer:
      "We clean all sneaker types — from performance runners to luxury deadstock. Jordan, Nike, Adidas, New Balance, Yeezy, and more. If it has a sole, we can restore it.",
  },
  {
    id: "faq-2",
    category: "SERVICE",
    question: "How long does a standard clean take?",
    answer:
      "Standard turnaround is 3–7 business days. Express 24-hour service is available for an additional fee. Drop-off and pick-up times are confirmed at booking.",
  },
  {
    id: "faq-3",
    category: "PRICING",
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the service tier (Basic, Deep Clean, Restoration) and sneaker condition at drop-off. We quote you upfront — no hidden fees, ever.",
  },
  {
    id: "faq-4",
    category: "PRICING",
    question: "Do you offer subscription plans?",
    answer:
      "Yes. Our Shield Plan covers up to 4 cleans per month with priority scheduling and a 15% discount on add-ons. Perfect for collectors and daily wearers.",
  },
  {
    id: "faq-5",
    category: "CARE",
    question: "Is the cleaning process safe for all materials?",
    answer:
      "We use material-specific solutions — different protocols for mesh, suede, leather, nubuck, and patent. Solvents are pH-balanced and free from bleach or harsh chemicals.",
  },
  {
    id: "faq-6",
    category: "CARE",
    question: "Can yellowed soles be restored?",
    answer:
      "In most cases, yes. Our UV de-yellowing treatment reverses oxidation on midsoles and outsoles. Results depend on severity — we assess every pair on intake.",
  },
  {
    id: "faq-7",
    category: "LOGISTICS",
    question: "Do you offer pick up service?",
    answer:
      "We do. Pack your kicks securely, we'll book a courier and return them via insured courier.",
  },
  {
    id: "faq-8",
    category: "LOGISTICS",
    question: "What if something goes wrong?",
    answer:
      "Every pair is photographed at intake and covered under our Care Guarantee. If we cause any damage, we cover repair or fair replacement cost. No questions asked.",
  },
];

// ─── FAQRow ───────────────────────────────────────────────────────────────────

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className={[
        "border-b-[3px] border-black transition-colors duration-200",
        open ? "bg-(--color-cream)" : "bg-white",
      ].join(" ")}
    >
      {/* Question row */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={item.id}
        className="w-full grid items-center gap-6 px-8 py-6 bg-transparent border-none cursor-pointer text-left"
        style={{ gridTemplateColumns: "3rem 1fr auto" }}
      >
        {/* Index */}
        <span className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-gray-500 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span className="font-display text-[clamp(1.35rem,2.5vw,1.9rem)] leading-tight tracking-[0.02em] text-sole-black">
          {item.question}
        </span>

        {/* Toggle icon */}
        <span
          aria-hidden
          className={[
            "flex items-center justify-center w-10 h-10 border-[3px] border-sole-black shrink-0",
            "font-mono text-lg select-none transition-all duration-[120ms]",
            open
              ? "bg-black text-white translate-x-[3px] translate-y-[3px] shadow-none"
              : "bg-transparent text-black shadow-sm",
          ].join(" ")}
        >
          {open ? "—" : "+"}
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={item.id}
        role="region"
        className="overflow-hidden"
        style={{
          height,
          transition: "height 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div ref={bodyRef}>
          <div
            className="grid gap-6 px-8 pb-7"
            style={{ gridTemplateColumns: "3rem 1fr" }}
          >
            {/* Answer content — sits in the second column */}
            <div className="col-start-2">
              {item.category && (
                <span className="badge badge-solid">
                  {item.category}
                </span>
              )}
              <p className="font-body text-lg leading-relaxed text-gray-700 max-w-prose">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export default function FAQ({
  
  items = DEFAULT_FAQS,
}: FAQProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = [
    "ALL",
    ...Array.from(
      new Set(items.map((i) => i.category).filter(Boolean) as string[])
    ),
  ];

  const filtered =
    activeFilter === "ALL"
      ? items
      : items.filter((i) => i.category === activeFilter);

  return (
    <section id="faq"
    >
      {/* ── Section header ── */}
      <SectionTitle title="FAQ"/>
      {/* ── Category filter bar ── */}
      <div
        className="flex border-y-[3px] border-black overflow-x-auto"
        role="group"
        aria-label="Filter by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            aria-pressed={activeFilter === cat}
            className={[
              "font-mono text-[0.625rem] font-bold tracking-[0.25em] uppercase",
              "px-7 py-3.5 border-r-[3px] border-black whitespace-nowrap cursor-pointer",
              "transition-colors duration-[120ms]",
              activeFilter === cat
                ? "bg-black text-white"
                : "bg-transparent text-black hover:bg-cream",
            ].join(" ")}
            
          >
            {cat}
          </button>
        ))}
        {/* Fill remaining space */}
        <div className="flex-1" />
      </div>

      {/* ── FAQ list ── */}
      <div>
        {filtered.map((item, i) => (
          <FAQRow key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* ── Footer CTA strip ── */}
      <div className="flex items-center justify-between flex-wrap gap-4 px-10 py-5 border-t-[3px] border-black bg-(--color-cream)">
        <p className="font-body text-base text-gray-700">
          Still have questions?
        </p>
        <a
          href="#contact"
          onClick={(e)=>{e.preventDefault();
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={[
            "inline-flex items-center gap-2 no-underline",
            "font-body font-bold text-[0.85rem] tracking-[0.15em] uppercase",
            "text-white bg-black border-[3px] border-black",
            "px-10 py-3 shadow-md",
            "transition-[transform,box-shadow] duration-[120ms]",
            "hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none",
          ].join(" ")}
        >
          Contact Us ↗
        </a>
      </div>
    </section>
  );
}
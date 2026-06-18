import Link from "next/link";
import Image from "next/image"
import Logo from "../ui/logo"
export default function Footer() {
  const stats = [
        {
            label: "Pairs Cleaned",
            value: "21k+"
        },
        {
            label: "Average Rating",
            value: "4.9 ★"
        },
        {
            label: "Turnaround Time",
            value: "3-7 days"
        }
    ];
  return (
    <footer className="font-body text-[#0a0a0a]">
      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] border-t-[3px] border-[#0a0a0a]">
        {/* Brand column */}
        <div className="flex flex-col p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a] relative overflow-hidden">
          <div className="font-display text-7xl leading-none mb-4 flex items-center gap-1 font-bold">
            YM
            <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] inline-block mb-2" />
          </div>
          <p className="max-w-[30ch] text-base leading-relaxed text-[#444444]">
            Premium shoe cleaning and restoration. Because every pair tells a
            story — we make sure it&apos;s a clean one.
          </p>
          <div className="flex gap-4 mt-8">
            <div className="border p-2 rounded-md hover:scale-112 duration-100 transition-all">
              <Image
                src="https://thesvg.org/icons/facebook/mono.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </div>
            <div className="border p-2 rounded-md hover:scale-112 duration-100 transition-all">
              <Image
                src="https://thesvg.org/icons/instagram/mono.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </div>
          </div>
          <span className="text-[500px] text-neutral-300 font-bold font-display absolute -bottom-60 -z-40 right-0 ">YM</span>
        </div>

        {/* Stats column */}
        <div className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a]">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase pb-3 mb-6 border-b-2 border-[#0a0a0a]">
            Why us?
          </div>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
                <span className="type-display-md flex justify-center">{s.value}</span>
                <span className="text-[1.05rem] tracking-wide text-[#444444] flex justify-center">{s.label}</span>
            </div>
            ))}
        </div>
        {/* Company column */}
        <div className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a]">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase pb-3 mb-6 border-b-2 border-[#0a0a0a]">
            Navigation
          </div>
          <ul className="space-y-3">
            {["Home","Services", "Feed", "Branch", "Contact", "FAQ"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[1.05rem] tracking-wide text-[#444444] hover:text-[#0a0a0a] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Visit Us column */}
        <div className="p-8 md:p-12">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase pb-3 mb-6 border-b-2 border-[#0a0a0a]">
            Visit Us
          </div>
          <ul className="space-y-3">
            <li className="text-[1.05rem] tracking-wide text-[#444444]">
              Brgy. Bucal, Calamba City, Laguna
            </li>
            <li className="text-[1.05rem] tracking-wide text-[#444444]">
              Mon–Sat 9am–7pm
            </li>
            <li className="pt-2">
              <Link
                href="mailto:ymshoecleaning@gmail.com"
                className="text-[1.1rem] font-bold text-[#0a0a0a] hover:opacity-60 transition-opacity"
              >
                ymshoecleaning@gmail.com
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="tel:+639971406900"
                className="text-[1.1rem] font-bold text-[#0a0a0a] hover:opacity-60 transition-opacity"
              >
                +63 997 140 6900
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-[#0a0a0a] text-[#f5f2ee] flex px-6 md:px-10 py-5 justify-center">
        <span>© 2026 YM. All rights reserved.</span>
      </div>
    </footer>
  );
}

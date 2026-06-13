import Link from "next/link";


export default function Footer() {
  return (
    <footer className="font-body text-[#0a0a0a]">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] border-t-[3px] border-[#0a0a0a]">
        {/* Brand column */}
        <div className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a]">
          <div className="font-display text-5xl leading-none mb-4 flex items-center gap-1">
            YM
            <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] inline-block mb-2" />
          </div>
          <p className="max-w-[28ch] text-base leading-relaxed text-[#444444]">
            Premium shoe cleaning and restoration. Because every pair tells a
            story — we make sure it&apos;s a clean one.
          </p>
          <div className="flex gap-4 mt-8">
            {["IG", "FB", "TT"].map((label) => (
              <Link
                key={label}
                href="#"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-0.5 hover:opacity-60 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>


        {/* Company column */}
        <div className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0a0a0a]">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase pb-3 mb-6 border-b-2 border-[#0a0a0a]">
            Company
          </div>
          <ul className="space-y-3">
            {["About Us", "Process", "Gallery", "Reviews", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
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
              123 Bonifacio St., Calamba
            </li>
            <li className="text-[1.05rem] tracking-wide text-[#444444]">
              Mon–Sat 9am–7pm
            </li>
            <li className="text-[1.05rem] tracking-wide text-[#444444]">
              Sunday by appt.
            </li>
            <li className="pt-2">
              <Link
                href="tel:+63912345678"
                className="text-[1.1rem] font-bold text-[#0a0a0a] hover:opacity-60 transition-opacity"
              >
                +63 912 345 6789
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0a0a0a] text-[#f5f2ee] flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between px-6 md:px-10 py-5 font-mono text-[11px] tracking-[0.1em]">
        <span>© 2026 YM. All rights reserved.</span>
        <span>Premium Shoe Care Studio</span>
      </div>
    </footer>
  );
}

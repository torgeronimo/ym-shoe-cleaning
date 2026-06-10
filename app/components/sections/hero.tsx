import React from 'react'
import Button from '../ui/button'
import Image from 'next/image'

const Hero = () => {
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
        <section className="border-b-4">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4 items-stretch border">

                <div className="col-span-1 flex flex-col gap-4 px-12 py-8">
                <span className="type-label py-2 px-2 border-main bg-(--color-cream) shadow-(--shadow-sm) w-fit">
                    ★ 1st and Most Trusted in Laguna
                </span>

                <h1 className="type-display-hero">
                    <span className="type-outline">Avoid risk</span><br/>
                    save time<br/>
                    <span className="type-outline">drop now</span><br/>
                    pay later
                </h1>

                <p className="type-body-lg font-body mt-4 w-1/2">
                    Professional-grade sneaker and leather shoe restoration. We scrub, restore, and protect your kicks so they look better than the day you bought them.
                    </p>

                <div className="flex gap-4 mt-6 pb-12 border-b-4">
                    <Button text="Book a clean" variant="primary" size="lg" />
                    <Button text="View Service" variant="ghost" size="lg" />
                </div>

                <div className="flex gap-12 w-fit">
                    {stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                        <span className="type-display-md">{s.value}</span>
                        <span className="type-mono type-label-sm">{s.label}</span>
                    </div>
                    ))}
                    {/* <div className="spin-badge">
                        <svg className="spin-badge-ring" viewBox="0 0 110 110" width="110" height="110">
                        <defs><path id="sp" d="M 55,55 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"/></defs>
                        <text font-family="Space Mono, monospace" font-size="9.5" fill="#0a0a0a" letter-spacing="3">
                            <textPath href="#sp">PREMIUM CLEAN • SINCE 2019 •</textPath>
                        </text>
                        </svg>
                        <span className="spin-badge-center">✦</span>
                    </div> */}
                </div>
                </div>

                <div className="col-span-1 relative">
                    <Image
                        fill
                        src="/YM/ym1.jpg"
                        className="w-full h-full object-cover"
                        alt="Hero"/>
                </div>
                
            </div>
            </section>
    )
}

export default Hero

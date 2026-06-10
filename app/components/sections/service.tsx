import Card from '../ui/card'
import SectionTitle from '../ui/section-title';
import { Sparkles, Gift, BadgePercent, Sparkle, Crown } from 'lucide-react';
const Service = () => {
    const whyvip=[
        {title:"Full 5-part clean", desc:"Every part of your shoe, covered", icon:Sparkles},
        {title:"Free care kit included", desc:"Keep your kicks fresh between visits",icon:Gift},
        {title:"Best value per peso", desc:"Compared to Gold + kit separately",icon:BadgePercent},
    ]

    type Service = {
        name: string;
        tag: string;
        includes: string[];
        price: string;
        free?: string;
    }
    const services: Service[] = [
        {
            name: "YM SPECIAL",
            tag: "VIP",
            includes:["Upper", "Midsole", "Outsole", "Laces", "Insoles"],
            price: "₱999",
            free: "Free sneaker care kit with every VIP service"
        },
        {
            name: "Bronze",
            tag:"Standard",
            includes:["Upper", "Midsole", "Outsole", "Laces"],
            price: "₱379"
        },
        {
            name: "Silver",
            tag:"Premium",
            includes:["Upper", "Midsole", "Outsole", "Laces", "Insoles"],
            price: "₱399",
            free: "FREE Deodorizing treatment"
        },
        {
            name: "Gold",
            tag:"Luxury",
            includes:["Upper", "Midsole", "Outsole", "Laces", "Insoles"],
            price: "₱499",
            free: "Free Deodorizing & Leather/Plastic Treatment"
        }
    ];

    const additionalServices = [
        {
            name: "Full Reglue",
            price: "₱2499",
        },
        {
            name: "Deodorizing",
            price: "₱199"
        },
        {
            name: "Leather Treatment",
            price: "₱199"
        },
        {
            name: "Plastic Treatment",
            price: "₱199"
        },
        {
            name: "Stain Repellent",
            price: "₱299"
        },
        {
            name: "Stitching",
            price: "₱699"
        },
        {
            name: "Color Retouch",
            price: "₱499"
        },
        {
            name: "Un-yellow Oxidation",
            price: "₱599"
        },
        {
            name: "Un-yellow Repaint",
            price: "₱699"
        },
    ];

    const capCleaning = [
        {
            name: "Platinum",
            tag:"Premium",
            includes:["All Panel", "Sweatband", "Visor","Strap"],
            price: "₱399",
            free:"FREE Deodorizing"
        },
        {
            name: "Reshaping",
            tag:"Luxury",
            includes:["Upper", "Brim", "Sweatband"],
            price: "₱499",
            free:"FREE Deodorizing & Reshape"
        }
    ];

    const [featured, ...rest] = services;
    return (
        <section className='' id="service">
            <SectionTitle title='Our Service'/>
            <div className="content-wrapper flex items-center justify-center">
                <div className="card-container flex flex-col items-center justify-center gap-12 py-12 px-4 max-w-7xl">

                    
                    {/* Featured card */}
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-black w-full'>
                        <div className="text-white p-12 w-full mb-6">
                            <span className={`${featured.tag} badge badge-invert`}>{featured.tag}</span>
                            <div className="flex items-center justify-between pt-4">
                                <h2 className="price-amount">{featured.name}</h2>
                                <p className="price-amount">{featured.price}</p>
                            </div>
                            <ul className="price-feature-list">
                            {featured.includes.map((include) => (
                                <li key={include} className="type-body-base border-b">
                                    {include}
                                </li>
                            ))}
                            </ul>
                            {featured.free && (
                                <p className="type-label-sm">{featured.free}</p>
                            )}
                        </div>
                        
                        <div className='relative overflow-hidden text-white md:border-l-2 border-t-2 border-neutral-900 p-12'>
                            
                            <div className='flex flex-col justify-start gap-4'>
                                <h2 className='type-display-sm'>WHY GO VIP?</h2>
                                {whyvip.map((w)=>{
                                    const Icon = w.icon;
                                    return(
                                        <div key={w.title} className='z-20 flex items-center gap-4 type-body-base'>
                                            <div className='h-10 w-10 bg-neutral-900 flex items-center justify-center rounded-full'>
                                                <Icon className='w-6 h-6 text-neutral-400'/>
                                            </div>
                                            
                                            <div>
                                                <p>{w.title}</p>
                                                <p className='text-neutral-600'>{w.desc}</p>
                                            </div>
                                        </div>
                                    )                   
                                })}
                                <div className='absolute -bottom-20 sm:right-0 -right-10'>
                                    <Crown className='md:w-70 md:h-70 w-50 h-50 -z-50 fill-neutral-600' strokeWidth={0}/>
                                </div>
                            </div>
                            
                                
                                
                            
                        </div>
                    </div>
                    
                    {/* Rest */}
                    <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 grid-cols-1 gap-4">
                        {rest.map((r)=>(
                            
                            //Short cut for only if card props is similar to r.
                            //<Card key={r.name} name={r.name} tag={r.tag} price={r.price} includes={r.includes}/>
                            // Shortcut
                            <Card key={r.name} {...r}/>
                        ))}
                    
                    </div>

                    {/* Cap Service */}
                    <div className="w-full py-4 border-t-4 flex flex-col justify-center items-center md:justify-start md:items-start px-4">
                        <h2 className="type-display-lg py-4">Cap Service</h2>
                        <div className="grid grid-cols-1 md:flex gap-4">
                            {capCleaning.map((c)=>(
                                <Card key={c.name} {...c}/>
                            ))}
                        </div>
                    </div>
                    <div className="w-full py-4 border-t-4">
                        <h2 className="type-display-lg">Additional Service</h2>
                        <div className="add-wrapper">
                            <div className="flex flex-wrap gap-2 border-b-4 py-4">
                                {additionalServices.map((ads)=>(
                                    <span key={ads.name} className="badge badge-solid">{ads.name} {ads.price}</span>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            
            
                
            
        </section>
    )
}

export default Service

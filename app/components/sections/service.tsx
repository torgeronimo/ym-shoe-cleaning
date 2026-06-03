import Card from '../ui/card'
import SectionTitle from '../ui/section-title';
const Service = () => {

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
                <div className="card-container flex flex-col items-center justify-center gap-6 py-12 px-6 max-w-7xl">
                {/* {services.map((s) => (
                    <div key={s.name} className="price-card border-main h-auto w-full">
                        <span className="badge badge-outline">{s.tag}</span>
                        <h2 className="type-display-md">{s.name}</h2>
                        <p className="price-amount">{s.price}</p>
                        <ul>
                            {s.includes.map((include) => (
                                <li key={include} className="type-label border-b-2">
                                    -{include}
                                </li>
                            ))}
                        </ul>
                        {s.freebies && (
                            <p className="type-label-sm">{s.freebies}</p>
                        )}
                    </div>
                ))} */} 

                    
                    {/* Featured card */}
                    <div className="price-card-featured price-card">
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
                    {/* Rest */}
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {rest.map((r)=>(
                            
                            //Short cut for only if card props is similar to r.
                            //<Card key={r.name} name={r.name} tag={r.tag} price={r.price} includes={r.includes}/>
                            // Shortcut
                            <Card key={r.name} {...r}/>
                        ))}
                    
                    </div>

                    {/* Cap Service */}
                    <div className="w-full py-4 border-t-4 flex flex-col justify-center items-center md:justify-start md:items-start">
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
            
            {/* Additional Service */}
            
            
                
            
        </section>
    )
}

export default Service

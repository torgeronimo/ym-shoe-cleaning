import React from 'react'
import SectionTitle from '../ui/section-title'
import Button from '../ui/button'
import {MapPin, Phone, Send,ArrowUpRight, Gauge, Megaphone, GraduationCap, Headset,BanknoteArrowUp,ShieldCheck,PhilippinePeso,UsersRound, UserRound} from 'lucide-react'


export default function Branch () {


    const branches = [
    {
        name: "YM Flagship Store",
        location: "Brgy. Bucal, Calamba City, Laguna",
        contact: "0997 140 6900"
        
    },
    {
        name: "YM - Calamba City Bayan",
        location: "Brgy. San Juan, Calamba City, Laguna",
        contact: "0997 273 8272"
    },
    {
        name: "YM - Sto. Tomas City",
        location: "Brgy. San Rafael, Santo Tomas City, Batangas",
        contact: "0997 140 6900"
    },
    {
        name: "YM - San Pablo City",
        location: "Brgy. 6-E, Cosico Avenue, San Pablo City, Laguna",
        contact: "0927 149 4660"
    },
    {
        name: "YM Las Piñas - BF Resort",
        location: "Onelia Jose St, BF Resort Village, Talon Dos, Las Piñas",
        contact: "0963 950 8628"
    },
    {
        name: "YM Silang - Westgrove",
        location: "South Forbes, Silang Cavite",
        contact: "0920 963 8032"
    },
    {
        name: "YM Los Baños - UPLB",
        location: "Brgy. Batong Malake",
        contact: "0967 455 9546"
    },
    {
        name: "YM Quezon - Tayabas",
        location: "29 A Mabini St. Brgy San Diego Zone 2, Tayabas City",
        contact: "0947 541 7188"
    },
    {
        name: "YM Batangas - Alitagtag",
        location: "88 Muzon I, Alitagtag, Batangas",
        contact: "0915 885 9850"
    },
    {
        name: "YM Quezon City - Novaliches",
        location: "Katipunan Road, Goodwill Homes 1, San Bartolome, Novaliches, Quezon City",
        contact: "0945 845 9817"
    },
    {
        name: "YM Cavite - Rosario",
        location: "GF M.D. Consuelo Bldg., PNOC Drive, Tejeros Convention, Rosario, Cavite",
        contact: "0969 105 6192"
    },
    {
        name: "YM - Legazpi Albay",
        location: "Mayon Loft Co-Living-Dr. Building, Brgy., 42 Rawis, Legazpi",
        contact: "N/A"
    }
    ];
    const franchiseInfo = [
        // MapPin, Phone, ArrowUpRight, Gauge, Megaphone, GraduationCap, 
        // Headset,BanknoteArrowUp,ShieldCheck,PhilippinePeso,UsersRound
        {
            title:"Proven System", 
            sub:"Our cleaning process, pricing model, and SOPs are ready to deploy from day one.", 
            icon:Gauge
        },
        {
            title:"Marketing support", 
            sub:"We handle brand assets, social templates, and launch campaigns for your branch.", 
            icon:Megaphone
        },
        {
            title:"Full Training", 
            sub:"Hands-on training for you and your staff shoe care, customer service, and operations.", 
            icon:GraduationCap
        },
        {
            title:"Ongoing Support", 
            sub:"Dedicated franchise coordinator to help you grow month after month.", 
            icon:Headset
        },
        {
            title:"Growing Demand", 
            sub:"Shoe care is an everyday need — not a seasonal or luxury one. Stable, recurring revenue.", 
            icon:BanknoteArrowUp
        },
        {
            title:"Trusted Brand", 
            sub:"YM is already known and reviewed across multiple cities in Luzon. You inherit that trust.", 
            icon:ShieldCheck
        },
        {
            title:"Low Overhead", 
            sub:"No large space needed. Can run from a small shop, kiosk, or even a home-based setup.", 
            icon:PhilippinePeso
        },
        {
            title:"Community network", 
            sub:"Connect with other YM franchisees for tips, referrals, and shared resources.", 
            icon:UserRound
        },
    ];
    return (
        
        <section id='branch' className='relative flex flex-col'>
            <SectionTitle title="Our Branches"/>
            <div className='flex items-center justify-center xl:px-12 px-4 pb-16'>
                <div className='content-wrapper grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full md:max-w-7xl'>
                    {branches.map((b) => (
                        <div
                            key={b.name}
                            className='col-span-1 border-main bg-white w-full flex flex-col h-full'
                        >
                            <div className='header flex flex-col items-center justify-center py-4 bg-black text-white w-full'>
                                <h2 className='type-display-sm text-center px-2'>{b.name}</h2>
                            </div>
                            <div className='p-4 flex flex-col gap-4 type-body-lg flex-1 min-h-0 justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-2 items-start'>
                                        <span className='shrink-0 mt-1'>
                                            <MapPin/>
                                        </span>
                                        <p>{b.location}</p>
                                    </div>
                                    
                                    <div className='flex gap-2 items-start'>
                                        <span className='shrink-0 mt-1'>
                                            <Phone/>
                                        </span>
                                        <p>{b.contact}</p>
                                    </div>
                                </div>
                                
                                
                                <Button variant='ghost' text='Get Direction' icon={ArrowUpRight} className='mt-auto w-full border pt-2' />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Franchise Part */}
            <div className="franchise-wrapper max-w-7xl w-full type-body-lg px-4 xl:px-0 mx-auto">
                <div className='flex flex-col gap-2 pb-4'>
                    <span className='badge badge-solid w-fit rounded'>Open for Franchise</span>
                    <h2 className='type-display-lg'>Own a YM Branch.<br/>Build something that lasts.</h2>
                    <p className='max-w-[65ch]'>Join a growing network of shoe care professionals across Luzon. We give you the brand, the system, and the support — you bring the drive. No experience needed.</p>
                </div>
                <div className='flex gap-4 pb-4'>
                    {[{title:"Branches", sub:"14+"},{title:"Customer Served", sub:"15k+"},{title:"Starting Investment", sub:"150k"}].map((i)=>(
                        <div key={i.title} className='w-40 border p-2 rounded-md bg-black text-white'>
                            <p className='type-display-lg'>{i.sub}</p>
                            <h2 className='type-body-lg'>{i.title}</h2>
                        </div>
                    ))}
                </div>
                {/* Franchise Details */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t-4'>
                    <div className=''>
                        <h3 className='type-display-sm'>What you get</h3>
                        {franchiseInfo.splice(0,4).map((f)=>{
                            const Icon = f.icon;
                            return(
                                <div key={f.title} className='item flex items-center gap-4 py-2'>
                                    <div className='p-2 h-fit rounded-md bg-black'>
                                        <Icon className='w-10 h-10 text-white'/>
                                    </div>
                                    <div>
                                        <p className='font-bold'>{f.title}</p>
                                        <p>{f.sub}</p>
                                    </div>
                                </div>
                            );
                        })}
                        
                    </div>
                    <div className=''>
                        <h3 className='type-display-sm'>Why YM?</h3>
                        {franchiseInfo.splice(0,4).map((f)=>{
                            const Icon = f.icon;
                            return(
                                <div key={f.title} className='item flex items-center gap-4 py-2'>
                                    <div className='p-2 h-fit rounded-md bg-black'>
                                        <Icon className='w-10 h-10 text-white'/>
                                    </div>
                                    <div>
                                        <p className='font-bold'>{f.title}</p>
                                        <p>{f.sub}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='bg-black text-white flex flex-col md:flex-row md:justify-between px-4 md:py-12 py-8'>
                    <div className='pb-6 md:pb-0'>
                        <h3 className='type-display-md'>Ready to be part of YM?</h3>
                        <p className='text-neutral-400'>Send us an email and we&apos;ll get back to you within 24 hours.</p>
                    </div>
                    <div>
                        <Button variant='invert' size='lg' text='send us an email' icon={Send} href='mailto:ymshoecleaning@gmail.com'/>
                    </div>
                </div>
            </div>
            
        </section>
        
        
    )
}



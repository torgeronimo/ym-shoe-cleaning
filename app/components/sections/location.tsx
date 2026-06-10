import React from 'react'
import SectionTitle from '../ui/section-title'
import Button from '../ui/button'
import {MapPin, Phone, ArrowUpRight} from 'lucide-react'


export default function Location () {

    const Branches = [
        {name:"YM Flagshipstore", contact:"0997 140  6900", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15471.238994127541!2d121.1366709477015!3d14.205915459516808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63fd627d0841%3A0x3b3dc890b32c84f4!2sYM%20Shoe%20Cleaning%20and%20Barber%20Studio%20-%20Calamba%20Bucal!5e0!3m2!1sen!2sph!4v1780489805504!5m2!1sen!2sph"},
        {name:"YM Calamba Bayan", contact:"0997 273  8272", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61881.45184006024!2d121.1493728663175!3d14.218725515195601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63bc2fa31cc7%3A0xa1a9757255ab157a!2sYM%20Shoe%20Cleaning%20-%20Calamba%20City%20Bayan!5e0!3m2!1sen!2sph!4v1780539817543!5m2!1sen!2sph"},
        {name:"YM Sto. Tomas", contact:"0997 140  6900", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.219205627472!2d121.13459318536971!3d14.123202451006039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd65e649f92ee7%3A0xa26e25251a38a25d!2sYM%20Shoe%20Cleaning%20-%20Sto.%20Tomas%20City!5e0!3m2!1sen!2sph!4v1780539897258!5m2!1sen!2sph"},
        {name:"YM San Pablo", contact:"0997 140  6900", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.0409220231745!2d121.31340417593842!3d14.074760886351667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5dd9a58c42bb%3A0x4dc7d442e1296baa!2sYM%20Shoe%20Cleaning%20-%20San%20Pablo%20City!5e0!3m2!1sen!2sph!4v1780539937796!5m2!1sen!2sph"},
    ]

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
    return (
        
        <section className='relative'>
            <div className="absolute inset-0 -z-999 flex items-center justify-center pointer-events-none">
                <h2 className="text-[12rem] md:text-[45rem] font-black  uppercase text-gray-500/50 select-none">
                    YM
                </h2>
            </div>
            <SectionTitle title="Our Branches"/>
            <div className='flex items-center justify-center xl:px-12 px-4'>
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
            
        </section>
        
        
    )
}



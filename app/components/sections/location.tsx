import React from 'react'
import SectionTitle from '../ui/section-title'

export default function Location () {

    const Branches = [
        {name:"YM Flagshipstore", contact:"0997 140  6900", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15471.238994127541!2d121.1366709477015!3d14.205915459516808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63fd627d0841%3A0x3b3dc890b32c84f4!2sYM%20Shoe%20Cleaning%20and%20Barber%20Studio%20-%20Calamba%20Bucal!5e0!3m2!1sen!2sph!4v1780489805504!5m2!1sen!2sph"},
        {name:"YM Calamba Bayan", contact:"0997 273  8272", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61881.45184006024!2d121.1493728663175!3d14.218725515195601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63bc2fa31cc7%3A0xa1a9757255ab157a!2sYM%20Shoe%20Cleaning%20-%20Calamba%20City%20Bayan!5e0!3m2!1sen!2sph!4v1780539817543!5m2!1sen!2sph"},
        {name:"YM Sto. Tomas", contact:"0997 140  6900", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.219205627472!2d121.13459318536971!3d14.123202451006039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd65e649f92ee7%3A0xa26e25251a38a25d!2sYM%20Shoe%20Cleaning%20-%20Sto.%20Tomas%20City!5e0!3m2!1sen!2sph!4v1780539897258!5m2!1sen!2sph"},
        {name:"YM San Pablo", contact:"0997 140  6900", src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.0409220231745!2d121.31340417593842!3d14.074760886351667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5dd9a58c42bb%3A0x4dc7d442e1296baa!2sYM%20Shoe%20Cleaning%20-%20San%20Pablo%20City!5e0!3m2!1sen!2sph!4v1780539937796!5m2!1sen!2sph"},
    ]
    return (
        
        <section className='relative'>
            <div className="absolute inset-0 -z-999 flex items-center justify-center pointer-events-none">
                <h2 className="text-[12rem] md:text-[45rem] font-black  uppercase text-gray-500/50 select-none">
                    YM
                </h2>
            </div>
            <SectionTitle title="Our Location"/>
            <div className='flex items-center justify-center px-12'>
                <div className='content-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full'>
                    {Branches.map((b)=>(
                        <div key={b.name} className=' flex flex-col items-center justify-center w-full shadow-md col-span-1 border-main'>
                            <iframe
                            src={b.src}
                            loading="lazy"
                            className='border-b-4 w-full'
                            />
                            <div className='flex justify-center bg-(--color-cream) gap-6 md:w-full py-4'><p className='type-body-lg'>{b.name}</p>-<p className='type-body-lg'>{b.contact}</p></div>
                            
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
        
        
    )
}



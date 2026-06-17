import React from 'react'
import SectionTitle from '../ui/section-title'
import Image from "next/image"


const Product = () => {

    const productList = [
        {
            name:"Balsam",
            desc:"Made with Coconut Oil, Beeswax, Kaolin Clay, Charcoal Powder, Rose Water.",
            src:"/YM/product/balm2.jpg",
            alt:"Balsam"
        },
        {
            name:"YM Cleaning Kit",
            desc:"YM Cleaning Spray, Wipe Cloth, Brush, YM socks.",
            src:"/YM/product/p1.jpg",
            alt:"YM Cleaning Kit"
        },
        
    ]

    return (
        <section>
            <SectionTitle title='Our Product' />
            <div className='max-w-7xl mx-auto gap-4 flex flex-col md:flex-wrap md:flex-row items-center justify-center'>
                {productList.map((product)=>(
                    <div key={product.name} className='border-4'>
                        <div className="flex items-center justify-center relative h-[300px] w-[450px]">
                            <span className='absolute top-2 left-2 badge badge-solid rounded z-10'>Available in Store/Add-on</span>
                            <Image fill className='object-cover' alt={product.alt} src={product.src}/>
                        </div>
                        
                        <div className='type-body-base px-2 py-4 bg-black text-white'>
                            <p className='type-display-sm'>{product.name}</p>
                            <p className='text-neutral-400'>{product.desc}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </section>
    )
}

export default Product

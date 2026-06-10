import SectionTitle from "../ui/section-title"
import Image from 'next/image';

const Feed = () => {
    
    return (
        
        <section>
            <SectionTitle title="Our feed"/>
            <div className="flex items-center justify-center px-4 md:px-6 xl:px-12">
                <div className="wrapper max-w-7xl grid h-screen w-full grid-cols-4 grid-rows-4 gap-6">
                    <div id="1" className="col-span-1 row-span-2 relative border-main"><Image src="/YM/paint.jpg" alt="brand logo" fill className="object-cover" /></div>
                    <div id="2" className="flex h-full w-full items-center justify-center relative border-main bg-red-400 row-span-1"><Image src="/YM/ym5.jpg" alt="grid image 1" fill className="object-cover"/></div>
                    <div id="3" className="flex h-full w-full items-center justify-center relative border-main bg-green-400 row-span-1"><Image src="/YM/ym3.jpg" alt="grid image 2" fill className="object-cover"/></div>
                    <div id="4" className="flex h-full w-full items-center justify-center relative border-main bg-yellow-400 row-span-2"><Image src="/YM/ym10.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="5" className="flex h-full w-full items-center justify-center relative border-main bg-orange-400 row-span-2 col-span-2"><Image src="/YM/ym9.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="6" className="flex h-full w-full items-center justify-center relative border-main bg-gray-400 row-span-2"><Image src="/YM/logo.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="7" className="flex h-full w-full items-center justify-center relative border-main"><Image src="/YM/brand2.jpg" alt="brand logo" fill className="object-cover" /></div>
                    <div id="8" className="flex h-full w-full items-center justify-center relative border-main bg-gray-400"><Image src="/YM/ym6.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="9" className="flex h-full w-full items-center justify-center relative border-main bg-black col-span-2 text-white type-display-md hover:bg-white hover:text-black duration-200 transition-all hover:shadow-md">
                        RESTORED, NOT REPLACED.
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}

export default Feed

import SectionTitle from "../ui/section-title"
import Image from 'next/image';




const Feed = () => {
    
    return (
        
        <section id="feed">
            <SectionTitle title="Our feed"/>
            <div className="flex items-center justify-center px-4 lg:px-6 xl:px-12">
                <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-6 lg:grid-cols-4 lg:grid-rows-4 gap-6 ">
                    <div id="1" className="flex items-center justify-center relative border-main lg:col-span-1 lg:row-span-2 md:h-full h-50"><Image src="/YM/paint.jpg" alt="brand logo" fill className="object-cover" /></div>
                    <div id="3" className="flex items-center justify-center relative border-main lg:row-span-1 md:h-full h-50"><Image src="/YM/ym5.jpg" alt="grid image 2" fill className="object-cover"/></div>
                    <div id="2" className="flex items-center justify-center relative border-main lg:row-span-1 md:h-full h-50"><Image src="/YM/ym3.jpg" alt="grid image 1" fill className="object-cover"/></div>
                    <div id="4" className="flex items-center justify-center relative border-main lg:row-span-2 md:h-full h-50"><Image src="/YM/ym10.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="5" className="flex items-center justify-center relative border-main lg:row-span-2 lg:col-span-2 md:h-full h-50"><Image src="/YM/ym9.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="6" className="flex items-center justify-center relative border-main lg:row-span-2 md:row-span-2 md:h-full h-50">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full md:h-full h-50 object-cover"
                        >
                            <source src="/cv2.webm" />
                        </video>
                    </div>
                    <div id="7" className="flex items-center justify-center relative border-main lg:row-span-1 md:md:h-full h-50 h-50 "><Image src="/YM/ym4.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="8" className="flex items-center justify-center relative border-main lg:row-span-1 md:h-full h-50 "><Image src="/YM/c2.jpg" alt="grid image 5" fill className="object-cover"/></div>
                    <div id="9" className="flex gap-4 md:flex-col items-center justify-center relative border-main lg:col-span-2 lg:row-span-1 md:col-span-1 md:h-full h-50 bg-black col-span-2 text-white type-display-lg hover:bg-white hover:text-black duration-200 transition-all hover:shadow-lg">
                        <span>ARAW ARAW KALIDAD</span>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}

export default Feed

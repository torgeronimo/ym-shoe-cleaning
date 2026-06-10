import Image from 'next/image'
const Review = () => {
    return (
        <section className='border-main gap-6' id="review">

            
            <div className='grid grid-cols-2 w-full gap-4 items-stretch border'>
                <div className="col-span-1 flex flex-col gap-4 px-12 py-8">
                    <h1 className="text-7xl font-display">Review Section</h1>
                    <h1 className="text-7xl font-display">service Section</h1>
                    <h1 className="text-7xl font-display">service Section</h1>
                    <h1 className="text-7xl font-display">service Section</h1>
                    <h1 className="text-7xl font-display">Bottom Section</h1>

                </div>
                <div className="col-span-1 flex justify-center items-center">
                <Image
                    src="https://images.unsplash.com/photo-1707109322463-f8e22fcaef4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt="Hero"
                />
                </div>
            
            </div>  
        </section>
    )
}

export default Review

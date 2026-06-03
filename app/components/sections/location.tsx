import React from 'react'
import SectionTitle from '../ui/section-title'

export default function Location () {

    const Branches = [
        {name:"YM Flagshipstore", contact:"0997 140  6900"},
        {name:"YM Calamba Bayan", contact:"0997 273  8272"},
        {name:"YM Sto. Tomas", contact:"0997 140  6900"},
        {name:"YM San Pablo", contact:"0997 140  6900"},
    ]
    return (
        <>
        <SectionTitle title="Our Location"/>
        <div className='content-wrapper'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15471.238994127541!2d121.1366709477015!3d14.205915459516808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63fd627d0841%3A0x3b3dc890b32c84f4!2sYM%20Shoe%20Cleaning%20and%20Barber%20Studio%20-%20Calamba%20Bucal!5e0!3m2!1sen!2sph!4v1780489805504!5m2!1sen!2sph" 
            width="600" 
            height="450" 
            loading="lazy"
            className='border-main h-[240px]'
            />
        </div>
        
        </>
        
    )
}



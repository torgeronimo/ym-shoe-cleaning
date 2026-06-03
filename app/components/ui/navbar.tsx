import React from 'react'
import Button from './button'

const Navbar = () => {
    const navLinks=[
        {name:"service", href:"/"},
        {name:"process", href:"#process"},
        {name:"review", href:"#review"},
        
    ]
    return (
        <nav className='sticky top-0 left-0 w-full h-20 bg-white border-b-4 border-black z-50 flex justfiy-center items-center px-6'>
            <div className='flex items-center w-full justify-between'>
                <a className='type-display-md' href="#">YM.</a>
                <div className='flex gap-4 items-center'>
                    <ul className='flex gap-4'>
                        {navLinks.map((n)=>(
                            <li key={n.name}>
                                <a className='type-label' href={n.href}>{n.name}</a>
                            </li>
                        ))}
                    </ul>
                    <Button text="Book Now" variant="primary" size="sm"></Button>
                </div>
                
                
            </div>
            
        </nav>
    )
}

export default Navbar

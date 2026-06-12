import SectionTitle from "../ui/section-title"
import ContactForm from "../ui/form"
import {Mail, Clock8} from 'lucide-react'
import Logo from '../ui/logo'

const Contact = () => {
    return (
        <section id="contact">
            <SectionTitle title="Contact"/>
            <div className="flex items-center justify-center">
                <div className="xl:min-w-7xl md:w-fit  w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
                        <div className="col-span-1 px-6 py-6 bg-black text-gray-500 type-body-base">
                            <div className="header flex flex-col pb-4">
                                <h2 className="type-body-lg ">GET IN TOUCH</h2>
                                <h3 className="type-display-md text-white">We will handle the rest</h3>
                                <p className="w-70">Book online or reach us directly — same-day response guaranteed.</p>
                            </div>
                            <div className="contact border-y-2 py-6">
                                <div className="flex items-center gap-4">
                                    <Mail/>
                                    <div>
                                        <p>Email us</p>
                                        <p className="text-white">ymshoecleaning@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Clock8/>
                                    <div>
                                        <p>Operating hours</p>
                                        <p className="text-white">Mon - Sat. 8am  - 6pm</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="howitworks flex flex-col gap-6 py-6">
                                <h2 className="type-body-lg">HOW IT WORKS</h2>
                                <div className="steps flex items-center gap-4 border-b-2 pb-4">
                                    <span className="type-label text-white">01</span>
                                    <div>
                                        <p className="text-white">Fill out the form</p>
                                        <p>Choose your service type and preferred schedule.</p>
                                    </div>
                                </div>
                                <div className="steps flex items-center gap-4 border-b-2 pb-4">
                                    <span className="type-label text-white">02</span>
                                    <div>
                                        <p className="text-white">We confirm & pick up</p>
                                        <p>Our team reaches out to arrange drop-off or pickup.</p>
                                    </div>
                                    
                                </div>
                                <div className="steps flex items-center gap-4 border-b-2 pb-4">
                                    <span className="type-label text-white">03</span>
                                    <div>
                                        <p className="text-white">Clean & return</p>
                                        <p>Your items are cleaned and returned fresh, on time.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Logo height={150} width={150} fill="rgb(255,255,255)" viewbox="0 0 1024 1024" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default Contact

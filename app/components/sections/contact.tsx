import SectionTitle from "../ui/section-title"
import ContactForm from "../ui/form"

const Contact = () => {
    return (
        <section id="contact">
            <SectionTitle title="Contact"/>
            <div className="flex items-center justify-center w-full border border-red-400">
                <div className="min-w-7xl border">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <h1 className="type-display-hero">
                                <span className="type-outline">Avoid risk</span><br/>
                                save time<br/>
                                <span className="type-outline">drop now</span><br/>
                                pay later
                            </h1>
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

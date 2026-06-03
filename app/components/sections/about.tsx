import Button from '../ui/button'
const About = () => {
    return (
        <section className='h-screen flex flex-col justify-center items-center gap-6'>
            <h1 className="text-7xl font-display">About Section</h1>
            <div className='flex gap-4 mt-6'>
                <Button text="Black" variant="primary" size="sm"></Button>
                <Button text="cream" variant="cream" size="md"></Button>
                <Button text="invert" variant="invert" size="lg"></Button>
                <Button text="ghost" variant="ghost" size="xl"></Button>
            </div>
            <h2 className="type-display-lg font-body">Hello</h2>
        </section>
        
    )
    }

export default About

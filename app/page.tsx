import Navbar from "./components/ui/nav";
import Hero from "./components/sections/hero"
import Footer from "./components/sections/footer"
import Feed from "./components/sections/feed"
import Service from "./components/sections/service";
import Contact from "./components/sections/contact"
import FAQ from "./components/sections/faq"
import Location from "./components/sections/location"
import Product from "./components/sections/product"

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className="">
      <Hero></Hero>
      <Service></Service>
      <Feed></Feed>
      <Product/>
      <Location></Location>
      <Contact></Contact>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
    
    
    </>
    
  );
}

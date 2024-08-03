import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="bg-green-100 min-h-screen">
      <div className="glassy-background">
        <Navbar />
        <Home />
        <div id="services" className="py-8">
          <Services />
        </div>
        <div id="technology" className="py-8">
          <Technology />
        </div>
        <div id="about us" className="py-8">
          <About />
        </div>
        <div id="contact" className="py-8">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

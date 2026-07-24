import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileContactBar from "@/components/MobileContactBar";

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <MobileContactBar />
    </>
  );
}

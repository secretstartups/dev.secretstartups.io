
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import OpenDev from "@/components/OpenDev";
import Toolsets from "@/components/Toolsets";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-startup-dark text-white">
      <Navbar />
      <HeroSection />
      <Solutions />
      <OpenDev />
      <Toolsets />
      <Pricing />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
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
      <Products />
      <Toolsets />
      <Pricing />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

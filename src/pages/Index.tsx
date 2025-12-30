import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MarketsSection from "@/components/MarketsSection";
import ApproachSection from "@/components/ApproachSection";
import ClientsSection from "@/components/ClientsSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MarketsSection />
        <ApproachSection />
        <ClientsSection />
        <WhyPartnerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

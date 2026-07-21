import { useState, useEffect } from "react";
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

const getKey = () => window.location.hash.replace("#", "");

// Each nav item maps to exactly one section. Only the active section is
// rendered, so you only ever see one section at a time (no scrolling into
// the next). The logo / empty hash shows the hero as the home view.
const sections: Record<string, JSX.Element> = {
  about: <AboutSection />,
  services: <ServicesSection />,
  markets: <MarketsSection />,
  approach: <ApproachSection />,
  clients: <ClientsSection />,
  "why-partner": <WhyPartnerSection />,
  contact: <ContactSection />,
};

const Index = () => {
  const [key, setKey] = useState(getKey);

  useEffect(() => {
    const onHashChange = () => {
      setKey(getKey());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activeSection = sections[key] ?? <HeroSection />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{activeSection}</main>
      <Footer />
    </div>
  );
};

export default Index;

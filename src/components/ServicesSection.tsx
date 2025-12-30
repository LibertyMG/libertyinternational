import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Building2, TrendingUp, Handshake, FileText, Leaf } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Global Expansion & Cross-Border Advisory",
    description: "Strategic market entry, jurisdiction selection and cross-border structuring across our three core hubs.",
  },
  {
    icon: Building2,
    title: "Fund & Family Office Solutions",
    description: "Institutional-grade platforms, governance frameworks and ongoing compliance coordination.",
  },
  {
    icon: TrendingUp,
    title: "Capital Raising & Investor Relations",
    description: "Targeted investor access, narrative development and roadshow coordination.",
  },
  {
    icon: Handshake,
    title: "Transactions & Strategic Partnerships",
    description: "M&A advisory, joint ventures, deal origination and commercial due diligence.",
  },
  {
    icon: FileText,
    title: "Corporate & Operational Setup",
    description: "Entity incorporation, banking introductions and service provider coordination.",
  },
  {
    icon: Leaf,
    title: "Thematic, Sharia & ESG Advisory",
    description: "Values-aligned strategies across infrastructure, impact and Sharia-compliant structures.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-label text-muted-foreground mb-4 block">Our Expertise</span>
          <h2 className="heading-section text-foreground">Our Integrated Service Platform</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-service group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-4">{service.title}</h3>
              <p className="text-body text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

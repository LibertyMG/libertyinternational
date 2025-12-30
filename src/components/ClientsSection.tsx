import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    type: "Fund Managers",
    description: "Alternative asset managers, private equity funds, venture capital firms and hedge funds seeking to establish or expand their presence across Singapore, Australia and the UAE.",
    services: [
      "New fund launches and platform builds",
      "Capital raising and investor access",
      "Regulatory coordination and compliance",
      "Cross-border structuring and expansion",
    ],
  },
  {
    type: "Family Offices",
    description: "Single and multi-family offices looking to establish, scale or restructure their operations across our three core hubs with institutional rigour and efficiency.",
    services: [
      "Operating model and governance design",
      "Succession and next-generation planning",
      "Investment strategy and co-investment access",
      "Service provider coordination",
    ],
  },
  {
    type: "Private Enterprises",
    description: "Owner-managed businesses, corporate treasury teams and holding companies pursuing strategic expansion, M&A or capital allocation across our focus markets.",
    services: [
      "Market entry strategy and execution",
      "Strategic partnerships and joint ventures",
      "Transaction advisory and deal origination",
      "Entity setup and operational coordination",
    ],
  },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-padding bg-background" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-label text-muted-foreground mb-4 block">Our Clients</span>
          <h2 className="heading-section text-foreground">Who We Serve</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.type}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full p-8 bg-card rounded-xl border border-border/30 flex flex-col"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4">{client.type}</h3>
              <p className="text-body text-sm text-muted-foreground mb-6">{client.description}</p>
              <div className="mt-auto">
                <div className="divider-line mb-6" />
                <ul className="space-y-3">
                  {client.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const markets = [
  {
    name: "Singapore",
    description: "Asia's pre-eminent financial centre with a transparent legal system, sophisticated wealth management infrastructure and preferential access to ASEAN growth markets.",
  },
  {
    name: "Australia",
    description: "Stable, transparent jurisdiction with deep capital markets, strong rule of law, a large superannuation system and growing private capital and family office sector.",
  },
  {
    name: "United Arab Emirates",
    description: "Strategic bridge between East and West with world-class free zones, competitive tax regimes, growing family office ecosystem and strong connectivity to Middle East and African capital.",
  },
];

const MarketsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="markets" className="section-padding bg-background" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-label text-muted-foreground mb-4 block">Our Markets</span>
          <h2 className="heading-section text-foreground mb-6">Connecting Three Global Hubs</h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Together, these three hubs offer complementary regulatory environments, time zones, investor bases and sectoral strengths. Liberty International helps you navigate and leverage this interconnected landscape with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="h-full p-8 md:p-10 bg-card rounded-xl border border-border/30 hover:border-border/50 transition-all duration-500">
                <div className="text-label text-muted-foreground mb-2">0{index + 1}</div>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6">{market.name}</h3>
                <p className="text-body text-sm text-muted-foreground">{market.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;

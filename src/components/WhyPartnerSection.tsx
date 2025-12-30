import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "Integrated Tri-Market Expertise",
    description: "Leverage our deep understanding and coordinated strategies across Singapore, Australia, and the UAE for seamless cross-border success.",
  },
  {
    title: "Deep Local Networks",
    description: "Benefit from our extensive, trusted relationships with regulators, service providers, and investors in each key jurisdiction.",
  },
  {
    title: "End-to-End Support",
    description: "Receive comprehensive guidance from initial strategic planning through to meticulous execution and ongoing operational management.",
  },
  {
    title: "Regulatory & Tax-Aware Structuring",
    description: "Navigate complex regulatory landscapes and optimize tax efficiency with structures designed for bankability and long-term sustainability.",
  },
  {
    title: "Access to Aligned Capital",
    description: "Connect with a curated network of investors and capital sources whose objectives align perfectly with your investment strategies.",
  },
  {
    title: "Institutional-Grade Operations",
    description: "Establish robust, scalable operational frameworks built on institutional best practices for governance, compliance, and efficiency.",
  },
];

const WhyPartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-label text-muted-foreground mb-4 block">Our Value</span>
          <h2 className="heading-section text-foreground">Why Partner with Liberty International?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-8 border border-border/30 rounded-xl bg-background hover:bg-card transition-colors duration-500"
            >
              <h3 className="font-heading text-lg text-foreground mb-3">{reason.title}</h3>
              <p className="text-body text-sm text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;

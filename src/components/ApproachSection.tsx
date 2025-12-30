import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const approaches = [
  {
    title: "Cross-Border by Design",
    description: "We think across jurisdictions from day one, ensuring your structures and strategies are coordinated, efficient and scalable across all three hubs.",
  },
  {
    title: "Institutionally Rigorous",
    description: "We apply institutional standards to governance, compliance, investor relations and operational setup, regardless of your current scale.",
  },
  {
    title: "Network-Led",
    description: "Our value is built on deep, trusted relationships with regulators, service providers, investors and operating partners across Singapore, Australia and the UAE.",
  },
  {
    title: "Pragmatic & Execution-Focused",
    description: "We prioritise clarity, speed and commercial outcomes. Our advice is practical, actionable and tailored to your specific circumstances and objectives.",
  },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-label text-muted-foreground mb-4 block">Our Philosophy</span>
          <h2 className="heading-section text-foreground">Our Approach</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground font-heading text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">{approach.title}</h3>
                <p className="text-body text-sm text-muted-foreground">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-label text-muted-foreground mb-4 block">What We Do</span>
          <h2 className="heading-section text-foreground mb-8">
            Liberty International is a cross-border advisory firm focused exclusively on Singapore, Australia and the UAE.
          </h2>
        </motion.div>

        <div className="divider-line my-12" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20"
        >
          <div>
            <p className="text-body text-muted-foreground">
              We help sophisticated fund managers, family offices and private enterprises structure, launch and scale their global footprint across these three strategic hubs.
            </p>
          </div>
          <div>
            <p className="text-body text-muted-foreground">
              Our work encompasses fund set-up and ongoing governance, market entry strategy, capital raising, real estate advisory, residency planning and lifestyle solutions. We connect you with the right structures, partners and opportunities, allowing you to expand with clarity, control and confidence.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 bg-card rounded-xl border border-border/30"
        >
          <p className="text-body text-foreground/90 text-center max-w-3xl mx-auto">
            Our team combines deep local knowledge in each jurisdiction with a genuinely cross-border perspective, ensuring your expansion is coordinated, efficient and aligned with your broader strategic objectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

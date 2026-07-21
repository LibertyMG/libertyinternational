import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import singaporeImage from "@/assets/singapore-skyline.jpg";
import australiaImage from "@/assets/australia-sydney.jpg";
import dubaiImage from "@/assets/dubai-skyline.jpg";

const markets = [
  {
    name: "Singapore",
    image: singaporeImage,
    description: "Asia's pre-eminent financial centre with a transparent legal system, sophisticated wealth management infrastructure and preferential access to ASEAN growth markets.",
  },
  {
    name: "Australia",
    image: australiaImage,
    description: "Stable, transparent jurisdiction with deep capital markets, strong rule of law, a large superannuation system and growing private capital and family office sector.",
  },
  {
    name: "United Arab Emirates",
    image: dubaiImage,
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
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={market.image} 
                  alt={market.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              
              {/* Index label — pinned top-left so it always shows regardless of title length */}
              <div className="absolute top-5 left-6 md:top-6 md:left-8 z-10 text-label text-white/80 [text-shadow:_0_1px_6px_rgb(0_0_0_/_70%)]">0{index + 1}</div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{market.name}</h3>
                {/* Visible by default on touch devices; reveal on hover on desktop */}
                <p className="text-body text-sm text-muted-foreground transition-all duration-500 opacity-100 md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-48 md:group-hover:opacity-100">{market.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;

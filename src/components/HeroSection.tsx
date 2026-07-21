import { motion } from "framer-motion";
import logo from "@/assets/liberty-logo.png";
import heroImage from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden snap-start">
      {/* Background Image (decorative — sits behind an 80% overlay) */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container-content text-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.img
            src={logo}
            alt="Liberty International"
            className="h-24 md:h-32 lg:h-40 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-body text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            Cross-border advisory for fund managers, family offices and private enterprises
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-body text-foreground/80 max-w-2xl mx-auto mb-12"
          >
            Expanding across Singapore, Australia and the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-primary text-primary-foreground text-label rounded-sm hover:bg-primary/90 transition-all duration-300"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border text-foreground text-label rounded-sm hover:bg-muted transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to the section so it sits at the true bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

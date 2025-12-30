import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/liberty-logo.png";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-label text-muted-foreground mb-4 block">Get Started</span>
          <h2 className="heading-section text-foreground mb-8">Next Steps</h2>
          
          <p className="text-body text-muted-foreground mb-6">
            If you are a fund manager, family office or private enterprise considering expansion across Singapore, Australia and the UAE, we invite you to begin a conversation.
          </p>
          
          <p className="text-body text-foreground/80 mb-12">
            Liberty International provides the clarity, networks and execution support required to scale your global footprint with confidence. Our team is ready to help you navigate the opportunities and complexities of cross-border growth across these three strategic hubs.
          </p>

          <div className="divider-line my-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="font-heading text-2xl text-foreground mb-6">Mel Ghadban</p>
              
              <div className="flex flex-col items-center gap-4">
                <a
                  href="mailto:mel@libertyinternational.com.au"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-body">mel@libertyinternational.com.au</span>
                </a>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                  <a
                    href="tel:+6588798006"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-body">+65 8879 8006</span>
                    <span className="text-label text-xs">(Singapore)</span>
                  </a>
                  
                  <a
                    href="tel:+61414624103"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-body">+61 414 624 103</span>
                    <span className="text-label text-xs">(Australia)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

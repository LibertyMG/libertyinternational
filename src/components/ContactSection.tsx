import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

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
          className="text-center mb-16"
        >
          <span className="text-label text-muted-foreground mb-4 block">Get Started</span>
          <h2 className="heading-section text-foreground mb-6">Next Steps</h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            If you are a fund manager, family office or private enterprise considering expansion across Singapore, Australia and the UAE, we invite you to begin a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-xl p-8 md:p-10 border border-border/30"
          >
            <h3 className="font-heading text-2xl text-foreground mb-2">Send us a message</h3>
            <p className="text-body text-sm text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you promptly.
            </p>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10">
              <p className="text-body text-foreground/80 mb-8">
                Liberty International provides the clarity, networks and execution support required to scale your global footprint with confidence. Our team is ready to help you navigate the opportunities and complexities of cross-border growth across these three strategic hubs.
              </p>
            </div>

            <div className="divider-line my-8" />

            <div className="space-y-8">
              <div>
                <p className="font-heading text-2xl text-foreground mb-6">Mel Ghadban</p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:mel@libertyinternational.com.au"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-body">mel@libertyinternational.com.au</span>
                  </a>
                  
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

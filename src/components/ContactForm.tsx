import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ──────────────────────────────────────────────────────────────────────────────
// Web3Forms sends every submission straight to your inbox — no server needed.
// Submissions arrive at mel@libertyinternational.com.au (the address this key
// is registered to). This key is designed to be public, so it's safe in code.
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "edf9924d-3be0-4c32-94e9-79c0e32d9afe";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  // Honeypot: real users leave this empty; bots tend to fill every field.
  const honeypotRef = useRef<HTMLInputElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Silently drop obvious bot submissions (honeypot was filled)
    if (honeypotRef.current?.value) {
      setIsSubmitted(true);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New website enquiry from ${data.name}`,
          from_name: "Liberty International Website",
          name: data.name,
          email: data.email,
          company: data.company || "Not provided",
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly at mel@libertyinternational.com.au",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-2xl text-foreground mb-2">Thank You</h3>
        <p className="text-body text-muted-foreground">
          Your message has been received. We'll be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot anti-spam field — hidden from real users */}
        <input
          ref={honeypotRef}
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-label text-muted-foreground">Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    autoComplete="name"
                    className="bg-background border-border focus:border-primary h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-label text-muted-foreground">Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="bg-background border-border focus:border-primary h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-label text-muted-foreground">Company</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your company name"
                  autoComplete="organization"
                  className="bg-background border-border focus:border-primary h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-label text-muted-foreground">Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your expansion plans, structuring requirements or how we can assist..."
                  className="bg-background border-border focus:border-primary min-h-[150px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-[0.2em] font-medium"
        >
          {form.formState.isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
              />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

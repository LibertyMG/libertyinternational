import { useState } from "react";
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

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

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
    // For now, we'll simulate a submission
    // In production, this would call a Supabase edge function
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
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
        description: "Please try again or contact us directly via email.",
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
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-label"
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

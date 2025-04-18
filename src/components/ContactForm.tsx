
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Phone, User } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0F172A] to-[#0F1629]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
              <span className="text-startup-purple mr-2">✉️</span>
              <span>Get in Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Accelerate</span> Your Product Development?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn how SecretStartups.io can help your company build and 
              launch products faster than ever before.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-startup-purple/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-startup-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-gray-300">info@secretstartups.io</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-startup-blue/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-startup-blue" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-gray-300">+1 (888) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-startup-accent/20 flex items-center justify-center mr-4">
                  <MessageSquare className="h-5 w-5 text-startup-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Live Chat</h3>
                  <p className="text-gray-300">Available 9AM-6PM ET, Monday-Friday</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6 md:p-8 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                  </div>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-startup-purple"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-startup-purple"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-gray-400 mr-2" />
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                  </div>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-startup-purple"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-startup-purple min-h-[120px]"
                    placeholder="Tell us about your project and needs..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full btn-gradient"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

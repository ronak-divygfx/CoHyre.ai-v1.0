import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, MessageSquare, Clock, Users } from "lucide-react";

export function ContactPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: ""
  });

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "General Support",
      description: "Questions about our AI agents and platform features",
      contact: "support@cohyre.ai",
      response: "< 24 hours"
    },
    {
      icon: Users,
      title: "Sales & Demos",
      description: "Schedule a demo or discuss enterprise solutions",
      contact: "sales@cohyre.ai", 
      response: "< 4 hours"
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Integration help and technical assistance",
      contact: "+1 (555) 123-4567",
      response: "< 2 hours"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 relative min-h-screen">
      {/* Background - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background/80" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 bg-card/60 backdrop-blur-xl">
            Get in Touch
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Contact Our Team
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your hiring with autonomous AI agents? 
            Our team is here to help you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              How can we help?
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.title}
                    className="p-6 bg-card/40 backdrop-blur-xl rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-500"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {option.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {option.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-medium">
                            {option.contact}
                          </span>
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <Clock className="w-3 h-3" />
                            {option.response}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Office Info */}
            <div className="p-6 bg-card/40 backdrop-blur-xl rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Our Office
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">123 AI Way, San Francisco, CA 94105</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">hello@cohyre.ai</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 bg-card/40 backdrop-blur-xl rounded-2xl border border-border shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="bg-input-background backdrop-blur-sm border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Work Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="you@company.com"
                      className="bg-input-background backdrop-blur-sm border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company name"
                    className="bg-input-background backdrop-blur-sm border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type
                  </label>
                  <Select onValueChange={(value) => setFormData({...formData, inquiry: value})}>
                    <SelectTrigger className="bg-input-background backdrop-blur-sm border-border">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="integration">Integration Support</SelectItem>
                      <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your hiring challenges and how we can help..."
                    rows={4}
                    className="bg-input-background backdrop-blur-sm border-border"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
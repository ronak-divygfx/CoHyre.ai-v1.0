import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Clock, DollarSign, Users, Star, ArrowRight } from "lucide-react";

export function CareersPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const openRoles = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$180K - $250K",
      description: "Build autonomous AI agents that revolutionize hiring.",
      requirements: ["5+ years ML/AI experience", "Python, PyTorch/TensorFlow", "PhD preferred"]
    },
    {
      title: "Product Manager - AI Platform",
      department: "Product",
      location: "Remote (US)",
      type: "Full-time", 
      salary: "$160K - $220K",
      description: "Lead product strategy for our 11-agent AI platform.",
      requirements: ["B2B SaaS experience", "AI/ML product background", "Data-driven approach"]
    },
    {
      title: "Enterprise Sales Director",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140K + Commission",
      description: "Scale enterprise revenue with Fortune 500 clients.",
      requirements: ["Enterprise sales experience", "HR/Talent tech background", "Proven track record"]
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130K - $180K",
      description: "Design intuitive experiences for AI-powered hiring.",
      requirements: ["B2B SaaS design experience", "Figma proficiency", "User research skills"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$150K - $200K",
      description: "Scale infrastructure for autonomous AI systems.",
      requirements: ["Kubernetes, Docker", "AWS/GCP experience", "Monitoring & observability"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$90K - $130K",
      description: "Ensure customer success with AI hiring transformation.",
      requirements: ["CS experience", "HR/recruiting knowledge", "Technical aptitude"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Top-tier salary + equity in a fast-growing AI company"
    },
    {
      icon: Users,
      title: "World-Class Team",
      description: "Work with industry veterans from Google, OpenAI, LinkedIn"
    },
    {
      icon: Star,
      title: "Cutting-Edge Technology",
      description: "Build the future of autonomous hiring with latest AI/ML"
    },
    {
      icon: MapPin,
      title: "Flexible Location",
      description: "Remote-first with hubs in SF, NYC, and Austin"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/80" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-xl">
            Join Our Mission
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Build the Future of
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Autonomous Hiring
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join a world-class team of AI pioneers, product visionaries, and industry experts 
            as we revolutionize how companies find and hire top talent.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group relative p-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-500"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Open Roles */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Open Positions
          </h2>
          
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                className="group relative p-8 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-500"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {role.title}
                      </h3>
                      <Badge variant="outline" className="bg-blue-50/60">
                        {role.department}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-600 mb-4">
                      {role.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {role.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {role.salary}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {role.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="px-3 py-1 bg-slate-100/60 text-slate-600 text-sm rounded-full"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Button 
                      className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block p-8 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Don't see the right role?
            </h3>
            <p className="text-slate-600 mb-6">
              We're always looking for exceptional talent. Send us your resume and let's chat!
            </p>
            <Button 
              variant="outline" 
              className="bg-white/60 backdrop-blur-xl"
            >
              Send Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
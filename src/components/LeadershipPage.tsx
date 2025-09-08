import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function LeadershipPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const leaders = [
    {
      name: "Sarah Chen",
      title: "Co-Founder & CEO",
      bio: "Former VP of Talent at Google, led hiring for 10,000+ engineers. PhD in Computer Science from Stanford.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@cohyre.ai"
    },
    {
      name: "David Rodriguez",
      title: "Co-Founder & CTO", 
      bio: "Former Staff Engineer at OpenAI, architect of GPT hiring systems. MS in AI from MIT.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#", 
      email: "david@cohyre.ai"
    },
    {
      name: "Dr. Priya Patel",
      title: "Chief AI Officer",
      bio: "Former Research Director at DeepMind, published 50+ papers on autonomous systems. PhD from Oxford.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "priya@cohyre.ai"
    },
    {
      name: "Marcus Thompson",
      title: "VP of Sales",
      bio: "Former Enterprise Sales Director at Salesforce, scaled revenue from $10M to $500M.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "marcus@cohyre.ai"
    },
    {
      name: "Elena Kowalski", 
      title: "VP of Product",
      bio: "Former Product Lead at LinkedIn Talent Solutions, designed products used by 1M+ recruiters.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "elena@cohyre.ai"
    },
    {
      name: "James Wilson",
      title: "VP of Engineering",
      bio: "Former Staff Engineer at Uber, built scalable systems serving 100M+ users globally.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#", 
      email: "james@cohyre.ai"
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
            Leadership Team
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Meet the Visionaries Behind
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              CoHyre.ai
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Industry pioneers with decades of experience at world's leading tech companies, 
            united by a vision to transform hiring through autonomous AI.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative p-8 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
                {/* Glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/60 shadow-lg"
                    />
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {leader.title}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 text-center">
                    {leader.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.a
                      href={leader.linkedin}
                      className="w-8 h-8 bg-slate-100/60 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </motion.a>
                    <motion.a
                      href={leader.twitter}
                      className="w-8 h-8 bg-slate-100/60 rounded-full flex items-center justify-center hover:bg-sky-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${leader.email}`}
                      className="w-8 h-8 bg-slate-100/60 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-4 h-4 text-purple-600" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Combined Experience", value: "150+ Years" },
            { label: "Previous Companies", value: "Fortune 500" },
            { label: "Patents Filed", value: "25+" },
            { label: "Team Members", value: "120+" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { Users, Award, Globe, Rocket, Target, Brain, Heart, Lightbulb } from "lucide-react";
import { GlassCard } from "./ui/card";

export function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "We believe AI should augment human intelligence, not replace it. Our platform empowers recruiters with superhuman capabilities.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Heart,
      title: "Human-Centric Design",
      description: "Technology serves people, not the other way around. Every feature is designed with the recruiter's experience in mind.",
      color: "from-purple-500/20 to-teal-500/20"
    },
    {
      icon: Target,
      title: "Precision & Quality",
      description: "We're obsessed with accuracy. Our DNA matching technology ensures every candidate recommendation is purposeful.",
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Our AI agents evolve with every interaction, becoming smarter and more effective over time.",
      color: "from-green-500/20 to-blue-500/20"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at major talent platform. 15+ years in AI and machine learning.",
      avatar: "AC"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google AI researcher. PhD in Computer Science from Stanford. Expert in NLP and ML systems.",
      avatar: "SR"
    },
    {
      name: "Michael Thompson",
      role: "Head of Product",
      bio: "Product leader from top recruiting companies. Deep expertise in recruiter workflows and pain points.",
      avatar: "MT"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Research",
      bio: "Former MIT professor. Leading expert in conversational AI and behavioral analysis.",
      avatar: "PP"
    }
  ];

  const milestones = [
    {
      id: "founding",
      year: "2023",
      title: "Company Founded",
      description: "Started with a vision to end the ATS & Resume Era"
    },
    {
      id: "ai-launch",
      year: "2024",
      title: "AI Agents Launched",
      description: "Released our 11 specialized AI agents platform"
    },
    {
      id: "series-a",
      year: "2024",
      title: "Series A Funding",
      description: "$25M raised from leading AI and HR tech investors"
    },
    {
      id: "enterprise-growth",
      year: "2024",
      title: "Enterprise Growth",
      description: "200+ companies now using CoHyre for autonomous hiring"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/30" />
          <motion.div
            className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-br from-blue-400/15 via-purple-400/10 to-teal-400/15 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/40 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-blue-500/30 shadow-sm backdrop-blur-sm">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-slate-700 font-semibold text-base">About CoHyre</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ending the
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              ATS & Resume Era
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're building the future of hiring where AI agents work 24/7 to deliver 
            precision talent matching, transforming how companies discover, engage, 
            and hire the best talent at unprecedented speed and scale.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-blue-500/30 shadow-sm mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To revolutionize talent acquisition by creating AI agents that understand 
                  company DNA, candidate potential, and cultural fit better than any traditional 
                  system ever could. We're building a world where great talent and great 
                  companies find each other effortlessly.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-green-500/20 rounded-full flex items-center justify-center border border-purple-500/30 shadow-sm mb-6">
                  <Rocket className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  A future where hiring is autonomous, bias-free, and incredibly fast. Where 
                  companies can scale their teams with confidence, knowing every hire is 
                  perfectly aligned with their culture and goals. We're creating the 
                  category that comes after ATS.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-200/60 shadow-sm mb-4 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-full" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-full opacity-60`} />
                      <Icon className="w-6 h-6 text-slate-700 relative z-10" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced leaders from AI research, product development, and talent acquisition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-blue-200/50 shadow-sm backdrop-blur-sm">
                    <span className="text-blue-700 font-semibold text-lg">{member.avatar}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">
              From vision to reality - building the future of hiring
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-blue-200/50 shadow-sm backdrop-blur-sm">
                  <span className="text-blue-700 font-bold text-sm">{milestone.year}</span>
                </div>
                <GlassCard className="flex-1 p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h4>
                  <p className="text-slate-600">{milestone.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
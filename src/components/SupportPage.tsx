import { motion } from "motion/react";
import { HelpCircle, BookOpen, MessageCircle, Phone, Mail, Search } from "lucide-react";
import { GlassCard } from "./ui/card";
import { Button } from "./ui/button";

export function SupportPage() {
  const supportCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Setup guides and onboarding resources",
      count: "15 articles",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: HelpCircle,
      title: "Platform Usage",
      description: "How to use AI agents and features",
      count: "28 guides",
      color: "from-purple-500/20 to-teal-500/20"
    },
    {
      icon: MessageCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      count: "22 solutions",
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: Phone,
      title: "API & Integrations",
      description: "Technical documentation and guides",
      count: "18 docs",
      color: "from-green-500/20 to-blue-500/20"
    }
  ];

  const popularArticles = [
    {
      title: "Setting Up Your First AI Agent",
      category: "Getting Started",
      readTime: "5 min read",
      helpful: 156
    },
    {
      title: "Configuring Interview Parameters",
      category: "Platform Usage", 
      readTime: "8 min read",
      helpful: 142
    },
    {
      title: "Integrating with Your Existing ATS",
      category: "API & Integrations",
      readTime: "12 min read",
      helpful: 128
    },
    {
      title: "Understanding AI Agent Responses",
      category: "Platform Usage",
      readTime: "6 min read",
      helpful: 119
    },
    {
      title: "Troubleshooting Connection Issues",
      category: "Troubleshooting",
      readTime: "4 min read",
      helpful: 98
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      response: "< 2 minutes",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Send detailed questions to our experts",
      availability: "support@cohyre.ai",
      response: "< 4 hours",
      color: "from-purple-500/20 to-teal-500/20"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical team",
      availability: "Mon-Fri 9AM-6PM EST",
      response: "Available now",
      color: "from-teal-500/20 to-green-500/20"
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
              <HelpCircle className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-slate-700 font-semibold text-base">Support Center</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How Can We
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Help You Today?
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get the most out of CoHyre's AI agents with comprehensive guides, tutorials, 
            and 24/7 support from our expert team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find the help you need organized by topic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 text-center bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-200/60 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-full" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                      <Icon className="w-7 h-7 text-slate-700 relative z-10" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h4>
                    <p className="text-sm text-slate-600 mb-3">{category.description}</p>
                    <span className="text-xs text-blue-600 font-medium">{category.count}</span>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Popular Help Articles</h2>
            <p className="text-lg text-slate-600">
              Most helpful resources from our community
            </p>
          </motion.div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-100/70 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-500">{article.readTime}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {article.title}
                      </h4>
                    </div>
                    <div className="text-sm text-slate-500 ml-4">
                      <span className="text-xs">👍 {article.helpful} helpful</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Still Need Help?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our expert support team is here to help you succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-8 text-center bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-200/60 shadow-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-full" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                      <Icon className="w-7 h-7 text-slate-700 relative z-10" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{option.title}</h4>
                    <p className="text-slate-600 mb-4">{option.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-slate-600">{option.availability}</p>
                      <p className="text-sm text-green-600 font-medium">Response: {option.response}</p>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white group-hover:scale-105 transition-transform duration-300">
                      Start {option.title}
                    </Button>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-3xl" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-slate-600 mb-6">
                Quick answers to common questions about CoHyre's AI agents
              </p>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                View All FAQs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
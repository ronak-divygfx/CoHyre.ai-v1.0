import { motion } from "motion/react";
import { FileText, TrendingUp, Users, Brain, Download, ExternalLink } from "lucide-react";
import { GlassCard } from "./ui/card";
import { Button } from "./ui/button";

export function ResearchPage() {
  const researchPapers = [
    {
      title: "The Future of Autonomous Hiring: AI Agents vs Traditional ATS",
      authors: "Dr. Sarah Rodriguez, Dr. Priya Patel",
      abstract: "Comprehensive analysis comparing AI agent-based hiring systems with traditional Applicant Tracking Systems across 500+ companies.",
      category: "Industry Research",
      pages: "47 pages",
      downloads: "12.4K",
      date: "November 2024",
      featured: true
    },
    {
      title: "Bias Elimination in AI-Powered Recruitment: A Technical Deep Dive",
      authors: "Dr. Priya Patel, Alex Chen",
      abstract: "Technical whitepaper on how machine learning models can be designed to eliminate unconscious bias in hiring decisions.",
      category: "Technical Paper",
      pages: "32 pages", 
      downloads: "8.7K",
      date: "October 2024",
      featured: true
    },
    {
      title: "ROI Analysis: Measuring the Impact of AI Agents on Hiring Efficiency",
      authors: "Michael Thompson, Data Science Team",
      abstract: "Quantitative study measuring time-to-hire, cost-per-hire, and quality-of-hire improvements across 200+ implementations.",
      category: "Business Research",
      pages: "28 pages",
      downloads: "15.2K", 
      date: "September 2024",
      featured: true
    },
    {
      title: "Natural Language Processing in Candidate Assessment",
      authors: "Dr. Priya Patel, AI Research Team",
      abstract: "Research on advanced NLP techniques for analyzing candidate responses, communication patterns, and cultural fit indicators.",
      category: "Technical Paper",
      pages: "41 pages",
      downloads: "6.3K",
      date: "August 2024",
      featured: false
    },
    {
      title: "The Psychology of AI-Human Interaction in Interviews",
      authors: "Dr. Lisa Wong, UX Research Team",
      abstract: "Study on candidate comfort levels, acceptance rates, and performance when interacting with AI interviewer agents.",
      category: "Behavioral Research",
      pages: "35 pages",
      downloads: "9.1K",
      date: "July 2024",
      featured: false
    },
    {
      title: "Global Compliance Framework for AI Hiring Systems",
      authors: "Legal Team, Dr. Sarah Rodriguez",
      abstract: "Comprehensive guide to GDPR, EEOC, and international compliance requirements for AI-powered hiring platforms.",
      category: "Compliance Guide",
      pages: "52 pages",
      downloads: "7.8K",
      date: "June 2024",
      featured: false
    }
  ];

  const researchCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Technical research on AI algorithms and ML models",
      count: "8 papers",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: TrendingUp,
      title: "Industry Analysis", 
      description: "Market trends and industry transformation studies",
      count: "12 reports",
      color: "from-purple-500/20 to-teal-500/20"
    },
    {
      icon: Users,
      title: "Behavioral Studies",
      description: "Human-AI interaction and candidate experience research",
      count: "6 studies", 
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: FileText,
      title: "Compliance & Ethics",
      description: "Legal frameworks and ethical AI guidelines",
      count: "5 guides",
      color: "from-green-500/20 to-blue-500/20"
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
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-slate-700 font-semibold text-base">Research & Whitepapers</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advancing the Science of
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              AI-Powered Hiring
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In-depth research, technical whitepapers, and industry studies from our team of 
            AI researchers, data scientists, and hiring experts. Peer-reviewed insights that 
            shape the future of autonomous hiring.
          </motion.p>
        </div>
      </section>

      {/* Research Categories */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Research Areas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our research spans multiple disciplines to advance AI hiring technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchCategories.map((category, index) => {
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

      {/* Featured Research */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Latest Research</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Peer-reviewed research and technical whitepapers
            </p>
          </motion.div>

          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="bg-blue-100/70 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {paper.category}
                        </span>
                        {paper.featured && (
                          <span className="bg-amber-100/70 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                        <span className="text-xs text-slate-500 ml-auto">{paper.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {paper.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Authors:</strong> {paper.authors}
                      </p>
                      
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {paper.abstract}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>{paper.pages}</span>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          <span>{paper.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Abstract
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
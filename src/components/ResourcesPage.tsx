import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { 
  BookOpen, FileText, Play, Newspaper, HelpCircle, 
  TrendingUp, Users, Brain, Clock, Download, ArrowRight,
  Award, Calendar, ExternalLink, MessageCircle, Phone, 
  Mail, Search, Video
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ResourcesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Enhanced liquid glass effects
  const glassOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.8]);
  const glassScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Guides & Resources Data
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Implementation Guides",
      description: "Step-by-step guides to get the most out of CoHyre's AI agents",
      count: "12 guides",
      items: [
        {
          title: "The Complete Guide to AI-Powered Hiring",
          description: "Everything you need to know about implementing autonomous hiring agents in your organization.",
          category: "Implementation Guide",
          readTime: "15 min read",
          downloads: "2.4K",
          popular: true
        },
        {
          title: "Integration Playbook: CoHyre + Your Tech Stack",
          description: "Best practices for integrating AI agents with existing HR systems and workflows.",
          category: "Implementation Guide", 
          readTime: "12 min read",
          downloads: "1.5K"
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Latest trends and benchmarks in AI-powered recruiting",
      count: "25 articles",
      items: [
        {
          title: "Future of Work: 2024 Hiring Trends Report",
          description: "Comprehensive analysis of emerging trends in talent acquisition and AI adoption.",
          category: "Research Report",
          readTime: "25 min read", 
          downloads: "4.2K",
          popular: true
        },
        {
          title: "ROI Calculator: AI vs Traditional Recruiting",
          description: "Interactive tool to calculate potential savings and efficiency gains with AI agents.",
          category: "Tool",
          readTime: "5 min use",
          downloads: "1.8K"
        }
      ]
    },
    {
      icon: Brain,
      title: "AI Best Practices",
      description: "How to leverage AI agents for maximum hiring efficiency", 
      count: "18 resources",
      items: [
        {
          title: "Bias-Free Hiring: How AI Agents Ensure Fairness",
          description: "Deep dive into how our DNA matching technology eliminates unconscious bias.",
          category: "Whitepaper",
          readTime: "20 min read",
          downloads: "3.1K",
          popular: true
        },
        {
          title: "Measuring Success: AI Hiring KPIs & Metrics",
          description: "Key performance indicators to track the effectiveness of your AI hiring agents.",
          category: "Analytics Guide",
          readTime: "10 min read",
          downloads: "2.0K"
        }
      ]
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Real success stories from companies using CoHyre",
      count: "30+ studies",
      items: [
        {
          title: "How TechFlow Reduced Hiring Time by 85%",
          description: "Customer success story showing real implementation results and ROI.",
          category: "Case Study",
          readTime: "12 min read",
          downloads: "2.3K"
        }
      ]
    }
  ];

  // Research Papers Data
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
    }
  ];

  // Videos Data
  const featuredVideos = [
    {
      title: "CoHyre AI Agents: Complete Platform Demo",
      description: "See all 11 AI agents working together in a complete hiring workflow from job posting to offer acceptance.",
      duration: "18:32",
      views: "45.2K",
      category: "Product Demo",
      featured: true
    },
    {
      title: "How TechFlow Reduced Hiring Time by 85%",
      description: "Customer success story showing real implementation results and ROI from CoHyre's AI agent network.",
      duration: "12:15",
      views: "23.8K",
      category: "Customer Story",
      featured: true
    },
    {
      title: "Setting Up Your First AI Interview Agent",
      description: "Complete tutorial on configuring and deploying the Voice AI Interviewer Agent for your specific needs.",
      duration: "15:47",
      views: "38.1K",
      category: "Tutorial",
      featured: true
    },
    {
      title: "Bias-Free Hiring with DNA Matching Technology",
      description: "Deep dive into how our proprietary DNA matching engine eliminates unconscious bias in hiring decisions.",
      duration: "21:18",
      views: "29.3K",
      category: "Product Demo",
      featured: false
    },
    {
      title: "Scale Innovations: 60% Cost Reduction Case Study",
      description: "Detailed walkthrough of how Scale Innovations achieved massive cost savings while improving hire quality.",
      duration: "14:22",
      views: "19.7K",
      category: "Customer Story",
      featured: false
    },
    {
      title: "Future of Hiring: AI Agents vs Traditional ATS",
      description: "Webinar recording with industry experts discussing the transformation from ATS to AI agent networks.",
      duration: "52:30",
      views: "67.4K",
      category: "Webinar",
      featured: false
    }
  ];

  // Press Data
  const pressReleases = [
    {
      title: "CoHyre Raises $25M Series A to Accelerate AI-Powered Hiring Revolution",
      date: "December 1, 2024",
      excerpt: "Funding led by Andreessen Horowitz will fuel expansion of 11-agent AI platform that's transforming talent acquisition for 200+ companies.",
      category: "Funding",
      featured: true
    },
    {
      title: "CoHyre AI Agents Achieve 94% Accuracy in Candidate Matching",
      date: "November 15, 2024",
      excerpt: "Independent study validates CoHyre's DNA matching technology outperforms traditional ATS systems by 300% in quality-of-hire metrics.",
      category: "Product",
      featured: true
    },
    {
      title: "Fortune 500 Companies Adopt CoHyre for Autonomous Hiring at Scale",
      date: "October 28, 2024",
      excerpt: "Major enterprises report 85% reduction in time-to-hire and 60% cost savings after implementing CoHyre's AI agent network.",
      category: "Business",
      featured: false
    }
  ];

  const awards = [
    {
      title: "Best AI Innovation in HR Tech",
      organization: "HR Technology Awards 2024",
      date: "November 2024",
      description: "Recognized for breakthrough AI agent technology transforming talent acquisition"
    },
    {
      title: "Startup of the Year - Enterprise Software",
      organization: "TechCrunch Disrupt 2024", 
      date: "October 2024",
      description: "Selected from 1000+ startups for revolutionary approach to hiring automation"
    },
    {
      title: "Top 10 AI Companies to Watch",
      organization: "Fast Company 2024",
      date: "September 2024",
      description: "Featured for democratizing AI-powered recruiting for companies of all sizes"
    }
  ];

  // Support Data
  const supportCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Setup guides and onboarding resources",
      count: "15 articles"
    },
    {
      icon: HelpCircle,
      title: "Platform Usage",
      description: "How to use AI agents and features",
      count: "28 guides"
    },
    {
      icon: MessageCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      count: "22 solutions"
    },
    {
      icon: Phone,
      title: "API & Integrations",
      description: "Technical documentation and guides",
      count: "18 docs"
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
    },
    {
      title: "Advanced Agent Configuration",
      category: "Platform Usage",
      readTime: "10 min read",
      helpful: 87
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Enhanced Liquid Glass Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/8 via-background/90 to-[#9F62ED]/8 dark:from-[#0C8EFF]/5 dark:via-background/80 dark:to-[#9F62ED]/5"
          style={{
            opacity: glassOpacity,
            scale: glassScale
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/15 via-[#9F62ED]/10 to-[#0C8EFF]/15 blur-3xl"
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
        <div className="absolute inset-0 bg-background/60 dark:bg-background/40 backdrop-blur-[1px]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl px-6 py-3 border border-white/20 dark:border-white/10 shadow-lg mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-[#0C8EFF]" />
            </div>
            <span className="text-foreground font-bold tracking-widest uppercase">Resources & Knowledge Hub</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master AI-Powered
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              Hiring Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to implement, optimize, and succeed with autonomous AI-powered hiring. 
            From implementation guides to research papers, videos, press coverage, and expert support.
          </motion.p>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="guides" className="w-full">
            {/* Liquid Glass Tab Navigation */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-5 h-14 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg p-1">
                <TabsTrigger 
                  value="guides" 
                  className="data-[state=active]:bg-white/20 dark:data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Guides
                </TabsTrigger>
                <TabsTrigger 
                  value="research"
                  className="data-[state=active]:bg-white/20 dark:data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Research
                </TabsTrigger>
                <TabsTrigger 
                  value="videos"
                  className="data-[state=active]:bg-white/20 dark:data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Videos
                </TabsTrigger>
                <TabsTrigger 
                  value="press"
                  className="data-[state=active]:bg-white/20 dark:data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <Newspaper className="w-4 h-4 mr-2" />
                  Press
                </TabsTrigger>
                <TabsTrigger 
                  value="support"
                  className="data-[state=active]:bg-white/20 dark:data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Support
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Guides & Resources Tab */}
            <TabsContent value="guides" className="space-y-16">
              {/* Resource Categories Grid */}
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Resource Categories</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive guides and resources to help you implement and optimize AI-powered hiring
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {resourceCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-8 text-center bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                          {/* Ultra Premium Icon Container */}
                          <div className="w-20 h-20 mx-auto mb-6 relative group">
                            {/* Outer glass ring with perfect circular shape */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-white/15 dark:via-white/8 dark:to-white/3 backdrop-blur-2xl border-2 border-white/30 dark:border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110" />
                            
                            {/* Inner premium ring */}
                            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent border border-white/25 dark:border-white/15 group-hover:from-[#0C8EFF]/20 group-hover:via-[#9F62ED]/15 group-hover:to-[#0C8EFF]/10 transition-all duration-500" />
                            
                            {/* Ultra-premium glass reflection layers */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.25] via-transparent to-transparent dark:from-white/[0.15] pointer-events-none" />
                            <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white/60 dark:bg-white/40 blur-sm" />
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/80 dark:bg-white/50 blur-xs" />
                            
                            {/* Floating glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0C8EFF]/0 via-[#9F62ED]/0 to-[#0C8EFF]/0 group-hover:from-[#0C8EFF]/20 group-hover:via-[#9F62ED]/15 group-hover:to-[#0C8EFF]/20 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100" />
                            
                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Icon className="w-8 h-8 text-foreground group-hover:text-[#0C8EFF] transition-all duration-300 relative z-10 group-hover:scale-110" />
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">{category.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                          <span className="text-xs text-[#0C8EFF] font-bold tracking-wide uppercase bg-[#0C8EFF]/10 px-3 py-1 rounded-full inline-block">{category.count}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Featured Resources Grid */}
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Featured Resources</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Most popular guides and insights from our community
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resourceCategories.flatMap(cat => cat.items).slice(0, 6).map((resource, index) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-6 bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                          <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                            {resource.category}
                          </span>
                          {resource.popular && (
                            <span className="bg-[#9F62ED]/20 text-[#9F62ED] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <h3 className="font-bold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">
                          {resource.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{resource.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Download className="w-3 h-3" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-[#0C8EFF]/10 group-hover:border-[#0C8EFF]/30 transition-colors duration-300"
                        >
                          <span className="flex items-center gap-2">
                            Access Resource
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-16">
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Latest Research</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Peer-reviewed research and technical whitepapers advancing AI hiring technology
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                  {researchPapers.map((paper, index) => (
                    <motion.div
                      key={paper.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-8 bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-3">
                            <div className="flex items-start gap-3 mb-4">
                              <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                                {paper.category}
                              </span>
                              {paper.featured && (
                                <span className="bg-[#9F62ED]/20 text-[#9F62ED] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                                  Featured
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground ml-auto">{paper.date}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">
                              {paper.title}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Authors:</strong> {paper.authors}
                            </p>
                            
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {paper.abstract}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{paper.pages}</span>
                              <div className="flex items-center gap-1">
                                <Download className="w-3 h-3" />
                                <span>{paper.downloads} downloads</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <Button className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Abstract
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-16">
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Featured Videos</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Product demonstrations, customer stories, and implementation tutorials
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredVideos.map((video, index) => (
                    <motion.div
                      key={video.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                        {/* Video Thumbnail */}
                        <div className="relative h-48 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/8 to-[#0C8EFF]/10 flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20" />
                          <motion.div 
                            className="w-16 h-16 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </motion.div>
                          
                          {/* Duration Badge */}
                          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {video.duration}
                          </div>
                          
                          {video.featured && (
                            <div className="absolute top-3 left-3 bg-[#9F62ED]/20 text-[#9F62ED] px-2 py-1 rounded text-xs font-bold tracking-wider uppercase">
                              Featured
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                              {video.category}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>{video.views} views</span>
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">
                            {video.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {video.description}
                          </p>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group-hover:bg-[#0C8EFF]/10 group-hover:border-[#0C8EFF]/30 transition-colors duration-300"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Watch Video
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Press Tab */}
            <TabsContent value="press" className="space-y-16">
              {/* Press Releases Grid */}
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Latest Press Releases</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Official company announcements and news updates
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                  {pressReleases.map((release, index) => (
                    <motion.div
                      key={release.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-8 bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-3">
                            <div className="flex items-start gap-3 mb-4">
                              <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                                {release.category}
                              </span>
                              {release.featured && (
                                <span className="bg-[#9F62ED]/20 text-[#9F62ED] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                                  Featured
                                </span>
                              )}
                              <div className="flex items-center gap-2 text-xs text-muted-foreground ml-auto">
                                <Calendar className="w-3 h-3" />
                                <span>{release.date}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#0C8EFF] transition-colors duration-300">
                              {release.title}
                            </h3>
                            
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {release.excerpt}
                            </p>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read Full Release
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Awards Grid */}
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Industry recognition for innovation and excellence
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {awards.map((award, index) => (
                    <motion.div
                      key={award.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-8 text-center bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        {/* Premium Award Icon */}
                        <div className="w-16 h-16 mx-auto mb-4 relative group">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9F62ED]/20 via-[#0C8EFF]/20 to-[#9F62ED]/20 backdrop-blur-sm border border-[#9F62ED]/30 shadow-lg" />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white/50 blur-sm" />
                          <Award className="w-8 h-8 text-[#9F62ED] absolute inset-0 m-auto" />
                        </div>
                        
                        <h4 className="font-bold text-foreground mb-2">{award.title}</h4>
                        <p className="text-sm text-[#0C8EFF] font-bold mb-2">{award.organization}</p>
                        <p className="text-xs text-muted-foreground mb-3">{award.date}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Support Tab */}
            <TabsContent value="support" className="space-y-16">
              {/* Search Bar */}
              <div>
                <motion.div
                  className="max-w-2xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search for help articles, guides, and tutorials..."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0C8EFF]/50 focus:border-[#0C8EFF]/50 shadow-lg rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Support Categories Grid */}
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Find the help you need organized by topic
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <div className="p-8 text-center bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                          {/* Premium Icon Container */}
                          <div className="w-20 h-20 mx-auto mb-6 relative group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-white/15 dark:via-white/8 dark:to-white/3 backdrop-blur-2xl border-2 border-white/30 dark:border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent border border-white/25 dark:border-white/15 group-hover:from-[#0C8EFF]/20 group-hover:via-[#9F62ED]/15 group-hover:to-[#0C8EFF]/10 transition-all duration-500" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.25] via-transparent to-transparent dark:from-white/[0.15] pointer-events-none" />
                            <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white/60 dark:bg-white/40 blur-sm" />
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/80 dark:bg-white/50 blur-xs" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0C8EFF]/0 via-[#9F62ED]/0 to-[#0C8EFF]/0 group-hover:from-[#0C8EFF]/20 group-hover:via-[#9F62ED]/15 group-hover:to-[#0C8EFF]/20 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Icon className="w-8 h-8 text-foreground group-hover:text-[#0C8EFF] transition-all duration-300 relative z-10 group-hover:scale-110" />
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#0C8EFF] transition-colors duration-300">{category.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                          <span className="text-xs text-[#0C8EFF] font-bold tracking-wide uppercase bg-[#0C8EFF]/10 px-3 py-1 rounded-full inline-block">{category.count}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Popular Articles Grid */}
              <div>
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">Popular Help Articles</h2>
                  <p className="text-muted-foreground">
                    Most helpful resources from our community
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularArticles.map((article, index) => (
                    <motion.div
                      key={article.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-6 bg-white/8 dark:bg-white/4 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="bg-[#0C8EFF]/20 text-[#0C8EFF] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          </div>
                          <h4 className="font-bold text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300 mb-3 flex-1">
                            {article.title}
                          </h4>
                          <div className="text-sm text-muted-foreground">
                            <span className="text-xs">👍 {article.helpful} helpful</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Support CTA */}
              <div>
                <motion.div
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-8 border border-white/20 dark:border-white/10 shadow-xl relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-[#0C8EFF]/5" />
                  
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h3>
                    <p className="text-muted-foreground mb-6">
                      Our expert support team is available 24/7 to help you succeed with CoHyre's AI agents
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Live Chat
                      </Button>
                      <Button variant="outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Support
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
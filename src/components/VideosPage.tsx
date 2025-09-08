import { motion } from "motion/react";
import { Play, Clock, Users, Calendar, Video } from "lucide-react";
import { GlassCard } from "./ui/card";
import { Button } from "./ui/button";

export function VideosPage() {
  const videoCategories = [
    {
      icon: Video,
      title: "Product Demos",
      description: "See AI agents in action with live demonstrations",
      count: "12 videos",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Users,
      title: "Customer Stories",
      description: "Success stories from companies using CoHyre",
      count: "18 videos",
      color: "from-purple-500/20 to-teal-500/20"
    },
    {
      icon: Play,
      title: "Tutorial Series",
      description: "Step-by-step guides for implementation",
      count: "25 videos",
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      icon: Calendar,
      title: "Webinar Recordings",
      description: "Past webinars and expert discussions",
      count: "30+ recordings",
      color: "from-green-500/20 to-blue-500/20"
    }
  ];

  const featuredVideos = [
    {
      title: "CoHyre AI Agents: Complete Platform Demo",
      description: "See all 11 AI agents working together in a complete hiring workflow from job posting to offer acceptance.",
      duration: "18:32",
      views: "45.2K",
      category: "Product Demo",
      thumbnail: "demo-1",
      featured: true
    },
    {
      title: "How TechFlow Reduced Hiring Time by 85%",
      description: "Customer success story showing real implementation results and ROI from CoHyre's AI agent network.",
      duration: "12:15",
      views: "23.8K", 
      category: "Customer Story",
      thumbnail: "story-1",
      featured: true
    },
    {
      title: "Setting Up Your First AI Interview Agent",
      description: "Complete tutorial on configuring and deploying the Voice AI Interviewer Agent for your specific needs.",
      duration: "15:47",
      views: "38.1K",
      category: "Tutorial",
      thumbnail: "tutorial-1",
      featured: true
    },
    {
      title: "Future of Hiring: AI Agents vs Traditional ATS",
      description: "Webinar recording with industry experts discussing the transformation from ATS to AI agent networks.",
      duration: "52:30",
      views: "67.4K",
      category: "Webinar",
      thumbnail: "webinar-1",
      featured: false
    },
    {
      title: "Bias-Free Hiring with DNA Matching Technology",
      description: "Deep dive into how our proprietary DNA matching engine eliminates unconscious bias in hiring decisions.",
      duration: "21:18",
      views: "29.3K",
      category: "Product Demo",
      thumbnail: "demo-2", 
      featured: false
    },
    {
      title: "Scale Innovations: 60% Cost Reduction Case Study",
      description: "Detailed walkthrough of how Scale Innovations achieved massive cost savings while improving hire quality.",
      duration: "14:22",
      views: "19.7K",
      category: "Customer Story",
      thumbnail: "story-2",
      featured: false
    }
  ];

  const upcomingWebinars = [
    {
      title: "Advanced AI Agent Configuration Workshop",
      date: "December 20, 2024",
      time: "2:00 PM EST",
      host: "Dr. Priya Patel, Head of AI Research",
      description: "Hands-on workshop for optimizing AI agent parameters for your specific hiring needs."
    },
    {
      title: "2025 Hiring Trends: What's Next for AI Recruitment",
      date: "January 10, 2025", 
      time: "1:00 PM EST",
      host: "Alex Chen, CEO & Michael Thompson, Head of Product",
      description: "Industry predictions and upcoming CoHyre features for the new year."
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
              <Play className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-slate-700 font-semibold text-base">Videos & Webinars</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn Through
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Visual Experiences
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive video library featuring product demonstrations, customer success stories, 
            implementation tutorials, and expert webinar recordings to accelerate your AI hiring journey.
          </motion.p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Video Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Organized content to help you learn, implement, and optimize
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoCategories.map((category, index) => {
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

      {/* Featured Videos */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Featured Videos</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most popular and highly recommended content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-200 via-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20" />
                    <motion.div 
                      className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </motion.div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    
                    {video.featured && (
                      <div className="absolute top-3 left-3 bg-amber-100/90 text-amber-700 px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100/70 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {video.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Users className="w-3 h-3" />
                        <span>{video.views} views</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {video.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {video.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Upcoming Live Webinars</h2>
            <p className="text-lg text-slate-600">
              Join our experts for live demonstrations and Q&A sessions
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{webinar.title}</h3>
                      <p className="text-slate-600 mb-4">{webinar.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{webinar.host}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Register Free
                      </Button>
                      <Button variant="outline">
                        Add to Calendar
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
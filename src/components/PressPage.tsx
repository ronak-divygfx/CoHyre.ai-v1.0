import { motion } from "motion/react";
import { Newspaper, Award, Calendar, ExternalLink, Download } from "lucide-react";
import { GlassCard } from "./ui/card";
import { Button } from "./ui/button";

export function PressPage() {
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

  const mediaKit = [
    {
      title: "Company Logos & Brand Assets",
      description: "High-resolution logos, brand guidelines, and visual assets",
      type: "ZIP Package",
      size: "15.2 MB"
    },
    {
      title: "Executive Team Photos",
      description: "Professional headshots and team photos",
      type: "ZIP Package", 
      size: "8.7 MB"
    },
    {
      title: "Product Screenshots & UI",
      description: "Platform screenshots and interface examples",
      type: "ZIP Package",
      size: "22.1 MB"
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics, milestones, and company information",
      type: "PDF",
      size: "2.3 MB"
    }
  ];

  const mediaOutlets = [
    { name: "TechCrunch", logo: "TC", featured: true },
    { name: "VentureBeat", logo: "VB", featured: true },
    { name: "Forbes", logo: "FB", featured: true },
    { name: "Harvard Business Review", logo: "HBR", featured: false },
    { name: "Wired", logo: "WD", featured: false },
    { name: "Fast Company", logo: "FC", featured: false },
    { name: "Wall Street Journal", logo: "WSJ", featured: false },
    { name: "Financial Times", logo: "FT", featured: false }
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
              <Newspaper className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-slate-700 font-semibold text-base">Press & Media Coverage</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CoHyre in the
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Media Spotlight
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Latest news, press releases, awards, and media coverage of CoHyre's mission 
            to end the "ATS & Resume Era" with autonomous AI-powered hiring.
          </motion.p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Latest Press Releases</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Official company announcements and news updates
            </p>
          </motion.div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-blue-100/70 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {release.category}
                    </span>
                    {release.featured && (
                      <span className="bg-amber-100/70 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-xs text-slate-500 ml-auto">
                      <Calendar className="w-3 h-3" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {release.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {release.excerpt}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Release
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Awards & Recognition</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry recognition for innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-amber-500/30 shadow-sm backdrop-blur-sm">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{award.title}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-2">{award.organization}</p>
                  <p className="text-xs text-slate-500 mb-3">{award.date}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{award.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Featured In</h2>
            <p className="text-lg text-slate-600">
              Leading publications covering our story
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {mediaOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.name}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-4 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 mx-auto bg-white/70 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-slate-200/50 shadow-sm">
                    <span className="text-slate-700 font-bold text-xs">{outlet.logo}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Media Kit</h2>
            <p className="text-lg text-slate-600">
              Brand assets and resources for media professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <div className="text-xs text-slate-500">
                      <span className="bg-slate-100/70 px-2 py-1 rounded">{item.type}</span>
                      <span className="ml-2">{item.size}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
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
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Media Inquiries</h3>
              <p className="text-slate-600 mb-6">
                For press inquiries, interview requests, or additional information
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Contact Press Team
                </Button>
                <Button variant="outline">
                  Schedule Interview
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
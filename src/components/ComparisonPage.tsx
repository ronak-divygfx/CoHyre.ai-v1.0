import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Clock, 
  Users, 
  TrendingUp,
  Brain, 
  Target,
  ArrowRight,
  CheckCircle,
  X,
  FileText,
  Search,
  MessageSquare,
  Calendar,
  BarChart3,
  Sparkles,
  Zap,
  Bot,
  Settings,
  Globe
} from "lucide-react";

export function ComparisonPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const comparisonFeatures = [
    {
      feature: "Time to Hire",
      icon: Clock,
      traditional: { value: "42 days", status: "slow" },
      cohyre: { value: "3 days", status: "fast" }
    },
    {
      feature: "Process Automation",
      icon: Bot,
      traditional: { value: "10%", status: "limited" },
      cohyre: { value: "95%", status: "excellent" }
    },
    {
      feature: "Candidate Sourcing",
      icon: Search,
      traditional: { value: "Manual", status: "limited" },
      cohyre: { value: "AI-Powered", status: "excellent" }
    },
    {
      feature: "Screening Accuracy",
      icon: Target,
      traditional: { value: "68%", status: "limited" },
      cohyre: { value: "94%", status: "excellent" }
    },
    {
      feature: "Cost per Hire",
      icon: BarChart3,
      traditional: { value: "$4,129", status: "expensive" },
      cohyre: { value: "$890", status: "affordable" }
    },
    {
      feature: "Candidate Experience",
      icon: Users,
      traditional: { value: "Generic", status: "limited" },
      cohyre: { value: "Personalized", status: "excellent" }
    },
    {
      feature: "Bias Reduction",
      icon: Brain,
      traditional: { value: "Human Bias", status: "problematic" },
      cohyre: { value: "AI Objective", status: "excellent" }
    },
    {
      feature: "Scalability",
      icon: TrendingUp,
      traditional: { value: "Limited", status: "limited" },
      cohyre: { value: "Unlimited", status: "excellent" }
    },
    {
      feature: "24/7 Operations",
      icon: Globe,
      traditional: { value: "Business Hours", status: "limited" },
      cohyre: { value: "Always On", status: "excellent" }
    }
  ];

  return (
    <main className="pt-20 min-h-screen">
      <section ref={sectionRef} className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Magazine Report Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Publication Info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/30">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-card/60 backdrop-blur-xl border-border/50 text-xs tracking-wider uppercase px-3 py-1">
                  <BarChart3 className="w-3 h-3 mr-2" />
                  Comparative Analysis
                </Badge>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">2024 Report</span>
              </div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase">
                Industry Intelligence • CoHyre Research
              </div>
            </div>
            
            {/* Main Title */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase px-4">Executive Summary</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              
              <h1 className="text-7xl font-extralight tracking-tight text-foreground mb-2 leading-none">
                TRADITIONAL
              </h1>
              <div className="flex items-center justify-center gap-6 mb-2">
                <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-border flex-1" />
                <span className="text-2xl font-light text-muted-foreground tracking-widest uppercase">VS</span>
                <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent flex-1" />
              </div>
              <h2 className="text-5xl font-medium tracking-wide mb-8">
                <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
                  COHYRE.AI
                </span>
              </h2>
              
              <p className="text-muted-foreground max-w-3xl mx-auto tracking-wide text-base leading-relaxed">
                A comprehensive analysis of traditional hiring methodologies compared to AI-powered 
                recruitment technologies. This report examines key performance indicators, cost efficiency, 
                and operational metrics across 9 critical hiring dimensions.
              </p>
            </div>
          </motion.div>

          {/* Main Comparison Table */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Premium Liquid Glass Container with Sharp Edges */}
            <div className="relative overflow-hidden backdrop-blur-3xl border-2 border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30">
              {/* Enhanced liquid glass reflection overlays */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20" />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/20" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent dark:via-white/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent dark:from-white/[0.08] dark:via-white/[0.04] pointer-events-none" />
              
              {/* Enhanced neutral liquid glass background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-background/85 to-white/8 dark:from-white/5 dark:via-background/75 dark:to-white/5" />
              
              {/* Flowing liquid effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent dark:via-white/[0.02] animate-pulse" />
              
              {/* Table Container */}
              <div className="relative p-8">
                {/* Premium Liquid Glass Table Header */}
                <div className="grid grid-cols-3 gap-0 mb-2">
                  {/* Features Column Header */}
                  <div className="relative">
                    <div className="h-20 bg-gradient-to-br from-white/12 via-white/6 to-white/3 dark:from-white/8 dark:via-white/4 dark:to-white/2 border-b-2 border-white/30 dark:border-white/20 border-r border-white/20 dark:border-white/15 flex items-center px-6">
                      {/* Liquid glass reflection */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/25" />
                      
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-gradient-to-br from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] opacity-80" />
                        <h3 className="text-sm font-bold text-foreground tracking-widest uppercase">Assessment Criteria</h3>
                      </div>
                    </div>
                  </div>

                  {/* Traditional Hiring Header */}
                  <div className="relative">
                    <div className="h-20 bg-gradient-to-br from-white/12 via-white/6 to-white/3 dark:from-white/8 dark:via-white/4 dark:to-white/2 border-b-2 border-white/30 dark:border-white/20 border-r border-white/20 dark:border-white/15 flex items-center justify-center">
                      {/* Enhanced liquid glass reflection */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/25" />
                      
                      <div className="text-center relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-1">
                          {/* Minimal neutral dot */}
                          <div className="w-2 h-2 bg-muted-foreground opacity-70" />
                          <span className="text-xs font-bold text-foreground tracking-widest uppercase">Traditional Hiring</span>
                        </div>
                        <div className="text-xs text-muted-foreground tracking-wide uppercase font-medium">Legacy Methods</div>
                      </div>
                    </div>
                  </div>

                  {/* CoHyre.ai Header with Logo */}
                  <div className="relative">
                    <div className="h-20 bg-gradient-to-br from-white/12 via-white/6 to-white/3 dark:from-white/8 dark:via-white/4 dark:to-white/2 border-b-2 border-white/30 dark:border-white/20 flex items-center justify-center">
                      {/* Enhanced liquid glass reflection */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/25" />
                      
                      <div className="text-center relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-1">
                          {/* CoHyre.ai Logo */}
                          <div className="relative">
                            <div className="w-6 h-6 bg-gradient-to-br from-[#0C8EFF] to-[#9F62ED] flex items-center justify-center">
                              <span className="text-white text-xs font-bold">Co</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                          </div>
                          <span className="text-xs font-bold text-foreground tracking-widest uppercase">CoHyre.ai Platform</span>
                        </div>
                        <div className="text-xs text-muted-foreground tracking-wide uppercase font-medium">AI-Powered Solution</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Liquid Glass Table with Sharp Dividing Lines */}
                <div className="relative">
                  {/* Sharp Vertical Dividers */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-0">
                    {/* Left vertical line */}
                    <div className="relative">
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-border/40 to-white/40 dark:via-border/30" />
                    </div>
                    {/* Center vertical line */}
                    <div className="relative">
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-border/40 to-white/40 dark:via-border/30" />
                    </div>
                    {/* Right column - no divider */}
                    <div></div>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-0">
                    {comparisonFeatures.map((item, index) => {
                      const Icon = item.icon;
                      
                      return (
                        <div key={index}>
                          <motion.div
                            className="grid grid-cols-3 gap-0 relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                          >
                            {/* Feature Name */}
                            <div className="relative">
                              <div className="h-24 bg-gradient-to-br from-white/8 via-white/4 to-white/2 dark:from-white/6 dark:via-white/3 dark:to-white/1 flex items-center px-6 border-r border-white/20 dark:border-white/15">
                                {/* Liquid glass reflections */}
                                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/20" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent dark:from-white/[0.02] pointer-events-none" />
                                
                                <div className="flex items-center gap-4 relative z-10">
                                  {/* Ultra Premium Circle Icon */}
                                  <div className="relative group">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/25 via-white/15 to-white/8 dark:from-white/20 dark:via-white/12 dark:to-white/6 backdrop-blur-2xl border border-white/40 dark:border-white/25 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500">
                                      {/* Ultra-thin inner circle */}
                                      <div className="absolute inset-[2px] rounded-full border border-white/30 dark:border-white/20" />
                                      {/* Multiple glass reflection layers */}
                                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.2] via-transparent to-transparent dark:from-white/[0.12] pointer-events-none" />
                                      <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white/50 dark:bg-white/30 blur-sm" />
                                      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/70 dark:bg-white/40 blur-xs" />
                                      <Icon className="w-6 h-6 text-muted-foreground relative z-10 group-hover:text-foreground transition-colors duration-300" />
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold text-foreground tracking-wide uppercase">{item.feature}</h4>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-border/60 via-border/30 to-transparent mt-1.5" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Traditional Value */}
                            <div className="relative">
                              <div className="h-24 bg-gradient-to-br from-white/8 via-white/4 to-white/2 dark:from-white/6 dark:via-white/3 dark:to-white/1 border-r border-white/20 dark:border-white/15 flex items-center justify-center">
                                {/* Liquid glass reflections */}
                                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/20" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent dark:from-white/[0.02] pointer-events-none" />
                                
                                <div className="flex items-center gap-4 relative z-10">
                                  {/* Minimal neutral dot */}
                                  <div className="w-3 h-3 bg-muted-foreground opacity-60 shadow-sm" />
                                  <div className="text-center">
                                    <span className="block text-sm font-bold text-foreground">{item.traditional.value}</span>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.traditional.status}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* CoHyre Value */}
                            <div className="relative">
                              <div className="h-24 bg-gradient-to-br from-white/8 via-white/4 to-white/2 dark:from-white/6 dark:via-white/3 dark:to-white/1 flex items-center justify-center">
                                {/* Liquid glass reflections */}
                                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/20" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent dark:from-white/[0.02] pointer-events-none" />
                                
                                <div className="flex items-center gap-4 relative z-10">
                                  {/* Minimal premium dot with brand gradient */}
                                  <div className="w-3 h-3 bg-gradient-to-br from-[#0C8EFF] to-[#9F62ED] shadow-sm" />
                                  <div className="text-center">
                                    <span className="block text-sm font-bold text-foreground">{item.cohyre.value}</span>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.cohyre.status}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Sharp Horizontal Divider */}
                          {index < comparisonFeatures.length - 1 && (
                            <div className="relative">
                              <div className="h-px bg-gradient-to-r from-white/40 via-border/40 to-white/40 dark:via-border/30" />
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent dark:via-white/8" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sharp Action Buttons Row */}
                <motion.div
                  className="grid grid-cols-3 gap-0 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  {/* Empty cell for features column */}
                  <div className="border-r border-white/20 dark:border-white/15"></div>

                  {/* Traditional Button */}
                  <div className="relative border-r border-white/20 dark:border-white/15">
                    <div className="h-16 backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/6 to-white/3 dark:from-white/8 dark:via-white/4 dark:to-white/2 border-t-2 border-white/30 dark:border-white/20 flex items-center justify-center cursor-not-allowed">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/25" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent dark:from-white/[0.03] pointer-events-none" />
                      <span className="uppercase tracking-wider text-sm text-muted-foreground relative z-10 font-medium">Current State</span>
                    </div>
                  </div>

                  {/* CoHyre Button */}
                  <div className="relative">
                    <Button className="w-full h-16 bg-gradient-to-br from-[#0C8EFF] via-[#0C8EFF] to-[#9F62ED] hover:from-[#0C8EFF]/90 hover:via-[#0C8EFF]/90 hover:to-[#9F62ED]/90 border-0 border-t-2 border-white/30 dark:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-transparent pointer-events-none" />
                      <span className="uppercase tracking-wider text-sm text-white relative z-10 mr-2 font-bold">Start Free Trial</span>
                      <ArrowRight className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Magazine Report Conclusion */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* Report Summary */}
            <div className="relative overflow-hidden backdrop-blur-2xl border-t border-border/30 pt-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="text-xs text-muted-foreground tracking-widest uppercase px-3">Report Conclusion</span>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                
                <h3 className="text-xl font-medium text-foreground mb-4 tracking-wide">
                  THE VERDICT: AI-POWERED HIRING DOMINATES
                </h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-base">
                  Our comprehensive analysis reveals that CoHyre.ai's AI-powered platform consistently outperforms 
                  traditional hiring methods across all measured criteria. Organizations implementing AI recruitment 
                  technologies report significant improvements in efficiency, cost reduction, and candidate quality.
                </p>
              </div>

              {/* Call to Action */}
              <div className="relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 dark:border-white/5 max-w-3xl mx-auto">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-background/40 to-transparent dark:from-white/[0.02] dark:via-background/20 rounded-xl" />
                
                <div className="relative p-8">
                  <div className="text-center mb-6">
                    <Badge variant="outline" className="mb-3 bg-card/60 backdrop-blur-xl border-border/50 text-xs tracking-wider uppercase">
                      <Sparkles className="w-3 h-3 mr-2" />
                      Take Action
                    </Badge>
                    <h4 className="text-lg font-semibold text-foreground mb-2 tracking-wide">
                      READY TO IMPLEMENT AI RECRUITMENT?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Join forward-thinking companies transforming their hiring process with CoHyre.ai
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] hover:from-[#0C8EFF]/90 hover:to-[#9F62ED]/90 text-white border-0 px-8 py-3 text-sm font-semibold tracking-wide">
                      START FREE TRIAL
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="bg-white/5 backdrop-blur-xl border-white/20 hover:bg-white/10 hover:border-white/30 px-8 py-3 text-sm font-semibold tracking-wide">
                      REQUEST DEMO
                    </Button>
                  </div>
                </div>
              </div>

              {/* Report Footer */}
              <div className="mt-8 pt-6 border-t border-border/20 text-center">
                <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground tracking-wider">
                  <span>© 2024 CoHyre Research Division</span>
                  <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span>Data compiled from industry studies</span>
                  <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span>All metrics verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
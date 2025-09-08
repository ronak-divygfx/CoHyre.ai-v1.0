import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { 
  Bot, 
  Search, 
  UserCheck, 
  MessageSquare, 
  Calendar, 
  Target,
  Zap,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Network,
  Activity,
  Loader2,
  MoreHorizontal,
  Play,
  Pause,
  Shield,
  Globe,
  Database,
  Cpu,
  LineChart,
  Award,
  Building2,
  Rocket,
  Eye,
  BarChart3
} from "lucide-react";

export function AgentFlowSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Platform overview data for stakeholder confidence
  const platformOverview = {
    coreCapabilities: [
      {
        icon: Brain,
        title: "AI-Powered Intelligence",
        description: "Advanced machine learning algorithms that understand context, intent, and quality",
        metric: "11 Specialized AI Agents",
        gradient: "from-[#0C8EFF] to-[#9F62ED]"
      },
      {
        icon: Globe,
        title: "Global Talent Network",
        description: "Access to 400M+ professional profiles across all major platforms and databases",
        metric: "400M+ Profiles",
        gradient: "from-[#9F62ED] to-[#0C8EFF]"
      },
      {
        icon: Zap,
        title: "Autonomous Operations",
        description: "24/7 continuous operation with intelligent decision-making and self-optimization",
        metric: "24/7 Active",
        gradient: "from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF]"
      }
    ],
    keyMetrics: [
      { value: 85, label: "Faster Hiring", suffix: "%", icon: TrendingUp },
      { value: 94, label: "Match Accuracy", suffix: "%", icon: Target },
      { value: 67, label: "Cost Reduction", suffix: "%", icon: BarChart3 },
      { value: 24, label: "Hours Active", suffix: "/7", icon: Clock }
    ],
    trustIndicators: [
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption and compliance with global data protection standards",
        badges: ["SOC 2", "GDPR", "CCPA"]
      },
      {
        icon: Award,
        title: "Proven Results",
        description: "Trusted by Fortune 500 companies with verified performance improvements",
        badges: ["ISO 27001", "Enterprise", "Fortune 500"]
      },
      {
        icon: Building2,
        title: "Scale & Reliability",
        description: "Cloud-native architecture supporting organizations from 50 to 50,000+ employees",
        badges: ["99.9% Uptime", "Global CDN", "Auto-Scale"]
      }
    ]
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95" />
        
        {/* Sophisticated floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/6 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/6 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Premium glass overlay */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-border/30 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-8 h-8 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-transparent rounded-full flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-transparent rounded-full" />
              <Rocket className="w-4 h-4 text-[#0C8EFF] relative z-10" />
            </div>
            
            <span className="text-foreground font-semibold text-base relative z-10">Complete AI Hiring Platform</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automate Hiring
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              End-to-End
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive AI-powered platform that transforms your entire hiring process. 
            From global talent discovery to final placement, our 11 specialized AI agents work autonomously 
            to deliver exceptional results while you focus on strategic growth.
          </motion.p>
        </motion.div>

        {/* Core Platform Capabilities */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {platformOverview.coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  {/* Premium Liquid Glass Capability Card */}
                  <div className="relative p-8 h-full transition-all duration-500 group overflow-hidden rounded-2xl">
                    
                    {/* Multi-Layer Glass Background */}
                    <div className="absolute inset-0 rounded-2xl bg-background/60 dark:bg-background/40 backdrop-blur-xl group-hover:bg-background/80 dark:group-hover:bg-background/60 transition-all duration-500" />
                    
                    {/* Sophisticated Glass Border */}
                    <div className="absolute inset-0 rounded-2xl border border-border/20 dark:border-white/10 group-hover:border-border/40 dark:group-hover:border-white/20 shadow-lg group-hover:shadow-xl dark:shadow-black/20 transition-all duration-500" />
                    
                    {/* Premium Glass Reflections */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/15" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0C8EFF]/10 to-transparent dark:from-[#0C8EFF]/5 rounded-tr-2xl" />
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent dark:from-white/[0.03] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Premium Header */}
                      <div className="mb-8">
                        {/* Modern Premium Icon */}
                        <motion.div 
                          className="w-16 h-16 md:w-20 md:h-20 bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-border/30 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0C8EFF]/10 group-hover:to-[#9F62ED]/10 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.05, 
                            rotate: 3,
                            boxShadow: "0 25px 50px -12px rgba(12, 142, 255, 0.25)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/90 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                        </motion.div>
                        
                        {/* Premium Metric Badge */}
                        <motion.div 
                          className="inline-flex px-4 py-2 bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-full border border-border/30 dark:border-white/20 shadow-sm group-hover:border-[#0C8EFF]/30 group-hover:bg-gradient-to-r group-hover:from-[#0C8EFF]/5 group-hover:to-[#9F62ED]/5 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-sm font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                            {capability.metric}
                          </span>
                        </motion.div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight group-hover:text-[#0C8EFF] transition-colors duration-300">
                          {capability.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg group-hover:text-muted-foreground/90 transition-colors duration-300">
                          {capability.description}
                        </p>
                      </div>
                      
                      {/* Interaction Indicator */}
                      <motion.div 
                        className="absolute bottom-6 right-6 w-10 h-10 bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Eye className="w-5 h-5 text-[#0C8EFF]" />
                      </motion.div>
                    </div>
                    
                    {/* Subtle gradient overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${capability.gradient.includes('via') ? 
                          'rgba(12, 142, 255, 0.04), rgba(159, 98, 237, 0.04), rgba(12, 142, 255, 0.04)' : 
                          capability.gradient.includes('to-[#9F62ED]') ? 
                          'rgba(12, 142, 255, 0.04), rgba(159, 98, 237, 0.04)' : 
                          'rgba(159, 98, 237, 0.04), rgba(12, 142, 255, 0.04)'
                        }, transparent)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Performance Metrics */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Proven Performance
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Real results from enterprise clients across industries
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {platformOverview.keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="group"
                >
                  {/* Premium Metric Card */}
                  <div className="relative p-6 text-center transition-all duration-500 group overflow-hidden rounded-xl">
                    
                    {/* Glass Background */}
                    <div className="absolute inset-0 rounded-xl bg-background/60 dark:bg-background/40 backdrop-blur-xl group-hover:bg-background/80 dark:group-hover:bg-background/60 transition-all duration-500" />
                    
                    {/* Glass Border */}
                    <div className="absolute inset-0 rounded-xl border border-border/20 dark:border-white/10 group-hover:border-[#0C8EFF]/30 shadow-lg group-hover:shadow-xl transition-all duration-500" />
                    
                    {/* Glass Reflections */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/15" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div 
                        className="w-12 h-12 bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-sm mb-4 mx-auto group-hover:bg-gradient-to-br group-hover:from-[#0C8EFF]/10 group-hover:to-[#9F62ED]/10 transition-all duration-300"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-6 h-6 text-foreground/80 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                      </motion.div>
                      
                      {/* Metric Value */}
                      <motion.div 
                        className="text-3xl md:text-4xl font-bold text-foreground mb-1"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                      >
                        {metric.value}
                        <span className="text-lg text-muted-foreground ml-1">{metric.suffix}</span>
                      </motion.div>
                      
                      {/* Metric Label */}
                      <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                    </div>
                    
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust & Confidence Section */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {platformOverview.trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                className="group"
              >
                {/* Premium Trust Card */}
                <div className="relative p-8 h-full transition-all duration-500 group overflow-hidden rounded-2xl">
                  
                  {/* Glass Background */}
                  <div className="absolute inset-0 rounded-2xl bg-background/60 dark:bg-background/40 backdrop-blur-xl group-hover:bg-background/80 dark:group-hover:bg-background/60 transition-all duration-500" />
                  
                  {/* Glass Border */}
                  <div className="absolute inset-0 rounded-2xl border border-border/20 dark:border-white/10 group-hover:border-border/40 dark:group-hover:border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-500" />
                  
                  {/* Glass Reflections */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/15" />
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent dark:from-white/[0.03] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      {/* Premium Icon */}
                      <motion.div 
                        className="w-16 h-16 bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-border/30 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0C8EFF]/10 group-hover:to-[#9F62ED]/10 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05, 
                          rotate: 3,
                          boxShadow: "0 25px 50px -12px rgba(12, 142, 255, 0.25)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-8 h-8 text-foreground/90 group-hover:text-[#0C8EFF] transition-colors duration-300" strokeWidth={1.5} />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-xl font-semibold text-foreground leading-tight group-hover:text-[#0C8EFF] transition-colors duration-300">
                        {indicator.title}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed text-base group-hover:text-muted-foreground/90 transition-colors duration-300">
                        {indicator.description}
                      </p>
                    </div>
                    
                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-2">
                      {indicator.badges.map((badge, badgeIndex) => (
                        <motion.div
                          key={badgeIndex}
                          className="inline-flex px-3 py-1 bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-full border border-border/30 dark:border-white/20 shadow-sm text-xs font-medium text-foreground/80 group-hover:border-[#0C8EFF]/30 group-hover:text-[#0C8EFF] transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 2.4 + index * 0.1 + badgeIndex * 0.05 }}
                        >
                          {badge}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
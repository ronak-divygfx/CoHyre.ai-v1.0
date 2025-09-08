import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const trustedCompanies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLabs", logo: "IL" },
    { name: "FutureScale", logo: "FS" },
    { name: "BuildTech", logo: "BT" },
    { name: "GrowthOS", logo: "GO" },
    { name: "NextGen", logo: "NG" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudTech", logo: "CT" },
    { name: "AICore", logo: "AC" },
    { name: "ScaleUp", logo: "SU" },
    { name: "MetaTech", logo: "MT" },
    { name: "VectorAI", logo: "VA" },
    { name: "NeuralFlow", logo: "NF" },
    { name: "QuantumLabs", logo: "QL" },
    { name: "CodeMatrix", logo: "CM" }
  ];

  const mediaPartners = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Forbes", logo: "F" },
    { name: "Wired", logo: "W" },
    { name: "VentureBeat", logo: "VB" },
    { name: "MIT Tech Review", logo: "MIT" },
    { name: "Harvard Business", logo: "HBR" },
    { name: "Fast Company", logo: "FC" },
    { name: "Reuters", logo: "R" },
    { name: "Bloomberg", logo: "B" },
    { name: "Wall Street Journal", logo: "WSJ" },
    { name: "The Verge", logo: "TV" },
    { name: "Axios", logo: "AX" }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 md:pt-32">
      {/* Enhanced Background with CoHyre.ai Brand Colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/8 via-[#9F62ED]/4 to-[#0C8EFF]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/8 via-[#0C8EFF]/4 to-[#9F62ED]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Live Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Gradient Border Pill */}
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg hover:from-[#0C8EFF] hover:via-[#9F62ED] hover:to-[#0C8EFF] hover:shadow-xl hover:shadow-[#0C8EFF]/20 transition-all duration-300 group">
            <Badge className="bg-background/80 backdrop-blur-xl text-foreground px-6 py-3 rounded-full text-sm font-medium border-0 group-hover:bg-background/90 transition-all duration-300">
              <div className="w-2 h-2 bg-[#0C8EFF] rounded-full animate-pulse mr-3" />
              Multi-Agent AI Platform Live
            </Badge>
          </div>
        </motion.div>

        {/* Main Heading with Brand Gradient */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
            Hiring That Thinks Ahead
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6">
            <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
              <span className="font-semibold text-foreground">Reactive</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="font-semibold text-foreground">Proactive</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="font-semibold text-foreground">Autonomous</span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="font-semibold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
                Hiring OS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The world's most advanced multi-agent hiring intelligence built to end the era of resumes & legacy ATS.
        </motion.p>

        {/* Premium CTA Buttons with Thin Gradient Borders & Popup Effects */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Primary CTA - Get Started Today */}
          <motion.div
            className="relative group"
            whileHover={{
              scale: 1.08,
              y: -4,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Thin Gradient Border Container */}
            <div className="p-[1px] bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] rounded-full group-hover:p-[2px] group-hover:shadow-2xl group-hover:shadow-[#0C8EFF]/20 transition-all duration-400">
              <button
                onClick={() => onNavigate("contact")}
                className="relative w-full px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium bg-background/80 backdrop-blur-xl text-foreground hover:text-[#0C8EFF] transition-all duration-400 overflow-hidden group-hover:bg-background/90"
              >
                {/* Liquid Glass Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Subtle Inner Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/3 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </div>
              </button>
            </div>

            {/* Premium Shadow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Secondary CTA - Watch Video */}
          <motion.div
            className="relative group"
            whileHover={{
              scale: 1.08,
              y: -4,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Thin Gradient Border Container */}
            <div className="p-[1px] bg-gradient-to-r from-[#0C8EFF]/40 via-[#9F62ED]/40 to-[#0C8EFF]/40 rounded-full group-hover:p-[2px] group-hover:from-[#0C8EFF] group-hover:via-[#9F62ED] group-hover:to-[#0C8EFF] group-hover:shadow-2xl group-hover:shadow-[#9F62ED]/20 transition-all duration-400">
              <button
                onClick={() => onNavigate("videos")}
                className="relative w-full px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium bg-background/80 backdrop-blur-xl text-foreground hover:text-[#9F62ED] transition-all duration-400 overflow-hidden group-hover:bg-background/90"
              >
                {/* Liquid Glass Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Subtle Inner Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#9F62ED]/5 via-[#0C8EFF]/3 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span>Watch Video</span>
                </div>
              </button>
            </div>

            {/* Premium Shadow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#9F62ED]/10 via-[#0C8EFF]/10 to-[#9F62ED]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <button
            onClick={() => onNavigate("testimonials")}
            className="text-sm sm:text-base font-semibold text-foreground mb-6 sm:mb-8 hover:text-[#0C8EFF] transition-colors duration-300 group bg-background/60 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-border/30"
          >
            <span>Trusted by forward-thinking companies</span>
            <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="scroll-container-full">
          <div className="flex animate-scroll-fast will-change-transform">
            {trustedCompanies.concat(trustedCompanies).map((company, index) => (
              <motion.button
                key={`${company.name}-${index}`}
                onClick={() => onNavigate("testimonials")}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mx-4 sm:mx-16 flex-shrink-0 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center text-xs font-bold">
                  {company.logo}
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{company.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* News & Media Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 bg-background/60 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-border/30">
            <Sparkles className="w-5 h-5 text-[#0C8EFF]" />
            <p className="text-base font-semibold text-foreground">News & Media</p>
          </div>
        </div>

        <div className="scroll-container-full">
          <div className="flex animate-scroll-medium will-change-transform">
            {mediaPartners.concat(mediaPartners).map((media, index) => (
              <motion.button
                key={`${media.name}-${index}`}
                onClick={() => onNavigate("press")}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mx-4 sm:mx-16 flex-shrink-0 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 rounded-lg bg-muted/30 group-hover:bg-muted/50 flex items-center justify-center text-xs font-bold transition-colors duration-300">
                  {media.logo}
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{media.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
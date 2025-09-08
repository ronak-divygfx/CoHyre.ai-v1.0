import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { TrendingUp, TrendingDown, Search, Brain, Target, Rocket, ArrowRight, Zap, Bot, Network, BarChart3, ChevronRight, Sparkles, Activity, Gauge, Clock, Users, MessageCircle, Settings, PlayCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect, memo, useCallback, useMemo } from "react";
import referenceImage from 'figma:asset/68103d75ced3e12824c7641bed8696f744171b5c.png';

interface WhyCoHyreSectionProps {
  onNavigate?: (page: string) => void;
}

// Optimized animated counter hook with throttling
const useAnimatedCounter = (end: number, duration: number = 2000, inView: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [inView, end, duration]);

  return count;
};

// Throttled mouse tracking for better performance
const useThrottledMousePosition = (throttleMs: number = 16) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lastUpdateRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastUpdateRef.current >= throttleMs) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastUpdateRef.current = now;
    }
  }, [throttleMs]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return mousePosition;
};

export const WhyCoHyreSection = memo(({ onNavigate }: WhyCoHyreSectionProps) => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const workflowRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const workflowInView = useInView(workflowRef, { once: true, amount: 0.3 });

  // Optimized mouse tracking with throttling
  const mousePosition = useThrottledMousePosition(16);

  const crisisStats = [
    {
      number: useAnimatedCounter(42, 2000, statsInView),
      suffix: "%",
      title: "Increase in Time-to-Hire",
      description: "Companies taking 40+ days to fill critical positions",
      trend: "up",
      borderColor: "border-slate-300/40",
      borderGradient: "from-slate-400 to-slate-600",
      bgGlass: "from-background/60 to-background/30",
      textColor: "text-foreground",
      accentColor: "text-slate-600"
    },
    {
      number: useAnimatedCounter(67, 2000, statsInView),
      suffix: "%",
      title: "Cost-per-Hire Surge",
      description: "Average hiring costs have nearly doubled since 2020",
      trend: "up",
      borderColor: "border-orange-300/40",
      borderGradient: "from-orange-400 to-orange-600",
      bgGlass: "from-background/60 to-background/30",
      textColor: "text-foreground",
      accentColor: "text-orange-600"
    },
    {
      number: useAnimatedCounter(71, 2000, statsInView),
      suffix: "%",
      title: "Quality Mismatch Rate",
      description: "New hires failing to meet performance expectations",
      trend: "up",
      borderColor: "border-red-300/40",
      borderGradient: "from-red-400 to-red-600",
      bgGlass: "from-background/60 to-background/30",
      textColor: "text-foreground",
      accentColor: "text-red-600"
    },
    {
      number: useAnimatedCounter(89, 2000, statsInView),
      suffix: "%",
      title: "Recruiter Burnout",
      description: "HR professionals overwhelmed by manual processes",
      trend: "up",
      borderColor: "border-purple-300/40",
      borderGradient: "from-purple-400 to-purple-600",
      bgGlass: "from-background/60 to-background/30",
      textColor: "text-foreground",
      accentColor: "text-purple-600"
    }
  ];

  const solutionMetrics = [
    {
      number: useAnimatedCounter(85, 2500, statsInView),
      suffix: "%",
      title: "Faster Hiring",
      description: "From weeks to days with AI automation",
      improvement: "+85%",
      icon: Zap,
      progress: 85
    },
    {
      number: useAnimatedCounter(94, 2500, statsInView),
      suffix: "%",
      title: "Match Accuracy",
      description: "Precision candidate-role alignment",
      improvement: "+47%",
      icon: Target,
      progress: 94
    },
    {
      number: useAnimatedCounter(60, 2500, statsInView),
      suffix: "%",
      title: "Cost Reduction",
      description: "Significant savings on hiring expenses",
      improvement: "-60%",
      icon: TrendingDown,
      progress: 60
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Premium background with CoHyre.ai brand colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/5 to-[#E241B7]/10 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-2/3 right-1/5 w-80 h-80 bg-gradient-to-br from-[#9F62ED]/10 via-[#E241B7]/5 to-[#0C8EFF]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Gradient Border Pill */}
          <motion.div
            className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg hover:from-[#0C8EFF] hover:via-[#9F62ED] hover:to-[#0C8EFF] hover:shadow-xl hover:shadow-[#0C8EFF]/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-xl px-6 py-3 rounded-full border-0 group-hover:bg-background/90 relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-8 h-8 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/20 to-[#0C8EFF]/20 rounded-full flex items-center justify-center border border-[#0C8EFF]/30 shadow-sm backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-transparent rounded-full" />
                <Activity className="w-4 h-4 text-[#0C8EFF] relative z-10" />
              </div>
              <span className="text-foreground font-medium text-base relative z-10">The Reality of Modern Hiring</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Hiring Crisis
            <br />
            <span className="bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#E241B7] bg-clip-text text-transparent">
              In Numbers
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Data reveals the true scale of today's hiring challenges.
            Traditional methods are failing while AI-powered solutions deliver measurable transformation.
          </motion.p>
        </motion.div>

        {/* Crisis Statistics Cards */}
        <motion.div
          ref={statsRef}
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            {/* Premium Gradient Border Pill */}
            <div className="inline-block p-[1px] bg-gradient-to-r from-gray-400/60 via-gray-500/60 to-gray-400/60 rounded-full shadow-sm hover:from-gray-400 hover:via-gray-500 hover:to-gray-400 hover:shadow-md hover:shadow-gray-400/20 transition-all duration-300 group">
              <motion.div
                className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-xl px-4 py-2 rounded-full border-0 group-hover:bg-background/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Gauge className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-foreground">Industry Crisis Metrics</span>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crisisStats.map((stat, index) => {
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Modern Liquid Glass Card */}
                  <div className={`relative p-8 text-center h-full bg-gradient-to-br ${stat.bgGlass} backdrop-blur-xl ${stat.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden rounded-3xl`}>

                    {/* Glass Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br ${stat.borderGradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}>
                      <div className="absolute inset-[2px] rounded-3xl bg-background/80 backdrop-blur-xl" />
                    </div>

                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent dark:from-white/[0.08] rounded-3xl pointer-events-none" />

                    {/* Floating Glass Border Accent */}
                    <div className={`absolute top-4 right-4 w-12 h-1 bg-gradient-to-r ${stat.borderGradient} rounded-full opacity-60`} />

                    {/* Content Layer */}
                    <div className="relative z-10">
                      {/* Large Number Display */}
                      <div className="mb-6">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-baseline justify-center gap-1">
                            <motion.span
                              className={`text-6xl md:text-7xl font-bold ${stat.textColor} leading-none`}
                              key={stat.number}
                              initial={{ scale: 1.1, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                              {stat.number}
                            </motion.span>
                            <span className={`text-3xl font-medium ${stat.accentColor} leading-none opacity-80`}>{stat.suffix}</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="mb-8">
                        <h4 className={`text-lg font-semibold ${stat.textColor} mb-3 leading-tight`}>{stat.title}</h4>
                        <p className={`text-sm text-muted-foreground leading-relaxed`}>{stat.description}</p>
                      </div>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.borderGradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Solution Metrics */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            {/* Premium Gradient Border Pill */}
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg hover:from-[#0C8EFF] hover:via-[#9F62ED] hover:to-[#0C8EFF] hover:shadow-xl hover:shadow-[#0C8EFF]/20 transition-all duration-300 group">
              <motion.div
                className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-xl px-4 py-2 rounded-full border-0 group-hover:bg-background/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#0C8EFF]" />
                <span className="text-sm font-medium text-foreground">Measurable Impact</span>
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              CoHyre.ai Transformation
            </h3>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Proven results from AI-powered hiring intelligence
            </p>
          </div>

          {/* Premium Solution Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutionMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Premium Glass Card */}
                  <Card className="relative p-8 h-full bg-background/70 backdrop-blur-xl border border-border/10 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden rounded-2xl">
                    {/* Sophisticated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/3 via-[#9F62ED]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Premium glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-transparent rounded-2xl" />

                    {/* Floating glass icon container */}
                    <div className="absolute top-6 right-6 z-20">
                      <motion.div
                        className="w-12 h-12 bg-background/80 backdrop-blur-xl border border-border/20 rounded-xl flex items-center justify-center shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px -12px rgba(12, 142, 255, 0.15)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-[#0C8EFF]" strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    <div className="relative z-10">
                      {/* Premium improvement badge */}
                      <div className="mb-6">
                        <motion.div
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C8EFF]/15 via-[#9F62ED]/15 to-[#0C8EFF]/15 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0C8EFF]/20"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-full"></div>
                          <span className="text-sm font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                            {metric.improvement}
                          </span>
                        </motion.div>
                      </div>

                      {/* Large number display */}
                      <div className="mb-6">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            className="text-5xl font-bold text-foreground leading-none block"
                            key={metric.number}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          >
                            {metric.number}
                            <span className="text-2xl text-muted-foreground ml-1">%</span>
                          </motion.span>
                        </motion.div>
                      </div>

                      {/* Minimal progress indicator */}
                      <div className="mb-6">
                        <div className="relative h-1 bg-muted/20 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-full"
                            initial={{ width: 0 }}
                            animate={statsInView ? { width: `${metric.progress}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-foreground leading-tight">
                          {metric.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {metric.description}
                        </p>
                      </div>

                      {/* Subtle interaction indicator */}
                      <motion.div
                        className="absolute bottom-6 left-8 w-8 h-1 bg-gradient-to-r from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scaleX: 1.5 }}
                      />
                    </div>

                    {/* Premium hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(12, 142, 255, 0.05), rgba(159, 98, 237, 0.05), transparent)',
                      }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>



        {/* Premium Autonomous Talent Pipeline */}
        <motion.div
          ref={workflowRef}
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            {/* Premium Gradient Border Pill */}
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#9F62ED]/60 via-[#0C8EFF]/60 to-[#9F62ED]/60 rounded-full shadow-lg hover:from-[#9F62ED] hover:via-[#0C8EFF] hover:to-[#9F62ED] hover:shadow-xl hover:shadow-[#9F62ED]/20 transition-all duration-300 group">
              <motion.div
                className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-xl px-4 py-2 rounded-full border-0 group-hover:bg-background/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <PlayCircle className="w-4 h-4 text-[#9F62ED]" />
                <span className="text-sm font-medium text-foreground">Autonomous Talent Pipeline</span>
              </motion.div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Hiring Flow
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of hiring with our intelligent pipeline that transforms talent acquisition from discovery to placement
            </p>
          </div>

          {/* Premium Four-Card Hiring Pipeline Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* Flow Connection Lines - Desktop Only */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {/* Connection line from card 1 to 2 */}
              <motion.div
                className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-gradient-to-r from-[#0C8EFF]/40 to-[#9F62ED]/40 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={workflowInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: "left center" }}
              />
              {/* Connection line from card 2 to 3 */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-[#9F62ED]/40 to-[#E241B7]/40 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={workflowInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{ transformOrigin: "left center" }}
              />
              {/* Connection line from card 3 to 4 */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-16 h-0.5 bg-gradient-to-r from-[#E241B7]/40 to-[#0C8EFF]/40 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={workflowInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{ transformOrigin: "left center" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
              {[
                {
                  icon: Search,
                  title: "Source & Discover",
                  description: "AI scans 400M+ profiles globally, identifying top talent across platforms",
                  step: "01",
                  gradient: "from-[#0C8EFF] to-[#9F62ED]",
                  flowLabel: "Global Talent Pool",
                  flowMetric: "400M+ Profiles",
                  cardGradient: "from-blue-900/80 via-indigo-900/85 to-purple-900/80 dark:from-blue-950/90 dark:via-indigo-950/90 dark:to-purple-950/85",
                  accentGradient: "from-[#0C8EFF] to-[#9F62ED]",
                  iconBg: "bg-[#0C8EFF]/25 dark:bg-[#0C8EFF]/35"
                },
                {
                  icon: Brain,
                  title: "Screen & Assess",
                  description: "Advanced evaluation through skills analysis and cultural fit prediction",
                  step: "02",
                  gradient: "from-[#9F62ED] to-[#E241B7]",
                  flowLabel: "AI Evaluation",
                  flowMetric: "Multi-dimensional Analysis",
                  cardGradient: "from-purple-900/80 via-violet-900/85 to-fuchsia-900/80 dark:from-purple-950/90 dark:via-violet-950/90 dark:to-fuchsia-950/85",
                  accentGradient: "from-[#9F62ED] to-[#E241B7]",
                  iconBg: "bg-[#9F62ED]/25 dark:bg-[#9F62ED]/35"
                },
                {
                  icon: MessageCircle,
                  title: "Interview & Match",
                  description: "Autonomous AI conducts structured interviews and ranks candidates",
                  step: "03",
                  gradient: "from-[#E241B7] to-[#0C8EFF]",
                  flowLabel: "Autonomous Interviews",
                  flowMetric: "24/7 AI Interviewers",
                  cardGradient: "from-fuchsia-900/80 via-pink-900/85 to-blue-900/80 dark:from-fuchsia-950/90 dark:via-pink-950/90 dark:to-blue-950/85",
                  accentGradient: "from-[#E241B7] to-[#0C8EFF]",
                  iconBg: "bg-[#E241B7]/25 dark:bg-[#E241B7]/35"
                },
                {
                  icon: Settings,
                  title: "Optimize & Learn",
                  description: "Continuous learning improves precision and reduces time-to-fill",
                  step: "04",
                  gradient: "from-[#0C8EFF] to-[#9F62ED]",
                  flowLabel: "Continuous Learning",
                  flowMetric: "Self-Improving AI",
                  cardGradient: "from-blue-900/80 via-cyan-900/85 to-purple-900/80 dark:from-blue-950/90 dark:via-cyan-950/90 dark:to-purple-950/85",
                  accentGradient: "from-[#0C8EFF] to-[#9F62ED]",
                  iconBg: "bg-[#0C8EFF]/25 dark:bg-[#0C8EFF]/35"
                }
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group relative overflow-hidden"
                  >
                    {/* Apple Liquid Glass Card Container */}
                    <div className={`relative h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-2xl bg-gradient-to-b ${step.cardGradient} 
                      border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 
                      hover:scale-[1.03] hover:border-white/30 dark:hover:border-white/20 cursor-pointer overflow-hidden
                      backdrop-blur-xl group`}>

                      {/* Apple-style Liquid Glass Surface */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent dark:from-white/[0.06] dark:via-white/[0.02] rounded-2xl" />

                      {/* Premium Glass Edges - Apple Style */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/25" />
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/20" />
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
                      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/15" />

                      {/* Liquid Glass Inner Glow */}
                      <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent dark:from-white/[0.04] pointer-events-none" />

                      {/* Step Number Badge - Top Left Glass */}
                      <div className="absolute top-3 left-3 z-20">
                        <motion.div
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-background/10 backdrop-blur-xl
                            border border-white/25 dark:border-white/15 flex items-center justify-center
                            shadow-lg group-hover:shadow-xl transition-all duration-300"
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent">
                            {step.step}
                          </span>
                        </motion.div>
                      </div>

                      {/* Top Corner Accent - Smaller */}
                      <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${step.accentGradient} opacity-15 rounded-tr-2xl`} />

                      {/* Bottom Illumination - Smaller */}
                      <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${step.accentGradient} opacity-8 rounded-b-2xl`} />

                      {/* Content Container - Compact */}
                      <div className="relative h-full flex flex-col p-4 sm:p-5 z-10">
                        {/* Icon Section - Smaller */}
                        <div className="flex justify-center mb-4">
                          <motion.div
                            className={`w-10 h-10 sm:w-12 sm:h-12 ${step.iconBg} backdrop-blur-xl 
                              border border-white/25 dark:border-white/15 rounded-xl flex items-center justify-center 
                              shadow-lg group-hover:shadow-xl transition-all duration-500`}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" strokeWidth={1.5} />
                          </motion.div>
                        </div>

                        {/* Content Section - Compact Responsive Typography */}
                        <div className="flex-1 text-center space-y-2 sm:space-y-3">
                          <motion.h4
                            className="text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300 leading-tight"
                            whileHover={{ y: -1 }}
                          >
                            {step.title}
                          </motion.h4>

                          <motion.p
                            className="text-white/75 text-xs sm:text-sm leading-relaxed drop-shadow-sm group-hover:text-white/85 transition-colors duration-300 px-1"
                            whileHover={{ y: -1 }}
                          >
                            {step.description}
                          </motion.p>
                        </div>

                        {/* Flow Metric Badge - Compact */}
                        <div className="mt-3 flex justify-center">
                          <motion.div
                            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-white/12 to-white/6 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-white/20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <span className="text-xs font-medium text-white/90">
                              {step.flowMetric}
                            </span>
                          </motion.div>
                        </div>

                        {/* Bottom Section - Flow Connection Dots - Compact */}
                        <div className="flex justify-center items-center space-x-1.5 mt-2">
                          {[...Array(3)].map((_, dotIndex) => (
                            <motion.div
                              key={dotIndex}
                              className="w-1 h-1 bg-white/40 rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.4, 0.8, 0.4]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: dotIndex * 0.3
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Apple-style Hover Glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.accentGradient} opacity-0 group-hover:opacity-15 
                          transition-opacity duration-500 rounded-2xl`}
                        initial={false}
                      />

                      {/* Liquid Glass Inner Shadow */}
                      <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/15" />

                      {/* Apple Glass Highlight - Top */}
                      <div className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15 rounded-full" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

WhyCoHyreSection.displayName = "WhyCoHyreSection";
import { 
  Brain, 
  Search, 
  MessageSquare, 
  BarChart3, 
  Network,
  FileText,
  Handshake,
  Zap,
  ArrowRight,
  Cpu,
  Activity
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";

export function ProductSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [currentProcessingStep, setCurrentProcessingStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Auto-cycle through steps to show AI processing
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentProcessingStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  // Streamlined AI hiring flow - focused on automation
  const hiringFlow = [
    {
      id: 1,
      icon: FileText,
      title: "Analyze",
      description: "AI understands job requirements",
      progress: "Requirements parsed"
    },
    {
      id: 2,
      icon: Search,
      title: "Discover",
      description: "400M+ profiles scanned",
      progress: "Candidates found"
    },
    {
      id: 3,
      icon: Brain,
      title: "Screen",
      description: "Multi-dimensional evaluation",
      progress: "Skills assessed"
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Interview",
      description: "Autonomous conversations",
      progress: "Interviews conducted"
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Rank",
      description: "Intelligent candidate ranking",
      progress: "Insights generated"
    },
    {
      id: 6,
      icon: Handshake,
      title: "Close",
      description: "Automated offer management",
      progress: "Offers sent"
    }
  ];

  return (
    <section ref={sectionRef} id="product" className="py-16 px-6 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header - Compact */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Glass Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-xl px-4 py-2 rounded-full mb-6 border border-border/30 shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glass effects */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent dark:from-white/[0.04] rounded-full" />
            
            <div className="w-5 h-5 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded-full flex items-center justify-center border border-[#0C8EFF]/30 backdrop-blur-sm">
              <Network className="w-3 h-3 text-[#0C8EFF]" />
            </div>
            <span className="text-foreground font-medium text-sm">AI-Led Automation</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block">Autonomous Hiring</span>
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              From Job to Hire
            </span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete hiring automation in 6 intelligent steps — from job analysis to offer acceptance.
          </motion.p>
        </motion.div>

        {/* AI Process Flow Infographic - Redesigned */}
        <div className="relative max-w-7xl mx-auto">
          {/* Glass Transparent Background */}
          <div className="relative backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}>
            {/* Subtle glass effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rounded-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Minimal flowing background glow */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(12, 142, 255, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(159, 98, 237, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(12, 142, 255, 0.08) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Section Label */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#0C8EFF] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/70">Autonomous AI Process</span>
              <div className="w-2 h-2 bg-[#9F62ED] rounded-full animate-pulse" />
            </motion.div>

            {/* Process Flow Container */}
            <div className="relative">
              {/* Flowing Connection Lines */}
              <svg className="absolute inset-0 w-full h-full z-0" style={{ top: '50px' }}>
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(12, 142, 255, 0.6)" />
                    <stop offset="50%" stopColor="rgba(159, 98, 237, 0.6)" />
                    <stop offset="100%" stopColor="rgba(12, 142, 255, 0.6)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Flowing path connecting all steps */}
                <motion.path
                  d="M 100 80 Q 200 60, 300 80 Q 400 100, 500 80 Q 600 60, 700 80 Q 800 100, 900 80 Q 1000 60, 1100 80"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                
                {/* Simple flowing particles */}
                <motion.circle
                  r="2"
                  fill="url(#flowGradient)"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? {
                    opacity: [0, 0.8, 0],
                    cx: [100, 1100],
                    cy: [80, 80]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                />
              </svg>

              {/* Process Steps - Premium Circular Design */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10 mt-4">
                {hiringFlow.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentProcessingStep === index;
                  const isCompleted = currentProcessingStep > index;
                  
                  return (
                    <motion.div
                      key={step.id}
                      className="relative group flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.15) }}
                    >
                      {/* Step Number Above Circle */}
                      <motion.div 
                        className="mb-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border"
                        style={{
                          border: isActive 
                            ? '2px solid #0C8EFF'
                            : isCompleted
                            ? '2px solid #9F62ED'
                            : '2px solid rgba(255, 255, 255, 0.3)',
                          color: isActive 
                            ? '#0C8EFF' 
                            : isCompleted 
                            ? '#9F62ED' 
                            : 'rgba(255, 255, 255, 0.7)',
                          background: 'transparent'
                        }}
                        whileHover={{ scale: 1.1 }}
                        animate={isActive ? { 
                          scale: [1, 1.05, 1],
                          borderColor: ['#0C8EFF', '#9F62ED', '#0C8EFF']
                        } : {}}
                        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                      >
                        {step.id}
                      </motion.div>

                      {/* Simple Glass Circle Container */}
                      <motion.div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -8,
                          boxShadow: isActive 
                            ? '0 12px 40px rgba(12, 142, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            : isCompleted
                            ? '0 12px 40px rgba(159, 98, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            : '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          background: isActive 
                            ? 'linear-gradient(135deg, rgba(12, 142, 255, 0.15) 0%, rgba(159, 98, 237, 0.1) 100%)'
                            : isCompleted
                            ? 'linear-gradient(135deg, rgba(159, 98, 237, 0.15) 0%, rgba(12, 142, 255, 0.1) 100%)'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        {/* Minimal glass reflection */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                          }}
                        />
                        
                        {/* Icon */}
                        <Icon 
                          className={`w-8 h-8 transition-all duration-500 ${
                            isActive 
                              ? 'text-[#0C8EFF]' 
                              : isCompleted 
                              ? 'text-[#9F62ED]' 
                              : 'text-foreground/60'
                          }`} 
                          strokeWidth={1.8} 
                        />
                      </motion.div>

                      {/* Process Description */}
                      <motion.div
                        className="text-center mt-4 space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                      >
                        {/* Step Title */}
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          isActive 
                            ? 'text-[#0C8EFF]' 
                            : isCompleted 
                            ? 'text-[#9F62ED]' 
                            : 'text-foreground/80'
                        }`}>
                          {step.title}
                        </h4>
                        
                        {/* Step Description */}
                        <p className="text-xs text-foreground/60 leading-relaxed max-w-[100px] mx-auto">
                          {step.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="flex items-center justify-center gap-1 pt-1">
                          {isActive && (
                            <>
                              <motion.div
                                className="w-1.5 h-1.5 bg-[#0C8EFF] rounded-full"
                                animate={{ 
                                  opacity: [0.5, 1, 0.5],
                                  scale: [1, 1.3, 1]
                                }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <span className="text-xs font-medium text-[#0C8EFF]">Active</span>
                            </>
                          )}
                          
                          {isCompleted && (
                            <>
                              <div className="w-1.5 h-1.5 bg-[#9F62ED] rounded-full" />
                              <span className="text-xs font-medium text-[#9F62ED]">Done</span>
                            </>
                          )}
                          
                          {!isActive && !isCompleted && (
                            <>
                              <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
                              <span className="text-xs font-medium text-foreground/50">Pending</span>
                            </>
                          )}
                        </div>
                      </motion.div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/20 via-[#9F62ED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"
                        style={{ 
                          width: '120px', 
                          height: '120px', 
                          left: '50%', 
                          top: '0',
                          transform: 'translateX(-50%)' 
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Process Status Label */}
              <motion.div
                className="flex items-center justify-center gap-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 }}
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-foreground/10" />
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Activity className="w-4 h-4 text-[#0C8EFF]" />
                  <span className="text-sm font-medium text-foreground/70">Autonomous Processing</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-foreground/10 to-foreground/10" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Intelligence Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {[
            { label: "Automation", value: "100", suffix: "%", icon: Zap },
            { label: "Accuracy", value: "98", suffix: "%", icon: Brain },
            { label: "Speed", value: "10x", suffix: "", icon: ArrowRight },
            { label: "Intelligence", value: "AI", suffix: "", icon: Cpu }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="relative p-3 bg-card/40 backdrop-blur-xl rounded-lg border border-border/20 shadow-sm overflow-hidden group"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Premium glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent dark:from-white/[0.04] rounded-lg" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
                
                {/* Smart glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="w-6 h-6 mx-auto mb-2 bg-gradient-to-br from-[#0C8EFF]/20 to-[#9F62ED]/20 rounded-md flex items-center justify-center border border-[#0C8EFF]/30"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-3 h-3 text-[#0C8EFF]" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Value */}
                  <motion.div 
                    className="text-lg font-bold text-foreground mb-1"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.7 + (index * 0.05) }}
                  >
                    {metric.value}{metric.suffix}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
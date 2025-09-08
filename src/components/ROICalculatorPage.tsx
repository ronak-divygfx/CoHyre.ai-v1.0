import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Zap, 
  Target,
  Download,
  Share,
  ChevronRight,
  Info
} from "lucide-react";

interface ROIMetrics {
  currentCost: number;
  timeToHire: number;
  hirersCount: number;
  avgSalary: number;
  hireVolume: number;
  qualityScore: number;
}

interface ROIResults {
  annualSavings: number;
  timeReduction: number;
  efficiencyGain: number;
  qualityImprovement: number;
  roi: number;
  paybackPeriod: number;
}

export function ROICalculatorPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [metrics, setMetrics] = useState<ROIMetrics>({
    currentCost: 15000,
    timeToHire: 45,
    hirersCount: 3,
    avgSalary: 75000,
    hireVolume: 50,
    qualityScore: 6
  });

  const [results, setResults] = useState<ROIResults>({
    annualSavings: 0,
    timeReduction: 0,
    efficiencyGain: 0,
    qualityImprovement: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const [activeTab, setActiveTab] = useState("basic");

  // Calculate ROI in real-time
  useEffect(() => {
    const calculateROI = () => {
      // CoHyre improvements (conservative estimates)
      const timeToHireReduction = 0.65; // 65% faster
      const costReduction = 0.45; // 45% cost savings
      const qualityImprovement = 0.25; // 25% better quality scores
      const efficiencyMultiplier = 2.5; // 2.5x recruiter efficiency

      // Current costs calculation
      const annualRecruitingCost = metrics.currentCost * metrics.hireVolume;
      const recruiterCost = metrics.hirersCount * 65000; // Average recruiter salary
      const totalCurrentCost = annualRecruitingCost + recruiterCost;

      // Time savings
      const newTimeToHire = metrics.timeToHire * (1 - timeToHireReduction);
      const timeSaved = metrics.timeToHire - newTimeToHire;

      // Cost savings
      const newCostPerHire = metrics.currentCost * (1 - costReduction);
      const annualCostSavings = (metrics.currentCost - newCostPerHire) * metrics.hireVolume;

      // Efficiency gains (hire more with same team)
      const newHireCapacity = metrics.hireVolume * efficiencyMultiplier;
      const additionalHires = newHireCapacity - metrics.hireVolume;
      const revenueFromAdditionalHires = additionalHires * (metrics.avgSalary * 0.3); // 30% of salary as value

      // Total annual savings
      const totalAnnualSavings = annualCostSavings + revenueFromAdditionalHires;

      // CoHyre cost (estimated)
      const cohyreCost = metrics.hireVolume * 800; // $800 per hire

      // ROI calculation
      const netSavings = totalAnnualSavings - cohyreCost;
      const roiPercentage = (netSavings / cohyreCost) * 100;
      const paybackMonths = cohyreCost / (totalAnnualSavings / 12);

      setResults({
        annualSavings: totalAnnualSavings,
        timeReduction: timeSaved,
        efficiencyGain: efficiencyMultiplier,
        qualityImprovement: qualityImprovement * 100,
        roi: roiPercentage,
        paybackPeriod: paybackMonths
      });
    };

    calculateROI();
  }, [metrics]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const resultCards = [
    {
      icon: DollarSign,
      title: "Annual Savings",
      value: formatCurrency(results.annualSavings),
      description: "Total cost savings per year",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Clock,
      title: "Time Reduction",
      value: `${Math.round(results.timeReduction)} days`,
      description: "Faster time-to-hire",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      title: "Efficiency Gain",
      value: `${results.efficiencyGain}x`,
      description: "Recruiter productivity increase",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Target,
      title: "Quality Improvement",
      value: `+${Math.round(results.qualityImprovement)}%`,
      description: "Better hire quality scores",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: TrendingUp,
      title: "ROI",
      value: `${Math.round(results.roi)}%`,
      description: "Return on investment",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      icon: Calculator,
      title: "Payback Period",
      value: `${Math.round(results.paybackPeriod)} months`,
      description: "Time to break even",
      color: "from-teal-500/20 to-green-500/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative min-h-screen">
      {/* Background - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background/80" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 bg-card/60 backdrop-blur-xl">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Calculate Your ROI with
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              CoHyre AI Agents
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how much time and money you could save by replacing your traditional hiring process 
            with our autonomous AI agent network.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 bg-card/40 backdrop-blur-xl rounded-3xl border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                Your Current Hiring Metrics
              </h2>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-6">
                  {/* Basic Metrics */}
                  <div>
                    <Label className="text-foreground mb-2 flex items-center gap-2">
                      Cost Per Hire
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </Label>
                    <Input
                      type="number"
                      value={metrics.currentCost}
                      onChange={(e) => setMetrics({...metrics, currentCost: Number(e.target.value)})}
                      className="bg-input-background/50 backdrop-blur-sm border-border/50"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Industry average: $15,000</p>
                  </div>

                  <div>
                    <Label className="text-foreground mb-2">Time to Hire (days)</Label>
                    <div className="px-4 py-2 bg-muted/30 rounded-lg mb-2">
                      <Slider
                        value={[metrics.timeToHire]}
                        onValueChange={(value) => setMetrics({...metrics, timeToHire: value[0]})}
                        max={120}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>10 days</span>
                      <span className="font-medium">{metrics.timeToHire} days</span>
                      <span>120 days</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground mb-2">Annual Hires</Label>
                    <Input
                      type="number"
                      value={metrics.hireVolume}
                      onChange={(e) => setMetrics({...metrics, hireVolume: Number(e.target.value)})}
                      className="bg-input-background/50 backdrop-blur-sm border-border/50"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                  <div>
                    <Label className="text-foreground mb-2">Number of Recruiters</Label>
                    <Input
                      type="number"
                      value={metrics.hirersCount}
                      onChange={(e) => setMetrics({...metrics, hirersCount: Number(e.target.value)})}
                      className="bg-input-background/50 backdrop-blur-sm border-border/50"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground mb-2">Average Role Salary</Label>
                    <Input
                      type="number"
                      value={metrics.avgSalary}
                      onChange={(e) => setMetrics({...metrics, avgSalary: Number(e.target.value)})}
                      className="bg-input-background/50 backdrop-blur-sm border-border/50"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground mb-2">Current Quality Score (1-10)</Label>
                    <div className="px-4 py-2 bg-muted/30 rounded-lg mb-2">
                      <Slider
                        value={[metrics.qualityScore]}
                        onValueChange={(value) => setMetrics({...metrics, qualityScore: value[0]})}
                        max={10}
                        min={1}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 (Poor)</span>
                      <span className="font-medium">{metrics.qualityScore}/10</span>
                      <span>10 (Excellent)</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <Button 
                  variant="outline" 
                  className="flex-1 bg-card/50 backdrop-blur-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 bg-card/50 backdrop-blur-sm"
                >
                  <Share className="w-4 h-4 mr-2" />
                  Share Results
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="p-8 bg-card/40 backdrop-blur-xl rounded-3xl border border-border shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  Your ROI with CoHyre
                </h2>

                {/* Key Metric */}
                <div className="text-center mb-8 p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {formatCurrency(results.annualSavings)}
                  </div>
                  <div className="text-muted-foreground">Annual Savings Potential</div>
                  <div className="text-sm text-green-600 mt-2 flex items-center justify-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {Math.round(results.roi)}% ROI
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {resultCards.slice(1, 5).map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={card.title}
                        className={`p-4 rounded-xl bg-gradient-to-br ${card.color} border border-border/30`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{card.title}</span>
                        </div>
                        <div className="text-lg font-bold text-foreground mb-1">
                          {card.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {card.description}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 backdrop-blur-xl rounded-2xl border border-border/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ready to achieve these results?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schedule a demo to see how CoHyre's AI agents can transform your hiring process.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Schedule Demo
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Methodology Section */}
        <motion.div
          className="mt-16 p-8 bg-card/40 backdrop-blur-xl rounded-3xl border border-border shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            How We Calculate Your ROI
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Time Savings</h4>
              <p>CoHyre reduces time-to-hire by 65% through proactive candidate sourcing and automated screening.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Cost Reduction</h4>
              <p>45% reduction in cost-per-hire through AI automation and elimination of external recruiting fees.</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Quality Improvement</h4>
              <p>25% improvement in hire quality through AI-powered candidate matching and bias elimination.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cohyreLogo from "figma:asset/ad2405c1fa2fb7d0603759ca50008c28645770ac.png";
import cohyreIcon from "figma:asset/b78e5963a56bd265f08754b6b9974661f15e4697.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Pricing", page: "pricing" },
    { name: "About", page: "about" },
    { name: "Candidates", page: "candidates" },
    { name: "Jobs", page: "jobs" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/30" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Official CoHyre.ai Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center space-x-3 group"
            >
              {/* Use full logo on desktop, icon on mobile */}
              <div className="hidden sm:block">
                <ImageWithFallback
                  src={cohyreLogo}
                  alt="CoHyre.ai Logo"
                  className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="block sm:hidden">
                <ImageWithFallback
                  src={cohyreIcon}
                  alt="CoHyre.ai Icon"
                  className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation with Liquid Glass Effect */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => onNavigate(item.page)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-500 overflow-hidden group ${currentPage === item.page
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Liquid Glass Background */}
                <motion.div
                  className="absolute inset-0 bg-background/40 backdrop-blur-xl rounded-xl border border-border/20 shadow-lg opacity-0 group-hover:opacity-100"
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                    backdropFilter: "blur(0px)"
                  }}
                  whileHover={{
                    scale: 1,
                    opacity: 1,
                    backdropFilter: "blur(16px)"
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                />

                {/* Glass Reflection Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                {/* Subtle Inner Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0C8EFF]/5 via-[#9F62ED]/3 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                />

                {/* Liquid Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(12, 142, 255, 0.1) 0%, 
                      rgba(159, 98, 237, 0.05) 50%, 
                      rgba(12, 142, 255, 0.1) 100%)`,
                    border: '1px solid transparent',
                    backgroundClip: 'padding-box',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Text */}
                <span className="relative z-10 font-medium">{item.name}</span>

                {/* Active State Indicator */}
                {currentPage === item.page && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-full"
                    initial={{ scale: 0, x: "-50%" }}
                    animate={{ scale: 1, x: "-50%" }}
                    transition={{ duration: 0.3 }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle with Glass Effect */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glass Reflection */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </div>
            </motion.button>

            {/* Sign In Button with Glass Effect */}
            <motion.button
              onClick={() => onNavigate("contact")}
              className="relative px-4 py-2 rounded-xl text-sm font-medium overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glass Reflection */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              <span className="relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Sign In
              </span>
            </motion.button>

            {/* Get Started for Free Button with Enhanced Glass Effect */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Outer Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] rounded-xl p-[2px] group-hover:p-[2.5px] transition-all duration-300">
                <div className="w-full h-full bg-background rounded-[10px]" />
              </div>

              <button
                onClick={() => onNavigate("pricing")}
                className="relative px-5 py-2.5 rounded-xl text-sm font-medium overflow-hidden"
              >
                {/* Premium Glass Background */}
                <motion.div
                  className="absolute inset-0 bg-background/60 backdrop-blur-xl rounded-xl"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0C8EFF]/80 via-[#9F62ED]/80 to-[#0C8EFF]/80 rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Premium Glass Reflection */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                <div className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Started for Free</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Mobile Right Side Actions */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glass Reflection */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glass Background */}
              <motion.div
                className="absolute inset-0 bg-background/40 backdrop-blur-xl border border-border/20 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center text-foreground">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 space-y-2 bg-background/80 backdrop-blur-xl border-t border-border/30">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${currentPage === item.page
                  ? "text-foreground bg-muted/50"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ x: 4 }}
              >
                {/* Mobile Glass Effect */}
                <motion.div
                  className="absolute inset-0 bg-background/40 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}

            <div className="pt-4 border-t border-border/30 space-y-2">
              {/* Mobile Sign In */}
              <motion.button
                onClick={() => {
                  onNavigate("contact");
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground relative overflow-hidden group transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-background/40 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Sign In</span>
              </motion.button>

              {/* Mobile Get Started for Free */}
              <div className="p-[2px] bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] rounded-xl">
                <motion.button
                  onClick={() => {
                    onNavigate("pricing");
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Get Started for Free
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
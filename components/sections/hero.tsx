"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ChevronDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { FloatingElements } from "@/components/particle-system";

import { ParticleSystem } from "@/components/particle-system";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/santhoshkumar0918",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/santhosh-kumar-k-a727ba2a7",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/Santhosh0918_", icon: Twitter },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document
        .getElementById("hero-section")
        ?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ParticleSystem />
        <FloatingElements />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-400 backdrop-blur-sm">
              👋 Welcome to my digital world
            </span>
          </motion.div>

          {/* Name with 3D Effect */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Santhosh
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kumar
              </span>
            </motion.h1>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <TypewriterText
              text="Full-Stack Web3 Developer"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4"
            />
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting the Future of Web3 - One Line of Code at a Time
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="/resume.pdf" download="SanthoshKumar_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <link.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="ghost"
              className="text-gray-400 hover:text-white font-medium transition-colors duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Let&apos;s build something amazing together
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

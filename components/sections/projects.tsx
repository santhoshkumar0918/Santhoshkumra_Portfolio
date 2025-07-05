"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  ArrowRight,
  Code,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Meringoo",
    description:
      "A community-driven platform connecting users and brands through digital collectibles and verified identity systems",
    longDescription:
      "Revolutionary Web3 platform that bridges the gap between traditional commerce and decentralized identity. Built with cutting-edge blockchain technology for seamless user experience.",
    image: "/meringoo.png",
    tags: ["Next.js", "Typescript", "Supabase"],
    liveUrl: "https://app.meringoo.com",
    category: "EComm Community Driven Platform",
    status: "Live",
    icon: Globe,
  },
  {
    id: 2,
    title: "SupplyChain",
    description:
      "Decentralized supply chain platform improving transparency, traceability, and accountability in logistics",
    longDescription:
      "Enterprise-grade blockchain solution transforming global supply chain management with immutable tracking and smart contract automation.",
    image: "/supplai.png",
    tags: ["Solidity", "Hardhat", "React", "IPFS", "Polygon"],
    githubUrl: "https://github.com/santhoshkumar0918/supplychain",
    liveUrl: "https://supplychain-demo.vercel.app",
    category: "Blockchain",
    status: "Live",
    icon: Database,
  },
  {
    id: 3,
    title: "Nammakirana",
    description:
      "Hyperlocal digital platform for kirana store owners, enabling smart inventory management and commerce",
    longDescription:
      "Empowering local businesses with modern technology.Inventory management and community-driven commerce platform.",
    image: "/nammakirana.png",
    tags: ["Nextjs", "Supabase", "Typescript", "Tailwind CSS"],
    githubUrl: "https://github.com/santhoshkumar0918/nammakirana",
    liveUrl: "https://https://nammakiranastaging.vercel.app",
    category: "Web App",
    status: "Beta",
    icon: Cpu,
  },
  {
    id: 4,
    title: "LearnoPoly",
    description:
      "Decentralized education platform enabling users to learn, connect, and earn credentials on blockchain",
    longDescription:
      "Next-generation learning platform combining education with blockchain technology. Verifiable credentials and peer-to-peer learning ecosystem.",
    image: "/learnopoly.png",
    tags: ["Nextjs", "Solidity", "Educhain", "Web3", "Typescript"],
    githubUrl: "https://github.com/santhoshkumar0918/learnovix",
    category: "EdTech",
    status: "Beta",
    icon: Code,
  },
  {
    id: 5,
    title: "Decap",
    description:
      "Decentralized Carbon Emission Platform built on Polygon for industrial compliance tracking",
    longDescription:
      "Contributing to India's Net Zero 2030 initiative with blockchain-based carbon tracking. Real-time emission monitoring and compliance reporting.",
    image: "/Decap.png",
    tags: ["Nextjs", "Polygon", "Solidity", "React", "Charts.js", "Web3"],
    githubUrl: "https://github.com/santhoshkumar0918/decap",
    category: "Climate Tech",
    status: "Beta",
    icon: Zap,
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400 backdrop-blur-sm mb-4"
          >
            💼 Featured Projects
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              My Latest
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover the projects that showcase my expertise in Web3,
            blockchain, and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <Card
                className={`relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                  hoveredCard === project.id ? "transform scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-30">
                    <Badge
                      variant={
                        project.status === "Live" ? "default" : "secondary"
                      }
                      className={`${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="outline"
                      className="text-blue-400 border-blue-400/30"
                    >
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-gray-300" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 text-gray-300" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gray-500/10 text-gray-400"
                      >
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* View Details */}
                  <motion.div
                    className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 border border-white/10 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  );
                  if (!project) return null;

                  return (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <project.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {project.title}
                            </h3>
                            <p className="text-blue-400">{project.category}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white"
                        >
                          ×
                        </Button>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Description
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {project.longDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-blue-500/10 text-blue-300 border-blue-500/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            asChild
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-white/20 hover:bg-white/10"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <a
              href="https://github.com/santhoshkumar0918"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

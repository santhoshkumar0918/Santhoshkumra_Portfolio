"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Wrench, Globe, Terminal, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["TypeScript", "JavaScript", "Rust", "Solidity", "Python", "Cairo"],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Hardhat",
      "Zerepy",
      "Elizaos",
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    icon: Wrench,
    color: "from-green-500 to-emerald-500",
    skills: [
      "Git",
      "Docker",
      "VS Code",
      "Figma",
      "Postman",
      "Notion",
      "Jupyter",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: ["PostgreSQL", "MongoDB", "Redis", "IPFS"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    skills: ["Firebase", "Supabase", "Appwrite", "Vercel"],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");

  const getActiveCategory = () => {
    return skillCategories.find((cat) => cat.id === activeCategory);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
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
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-400 backdrop-blur-sm mb-4"
          >
            ⚡ Tech Stack
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technologies &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My arsenal of technologies for building cutting-edge applications
          </p>
        </motion.div>

        {/* Skills Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`relative overflow-hidden transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent hover:scale-105`
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <div className="space-y-12">
          {/* Skills Categories - Small Rectangles */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <Card
                  className={`bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.id
                      ? "ring-2 ring-purple-500/50"
                      : ""
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {category.skills.length} tools
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {getActiveCategory()?.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {getActiveCategory()?.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GitHub Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      GitHub Contributions
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Daily coding activity
                    </p>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <Image
                      src="https://ghchart.rshah.org/409ba5/santhoshkumar0918"
                      alt="GitHub Contribution Graph"
                      className="w-full rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* GitHub Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      GitHub Stats
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Repository statistics
                    </p>
                  </div>

                  <Image
                    src="https://github-readme-stats.vercel.app/api?username=santhoshkumar0918&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117"
                    alt="GitHub Stats"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Top Languages
                    </h3>
                    <p className="text-gray-400 text-sm">Most used languages</p>
                  </div>

                  <Image
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=santhoshkumar0918&layout=compact&theme=radical&hide_border=true&bg_color=0d1117"
                    alt="Top Languages"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Activity Graph */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Activity Graph
                    </h3>
                    <p className="text-gray-400 text-sm">Commit timeline</p>
                  </div>

                  <Image
                    src="https://github-readme-activity-graph.vercel.app/graph?username=santhoshkumar0918&bg_color=0d1117&color=79ff97&line=00b4d8&point=58a6ff&area=true&hide_border=true"
                    alt="GitHub Activity Graph"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://github.com/santhoshkumar0918"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Complete GitHub Profile
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let&apos;s leverage these technologies to create innovative
              solutions.
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Let&apos;s Collaborate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

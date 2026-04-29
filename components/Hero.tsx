"use client";

import React from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";


import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSanity,
  SiWordpress,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiClerk,
  SiGit,
  SiGithub,
  SiExpo,
  SiRemix,
  SiGraphql,
  SiPostman,
  SiMui
} from "react-icons/si";

const RemixIcon = (props: any) => (
  <img src="/remix-icon.svg" alt="Remix" {...props} />
);

export default function Hero() {
  const frontendTech = [
    {
      subCategory: "Basics",
      items: [
        { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
        { name: "CSS", icon: SiCss, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ],
    },
    {
      subCategory: "Frameworks",
      items: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Remix", icon: RemixIcon, color: "" },
        { name: "React Native Expo", icon: SiExpo, color: "text-blue-400" },
      ],
    },
    {
      subCategory: "Styling",
      items: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "MUI", icon: SiMui, color: "text-blue-500" },
        { name: "Aceternity UI", icon: Sparkles, color: "text-violet-500" },
      ],
    },
  ];

  const backendTech = [
    {
      subCategory: "Technology",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      ],
    },
    {
      subCategory: "CMS",
      items: [
        { name: "Sanity CMS", icon: SiSanity, color: "text-red-600" },
        { name: "WordPress", icon: SiWordpress, color: "text-blue-600" },
      ],
    },
    {
      subCategory: "Version control",
      items: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
      ],
    },
    {
      subCategory: "API & Services",
      items: [
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
        { name: "RESTful APIs", icon: SiPostman, color: "text-orange-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
        { name: "Clerk", icon: SiClerk, color: "text-purple-600" },
      ],
    },
  ];

  const databaseTech = [
    {
      subCategory: "Relational (RDBMS)",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      ],
    },
    {
      subCategory: "NoSQL",
      items: [{ name: "MongoDB", icon: SiMongodb, color: "text-green-600" }],
    },
  ];

  const devopsTech = [
    {
      subCategory: "Infrastructure",
      items: [
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "Nginx", icon: SiNginx, color: "text-green-500" },
      ],
    },
    {
      subCategory: "Automation",
      items: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-orange-600" },
      ],
    },
    {
      subCategory: "Visualizations",
      items: [{ name: "Docker", icon: SiDocker, color: "text-blue-500" }],
    },
  ];

  const allCategories = [
    { title: "Frontend", items: frontendTech },
    { title: "Backend", items: backendTech },
    { title: "Database", items: databaseTech },
    { title: "DevOps", items: devopsTech },
  ];

  return (
    <section className="relative min-h-[85vh] bg-black overflow-hidden flex flex-col pt-20">
      {/* Simple Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />
 
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 mx-auto w-full px-6 lg:px-12 flex items-center justify-center">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center w-full">
          
          {/* LEFT COLUMN - CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Full-Stack Developer · Jordan
            </div>
 
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight">
                Ammar Odeh
              </h1>
              <div className="h-1 w-20 bg-white/20 rounded-full mx-auto lg:mx-0" />
            </div>
 
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-300 leading-snug max-w-2xl">
              Building <span className="text-white font-bold underline decoration-white/20 underline-offset-8">scalable & reliable</span> digital solutions for modern businesses.
            </h2>
 
            <p className="text-base text-slate-500 max-w-xl leading-relaxed">
              Software engineer focused on delivering high-performance 
              web applications using the modern JavaScript ecosystem.
            </p>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Available for Hire
              </span>
            </div>
          </div>
 
          {/* RIGHT COLUMN – VISUALS (Simplified Skills) */}
          <div className="space-y-8">
            <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">
                Skill Proficiency
              </h3>
              
              <div className="space-y-6">
                {[
                  { name: "Frontend", level: 70 },
                  { name: "Backend", level: 75 },
                  { name: "DevOps", level: 50 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/60 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "3+", label: "Years Exp" },
                { val: "3", label: "Projects" },
              ].map((stat, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TECH STACK - MODERN COMPACT REDESIGN */}
      <div className="w-full py-16 border-t border-white/5 bg-black/60 backdrop-blur-md relative overflow-hidden mt-20">

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full px-6 lg:px-12 relative z-10">

          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl font-black text-white tracking-tight">
                Tech Stack
              </h3>
              <p className="text-sm text-slate-400 font-medium max-w-md">
                A comprehensive toolkit for building high-performance, 
                scalable, and beautiful digital experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {allCategories.map(cat => (
                <span key={cat.title} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {cat.title}
                </span>
              ))}
            </div>
          </div>

          {/* Marquee Container */}
          <div className="space-y-6 relative">
            {/* Masking gradients for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Row 1: Frontend */}
            <div className="flex overflow-hidden gap-6 py-2">
              <motion.div 
                className="flex flex-none gap-6 items-center"
                animate={{ x: [0, -1920] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[...frontendTech.flatMap(s => s.items), ...frontendTech.flatMap(s => s.items), ...frontendTech.flatMap(s => s.items)].map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group">
                    <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Backend + Database (Reverse) */}
            <div className="flex overflow-hidden gap-6 py-2">
              <motion.div 
                className="flex flex-none gap-6 items-center"
                animate={{ x: [-1920, 0] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                {/* Mix Backend and Database */}
                {(() => {
                  const items = [...backendTech.flatMap(s => s.items), ...databaseTech.flatMap(s => s.items)];
                  return [...items, ...items, ...items].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group">
                      <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                    </div>
                  ));
                })()}
              </motion.div>
            </div>

            {/* Row 3: DevOps + Tools */}
            <div className="flex overflow-hidden gap-6 py-2">
              <motion.div 
                className="flex flex-none gap-6 items-center"
                animate={{ x: [0, -1920] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                {[...devopsTech.flatMap(s => s.items), ...devopsTech.flatMap(s => s.items), ...devopsTech.flatMap(s => s.items)].map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 group">
                    <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

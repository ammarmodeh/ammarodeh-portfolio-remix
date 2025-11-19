"use client";

import { projects } from "@/data";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Compare } from "@/components/ui/compare";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Projects
            </span>
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group block rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              >
                {/* Compare Slider - Always in the Card */}
                <div className="relative aspect-video bg-black/40">
                  <Compare
                    firstImage={project.compareBefore || project.img}
                    secondImage={project.compareAfter || project.img}
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-full w-full"
                    slideMode="hover"
                    showHandlebar={true}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-6 text-left">
                  <h3 className="text-2xl font-bold text-white line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                    {project.des}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap gap-3">
                    {project.iconLists.slice(0, 6).map((icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center"
                      >
                        <Image
                          src={icon}
                          alt="tech"
                          width={22}
                          height={22}
                          className="opacity-90"
                        />
                      </div>
                    ))}
                    {project.iconLists.length > 6 && (
                      <span className="text-xs text-gray-400 self-center">
                        +{project.iconLists.length - 6}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-cyan-400 font-semibold">
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Only Text + Tech + Live Link (No Compare Here) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 overflow-y-auto p-4"
            >
              <div className="flex min-h-full items-center justify-center">
                <div className="relative w-full max-w-4xl bg-zinc-900/95 border border-white/20 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Hero Image */}
                  <div className="relative h-80">
                    <Image
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-10 md:p-14 space-y-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      {selectedProject.title}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                      {selectedProject.des}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-5">
                        {selectedProject.iconLists.map((icon, i) => (
                          <div
                            key={i}
                            className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center"
                          >
                            <Image
                              src={icon}
                              alt="tech"
                              width={34}
                              height={34}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-8">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
                      >
                        View Live Project
                        <ArrowRight className="w-7 h-7" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecentProjects;

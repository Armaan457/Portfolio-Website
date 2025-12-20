import { PROJECTS } from "../data"
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (<div className="border-b border-neutral-800 pb-12" id="projects">
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -24 }}
            transition={{ type: "tween", ease: "linear", duration: 0.3 }}
            viewport={{ once: true, amount: 0.25 }}
            className="flex items-center justify-center gap-3 mb-20"
        >
            <div className="h-px bg-gradient-to-r from-transparent to-purple-500 w-8"></div>
            <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Featured Projects
            </h2>
            <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-8"></div>
        </motion.div>
        <div className="space-y-8">
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={index}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 28 }}
                    transition={{ type: "tween", ease: "linear", duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative transform-gpu"
                >
                    {/* Gradient background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500 -z-10"></div>
                    
                    <div className="flex flex-col lg:flex-row gap-4 p-4 rounded-lg border border-neutral-700 hover:border-purple-300 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300">
                        {/* Image Section */}
                        <motion.div 
                        className="w-full lg:w-2/5 flex-shrink-0">
                            <a 
                                href={project.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/img block relative rounded-lg"
                            >
                                <div className="flex items-center justify-center bg-neutral-900/40 rounded-lg w-full h-48 md:h-52 lg:h-56 overflow-hidden">
                                    <img 
                                        src={project.image}
                                        alt={project.title} 
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </a>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div 
                        className="w-full lg:w-2/3 flex flex-col justify-between">
                            <div>
                                <motion.h6 
                                    className="mb-3 font-bold text-neutral-100 text-2xl hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300"
                                >
                                    {project.title}
                                </motion.h6>
                                <p className="mb-4 text-neutral-300 leading-relaxed text-base">{project.description}</p>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-purple-300 text-xs font-medium hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.div className="mt-4">
                                <a 
                                    href={project.link}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    View Repository
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
        );
    };

export default Projects;
import { EXPERIENCES } from "../data";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
    return (
        <div className="border-b border-neutral-800 pb-12" id="experience">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -28 }}
                transition={{ type: "tween", ease: "linear", duration: 0.3 }}
                viewport={{ once: true, amount: 0.25 }}
                className="flex items-center justify-center gap-3 mb-20"
            >
                <div className="h-px bg-gradient-to-r from-transparent to-purple-500 w-8"></div>
                <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    Experience
                </h2>
                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-8"></div>
            </motion.div>
            <div className="relative">
                {/* Timeline line */}
                <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-purple-500 to-transparent opacity-30"></div>

                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                        key={index}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ type: "tween", ease: "linear", duration: 0.28, delay: index * 0.03 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-12 flex flex-wrap lg:justify-start transform-gpu"
                    >
                        {/* Timeline dot and year */}
                        <motion.div 
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "tween", ease: "linear", duration: 0.28 }}
                        className="w-full lg:w-1/4 mb-4 lg:mb-0 transform-gpu">
                            <div className="flex items-center gap-4">
                                <div className="hidden lg:block relative">
                                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-neutral-950"></div>
                                </div>
                                <div>
                                    <div className="inline-block lg:hidden mb-4">
                                        <FaBriefcase className="text-purple-400 text-lg" />
                                    </div>
                                    <p className="text-sm md:text-base lg:text-base font-semibold text-purple-400 leading-none">{experience.year}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Experience card */}
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 32 }}
                        transition={{ type: "tween", ease: "linear", duration: 0.28 }}
                        className="w-full lg:w-3/4 lg:pl-8 lg:pr-4 transform-gpu">
                            <div className="group relative p-6 rounded-lg border border-neutral-700 hover:border-purple-500 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>
                                
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <div>
                                        <h6 className="font-bold text-neutral-100 text-lg">
                                            {experience.role}
                                            <span className="text-sm text-purple-300 font-semibold block">
                                                {experience.company}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="flex-shrink-0 w-14 h-14 rounded-md border border-neutral-700 bg-neutral-800/60 flex items-center justify-center overflow-hidden">
                                        {experience.logo ? (
                                            <img
                                                src={experience.logo}
                                                alt={`${experience.company} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <span className="text-[11px] text-neutral-500 text-center leading-tight px-1">
                                                Add logo
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="mb-4 text-neutral-300 leading-relaxed text-base">{experience.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, techIndex) => (
                                        <motion.span 
                                            key={techIndex}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-purple-300 text-xs font-medium hover:border-purple-400 transition-all duration-300"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
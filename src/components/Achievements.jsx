import { ACHIEVEMENTS } from "../data";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const Achievements = () => {
    return (
        <div className="border-b border-neutral-800 pb-12" id="achievements">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -24 }}
                transition={{ type: "tween", ease: "linear", duration: 0.3 }}
                viewport={{ once: true, amount: 0.25 }}
                className="flex items-center justify-center gap-3 mb-20"
            >
                <div className="h-px bg-gradient-to-r from-transparent to-purple-500 w-8"></div>
                <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    Achievements
                </h2>
                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACHIEVEMENTS.map((achievement, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 28 }}
                        transition={{ type: "tween", ease: "linear", duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="group relative transform-gpu"
                    >
                        {/* Gradient background */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500 -z-10"></div>
                        
                        <div className="flex flex-col h-full rounded-lg border border-neutral-700 hover:border-purple-200 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300 overflow-hidden">
                            {/* Image Section */}
                            <div className="relative w-full h-48 bg-neutral-900/40 overflow-hidden">
                                <img 
                                    src={achievement.image}
                                    alt={achievement.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Trophy Icon Overlay */}
                                <div className="absolute top-3 right-3 bg-purple-600/80 backdrop-blur-sm p-2 rounded-full">
                                    <FaTrophy className="text-yellow-300 text-lg" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow p-5">
                                <h3 className="text-xl font-semibold text-neutral-100 mb-2 group-hover:text-purple-200 transition-colors">
                                    {achievement.title}
                                </h3>
                                
                                {achievement.date && (
                                    <p className="text-sm text-purple-400 font-medium mb-3">
                                        {achievement.date}
                                    </p>
                                )}

                                    <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;

import aboutImg from "../assets/AboutImage.png";
import { ABOUT_TEXT } from "../data";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-800 pb-12" id="about">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ type: "tween", ease: "linear", duration: 0.32 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center justify-center gap-3 mb-20"
            >
                <div className="h-px bg-gradient-to-r from-transparent to-purple-500 w-8"></div>
                <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-8"></div>
            </motion.div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -80 }}
                transition={{ type: "tween", ease: "linear", duration: 0.32 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap lg:flex-nowrap gap-8"
            >
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                        <img className="relative rounded-2xl w-full object-cover" src={aboutImg} alt="about" />
                    </motion.div>
                </div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:80}}
                transition={{ type: "tween", ease: "linear", duration: 0.32 }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start lg:items-center lg:h-full">
                        <div className="space-y-4">
                            <p className="text-neutral-200 text-xl leading-relaxed">
                                {ABOUT_TEXT}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
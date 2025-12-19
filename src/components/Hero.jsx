import { HERO_CONTENT } from "../data";
import profilePic from "../assets/HeroImage.png";
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: { x: -80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "tween", ease: "linear", duration: 0.35, delay },
    },
});

const Hero = () => {
    return (
    <div className="border-b border-neutral-800 pb-12 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">

            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                Armaan Jagirdar
            </motion.h1>

            <motion.div
                variants={container(0.15)}
                initial="hidden"
                animate="visible"
                className="inline-block"
            >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 mb-6 inline-block">
                    <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-400 bg-clip-text text-transparent font-semibold">
                        AI/ML • Research • DSA • Full Stack
                    </span>
                </span>
            </motion.div>

            <motion.p 
                         variants={container(0.3)}
                         initial="hidden"
                         animate="visible"
             className="my-6 max-w-xl py-4 font-light tracking-tight text-neutral-300 text-lg lg:text-xl leading-relaxed">
                {HERO_CONTENT}
             </motion.p>

                 <motion.div
                     variants={container(0.45)}
                initial="hidden"
                animate="visible"
                className="flex gap-4 mt-8"
             >
                <a href="https://drive.google.com/file/d/1t_lH_56KcU4vM2E5y8oiT4mygb4UBEov/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                    View My Work
                </a>
                <a href="#contact" className="px-8 py-3 rounded-lg border border-purple-500 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300">
                    Get in Touch
                </a>
             </motion.div>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-14">
        <div className="flex justify-center">
            <motion.div
                initial={{ x: 80, opacity: 0, scale: 0.92 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ type: "tween", ease: "linear", duration: 0.35, delay: 0.2 }}
                className="relative group w-11/12 max-w-[480px] transform-gpu"
            >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                <img src={profilePic} alt="Armaan Jagirdar" className="relative rounded-xl w-full"/>
            </motion.div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Hero;
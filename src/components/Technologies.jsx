import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import crewailogo from "../assets/Technologies/crewaiLogo.png";
import langgraphlogo from "../assets/Technologies/langgraphLogo.png";
import sklearnlogo from "../assets/Technologies/sklearnLogo.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            inital={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl text-neutral-300">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiTensorflow className="text-7xl text-orange-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiPytorch className="text-7xl text-orange-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiHuggingface className="text-7xl text-yellow-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
                >
                    <img src={ sklearnlogo } alt="Sklearn Logo" className="w-20 h-20 object-contain" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiLangchain className="text-7xl text-green-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
                >
                    <img src={ langgraphlogo } alt="LangGraph Logo" className="w-20 h-20 object-contain" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
                >
                    <img src={ crewailogo } alt="CrewAI Logo" className="w-20 h-20 object-contain" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiFastapi className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiDjango className="text-7xl text-green-700" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
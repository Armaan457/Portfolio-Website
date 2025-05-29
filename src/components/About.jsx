import aboutImg from "../assets/AboutImage.png";
import { ABOUT_TEXT } from "../data";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl text-neutral-300">
                About <span className="text-neutral-300">Myself</span>
            </h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap lg:flex-nowrap"
            >
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start lg:items-center lg:h-full">
                        <p className="my-2 max-w-xl py-6 text-neutral-200 text-xl">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
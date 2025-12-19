import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiMlflow } from "react-icons/si";
import { SiNeo4J } from "react-icons/si";
import crewailogo from "../assets/Technologies/crewaiLogo.png";
import langgraphlogo from "../assets/Technologies/langgraphLogo.png";
import sklearnlogo from "../assets/Technologies/sklearnLogo.png";
import dvclogo from "../assets/Technologies/dvcLogo.png";
import gcp from "../assets/Technologies/gcpLogo.png";
import pinecone from "../assets/Technologies/pineconeLogo.png";
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

const TechCard = ({ children, label }) => (
    <motion.div
        variants={iconVariants(1.2)}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        className="group relative"
    >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-200"></div>
        <div className="relative rounded-2xl border-2 border-neutral-700 group-hover:border-purple-500 p-4 bg-neutral-950 flex items-center justify-center transition-all duration-150">
            {children}
            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs text-neutral-400 whitespace-nowrap">
                {label}
            </div>
        </div>
    </motion.div>
);

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24" id="technologies">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -28 }}
                transition={{ type: "tween", ease: "linear", duration: 0.3 }}
                viewport={{ once: true, amount: 0.25 }}
                className="flex items-center justify-center gap-3 mb-20"
            >
                <div className="h-px bg-gradient-to-r from-transparent to-purple-500 w-8"></div>
                <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    Technologies & Tools
                </h2>
                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-8"></div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ type: "tween", ease: "linear", duration: 0.28 }}
                viewport={{ once: true, amount: 0.25 }}
                className="mb-12"
            >
                <h3 className="text-center text-lg font-semibold text-purple-300 mb-8 flex items-center justify-center gap-2">
                    Artifical Intelligence & Machine Learning
                </h3>
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <TechCard label="TensorFlow"><SiTensorflow className="text-7xl text-orange-400" /></TechCard>
                    <TechCard label="PyTorch"><SiPytorch className="text-7xl text-orange-600" /></TechCard>
                    <TechCard label="Hugging Face"><SiHuggingface className="text-7xl text-yellow-500" /></TechCard>
                    <TechCard label="Scikit-learn"><img src={sklearnlogo} alt="Sklearn" className="w-20 h-20 object-contain" /></TechCard>
                    <TechCard label="LangChain"><SiLangchain className="text-7xl text-green-600" /></TechCard>
                    <TechCard label="LangGraph"><img src={langgraphlogo} alt="LangGraph" className="w-20 h-20 object-contain" /></TechCard>
                    <TechCard label="CrewAI"><img src={crewailogo} alt="CrewAI" className="w-20 h-20 object-contain" /></TechCard>
                </motion.div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ type: "tween", ease: "linear", duration: 0.28, delay: 0.02 }}
                viewport={{ once: true, amount: 0.25 }}
                className="mb-12"
            >
                <h3 className="text-center text-lg font-semibold text-blue-300 mb-8 flex items-center justify-center gap-2">
                    Full Stack and Databases
                </h3>
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <TechCard label="React"><RiReactjsLine className="text-7xl text-cyan-400" /></TechCard>
                    <TechCard label="FastAPI"><SiFastapi className="text-7xl text-green-500" /></TechCard>
                    <TechCard label="Django"><SiDjango className="text-7xl text-green-700" /></TechCard>
                    <TechCard label="MongoDB"><SiMongodb className="text-7xl text-green-500" /></TechCard>
                    <TechCard label="Neo4j"><SiNeo4J className="text-7xl text-blue-400" /></TechCard>
                    <TechCard label="Pinecone"><img src={pinecone} alt="Pinecone" className="w-20 h-20 object-contain" /></TechCard>
                </motion.div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ type: "tween", ease: "linear", duration: 0.28, delay: 0.04 }}
                viewport={{ once: true, amount: 0.25 }}
            >
                <h3 className="text-center text-lg font-semibold text-cyan-300 mb-8 flex items-center justify-center gap-2">
                    Deployment
                </h3>
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <TechCard label="Docker"><FaDocker className="text-7xl text-blue-500" /></TechCard>
                    <TechCard label="MLflow"><SiMlflow className="text-7xl text-blue-400" /></TechCard>
                    <TechCard label="DVC"><img src={dvclogo} alt="DVC" className="w-20 h-20 object-contain" /></TechCard>
                    <TechCard label="Google Cloud Platform"><img src={gcp} alt="GCP" className="w-20 h-20 object-contain" /></TechCard>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
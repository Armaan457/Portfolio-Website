import { CONTACT } from "../data";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contacts = () => {
    const [copied, setCopied] = useState(false);

    // Shared linear tween for constant speed, no end acceleration
    const baseTransition = { type: "tween", ease: "linear", duration: 0.28 };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(CONTACT.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="border-b border-neutral-800 pb-20" id="contact">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={baseTransition}
                viewport={{ once: true, amount: 0.25 }}
                className="flex items-center justify-center gap-3 mb-16"
            >
                <div className="h-px bg-gradient-to-r from-transparent to-purple-500 w-8"></div>
                <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    Get in Touch
                </h2>
                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-8"></div>
            </motion.div>

            <div className="flex flex-col items-center space-y-8">
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 12 }}
                    transition={{ ...baseTransition, delay: 0.02 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="text-neutral-300 text-xl text-center max-w-2xl leading-relaxed transform-gpu"
                >
                    I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to collaborate or just chat about AI/ML, or web development!
                </motion.p>

                {/* Email CTA */}
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    transition={{ ...baseTransition, delay: 0.06 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative group transform-gpu"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                    <button
                        onClick={handleCopyEmail}
                        className="relative flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                        <FaEnvelope className="text-2xl" />
                        <span>
                            {copied ? "Email Copied!" : "Send me an Email"}
                        </span>
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ ...baseTransition, delay: 0.12 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="flex gap-6 transform-gpu"
                >
                    <a
                        href="https://www.linkedin.com/in/armaan-jagirdar-183b47285/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 rounded-lg border border-neutral-700 hover:border-purple-500 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500 -z-10"></div>
                        <FaLinkedin className="text-3xl text-neutral-300 group-hover:text-purple-400 transition-colors duration-300" />
                    </a>
                    <a
                        href="https://github.com/Armaan457"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 rounded-lg border border-neutral-700 hover:border-purple-500 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500 -z-10"></div>
                        <FaGithub className="text-3xl text-neutral-300 group-hover:text-purple-400 transition-colors duration-300" />
                    </a>
                </motion.div>

                {/* Message */}
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ ...baseTransition, delay: 0.16 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="text-center text-neutral-400 text-base pt-8 border-t border-neutral-800 w-full transform-gpu"
                >
                    {CONTACT.message}
                </motion.p>
            </div>
        </div>
    );
};

export default Contacts;
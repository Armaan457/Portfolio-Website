import logo from '../assets/Logo.png';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Tech', href: '#technologies' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 flex items-center justify-between py-6"
        >
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-shrink-0 items-center cursor-pointer"
            >
                <a href="#" className="flex items-center">
                        <img className="w-18 h-18 aspect-square object-contain" src={logo} alt="logo"/>
                </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        whileHover={{ backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                        className="px-4 py-2 rounded-lg text-lg text-neutral-300 hover:text-purple-300 transition-colors duration-300"
                    >
                        {item.name}
                    </motion.a>
                ))}
            </div>

            <div className='flex items-center justify-center gap-4 text-3xl'>
                <motion.a 
                    whileHover={{ y: -2 }}
                    href="https://www.linkedin.com/in/armaan-jagirdar-183b47285/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='group relative p-2 rounded-lg border border-neutral-700 hover:border-purple-500 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-300 hover:text-purple-400'
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>
                    <FaLinkedin />
                </motion.a>
                <motion.a 
                    whileHover={{ y: -2 }}
                    href="https://github.com/Armaan457" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='group relative p-2 rounded-lg border border-neutral-700 hover:border-purple-500 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-300 hover:text-purple-400'
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>
                    <FaGithub />
                </motion.a>
                <motion.a 
                    whileHover={{ y: -2 }}
                    href="https://leetcode.com/u/armaan45/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='group relative p-2 rounded-lg border border-neutral-700 hover:border-purple-500 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300 text-neutral-300 hover:text-purple-400'
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>
                    <SiLeetcode />
                </motion.a>
           </div>
        </motion.nav>
    )
}
export default Navbar;
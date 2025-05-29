import logo from '../assets/Logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { PiReadCvLogoBold } from "react-icons/pi";

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20 cursor-pointer" src={logo} alt="logo"/>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
                <a href="https://www.linkedin.com/in/armaan-jagirdar-183b47285/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Armaan457" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://drive.google.com/file/d/1__q1nisYSD4wnSV4cbtqJ1VFFrS58seR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <PiReadCvLogoBold />
                </a>
           </div>
        </nav>
    )
}
export default Navbar;
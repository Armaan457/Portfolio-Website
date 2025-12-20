import project1 from "../assets/Projects/project-1.png";
import project2 from "../assets/Projects/project-2.png";
import project3 from "../assets/Projects/project-3.png";
import project5 from "../assets/Projects/project-5.png";
import drdo from "../assets/Experience/drdoLogo.png";
import forageai from "../assets/Experience/forageaiLogo.png";
import valency from "../assets/Experience/valencyLogo.png";
import deradh from "../assets/Experience/deradhLogo.png";
import sih from "../assets/Achievements/sihLogo.png";
import bwave from "../assets/Achievements/bwaveLogo.png";
import acm from "../assets/Achievements/acmLogo.png";
import howasp from "../assets/Achievements/howaspLogo.png";

export const HERO_CONTENT = `I am a passionate AI/ML and Full Stack Developer that enjoys working on impactful projects that challenge my limits, enhance user experience, and drive business growth. My interests also extend to research, particularly in the field of Computer Vision, Large Language Models and Multimodal AI. `;

export const ABOUT_TEXT = `I am a third year Computer Engineering student at Thapar Institute of Engineering and Technology, passionate about Artificial Intelligence, Machine Learning, and their real world applications. I actively participate and organise hackathons and technical events. My experience spans Classical Machine Learning, Time Series Forcasting, Natural Language Processing (NLP), Large Language Models, Computer Vision, Multimodal AI, Generative and Agentic AI, as well as backend development with Django and FastAPI, and frontend development using React. I strive to build impactful projects that blend innovation with practical utility.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "AI Intern",
    company: "Centre for Artificial Intelligence and Robotics, DRDO",
    description: "Researching and developing advanced cyber-threat analysis systems, utilising graph databases and agentic RAG architectures to improve knowledge representation and autonomous reasoning.",
    technologies: ["Graph Databases", "RAG", "LLMs", "LangGraph"],
    logo: drdo

  },
  {
    year: "March 2025 - August 2025",
    role: "AI Developer Intern",
    company: "Forage AI",
    description: `Developed deep learning based vision models and retrieval systems for various internal use cases as well as worked on various automated agentic extraction and analysis workflows ensuring production readiness`,
    technologies: ["CrewAI", "MultiModal AI", "NLP", "Computer Vision"],
    logo: forageai
  },
  {
    year: "March 2025 - June 2025",
    role: "Backend Developer",
    company: "Valency Energy",
    description: `Engineered robust backend solutions for the development of custom agents for customers and vendors in the field of solar components`,
    technologies: ["FastAPI", "MongoDB", "OAuth 2.0", "GCP"],
    logo: valency
  },
  {
    year: "August 2024 - December 2024",
    role: "AI/ML Development Intern",
    company: "Deradh",
    description: `Worked on the development and optimization of the virtual try on feature, exploring models such as Diffusion and GANs.`,
    technologies: ["Diffusion Models", "Generative Adversarial Networks", "Flask"],
    logo: deradh
  },
  // {
  //   year: "June 2024 - July 2024",
  //   role: "ELC Summer Intern",
  //   company: "Thapar Institute of Engineering and Technology",
  //   description: `Collaborated on the development of a Motorcycle helmet detection and warning system, along with vehicle speed estimation, deployed using Jetson Nano and motion cameras.`,
  //   technologies: ["Object Detection", "Object Tracking", "Image Recognition"],
  // },
];

export const PROJECTS = [
  {
    title: "StockPulse",
    image: project1,
    description:
      "Developed AI agents using CrewAI for stock prices prediction and portfolio analysis along with a conversational chatbot using LangChain for trading and finances, integrating it with the backend.",
    technologies: ["CrewAI", "LangChain", "Django REST", "React", "SQLite"],
    link: "https://github.com/Armaan457/StockPulse"
  },
  {
    title: "NeuroCred",
    image: project5,
    description: "Built an AI-driven financial insights, loan prediction, and credit scoring system with explainability, while designing the backend architecture and managing end-to-end MLOps.",
    technologies: ["FastAPI", "Scikit-learn", "SHAP", "LangChain", "MLflow", "DVC"],
    link: "https://github.com/Armaan457/NeuroCred"
  },
  {
    title: "SecureCodeAuditor",
    image: project3,
    description:
      "Implemented an scalable agentic code auditing system using LangGraph and Gemini to scan user code for vulnerabilities and reccommend solutions for them.",
    technologies: ["LangGraph", "FastAPI", "React", "Docker"],
    link: "https://github.com/Armaan457/SecureCodeAuditor"
  },
  {
    title: "LawVista",
    image: project2,
    description:
      "Built a RAG powered research engine for commercial courts using LangChain, integrated with Pinecone as the vector database. Implemented prior case retrieval, legal statute identification and court judgement prediction with explaination.",
    technologies: ["LangChain", "NLTK", "React", "Express", "Django REST", "Pinecone", "MongoDB"],
    link: "https://github.com/Armaan457/LawVista"
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024 Finalist",
    image: sih,
    date: "December 2024",
    description: "Secured a finalist position at India's largest national level hackathon, competing against thousands of teams by developing an AI-powered Research Engine for commercial courts."
  },
  {
    title: "Runner up in the ML Trading track at DTU brAInwave Hackathon",
    image: bwave,
    date: "October 2024",
    description: "Achieved runner-up position in the Machine Learning Trading track competing with 2000+ teams accross India by building an AI driven stocks prediction and portfolio analysis platform."
  },
  {
    title: "General Secretary, ACM Thapar Student Chapter",
    image: acm, 
    date: "August 2025",
    description: "Appointed to the top student leadership role in one of the university's largest technical society and part of the international ACM community."
  },
  {
    title: "Best First Year Hack at HackOwasp 6.0",  
    image: howasp, 
    date: "April 2024",
    description: "Won the Best First Year Hack award by amongst 40+ teams developing a AI powered mental health support platform."
  },
];

export const CONTACT = {
  message: "Made with ❤️ by Armaan Jagirdar",
  email: "armaanjagirdar05@gmail.com",
};

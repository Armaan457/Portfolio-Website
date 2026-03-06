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
import dsai from "../assets/Achievements/dsaiLogo.png";
import tiet from "../assets/Achievements/tietLogo.png";

export const HERO_CONTENT = `I am a passionate AI/ML and Backend Engineer that enjoys working on impactful projects that challenge my limits, enhance user experience, and drive business growth. My interests also extend to research, particularly in the field of Computer Vision, Large Language Models and Multimodal AI. `;

export const ABOUT_TEXT = `I am a third year Computer Engineering student at Thapar Institute of Engineering and Technology, passionate about Artificial Intelligence, Machine Learning, and their real world applications. I actively participate and organise hackathons and technical events. My experience spans Classical Machine Learning, Time Series Forcasting, Natural Language Processing (NLP), Large Language Models, Computer Vision, Multimodal AI, Generative and Agentic AI, as well as backend development with Django and FastAPI, and frontend development using React. I strive to build impactful projects that blend innovation with practical utility.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - November 2025",
    role: "AI Intern",
    company: "Centre for Artificial Intelligence and Robotics, DRDO",
    description: [
      "Built a robust multi-step GraphRAG framework over a cyber threat intelligence database with an explainable evaluation system.",
      "Developed agentic pipelines using LangGraph and AutoGen for autonomous analysis and structured reasoning."
    ],
    technologies: ["Graph Databases", "RAG", "AutoGen", "LangGraph", "LLMs"],
    logo: drdo

  },
  {
    year: "March 2025 - August 2025",
    role: "AI Developer Intern",
    company: "Forage AI",
    description: [
      "Developed highly accurate custom deep learning based vision models to streamline and enhance document workflows.",
      "Collaboratively implemented production grade automated multimodal, multi agent workflows to streamline data extraction and analysis, significantly improving accuracy.",
      "Explored multimodal RAG pipelines for accurate and efficient information extraction.",
      "Gained hands on experience collaborating across fast paced, cross functional teams."
    ],
    technologies: ["CrewAI", "MultiModal AI", "NLP", "Computer Vision", "AWS"],
    logo: forageai
  },
  {
    year: "March 2025 - June 2025",
    role: "Backend Developer",
    company: "Valency Energy",
    description: [
      "Partnered in designing and implementing scalable RESTful APIs to support customer and vendor facing agents in the solar energy components sector, ensuring high performance and reliability.",
      "Integrated role based Google Authentication for enhancing system security and streamlining user workflows."
    ],
    technologies: ["FastAPI", "MongoDB", "OAuth 2.0", "GCP"],
    logo: valency
  },
  {
    year: "August 2024 - December 2024",
    role: "AI/ML Development Intern",
    company: "Deradh",
    description: [
      "Implemented and optimized the company’s virtual try on feature through collaborative R&D, exploring state of the art models like Diffusion Models and GANs for greater realism and performance"
    ],
    technologies: ["Diffusion Models", "Generative Adversarial Networks", "Flask"],
    logo: deradh
  },
];

export const PROJECTS = [
  {
    title: "StockPulse",
    image: project1,
    description: [
      "Developed multi AI agent systems using CrewAI for stock price prediction and portfolio analysis, integrating them with the backend and databases.",
      "Built a conversational RAG powered chatbot using LangChain, providing personalized trading insights with minimal response latency"
    ],
    technologies: ["CrewAI", "LangChain", "CrewAI", "Django REST", "Next", "PostgreSQL", "Pinecone"],
    link: "https://github.com/Armaan457/StockPulse",
    live: ""
  },
  {
    title: "NeuroCred",
    image: project5,
    description: [
      "Built the AI and backend infrastructure for a fintech platform delivering intelligent financial insights, including loan approval prediction, CIBIL score estimation with improvement recommendations, and an AI-powered finance chatbot utilising vector search.",
      "Integrated explainable AI (SHAP), MLflow-based experiment tracking, DVC for data versioning, and JWT authentication to ensure transparency and secure user access."
    ],
    technologies: ["FastAPI", "Scikit-learn", "SHAP", "LangChain", "MLflow", "DVC"],
    link: "https://github.com/Armaan457/NeuroCred",
    live: ""
  },
  {
    title: "SecureCodeAuditor",
    image: project3,
    description: [
      "Engineered an agentic code auditing system leveraging LangGraph and Llama to perform comprehensive vulnerability detection and analysis.",
      "Designed a high-performance backend with FastAPI with asynchronous processing and proper guardrails to ensure high quality outputs."
    ],
    technologies: ["LangGraph", "FastAPI", "React", "Docker"],
    link: "https://github.com/Armaan457/SecureCodeAuditor",
    live: "https://sca.armaanjagirdar.me/"
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
    title: "Undergraduate Research Fellowship by Thapar Institute of Engineering and Technology",
    image: tiet,
    date: "February 2026",
    description: "Awarded the prestigious Undergraduate Research Fellowship at Thapar Institute of Engineering and Technology, selected among only 100 students across the entire college for my research project under Dr Amrita Kaur."
  },
  {
    title: "Technical Lead, Center of Excellence in Data Science and Artificial Intelligence, TIET",
    image: dsai,
    date: "November 2025",
    description: "Selected as one of the tech leads of the Center of Excellence in Data Science and Artificial Intelligence at Thapar Institute of Engineering and Technology, overseeing various projects and event initiatives."
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

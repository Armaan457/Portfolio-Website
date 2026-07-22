import project1 from "../assets/Projects/project-1.png";
import project2 from "../assets/Projects/project-2.png";
import project3 from "../assets/Projects/project-3.png";
import project4 from "../assets/Projects/project-4.png";
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
import amazon from "../assets/Achievements/amazonLogo.png";

export const HERO_CONTENT = `I am a passionate AI/ML and Backend Engineer that enjoys working on impactful projects that challenge my limits, enhance user experience, and drive business growth. My interests also extend to research, particularly in the field of Computer Vision, Large Language Models and Multimodal AI. `;

export const ABOUT_TEXT = `I am a final-year Computer Engineering student at Thapar Institute of Engineering and Technology, passionate about Artificial Intelligence, Machine Learning, and building intelligent systems for real-world problems. My experience spans classical machine learning, time series forecasting, NLP, large language models (LLMs), computer vision, multimodal AI, and agentic AI. I also build end-to-end applications using FastAPI and Django on the backend, React on the frontend, and modern MLOps practices. Beyond development, I actively participate in and organize hackathons and technical events.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - November 2025",
    role: "AI Intern",
    company: "Centre for Artificial Intelligence and Robotics, DRDO",
    description: [
      "Built a robust multi-step GraphRAG framework over a cyber threat intelligence database with an explainable evaluation system.",
      "Designed reasoning pipelines for context-aware threat intelligence and explainable responses.",
      "Optimised Neo4j knowledge graph generation and retrieval pipelines, improving pattern matching and system output"
    ],
    technologies: ["Graph Databases", "RAG", "AutoGen", "LangGraph", "LLMs"],
    logo: drdo

  },
  {
    year: "March 2025 - August 2025",
    role: "AI Developer Intern",
    company: "Forage AI",
    description: [
      "Developed and optimized custom deep learning  based vision models for document understanding, achieving 99% accuracy and improving processing speed across downstream projects.",
      "Collaboratively implemented and deployed multimodal multi-agent systems using CrewAI and AWS for M&A domains, improving extraction and analysis accuracy",
      "Developed multimodal RAG pipelines for accurate and efficient information extraction across custom datasets."
    ],
    technologies: ["CrewAI", "MultiModal AI", "NLP", "Computer Vision", "AWS"],
    logo: forageai
  },
  {
    year: "March 2025 - June 2025",
    role: "SDE Intern",
    company: "Valency Energy",
    description: [
      "Partnered in designing and implementing scalable RESTful APIs to support customer and vendor facing agents in the solar energy components sector, ensuring high performance and reliability.",
      "Improved operational efficiency through optimised API workflows and system design."
    ],
    technologies: ["FastAPI", "MongoDB", "RBAC", "OAuth 2.0", "GCP"],
    logo: valency
  },
  {
    year: "August 2024 - December 2024",
    role: "AI/ML Development Intern",
    company: "Deradh",
    description: [
      "Implemented and optimized the company's virtual try on feature through collaborative R&D, exploring state of the art models like Diffusion Models and GANs for greater realism and performance"
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
      "Built a video search and agentic conversational chatbot for custom financial guidance, providing personalized trading insights with minimal response latency"
    ],
    technologies: ["CrewAI", "Django REST", "Websockets", "Next", "PostgreSQL"],
    link: "https://github.com/Armaan457/StockPulse",
    live: ""
  },
  {
    title: "AgriVerse",
    image: project2,
    description: [
      "Developed an explainable multimodal crop intelligence platform combining computer vision, knowledge graphs, and LLMs for grounded disease diagnosis and agronomic guidance.",
      "Implemented Neo4j-powered retrieval and Grad-CAM visual explanations, achieving 99% accuracy with 9.1/10 response correctness (LLM-as-a-Judge)."
    ],
    technologies: ["PyTorch", "HuggingFace", "Neo4j", "LLMs", "Grad-CAM", "RapidFuzz"],
    link: "https://github.com/Armaan457/AgriVerse",
    live: "https://huggingface.co/spaces/Armaan457/AgriVerse"
  },
  {
    title: "NeuroCred",
    image: project3,
    description: [
      "Built the AI and backend infrastructure for a fintech platform delivering intelligent financial insights, including loan approval prediction and CIBIL score estimation with improvement recommendations, along with an AI-powered finance chatbot utilising vector search.",
      "Integrated SHAP+LLM based explainable AI, MLflow-based experiment tracking, DVC for data versioning, and JWT authentication to ensure clarity, transparency and secure user access."
    ],
    technologies: ["FastAPI", "Scikit-learn", "LangChain", "MLflow", "DVC", "Chroma", "Next", "MongoDB"],
    link: "https://github.com/Armaan457/NeuroCred",
    live: ""
  },
  {
    title: "Shazam",
    image: project4,
    description: [
      "Developed a high-performance audio fingerprinting system inspired by Shazam using STFT spectrograms, constellation maps, fingerprint hashing, and offset-based voting.",
      "Delivered 96%+ recognition accuracy on two benchmark datasets with PostgreSQL indexing, Redis caching, and 142 ms average retrieval latency, robust to real-world audio distortions."
    ],
    technologies: ["Librosa", "Numpy", "Scipy", "PostgreSQL", "Redis", "FastAPI"],
    link: "https://github.com/Armaan457/Shazam",
    live: ""
  },
  {
    title: "SecureCodeAuditor",
    image: project5,
    description: [
      "Engineered an agentic code auditing system leveraging LangGraph and Llama to perform comprehensive vulnerability detection and analysis.",
      "Designed a high-performance backend with FastAPI with parallel processing, caching and proper guardrails to ensure high quality outputs."
    ],
    technologies: ["LangGraph", "FastAPI", "React", "Redis"],
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
    title: "Amazon ML Summer School 2026",
    image: amazon,
    date: "July 2026",
    description: "Selected for the Amazon ML Summer School 2026, among the top 2% of 130,000+ applicants. Participated in an intensive program covering advanced machine learning concepts taught by Amazon scientists and researchers."
  },
  {
    title: "Undergraduate Research Fellowship by Thapar Institute of Engineering and Technology",
    image: tiet,
    date: "February 2026",
    description: "Awarded the prestigious Undergraduate Research Fellowship at Thapar Institute of Engineering and Technology, selected among only 100 students across the entire college for my research project."
  },
  {
    title: "General Secretary, Association for Computing Machinery, Thapar Student Chapter",
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

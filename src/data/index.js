import project1 from "../assets/Projects/project-1.png";
import project2 from "../assets/Projects/project-2.png";
import project3 from "../assets/Projects/project-3.png";
import project4 from "../assets/Projects/project-4.png";
import project5 from "../assets/Projects/project-5.png";
import project6 from "../assets/Projects/project-6.png";

export const HERO_CONTENT = `I am a passionate AI/ML and Full Stack Developer that enjoys working on impactful projects that challenge my limits, enhance user experience, and drive business growth. My interests also extend to research, particularly in the field of Computer Vision, Large Language Models and Multimodal AI. `;

export const ABOUT_TEXT = `I am a second year Computer Engineering student at Thapar Institute of Engineering and Technology, passionate about Artificial Intelligence, Machine Learning, and their real world applications. I actively participate in hackathons and technical events. My experience spans Classical Machine Learning, Time Series Forcasting, Natural Language Processing (NLP), Computer Vision, Generative and Agentic AI, as well as backend development with Django and FastAPI, and frontend development using React. I strive to build impactful projects that blend innovation with practical utility.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - Present",
    role: "AI Developer Intern",
    company: "Forage AI",
    description: `Worked with Large Language Models and MultiModal Models to develop automated solutions and workflows for data extraction and analysis.`,
    technologies: ["Large Language Models", "MultiModal AI", "Computer Vision", "Web Extraction"],
  },
  {
    year: "March 2025 - Present",
    role: "Backend Developer",
    company: "Valency Energy",
    description: `Implemented robust backend solutions for the development of custom agents for customers and vendors in the field of solar components`,
    technologies: ["FastAPI", "MongoDB", "OAuth 2.0", "GCP"],
  },
  {
    year: "August 2024 - December 2024",
    role: "AI/ML Development Intern",
    company: "Deradh",
    description: `Worked on the development and optimization of the virtual try on feature, exploring models such as Diffusion and GANs.`,
    technologies: ["Diffusion Models", "Generative Adversarial Networks", "Flask"],
  },
    {
    year: "June 2024 - July 2024",
    role: "ELC Summer Intern",
    company: "Thapar Institute of Engineering and Technology",
    description: `Collaborated on the development of a Motorcycle helmet detection and warning system, along with vehicle speed estimation, deployed using Jetson Nano and motion cameras.`,
    technologies: ["Object Detection", "Object Tracking", "Image Recognition"],
  },
];

export const PROJECTS = [
  {
    title: "StockPulse",
    image: project1,
    description:
      "Developed AI agents using OnDemand platform for stock prices prediction and portfolio analysis along with a chatbot, assisting in it's integration with the backend",
    technologies: ["OnDemand", "Django REST", "React", "SQLite"],
    link: "https://github.com/Armaan457/StockPulse"
  },
  {
    title: "LawVista",
    image: project2,
    description:
      "Built a RAG powered research engine for commercial courts using LangChain, integrated with Pinecone as the vector database. Implemented prior case retrieval, legal statute identification and court judgement prediction with explaination.",
    technologies: ["LangChain", "NLTK", "React", "Express", "Django REST", "Pinecone", "MongoDB"],
    link: "https://github.com/Armaan457/LawVista"
  },
  {
    title: "SecureCodeAuditor",
    image: project3,
    description:
      "Implemented an Agentic system using LangGraph and Gemini to scan user code for vulnerabilities and reccommend solutions for them enhanced by parallel processing.",
    technologies: ["LangGraph", "FastAPI", "React"],
    link: "https://github.com/Armaan457/SecureCodeAuditor-Agents_and_Backend"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "Developed and deployed a personal portfolio website for showcasing projects, experience, and skills using React, Tailwind CSS and Framer Motion",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://armaanjagirdar-portfolio.vercel.app/"
  },
  {
    title: "StockSense",
    image: project5,
    description:
      "Built and deployed a comprehensive web application using Streamlit that provide insights into stock market trends, predict future prices, recommend similar stocks, and detect anomalies in stock behavior.",
    technologies: ["TensorFlow", "Scikit-learn", "Streamlit"],
    link: "https://a2-stocksense.streamlit.app/"
  },
  {
    title: "NavSight",
    image: project6,
    description:
      "Developed an voice controlled, AI powered assistive tool for the visually impaired integrating YOLOv9 and BLIP (Transformers) with Django and the frontend using AJAX.",
    technologies: ["Django", "YOLO", "Transformers", "HTML/CSS"],
    link: "https://github.com/Armaan457/NavSight"
  },
];

export const CONTACT = {
  message: "Made with ❤️ by Armaan Jagirdar",
  email: "armaanjagirdar05@gmail.com",
};
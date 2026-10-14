import project1 from "../assets/Projects/project-1.png";
import project2 from "../assets/Projects/project-2.png";
import project3 from "../assets/Projects/project-3.png";
import project4 from "../assets/Projects/project-4.png";
import project5 from "../assets/Projects/project-5.png";
import drdo from "../assets/Experience/drdoLogo.png";
import forageai from "../assets/Experience/forageaiLogo.png";
import glance from "../assets/Experience/glanceLogo.png";
import sih from "../assets/Achievements/sihLogo.png";
import bwave from "../assets/Achievements/bwaveLogo.png";
import howasp from "../assets/Achievements/howaspLogo.png";
import flipkart from "../assets/Achievements/flipkartLogo.png";
import acm from "../assets/Achievements/acmLogo.png";
import amazon from "../assets/Achievements/amazonLogo.png";
import zotik from "../assets/Experience/zotikLogo.png";

export const HERO_CONTENT = `I build AI/ML and backend systems that hold up in production. Most of my work revolves around deep learning & agentic AI pipelines along with graph based systems and async microservices, turning research prototypes into fast, reliable software that actually runs.`;

export const ABOUT_TEXT = `I am a final-year Computer Engineering student at Thapar Institute of Engineering and Technology, driven by understanding how complex systems function under the hood. My work sits at the intersection of intelligent systems and scalable software engineering, taking ideas from research all the way to production workflows. I care deeply about clean architecture, system reliability, and thoughtful software usability. Beyond the terminal, I actively organize hackathons and technical events, and previously served at a leadership role in ACM and Center of Excellence: Data Science and AI at my college.`;

export const EXPERIENCES = [
  {
    year: "August 2026 - Present",
    role: "Applied Scientist Intern",
    company: "Glance (InMobi)",
    description: [
      "Designed and developed production-ready multimodal agent pipelines with retrieval and evaluation components for a large-scale US event",
      "Built and optimized retrieval workflows powering fast and reliable context selection across agentic generation pipelines.",
    ],
    technologies: ["Agentic AI", "Agents Evaluation", "RAG", "LLMs", "Databricks"],
    logo: glance
  },
  {
    year : "May 2026 - July 2026",
    role : "SDE Intern",
    company : "Zotik",
    description : [
      "Delivered a production-ready Virtual Try-On and video generation microservice, with ~10s image generation and ~30s video generation.",
      "Researched, implemented, and evaluated multiple VTON models to optimize generation quality and costs.",
      "Architected asynchronous AI workflows using FastAPI, webhooks, and polling, enabling reliable long running inference with zero production downtime"
    ],
    technologies : ["Generative AI", "Diffusion Models", "FastAPI", "PostgreSQL", "Docker"],
    logo : zotik
  },
  {
    year: "June 2025 - October 2025",
    role: "AI Intern",
    company: "Centre for Artificial Intelligence and Robotics, DRDO",
    description: [
      "Built a robust multi-step GraphRAG framework over a cyber threat intelligence database with an explainable evaluation system.",
      "Designed reasoning pipelines for context-aware threat intelligence and explainable responses.",
      "Optimised Neo4j knowledge graph generation and retrieval pipelines, improving pattern matching and system output"
    ],
    technologies: ["Knowledge Graphs", "GraphRAG", "AutoGen", "LangGraph", "LLMs"],
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
    technologies: ["CrewAI", "Multimodal AI", "NLP", "Computer Vision", "AWS"],
    logo: forageai
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
    live: "https://stockpulse.armaanjagirdar.me/"
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
    title: "BloomMesh",
    image: project5,
    description: [
    "Engineered a Dynamo-style distributed Bloom filter cluster with consistent hashing, tunable quorum consistency, and fault-tolerant replication across independent nodes.",
    "Built an asynchronous TCP storage layer with automatic topology rebalancing and keyless anti-entropy repair, enabling self-healing synchronization without transmitting raw keys."
    ],
    technologies: ["Python", "AsyncIO", "TCP", "WebSockets", "MurmurHash3"],
    link: "https://github.com/Armaan457/BloomMesh",
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
    description: "Selected for the Amazon ML Summer School 2026, among the top 2% of 130,000+ applicants. Participated in an intensive program covering advanced machine learning concepts."
  },
  {
    title: "Semi-Finalist at Flipkart Grid 8.0",
    image: flipkart, 
    date: "July 2026",
    description: "Secured the top 1% position in Flipkart GRiD 8.0, advancing to the semi-finals by solving complex algorithmic and data structure challenges under a strict time window"
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

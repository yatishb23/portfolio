import { Project } from "@/type/projects";

export const projects: Project[] = [
  {
    id: 'scaleup',
    title: "ScaleUp",
    smallDes: "ScaleUp is a web application built with Next.js and TypeScript that provides detailed feedback on resumes. It evaluates formatting, grammar, skills, and ATS compatibility while offering an interactive dashboard, chatbot support, and curated resume examples to help users improve their resumes efficiently.",
    description: "ScaleUp is an advanced web application built using Next.js and TypeScript, designed to help users optimize their resumes with precision and efficiency. The platform analyzes key aspects of a resume, including formatting consistency, grammar accuracy, relevant skill matching, and ATS (Applicant Tracking System) compatibility.",
    liveLink: "https://resume-analyzer-rust.vercel.app/",
    githubLink: "https://github.com/yatishb23/resumeAnalyzer",
    video:'',
    image: '',
    tweetUrl: "",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Gemini AI",
      "TypeScript",
      "shadcn/ui",
      "Express",
      "Node.js"
    ],
  },
  {
    id: 'localite-map',
    title: "Localite Maps",
    smallDes: "A customizable map application where users can rename locations and color-code areas based on population density. Built with React, Vite, Prisma, and Tailwind CSS for a seamless and interactive experience.",
    description: "This is an interactive and fully customizable map platform built with React, Vite, Prisma, and Tailwind CSS, designed to offer users a dynamic way to interact with geographic data. The application enables users to rename locations, annotate points of interest, and color-code regions based on population density or other custom metrics such as economic activity, pollution levels, or demographic trends.",
    liveLink: "",
    githubLink: "https://github.com/yatishb23/myPov-map",
    video: "",
    image: '',
    tweetUrl: "",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Open Street Maps",
      "TypeScript",
      "shadcn/ui",
      "PostgreSQL"
    ],
  },
  {
    id: 'expense',
    title: "Expense Tracker",
    smallDes: "Expense Tracker - A full-stack web application for tracking expenses, featuring user authentication, a dynamic dashboard, and a simple UI. Built with React (Vite) for the frontend and Node.js with Express for the backend.",
    description: "Expense Tracker is a comprehensive, full-stack web application designed to help users monitor, categorize, and analyze their personal or business expenses in real time. Built using React (with Vite) on the frontend and Node.js with Express on the backend, it offers a fast, responsive, and secure experience tailored for everyday budgeting needs.",
    liveLink: "expense-tracker-six-coral.vercel.app",
    githubLink: "https://github.com/yatishb23/Expense-Tracker",
    video: "",
    image: '',
    tweetUrl: "",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
    ],
  },
  {
    id: 'learnx',
    title: "LearnX",
    smallDes: "Comprehensive Course Marketplace",
    description: "LearnX is a comprehensive course marketplace platform that seamlessly connects educators with learners. Built on the MERN stack with TypeScript, it features secure user authentication, streamlined course management, and integrated payment processing through Razorpay. The platform emphasizes user experience with intuitive navigation, responsive design, and robust content delivery, making online education accessible and engaging.",
    liveLink: "https://learnx-frontend.onrender.com/",
    githubLink: "https://github.com/KartikLabhshetwar/LearnX",
    image: '/images/learnx.png',
    tweetUrl: "https://x.com/code_kartik/status/1832882108316176563",
    tags: [
      "MERN",
      "Zod",
      "JWT",
      "TypeScript",
      "bcryptjs",
      "Tailwind CSS",
      "Razorpay API"
    ],
  },
  {
    id: 'taskmaster',
    title: "TaskMaster",
    smallDes: "Dynamic Task Management Dashboard",
    description: "TaskMaster redefines task management with its dynamic Kanban board implementation and detailed list views. This full-stack application combines the flexibility of Next.js with the reliability of MongoDB to deliver a seamless task organization experience. Features include real-time updates, drag-and-drop functionality, and customizable workflows, all wrapped in an elegant, responsive interface that prioritizes productivity and user experience.",
    liveLink: "https://task-management-dashboard-zeta.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/task-management-dashboard",
    image:'/images/taskmaster.png',
    // tweetUrl: "https://x.com/code_kartik/status/1887125453359788069",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
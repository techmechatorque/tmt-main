import { Terminal, Code, FileJson, Coffee, Network, LayoutTemplate, BrainCircuit, Server, GitGraph, Rocket, Sparkles } from "lucide-react";
import React from "react";

export interface CourseDay {
  day: number;
  title: string;
  topics: string[];
}

export interface CourseWeek {
  week: number;
  title: string;
  days: CourseDay[];
}

export interface Course {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
  curriculum: CourseWeek[];
}

export interface Track {
  title: string;
  courses: (Course & { month: string })[];
}

// Helper to generate generic 4-week structure for simplicity in prototyping
const generateCurriculum = (weeks: string[]): CourseWeek[] => {
  return weeks.map((weekTitle, i) => ({
    week: i + 1,
    title: weekTitle,
    days: Array.from({ length: 5 }).map((_, j) => ({
      day: j + 1,
      title: `Day ${j + 1} Deep Dive`,
      topics: ["Concept Introduction", "Live Coding Session", "Hands-on Exercise", "Q&A"],
    })),
  }));
};

export const learningTracks: Track[] = [
  {
    title: "Data Structures & Algorithms",
    courses: [
      { 
        id: "c-language", month: "Month - 1", name: "C Language", desc: "Master the foundational syntax, pointers, and memory management.", 
        icon: <Terminal className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Basics & Control Flow", "Functions & Arrays", "Pointers & Memory", "File Handling & Projects"])
      },
      { 
        id: "fundamentals-of-dsa", month: "Month - 2", name: "Fundamentals of DSA", desc: "Learn basic data structures like Arrays, Linked Lists, Stacks, Queues.", 
        icon: <Network className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Basic Sorting & Searching"])
      },
      { 
        id: "advanced-dsa", month: "Month - 3", name: "Advanced DSA", desc: "Tackle Trees, Graphs, Dynamic Programming, and complex algorithms.", 
        icon: <GitGraph className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Trees & BST", "Graphs & Traversals", "Dynamic Programming", "Advanced Algorithms & Tries"])
      }
    ]
  },
  {
    title: "Full-Stack Web (MERN)",
    courses: [
      { 
        id: "javascript", month: "Month - 1", name: "JavaScript", desc: "Deep dive into JS ES6+, DOM manipulation, and async programming.", 
        icon: <FileJson className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["JS Fundamentals", "DOM & Events", "Async JS & APIs", "ES6+ & Modern Practices"])
      },
      { 
        id: "web-dev-mern", month: "Month - 2", name: "Web Dev using MERN", desc: "Build full-stack apps with MongoDB, Express, React, Node.js.", 
        icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["React Basics", "Node.js & Express", "MongoDB & Mongoose", "Full Stack Integration"])
      },
      { 
        id: "capstone-mern", month: "Month - 3", name: "Capstone Projects (MERN)", desc: "Develop and deploy enterprise-grade scalable web applications.", 
        icon: <Rocket className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Project Planning & Setup", "Frontend Development", "Backend Development", "Deployment & Testing"])
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    courses: [
      { 
        id: "python", month: "Month - 1", name: "Python", desc: "Python fundamentals, object-oriented programming, and data handling.", 
        icon: <Code className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Python Basics", "Data Structures", "OOPs in Python", "Data Handling & Libraries"])
      },
      { 
        id: "ai-ml-basics", month: "Month - 2", name: "AI & ML Basics", desc: "Supervised/Unsupervised learning, scikit-learn, neural networks.", 
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Intro to ML", "Supervised Learning", "Unsupervised Learning", "Neural Networks Basics"])
      },
      { 
        id: "gen-ai", month: "Month - 3", name: "Gen AI", desc: "LLMs, Prompt Engineering, LangChain, and advanced generative models.", 
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Intro to LLMs", "Prompt Engineering", "LangChain & Agents", "Building GenAI Apps"])
      }
    ]
  },
  {
    title: "Enterprise Web (Java)",
    courses: [
      { 
        id: "java", month: "Month - 1", name: "Java", desc: "Core Java, OOPs, Collections framework, and Exception handling.", 
        icon: <Coffee className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Java Syntax & OOPs", "Advanced OOPs", "Collections Framework", "Exceptions & Multithreading"])
      },
      { 
        id: "web-dev-java", month: "Month - 2", name: "Web Dev using Java", desc: "Spring Boot, Hibernate, REST APIs, and modern Microservices.", 
        icon: <Server className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["Spring Boot Basics", "RESTful APIs", "Hibernate & JPA", "Microservices Intro"])
      },
      { 
        id: "capstone-java", month: "Month - 3", name: "Capstone Projects (Java)", desc: "Deploy highly scalable, secure, and robust backend systems.", 
        icon: <Rocket className="w-8 h-8 text-primary" />,
        curriculum: generateCurriculum(["System Architecture", "API Development", "Security & Database", "Deployment & CI/CD"])
      }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  for (const track of learningTracks) {
    for (const course of track.courses) {
      if (course.id === id) return course;
    }
  }
  return undefined;
};

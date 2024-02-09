import React from "react";
import malImg from "@/public/mal.png";
import senteImg from "@/public/sente.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Basic-Types-of-Malware",
    description:
      "This repository offers details and tools for various malware types, organized in folders with tools and explanations for each.",
    tags: ["Python", "C", "C++"],
    imageUrl: malImg,
  },
  {
    title: "Code-Sentinel",
    description:
      "Code Sentinel that scans code files for potential security vulnerabilities. The goal is to identify suspicious patterns in the code that could indicate the presence of vulnerabilities.",
    tags: ["Python"],
    imageUrl: senteImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "PHP",
  "React",
  "Node.js",
  "Vue.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Bash / Shell",
  "PostgreSQL",
  "SQL",
  "Python",
  "C",
  "C++",
  "Docker",
  "Burp Suite",
  "Wireshark",
  "Metasploit",
] as const;

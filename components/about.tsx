"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I'm Pedro Lima, a passionate Full Stack Developer with over three years of dedicated experience in cybersecurity. I'm adept at conducting detailed penetration tests using various tools and frameworks, and I actively engage in online CTFs to continually sharpen and apply my expertise. My approach is driven by a commitment to security standards such as OWASP, NIST, ISO 27001, and ISO 27002, ensuring the incorporation of security practices right from the initial stages of software development. My technical proficiency spans across PHP, JavaScript, SQL, Python, and more, while I also excel in critical soft skills like web security best practices and clean architecture adherence.
      </p>
    </motion.section>
  );
}

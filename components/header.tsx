"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('Em manutenção');
  }
  
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[15rem] sm:rounded-full bg-gray-950 border-black/40 bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <motion.li
              className="relative flex items-center justify-center h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex items-center justify-center w-full px-3 py-3 text-gray-500 transition hover:text-gray-300"
                href="/">Home
                  <motion.span
                    className="absolute inset-0 rounded-full -z-10 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}>
                    </motion.span>
              </Link>
            </motion.li>

            <motion.li
          className="relative flex items-center justify-center h-3/4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}>
          <a className="flex items-center justify-center w-full px-3 py-3 text-gray-500 transition cursor-pointer hover:text-gray-300"
            onClick={handleBlogClick}>Blog
              <motion.span
                className="absolute inset-0 rounded-full -z-10 "
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}>
                </motion.span>
              </a>
            </motion.li>
            {/* <motion.li
              className="relative flex items-center justify-center h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {/* <Link
                className="flex items-center justify-center w-full px-3 py-3 text-gray-500 transition hover:text-gray-300"
                href="/blog">Blog
                  <motion.span
                    className="absolute inset-0 rounded-full -z-10 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}>
                    </motion.span>
              </Link> 
            </motion.li>*/}
        </ul>
      </nav>
    </header>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

const SimpleNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add scroll listener
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md" 
          : "py-3 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative h-8 w-8 mr-2 overflow-hidden">
            <Image
              src="/logo.png"
              alt="DataSAZ Logo"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-base md:text-lg font-bold bg-gradient-to-r from-datasaz-green to-datasaz-blue bg-clip-text text-transparent">
            DataSAZ
          </span>
        </Link>

        <div className="flex items-center space-x-3">
          <Link href="/"
            className="hidden sm:block mr-2 px-3 py-1.5 text-sm rounded-full 
              bg-gradient-to-r from-green-500/10 to-cyan-500/10 
              hover:from-green-500/20 hover:to-cyan-500/20
              text-gray-700 dark:text-gray-200
              border border-gray-200 dark:border-gray-700
              hover:border-green-300 dark:hover:border-green-700
              transition-all duration-300
              transform hover:scale-105"
          >
            Return to Home
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default SimpleNavbar; 
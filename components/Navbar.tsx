"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary-700">
          <img src="/showcase/app_icon.png" alt="우리동네" width={32} height={32} className="rounded-lg" />
          우리동네
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-primary-900/70 transition-colors hover:text-primary-600"
          >
            기능 소개
          </a>
          <a
            href="#download"
            className="rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
          >
            앱 다운로드
          </a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          다운로드
        </a>
      </div>
    </motion.nav>
  );
}

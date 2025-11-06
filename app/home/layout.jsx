"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Turntable from "@/components/Turntable";
import Header from "@/components/Header";

export default function HomeLayout({ children }) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      <Header />

      {/* 턴테이블 슈욱 이동 */}
      <motion.div
        animate={{
          scale: 1,
          x: -windowSize.width / 2 + 20,
          y: -windowSize.height / 2 + 20,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2"
      >
        <Turntable isCompact={true} />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.main
          key={children?.props?.route || "page"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen pt-28 px-4"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

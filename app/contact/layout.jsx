"use client";

import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeLayout({ children }) {
  return (
    <>
      {/* 배경, 헤더 등 레이아웃 요소 */}
      <div className="bg-linear-to-br from-purple-900 via-indigo-900 to-black text-white relative overflow-hidden min-h-screen">
        <Header />
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
    </>
  );
}

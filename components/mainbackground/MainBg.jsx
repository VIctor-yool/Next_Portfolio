"use client";
import { motion } from "framer-motion";

export default function MainBackground({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-linear-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center"
    >
      {/* 배경 위에 올려둘 콘텐츠 */}
      <div className="relative z-10 text-center">{children}</div>
    </motion.div>
  );
}

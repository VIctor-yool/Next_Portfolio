"use client"; // ✅ Next.js 클라이언트 컴포넌트 선언

import { motion, AnimatePresence } from "framer-motion"; // ✅ framer-motion에서 가져오기
import { Music } from "lucide-react";
import { useState } from "react";
import PlayBtn from "./turntable/PlayBtn";

export default function Turntable({ isCompact, currentSection }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <motion.div
      initial={false}
      animate={{
        left: isCompact ? "2rem" : "3rem",
        top: isCompact ? "6rem" : "50%",
        y: isCompact ? "0" : "-50%",
        scale: isCompact ? 0.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      className="fixed z-40"
    >
      <div className="relative">
        <motion.div
          initial={false}
          animate={{
            width: isCompact ? "160px" : "256px",
            height: isCompact ? "160px" : "256px",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative"
        >
          {/* 🎛️ Turntable Base */}
          <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-6">
            {/* 💿 Vinyl Record */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-full h-full"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-gray-900 via-black to-gray-800 shadow-inner">
                {/* Grooves */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-gray-700/30"
                    style={{
                      margin: `${i * (isCompact ? 3 : 6)}px`,
                    }}
                  />
                ))}

                {/* Center Label */}
                <motion.div
                  animate={{
                    width: isCompact ? "40px" : "80px",
                    height: isCompact ? "40px" : "80px",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg"
                >
                  <motion.div
                    animate={{
                      width: isCompact ? "32px" : "64px",
                      height: isCompact ? "32px" : "64px",
                    }}
                    className="rounded-full bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center"
                  >
                    <Music
                      className={
                        isCompact ? "w-4 h-4 text-white" : "w-8 h-8 text-white"
                      }
                    />
                  </motion.div>
                </motion.div>

                {/* Center Hole */}
                <motion.div
                  animate={{
                    width: isCompact ? "6px" : "12px",
                    height: isCompact ? "6px" : "12px",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 shadow-inner"
                />
              </div>
            </motion.div>

            {/* 🎚️ Tone Arm */}
            <motion.div
              animate={{ rotate: isPlaying ? 25 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute -left-2 top-8 origin-top-left"
            >
              <motion.div
                animate={{
                  width: isCompact ? "48px" : "96px",
                }}
                className="h-2 bg-linear-to-r from-gray-500 to-gray-600 rounded-full relative"
              >
                <div className="absolute -right-1 -top-1 w-4 h-4 bg-gray-700 rounded-full" />
                <div className="absolute -left-1 -top-0.5 w-3 h-3 bg-purple-500 rounded-sm rotate-45" />
              </motion.div>
            </motion.div>
          </div>

          {/* ✨ Glow Effect */}
          <motion.div
            animate={{
              opacity: isPlaying ? [0.5, 0.8, 0.5] : 0.3,
              scale: isPlaying ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-lg bg-purple-500/20 blur-xl -z-10"
          />
        </motion.div>
      </div>

      {/* 재생 버튼 */}
      <PlayBtn isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </motion.div>
  );
}

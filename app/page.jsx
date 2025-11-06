"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import OpeningAnimation from "@/components/OpeningAnimation";
import Turntable from "@/components/Turntable";
import TrackSection from "@/components/Track/trackorganism/TrackSection";

export default function Page() {
  const [stage, setStage] = useState("loading");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (stage === "loading") {
      const timer1 = setTimeout(() => setStage("opening"), 2000);
      return () => clearTimeout(timer1);
    }
    if (stage === "opening") {
      const timer2 = setTimeout(() => setStage("ready"), 2500);
      return () => clearTimeout(timer2);
    }
  }, [stage]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* 🌌 메인 페이지 전용 배경 (layout에는 없음) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900"
      >
        {/* 배경에 움직이는 별/입자 효과 */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * 800, -100],
              x: [Math.random() * 1200, Math.random() * 1200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          />
        ))}
      </motion.div>

      {/* 🎬 Stage: Loading */}
      <AnimatePresence>
        {stage === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎞️ Stage: Opening */}
      <AnimatePresence>
        {stage === "opening" && (
          <motion.div
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <OpeningAnimation onComplete={() => setStage("ready")} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌠 Stage: Main */}
      <AnimatePresence>
        {stage === "ready" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen flex flex-col items-center justify-center z-10"
          >
            {/* 🎛️ 턴테이블 */}
            <Turntable isPlaying={isPlaying} isCompact={false} />

            {/* 🎵 트랙 섹션 */}
            <section className="container mx-auto px-4 py-8 text-center relative z-10">
              <TrackSection />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Disc3, Waves, Radio } from "lucide-react";

export default function OpeningAnimation({ onComplete = () => {} }) {
  const [particles, setParticles] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const arr = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));

    // ⚙️ StrictMode 경고 방지
    requestAnimationFrame(() => setParticles(arr));

    // ⏱️ 2.0초에 페이드아웃 시작 → 2.5초에 완료
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const doneTimer = setTimeout(onComplete, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 1.05 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-99 bg-linear-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center overflow-hidden"
    >
      {/* 배경 파티클 */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 0,
              scale: 0,
              x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
              y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              x: p.x,
              y: p.y,
            }}
            transition={{
              duration: 1.8,
              delay: p.id * 0.04,
              ease: "easeOut",
            }}
            className="absolute w-4 h-4 rounded-full bg-purple-500/30"
          />
        ))}
      </div>

      {/* 메인 로고 */}
      <div className="relative z-10">
        {/* 확장 링 */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 3, 3], opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.8, delay: i * 0.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-purple-500"
          />
        ))}

        {/* 디스크 */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-64 h-64 rounded-full bg-linear-to-br from-purple-600 via-indigo-600 to-purple-800 flex items-center justify-center shadow-2xl">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-black/20"
                style={{ margin: `${i * 12}px` }}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="relative z-10"
            >
              <Music className="w-24 h-24 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <h1 className="text-white text-5xl tracking-wider">PORTFOLIO MIX</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mt-4"
          />
        </motion.div>

        {/* 아이콘 */}
        {[
          { Icon: Disc3, delay: 1.0, x: -150, y: -100 },
          { Icon: Radio, delay: 1.1, x: 150, y: -100 },
          { Icon: Waves, delay: 1.2, x: -150, y: 100 },
          { Icon: Music, delay: 1.3, x: 150, y: 100 },
        ].map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: [0, x],
              y: [0, y],
            }}
            transition={{ delay, duration: 1.3 }}
            className="absolute top-1/2 left-1/2"
          >
            <Icon className="w-12 h-12 text-purple-400" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

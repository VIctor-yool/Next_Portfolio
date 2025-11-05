"use client";
import { motion } from "framer-motion";
import { Music, Disc3 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 bg-black flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-48 h-48"
        >
          <Disc3 className="w-full h-full text-purple-500/30" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 w-48 h-48 flex items-center justify-center"
        >
          <div className="w-32 h-32 rounded-full bg-linear-to-br from-purple-600/40 to-indigo-600/40 blur-xl" />
        </motion.div>

        <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity },
            }}
            className="w-20 h-20 rounded-full bg-linear-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-2xl"
          >
            <Music className="w-10 h-10 text-white" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-1/3 text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-purple-300 tracking-widest"
        >
          LOADING TRACKS...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

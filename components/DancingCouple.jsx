"use client";
import { motion } from "framer-motion";
import { Character } from "./dancingcharacter/dancingMolecules/Character";

export default function DancingCouple({ section }) {
  if (!section) return null;

  const dances = {
    home: { duration: 3, movement: { y: [0, -10, 0], rotate: [0, -3, 3, 0] } },
    about: { duration: 3.5, movement: { y: [0, -5, 0], scale: [1, 1.02, 1] } },
    projects: { duration: 2.5, movement: { y: [0, -12, 0], x: [0, -3, 3, 0] } },
    skills: { duration: 3, movement: { y: [0, -8, 0], rotate: [0, 2, -2, 0] } },
    contact: { duration: 2, movement: { y: [0, -15, 0], scale: [1, 1.05, 1] } },
  };
  const dance = dances[section] || dances.home;

  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="absolute -right-40 top-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={dance.movement}
        transition={{
          duration: dance.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Character section={section} duration={dance.duration} />
      </motion.div>
    </motion.div>
  );
}

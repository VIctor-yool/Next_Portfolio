import { motion } from "framer-motion";

export function FemaleCharacter({ section, duration }) {
  const getArmPose = () => {
    switch (section) {
      case "home":
        return { left: [0, -90, 0], right: [0, 20, 0] };
      case "about":
        return { left: [0, -95, 0], right: [0, 15, 0] };
      case "projects":
        return { left: [0, -88, -78, 0], right: [0, 25, -15, 0] };
      case "skills":
        return { left: [0, -85, 0], right: [0, 18, 0] };
      case "contact":
        return { left: [0, -75, 0], right: [0, 30, 0] };
      default:
        return { left: [0, -90, 0], right: [0, 20, 0] };
    }
  };

  const armPose = getArmPose();

  return (
    <div className="relative w-18 h-22">
      {/* Head */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-pink-400 to-rose-600" />
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-pink-200 via-pink-300 to-pink-400 border-2 border-pink-500 shadow-lg" />
      </div>

      {/* Body */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-9 h-11">
        <div className="absolute top-0 inset-x-0 h-5 rounded-t-lg bg-linear-to-br from-pink-400 via-pink-500 to-rose-600 border-2 border-pink-600 shadow-lg" />
        <motion.div
          animate={{ scaleX: [1, 1.1, 1], scaleY: [1, 0.95, 1] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-5 left-1/2 -translate-x-1/2 w-full h-6"
          style={{ transformOrigin: "top center" }}
        >
          <div className="w-full h-full rounded-b-full bg-linear-to-b from-pink-500 via-rose-500 to-pink-600 border-2 border-t-0 border-pink-700 shadow-lg" />
        </motion.div>
      </div>

      {/* Arms */}
      <motion.div
        animate={{ rotate: armPose.left }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-0.5 origin-top w-1.5 h-8 bg-linear-to-b from-pink-200 to-pink-400 rounded-full border border-pink-500"
        style={{ transformOrigin: "top center" }}
      />
      <motion.div
        animate={{ rotate: armPose.right }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -right-0.5 origin-top w-1.5 h-8 bg-linear-to-b from-pink-200 to-pink-400 rounded-full border border-pink-500"
        style={{ transformOrigin: "top center" }}
      />

      {/* Legs */}
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{
          duration: duration / 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-3 w-1.5 h-5 bg-linear-to-b from-pink-300 to-pink-400 rounded-full"
      />
      <motion.div
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{
          duration: duration / 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-3 w-1.5 h-5 bg-linear-to-b from-pink-300 to-pink-400 rounded-full"
      />
    </div>
  );
}

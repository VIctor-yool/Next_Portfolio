import { motion } from "framer-motion";

export function MaleCharacter({ section, duration }) {
  const getArmPose = () => {
    switch (section) {
      case "home":
        return { left: [0, 15, 0], right: [0, -80, 0] };
      case "about":
        return { left: [0, 10, 0], right: [0, -90, 0] };
      case "projects":
        return { left: [0, 20, -10, 0], right: [0, -85, -75, 0] };
      case "skills":
        return { left: [0, 12, 0], right: [0, -82, 0] };
      case "contact":
        return { left: [0, 25, 0], right: [0, -70, 0] };
      default:
        return { left: [0, 10, 0], right: [0, -80, 0] };
    }
  };

  const armPose = getArmPose();

  return (
    <div
      className="relative w-18 h-22"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Head */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-orange-600 to-amber-700 transform translate-z-[-4px] blur-[1px]" />
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-amber-300 via-amber-400 to-orange-500 border-2 border-orange-600 shadow-lg">
          {/* Eyes */}
          <div className="absolute top-3 left-2 w-1.5 h-2 bg-gray-900 rounded-full" />
          <div className="absolute top-3 right-2 w-1.5 h-2 bg-gray-900 rounded-full" />
          {/* Mouth */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-gray-900 rounded-full" />
        </div>
      </div>

      {/* Body */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-7 h-11">
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 border-2 border-gray-900 shadow-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-linear-to-b from-red-600 to-red-800 rounded-sm" />
        </div>
      </div>

      {/* Arms */}
      <motion.div
        animate={{ rotate: armPose.left }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-0.5 origin-top w-1.5 h-8 bg-linear-to-b from-amber-300 to-orange-500 rounded-full border border-orange-600"
        style={{ transformOrigin: "top center" }}
      />
      <motion.div
        animate={{ rotate: armPose.right }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -right-0.5 origin-top w-1.5 h-8 bg-linear-to-b from-amber-300 to-orange-500 rounded-full border border-orange-600"
        style={{ transformOrigin: "top center" }}
      />

      {/* Legs */}
      <motion.div
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{
          duration: duration / 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-2.5 w-2 h-7 bg-linear-to-b from-gray-800 to-gray-900 rounded-full border border-gray-900"
        style={{ transformOrigin: "top center" }}
      />
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{
          duration: duration / 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-2.5 w-2 h-7 bg-linear-to-b from-gray-800 to-gray-900 rounded-full border border-gray-900"
        style={{ transformOrigin: "top center" }}
      />
    </div>
  );
}

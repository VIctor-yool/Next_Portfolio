"use client";

import { useState } from "react";

const PlayBtn = ({ isPlaying, setIsPlaying }) => {
  return (
    <button
      onClick={() => setIsPlaying((p) => !p)}
      className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
    >
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
};

export default PlayBtn;

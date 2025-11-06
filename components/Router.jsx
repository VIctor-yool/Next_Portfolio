"use client";

import { useRouter } from "next/navigation";
import { Music } from "lucide-react";

export default function Playlist() {
  const router = useRouter();

  const tracks = [
    { name: "playlist", path: "/" },
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Tech Stack", path: "/techstack" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-12">
      {tracks.map((track, i) => (
        <button
          key={i}
          onClick={() => router.push(track.path)} // ✅ 클릭 시 페이지 이동
          className="flex items-center justify-between bg-white/5 hover:bg-purple-600/20 p-4 rounded-xl border border-white/10 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-sm">{track.name}</span>
          </div>
          <span className="text-gray-400 text-xs">▶</span>
        </button>
      ))}
    </div>
  );
}

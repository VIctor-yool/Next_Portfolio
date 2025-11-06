"use client";

import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

const TrackItem = ({ id, title, artist, Icon, color }) => {
  const router = useRouter();

  const handleClick = () => {
    // 클릭 시 해당 페이지로 이동
    router.push(`/${id.toLowerCase()}`); // id를 소문자로 변환
  };

  return (
    <div
      onClick={handleClick}
      className="group flex items-center justify-between w-full bg-white/5 hover:bg-white/10 transition-all p-3 rounded-xl cursor-pointer border border-white/10 hover:border-purple-400/40 hover:scale-105"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-lg bg-linear-to-br ${color} flex items-center justify-center`}
        >
          <Icon className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-[16px] font-medium text-white">{title}</h3>
          <p className="text-[13px] text-gray-400">{artist}</p>
        </div>
      </div>
      <div className="flex gap-3 ">
        <span className="text-gray-500 text-sm">∞</span>
        <Play className="text-purple-400 opacity-0 group-hover:opacity-100 transition duration-800" />
      </div>
    </div>
  );
};

export default TrackItem;

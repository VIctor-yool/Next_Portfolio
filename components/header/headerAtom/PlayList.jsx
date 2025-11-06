"use client";

import { List } from "lucide-react";
import { useRouter } from "next/navigation";

const PlayList = () => {
  const router = useRouter();

  const goToMain = () => {
    router.push("/"); // 메인 페이지로 이동
  };

  return (
    <button
      onClick={goToMain} // 클릭 시 메인페이지로 이동
      className="flex justify-center items-center gap-2 px-4 py-2 border border-purple-400/50 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 transition"
    >
      <List className="text-purple-300" />
      <span className="text-purple-100 text-[14px]">Playlist</span>
    </button>
  );
};

export default PlayList;

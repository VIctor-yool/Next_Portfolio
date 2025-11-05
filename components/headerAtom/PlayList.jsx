import { List } from "lucide-react";

const PlayList = () => {
  return (
    <button className="flex justify-center items-center gap-2 px-4 py-2 border border-purple-400/50 rounded-lg bg-purple-600/30 hover:bg-purple-600/50">
      <List className="text-purple-300" />
      <span className="text-purple-100 text-[14px]">Playlist</span>
    </button>
  );
};

export default PlayList;

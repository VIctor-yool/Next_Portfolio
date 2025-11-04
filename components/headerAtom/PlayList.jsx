import { List } from "lucide-react";

const PlayList = () => {
  return (
    <button className="flex justify-center items-center gap-2">
      <List className="text-purple-300" />
      <span className="text-purple-100">Play List</span>
    </button>
  );
};

export default PlayList;

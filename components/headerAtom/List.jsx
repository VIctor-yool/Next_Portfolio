const List = ({ List, Icon }) => {
  return (
    <button className="flex justify-center items-center gap-2 hover:bg-purple-700/30 rounded-lg px-4 py-2">
      <span className="text-purple-400 text-[12px]">{Icon}</span>
      <span className="text-purple-300 text-[16px]">{List}</span>
    </button>
  );
};

export default List;

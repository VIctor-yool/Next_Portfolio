const List = ({ List, Icon }) => {
  return (
    <button className="flex justify-center items-center gap-2 ">
      <span>{Icon}</span>
      <span>{List}</span>
    </button>
  );
};

export default List;

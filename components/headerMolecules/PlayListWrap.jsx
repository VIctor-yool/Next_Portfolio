import PlayList from "../headerAtom/PlayList";
import PortfolioMix from "../headerAtom/PortfolioMix";

const PlayListWrap = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <PlayList />
      <PortfolioMix />
    </div>
  );
};

export default PlayListWrap;

import PlayListWrap from "./headerMolecules/PlayListWrap";
import UList from "./headerMolecules/UList";

// components/Header.jsx
export default function Header() {
  return (
    <header className="fixed px-3 py-2 top-0 left-0 right-0 z-50  bg-linear-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-sm border-b border-purple-500/30">
      <h2 className="flex justify-between items-center max-w-19/20 m-auto text-[18px]">
        <PlayListWrap />
        <UList />
      </h2>
    </header>
  );
}

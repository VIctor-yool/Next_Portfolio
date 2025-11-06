"use client";

import { Play } from "lucide-react";
import TrackList from "../trackMolecules/TrackList";
import Tracks from "../trackAtom/Tracks";

const TrackSection = () => {
  return (
    <div className="max-w-4/12 mx-auto bg-linear-to-b from-purple-700 via-purple-800 to-indigo-900 rounded-3xl shadow-xl overflow-hidden border border-white/10 backdrop-blur-md">
      {/* 헤더 영역 */}
      <div className="bg-linear-to-r from-purple-600 to-indigo-500 px-5 py-4 flex items-center gap-3">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex justify-center items-center">
          <Play className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold text-white">
            Sinyools Portfolio Playlist
          </h2>
          <p className="text-sm text-gray-200">Select a track to begin</p>
        </div>
      </div>

      {/* 트랙 리스트 */}
      <div className="px-4 py-4 space-y-3 bg-black/60">
        <TrackList tracks={Tracks} />
      </div>

      {/* 하단 푸터 */}
      <div className="text-center text-gray-400 text-sm py-6.5 bg-black/30">
        5 tracks • Click to play
      </div>
    </div>
  );
};

export default TrackSection;

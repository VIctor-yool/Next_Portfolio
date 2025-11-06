"use client";

import TrackItem from "../trackAtom/TrackItem";

const TrackList = ({ tracks }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          id={track.id} // id 전달
          title={track.title}
          artist={track.artist}
          Icon={track.icon}
          color={track.color}
        />
      ))}
    </div>
  );
};

export default TrackList;

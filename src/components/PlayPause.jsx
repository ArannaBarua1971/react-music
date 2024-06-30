import React from "react";
import Controls from "./MusicPlayer/Controls";
import VolumeBar from "./MusicPlayer/VolumeBar";

export default function PlayPause() {
  return (
    <div className="fixed z-20 bottom-0 left-0 right-0 glassyBg text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src="https://static.toiimg.com/thumb/msid-96585261,width-400,resizemode-4/96585261.jpg"
          alt=""
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h5 className="text-lg">Song Title</h5>
          <p className="text-sm text-gray-400">Artist Name</p>
        </div>
      </div>

      <Controls />
      <VolumeBar />
    </div>
  );
}

import React from "react";
import Track from "./Track";

export default function Controls() {
  return (
    <div className="flex items-center flex-col w-[50%]">
     <Track/>
      <div className="play_pause">
        <button className="mx-2">
          <i className="fa-solid fa-backward"></i>
        </button>
        <button className="mx-2">
          <i className="fa-solid fa-play"></i>
        </button>
        <button className="mx-2">
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}

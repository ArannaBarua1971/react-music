import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playSong } from "../redux/features/playerSlice";

export default function SongCard({ index }) {
  const [play, setPlay] = useState(false);
  const Dispatch=useDispatch()
  useEffect(()=>{
    Dispatch(playSong(play))
  },[play])
  return (
    <div
      key={index}
      className="relative flex justify-center flex-col glassyBg p-3 hover:glassyBgForHover"
    >
      <div className="image  overflow-hidden w-[180px] mx-auto">
        <img
          src="https://static.toiimg.com/thumb/msid-96585261,width-400,resizemode-4/96585261.jpg"
          alt=""
        />
      </div>
      <h5 className="text-white mt-4">Arjit Singh</h5>
      <p className=" text-gray-300 ">Lorem, ipsum dolor.</p>
      <button
        onClick={(e) => setPlay((pre) => !pre)}
        className="playButton absolute mt-20 right-3 bg-pink-400  w-[50px] h-[50px] flex justify-center items-center rounded-full"
      >
        {play ? (
          <i class="fa-solid fa-pause"></i>
        ) : (
          <i class="fa-solid fa-play"></i>
        )}
      </button>
    </div>
    
  );
}

import React from "react";
import { Sidebar, SearchBar, PlayPause } from "../components";
import { useSelector } from "react-redux";
export default function MainLayout({ children }) {

  const songplay=useSelector(state=> state.playlist)
  
  return (
    <div className="flex ">
      <Sidebar />
      <div className="mainContent w-[100%]">{children}</div>

      {songplay.currentSong?<PlayPause/>:<></>}
    </div>
  );
}

import React, { useState } from "react";
import { Header, SongList } from "../components";

export default function Search() {
  const [searchSong, setSearchSong] = useState("");
  return (
    <div className="p-4 lg:ml-64  md:ml-[14rem] mt-5 ">
      <Header>Search song as {`"` + searchSong + `"` }</Header>
      <input
        type="text"
        className="w-[100%] p-2 glassyBg border rounded-md text-white"
        onChange={(e) => setSearchSong(e.target.value)}
      />

      <SongList className="mt-9"/>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import SongCard from "../components/SongCard";
import { Header } from "../components";
import getData from "../Api/api";

export default function Discover() {
  const [Artists, setArtists] = useState([]);
  

  
  useEffect(() => {
    let params={
        q: 'a',
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '10'
    }
    let tag="search";
    let data=getData([params,tag]);
    data.then(response=>{
      setArtists(response.data.artists.items)
    })

  }, []);

  return (
    <div className="p-4 lg:ml-64  md:ml-[14rem] mt-5">
      <div className="p-4 rounded-lg">
        <div className="grid xl:grid-cols-3 md:grid-cols-2  gap-4 mb-4">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <div key={index} className="flex h-24   glassyBg ">
                <div className="image h-24 w-24 me-4">
                  <img
                    src="https://static.toiimg.com/thumb/msid-96585261,width-400,resizemode-4/96585261.jpg"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold flex justify-center items-center text-white">
                  Arijit Singh
                </p>
              </div>
            ))}
        </div>
        <div
          className="h-48 mb-4 rounded bg-center "
          style={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/013/446/248/non_2x/digital-technology-music-note-melody-song-sheet-banner-blue-pink-background-sound-sing-media-key-abstract-tech-innovation-future-orange-color-big-data-ai-network-connection-illustration-vector.jpg)`,
          }}
        >
          <div className="bg-pink-900 opacity-15 w-100 h-48 text-white text-center"></div>
        </div>

        <div className="top_songs">
          <Header>Top Songs of Artists</Header>
          <div className="flex  overflow-x-auto gap-6 mb-4 ">
            {Array(7)
              .fill(0)
              .map((item, index) => (
                <SongCard index={index} />
              ))}
          </div>
        </div>
      </div>

      <div className="top_artists ">
        <Header className="ms-3">Top Artists</Header>
        <div className="flex  overflow-x-auto gap-4  mb-4">
          {Artists
            .map((item, index) => (
              // console.log(item.data.visuals.avatarImage?.sources[0].url)
              <ArtistCard index={index}   />
            ))}
        </div>
      </div>
    </div>
  );
}

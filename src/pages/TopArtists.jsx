import React, { useEffect, useState } from "react";
import { ArtistCard, Header, Loader } from "../components";
import getData from "../Api/api";

export default function TopArtists() {
  const [Artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalArtist, setTotalArtist] = useState(17);
  const [loadArtist, setLoadAartist] = useState(false);
  // useEffect(() => {
  //   let params = {
  //     q: "arijit",
  //     type: "multi",
  //     offset: "0",
  //     limit: totalArtist,
  //     numberOfTopResults: totalArtist,
  //   };
  //   setLoadAartist(true);
  //   let tag = "search";
  //   let data = getData([params, tag]);
  //   data.then((response) => {
  //     setArtists(response.data.artists.items);
  //     setLoading(false);
  //     setLoadAartist(false);
  //   });
  // }, [totalArtist]);
  return (
    <div className="p-4 lg:ml-64  md:ml-[14rem] mt-5">
      <Header>Top Artists</Header>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap mt-4">
            {Artists.map((item, index) => (
              <ArtistCard
                index={index}
                className="mt-3 mx-3"
                image={item.data.visuals.avatarImage?.sources[2].url}
                name={item.data.profile.name}
                artistId={item.data.uri}
              />
            ))}
          </div>
          {loadArtist ? (
            <div class="loader">
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
            </div>
          ) : (
          <button
            onClick={(e) => setTotalArtist((pre) => pre + 17)}
            className="text-gray-300 hover:text-white font-semibold"
          >
            show more
          </button>
          )}

        </>
      )}
    </div>
  );
}

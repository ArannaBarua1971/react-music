import React, { useEffect, useState } from "react";
import { Header, SongList } from "../components";
import { useParams } from "react-router";
import getData from "../Api/api";

export default function ArtistDetails() {
  const { artistId } = useParams();
  const [artistDetails, setArtistsDetails] = useState();

  useEffect(() => {
    let id = artistId.split(":");
    let params = {
      id: id[2],
    };
    let tag = "artist_overview";
    let data = getData([params, tag]);
    data.then((response) => {
      setArtistsDetails(response.data.data.artist);
    });
  }, []);
  return (
    <div className="p-4 lg:ml-64  md:ml-[14rem] mt-5 text-white">
      {/* <!-- Artist Header --> */}
      <div class="flex items-center mb-6">
        <img
          src={
            artistDetails?.visuals.avatarImage.sources[0].url
              ?  artistDetails?.visuals.avatarImage.sources[0].url
              : `https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg`
          }
          alt="Artist Image"
          class="w-60 h-60 rounded-full mr-4 object-cover"
        />
        <div>
          <h1 class="text-6xl font-bold flex">
            {artistDetails?.profile.name}
            <img src="../verified.png" className=" w-[40px] h-[40px] " alt="" />
          </h1>
          <p class="text-gray-300 mt-4">
            {artistDetails?.stats.followers} Monthly Listeners
          </p>
        </div>
      </div>

      {/* <!-- Popular Songs --> */}
      <div class="mb-6">
        <Header className="mb-2">Songs List</Header>
        <SongList songs={artistDetails?.discography.singles.items}/>
        
      </div>

      {/* <!-- Albums --> */}
      <div>
        <Header className="mb-2">Albums</Header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="glassyBg p-4 rounded-md">
            <img
              src="https://cdns-images.dzcdn.net/images/cover/fed71d45335f63b28662aef3c88e9df2/1900x1900-000000-80-0-0.jpg"
              alt="Album Image"
              class="w-60 h-60 object-cover mb-4 rounded-md "
            />
            <p class="font-bold">Album Title 1</p>
            <p class="text-sm text-gray-300">Release Year</p>
          </div>
          <div class="glassyBg p-4 rounded-md">
            <img
              src="https://cdns-images.dzcdn.net/images/cover/fed71d45335f63b28662aef3c88e9df2/1900x1900-000000-80-0-0.jpg"
              alt="Album Image"
              class="w-full h-60 object-cover mb-4 rounded-md"
            />
            <p class="font-bold">Album Title 2</p>
            <p class="text-sm text-gray-300">Release Year</p>
          </div>
          <div class="glassyBg p-4 rounded-md">
            <img
              src="https://cdns-images.dzcdn.net/images/cover/fed71d45335f63b28662aef3c88e9df2/1900x1900-000000-80-0-0.jpg"
              alt="Album Image"
              class="w-full h-60 object-cover mb-4 rounded-md"
            />
            <p class="font-bold">Album Title 3</p>
            <p class="text-sm text-gray-300">Release Year</p>
          </div>
          {/* <!-- Add more albums as needed --> */}
        </div>
      </div>
    </div>
  );
}

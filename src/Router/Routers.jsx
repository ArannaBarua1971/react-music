import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AroundYou,
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  TopArtists,
  TopCharts,
} from "../pages";
import MainLayout from "../Layout/MainLayout";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Discover/>} />
            <Route path='/artist_details/:artistId' element={<ArtistDetails />} />
            <Route path="/around_you" element={<AroundYou />} />
            <Route path="/search" element={<Search />} />
            <Route path="/song_details" element={<SongDetails />} />
            <Route path="/top_artists" element={<TopArtists />} />
            <Route path="/top_charts" element={<TopCharts />} />
            <Route path="/top_charts" element={<TopCharts />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

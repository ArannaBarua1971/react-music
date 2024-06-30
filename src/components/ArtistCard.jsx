import React from "react";
import { useNavigate } from "react-router";

export default function ArtistCard({ index, className = "", image = "",name ,artistId}) {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className={`"mx-auto flex flex-col justify-center rounded h-60 w-48 glassyBg px-3 py-4" ${className}`}
      onClick={() => navigate(`/artist_details/${artistId}`)}
    >
      <div className="image rounded-full overflow-hidden w-[120px] h-[120px] mx-auto">
        <img
          src={
            image ? image:
            `https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg`
          }
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h5 className="text-white mt-3 font-semibold">{name}</h5>
      <p className="text-md text-gray-300">Artist</p>
    </div>
  );
}

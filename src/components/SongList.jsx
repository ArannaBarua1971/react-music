import React, { useState } from 'react'

export default function SongList({className="",songs}) {
    const [SongLoading,setSongLoading]=useState(4)
    console.log(songs)
  return (
    <div class={`songList  ${className}`}>
        <div class=" p-4 rounded-lg text-white ">
          <ul>
            {songs?.slice(0,SongLoading)
              .map((item,index) => (
                <li key={index} class="flex items-center justify-between p-2 glassyBg rounded-md mb-2">
                    <div class="flex items-center">
                        <img src={item.releases.items[0].coverArt.sources[0].url} alt="Song Image" class="w-12 h-12 mr-4 rounded-md"/>
                        <div>
                            <p class="font-bold">{item.releases.items[0].name}</p>
                            <p class="text-sm text-gray-300">{item.releases.items[0].type }</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-300">3:45</p>
                </li>
              ))}
          </ul>
          <button onClick={SongLoading!=songs?.length ? (e)=> setSongLoading(pre=> songs?.length) :(e)=> setSongLoading(4)} className='text-gray-300 hover:text-white font-semibold'>
            {SongLoading==songs?.length ?"show less":"show more" }
            </button>
        </div>
      </div>
  )
}

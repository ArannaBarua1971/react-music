import React from 'react'

export default function VolumeBar() {
  return (
    <div>
       <div className="flex items-center">
          <div className="text-sm text-gray-400 mr-4">1:30 / 3:45</div>
          <input type="range" className="w-24 md:w-64" />
        </div>
    </div>
  )
}

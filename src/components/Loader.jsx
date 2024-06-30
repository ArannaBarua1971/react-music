import React from 'react'

export default function Loader() {
  return (
    <div class="relative w-16 h-16 mx-auto">
    <div class="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full bounce"></div>
    <div class="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full bounce"></div>
    <div class="absolute bottom-0 left-0 w-4 h-4 bg-green-500 rounded-full bounce"></div>
    <div class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full bounce"></div>
    <div class="absolute inset-0 border-4 border-t-4 border-green-500 rounded-full spinner"></div>
  </div>
  )
}

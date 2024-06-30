import React from 'react'

export default function Header({children ,className=""}) {
  return (
    <div className={`${className} text-white font-bold text-2xl pb-3 `}>
      {children}
    </div>
  )
}

import React from 'react'
import { Play } from "lucide-react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='z-10 pt-20 lg:pt-64 px-4 sm:px-6 md:px-5 lg:px-12 absolute w-screen aspect-video bg-gradient-to-r from-black to-black/60 text-white'>
        <h1 className='font-bold text-xl md:text-3xl md:pt-5 lg:text-5xl xl:text-6xl'>{title}</h1>
        <p className='hidden sm:block text-sm sm:text-base md:text-sm lg:text-md xl:text-lg py-4 sm:py-5 w-full sm:w-4/6 md:w-3/6 lg:w-2/6'>{overview}</p>
        <div className='flex gap-4 mt-4 '>
            <button className='px-2 sm:px-5 py-1 sm:py-2 md:px-2.5 lg:px-3 bg-white text-black text-sm sm:text-base lg:text-lg rounded-md font-semibold hover:bg-opacity-80'>
                ▶︎ Play
            </button>
            <button className='hidden sm:flex items-center gap-2 bg-gray-500 text-white px-4 sm:px-5 py-2 sm:py-2 md:py-2.5 text-sm sm:text-base lg:text-lg rounded-md font-semibold bg-opacity-60 hover:bg-opacity-80 transition'>
                ⓘ More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;
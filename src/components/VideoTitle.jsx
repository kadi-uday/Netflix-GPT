import React from 'react'
import { Play } from "lucide-react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-64 px-12 absolute w-screen aspect-video  text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-1/4'>{overview}</p>
        <div className='flex gap-4 mt-4'>
            <button className='hover:bg-opacity-80 bg-white text-black px-6 py-2 text-xl rounded-md font-semibold'>
                ▶︎ Play
            </button>
            <button className='flex items-center gap-2 bg-gray-500 text-white px-6 py-2 text-xl rounded-md font-semibold bg-opacity-60 hover:bg-opacity-80 transition'>
                ⓘ More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;
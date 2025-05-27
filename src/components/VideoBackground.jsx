import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux'


const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    useMovieTrailer(movieId);

  return (
    <div className='overflow-hidden mt-[-110px]'>
        <iframe className='w-screen max-w-full aspect-video overflow-hidden' src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&rel=0&playlist="+trailerVideo?.key}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground;
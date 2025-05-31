import React from 'react'
import { MOVIE_CARDS_IMG_URL } from '../utils/constants';


const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;

  return (
    <div>
      <div className='w-48 pr-6 transition-transform duration-300 transform hover:scale-105 hover:translate-y-[-4px]' >
          <img className='rounded-lg shadow-lg cursor-pointer' src={MOVIE_CARDS_IMG_URL+posterPath} alt='Movie cards'/>
      </div>
    </div>
  )
}

export default MovieCard;
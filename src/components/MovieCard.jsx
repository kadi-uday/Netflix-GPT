import React from 'react'
import { MOVIE_CARDS_IMG_URL } from '../utils/constants';


const MovieCard = ({posterPath}) => {
  return (
    <div >
      <div className='w-48 pr-4' >
          <img className='rounded-lg shadow-lg' src={MOVIE_CARDS_IMG_URL+posterPath} alt='Movie cards'/>
      </div>
    </div>
  )
}

export default MovieCard;
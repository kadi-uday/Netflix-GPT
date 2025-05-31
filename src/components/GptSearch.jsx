import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className='mt-32 text-white'>
      
         <div className='absolute inset-0 -z-10'>
            <img src={BG_IMG_URL} className='w-full h-auto  object-cover brightness-75' alt='Bg logo'></img>
            <img src={BG_IMG_URL} className='w-full h-auto object-cover brightness-75' alt='Bg logo'></img>
            <img src={BG_IMG_URL} className='w-full h-3/6 object-cover brightness-75' alt='Bg logo'></img>
        </div>

        <GptSearchBar />
        <GptMovieSuggestions />
    </div> 

  )
}

export default GptSearch;
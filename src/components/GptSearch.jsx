import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className='mt-32 text-white min-h-[500px] sm:min-h-[600px]  md:min-h-screen '>
      
         <div className='absolute inset-0 z-10'>
            <img src={BG_IMG_URL} className='w-full  h-full md:h-full object-cover brightness-75' alt='Bg logo'></img>
            <img src={BG_IMG_URL} className='w-full h-full md:h-full object-cover brightness-75' alt='Bg logo'></img>
            <img src={BG_IMG_URL} className='hidden sm:block w-full h-screen md:h-full lg:h-fit object-cover brightness-75' alt='Bg logo'></img>
        </div>

        <GptSearchBar />
        <GptMovieSuggestions />
    </div> 

  )
}

export default GptSearch;
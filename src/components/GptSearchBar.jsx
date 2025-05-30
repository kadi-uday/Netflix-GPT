import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)

  return (
    <div>
    <form className="absolute top-40 left-1/2 transform -translate-x-1/2 w-10/12 lg:w-7/12 p-6 bg-black bg-opacity-80 text-white rounded-2xl shadow-lg flex items-center space-x-4 z-20">
        <input
        type="text"
        placeholder={lang[langKey].getSearchPlaceholder}
        className="flex-grow p-4 bg-[#2a2c2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
        />
        <button
        type="button"
        className="px-5 py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-lg text-white font-bold md:text-xl shadow-md"
        >
        {lang[langKey].search}
        </button>
    </form>
    </div>

  )
}

export default GptSearchBar;
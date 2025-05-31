import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMoviesResults } from '../utils/gptSearchSlice';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTmdb = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+ "&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

    const handleGptSearchClick = async () => {
      console.log(searchText.current.value);

      // Make an API Call to GPT API to get movie results

      const gptQuery = "Act as a Movie Recomendation system and suggest some movies for the query:" + searchText.current.value + ". Only give me names of 5 movies, comma separated like the exapmle result given ahed. Example Result: RRR, Hit 3, Amar Akbar Anthony, Devara, Pokiri."

      const gptResults = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: gptQuery },
        ],
      });

      if(!gptResults) return <h1>Sorry! Unable to find... Please try again!</h1>

      console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      // For each movie search for TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie)); //[Promise, Promise, Promise, Promise, Promise]

      // Promise.all() waits for all the 5 movies to get the data and returns when 5 movies data is received.
      const tmdbResults = await Promise.all(promiseArray);  
      console.log(tmdbResults);

      dispatch(addGptMoviesResults({movieNames: gptMovies, movieResults: tmdbResults}));
    };

  return (
    <div>
    <form onSubmit={(e) => e.preventDefault()} className="absolute top-28 left-1/2 transform -translate-x-1/2 w-10/12 lg:w-7/12 p-6 bg-black bg-opacity-80 text-white rounded-2xl shadow-lg flex items-center space-x-4 z-20">
        <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].getSearchPlaceholder}
        className="flex-grow p-4 bg-[#2a2c2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
        />
        <button
        onClick={handleGptSearchClick}
        className="px-5 py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-lg text-white font-bold md:text-xl shadow-md"
        >
        {lang[langKey].search}
        </button>
    </form>
    </div>

  )
}

export default GptSearchBar;
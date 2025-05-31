import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "../components/MovieList"

const GptMovieSuggestions = () => {

  const {movieNames, movieResults} = useSelector((store) => store.gpt);
  if(!movieNames) return (<h1>Loading...</h1>);

  return (
    
    <div className='relative top-32 z-10 mx-auto my-8 p-6 max-w-screen-xl bg-black bg-opacity-80 rounded-2xl shadow-xl text-white space-y-8'>
      {movieNames.map((movieName, index) =>( 
        <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  )
}

export default GptMovieSuggestions;
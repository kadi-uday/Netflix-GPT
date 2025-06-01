import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {

  return (
    <div className='mt-2 lg:mt-0 '>
        <h1 className='text-sm md:text-xl lg:text-3xl py-2 md:py-3 lg:py-4 text-white  font-semibold'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
                 {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            </div>
        </div>
    </div>
  );
};

export default MovieList;
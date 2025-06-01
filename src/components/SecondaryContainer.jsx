import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black  '>
        <div className='relative z-20 from-black px-4 -mt-10 sm:mt-10 md:-mt-16 lg:-mt-56 lg:pl-12'>
            <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies} />
            <MovieList title = {"Trending"} movies= {movies.trendingMovies} />
            <MovieList title = {"Popular"} movies= {movies.popularMovies} />
            <MovieList title = {"Action Thriller"} movies= {movies.actionThrillerMovies} />
            <MovieList title = {"Horror"} movies= {movies.horrorMovies} />
        </div>
    </div>
    )
  )
}

export default SecondaryContainer;
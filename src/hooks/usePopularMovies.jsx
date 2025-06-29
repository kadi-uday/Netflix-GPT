import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?region=IN&with_origin_country=IN&with_genres=28,53&sort_by=popularity.desc", API_OPTIONS);

    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        !popularMovies && getPopularMovies();
    },[]);
    }

export default usePopularMovies;
 

import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPLayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?region=IN&with_origin_country=IN&sort_by=popularity.desc", API_OPTIONS);

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPLayingMovies(json.results));
    }

    useEffect(() => {
    getNowPlayingMovies();
    },[]);
    }

export default useNowPlayingMovies;
 

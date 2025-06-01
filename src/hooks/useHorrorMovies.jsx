import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addHorrorMovies } from '../utils/movieSlice';

const useHorrorMovies = () => {

    const dispatch = useDispatch();
    const horrorMovies = useSelector((store) => store.movies.horrorMovies);

    const getHorrorMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc", API_OPTIONS);

    const json = await data.json();
    
    dispatch(addHorrorMovies(json.results));
    }

    useEffect(() => {
        !horrorMovies && getHorrorMovies();
    },[]);
    }

export default useHorrorMovies;
 

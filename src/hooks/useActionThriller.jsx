import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addActionThrillerMovies} from '../utils/movieSlice';

const useActionThriller = () => {

    const dispatch = useDispatch();
    const actionThrillerMovies = useSelector((store) => store.movies.actionThrillerMovies);

    const getActionThrillerMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_genres=28,53&sort_by=popularity.desc", API_OPTIONS);

    const json = await data.json();
    
    dispatch(addActionThrillerMovies(json.results));
    }

    useEffect(() => {
      !actionThrillerMovies && getActionThrillerMovies();
    },[]);
    }

export default useActionThriller;
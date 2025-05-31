import { createSlice } from "@reduxjs/toolkit";


const gptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
       showGptSearch: false,
       movieNames: null,
       movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const {toggleGptSearchView, addGptMoviesResults} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;


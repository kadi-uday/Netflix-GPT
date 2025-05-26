import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPLayingMovies: (state, action ) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const {addNowPLayingMovies} = movieSlice.actions;
export default movieSlice.reducer;
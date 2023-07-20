import {createSlice} from "@reduxjs/toolkit";
import {fetchMovies} from "./MoviesThunks";
import {RootState} from "../app/store";

interface MoviesState {
    allMovies: Movie[],
    fetchLoading: boolean
}
const initialState: MoviesState = {
    allMovies: [],
    fetchLoading: false
}
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, {payload: movies}) => {
            state.allMovies = movies;
            state.fetchLoading = false;
        });
        builder.addCase(fetchMovies.rejected, (state) => {
            state.fetchLoading = false;
        });
    }
});

export const moviesReducer = moviesSlice.reducer;
export const selectFetchLoading = (state: RootState) => state.movies.fetchLoading;
export const selectMovies = (state: RootState) => state.movies.allMovies;

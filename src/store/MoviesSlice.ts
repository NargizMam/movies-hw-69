import {createSlice} from "@reduxjs/toolkit";
import {fetchMovies, fetchOneMovieInfo} from "./MoviesThunks";
import {RootState} from "../app/store";

interface MoviesState {
    allMovies: Movie[],
    oneMovieInfo: Movie | null,

    fetchLoading: boolean;
    fetchOneMovieLoading: boolean;
}
const initialState: MoviesState = {
    allMovies: [],
    oneMovieInfo: null,

    fetchLoading: false,
    fetchOneMovieLoading: false,
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
        builder.addCase(fetchOneMovieInfo.pending, (state) => {
            state.fetchOneMovieLoading = true;
        });
        builder.addCase(fetchOneMovieInfo.fulfilled, (state, action) => {
            state.fetchOneMovieLoading = false;
            state.oneMovieInfo = action.payload;
        });
        builder.addCase(fetchOneMovieInfo.rejected, (state) => {
            state.fetchOneMovieLoading = false;
        });
    }
});

export const moviesReducer = moviesSlice.reducer;
export const selectFetchLoading = (state: RootState) => state.movies.fetchLoading;
export const selectMovies = (state: RootState) => state.movies.allMovies;
export const selectOneMovie = (state: RootState) => state.movies.oneMovieInfo;
export const selectOneMovieLoading = (state: RootState) => state.movies.fetchOneMovieLoading;
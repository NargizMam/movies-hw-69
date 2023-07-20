import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";

export const  fetchMovies = createAsyncThunk<Movie[], string>(
    'movies/fetchAll',
    async (movieName) => {
        const moviesResponse = await axiosApi.get(`?q=${movieName}`);
        const movies = moviesResponse.data;
        let newMovies: Movie[] = [];
        if (movies) {
            newMovies = Object.keys(movies).map(id => {
                return movies[id].show;
            })
        }
        return newMovies;
    }
);

export const fetchOneMovieInfo = createAsyncThunk<Movie | null, number>(
    'movies/fetchOne',
    async (id) => {
        const response =  await axiosApi.get<Movie | null>(`shows/${id}`);
        return  response.data;
    }
);

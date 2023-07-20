import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectFetchLoading, selectMovies} from "../../store/MoviesSlice";
import {fetchMovies, fetchOneMovieInfo} from "../../store/MoviesThunks";
import {useNavigate} from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";

const Search = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const searchMovies = useAppSelector(selectMovies);
    const [searchMoviesName, setSearchMoviesName] = useState('');
    const fetchLoading = useAppSelector(selectFetchLoading);
    let moviesList;
    const changeMoviesName = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await setSearchMoviesName(e.target.value);
        if(e.target.value.length > 2){
        }
    };
    useEffect(() => {
        if(searchMoviesName.length > 2) {
            dispatch(fetchMovies(searchMoviesName));
        }
    }, [searchMoviesName, dispatch]);

    const selectedMovie = async (id: number) => {
        await dispatch(fetchOneMovieInfo(id));
        navigate(`/shows/${id}`);
    };
    if(searchMovies){
        moviesList = searchMovies.map(movie =>
            <div key={movie.id}
                 className="btn btn-outline-secondary"
                 onClick={() => selectedMovie(movie.id)}
                 style={{width: '100%'}}
            >{movie.name}
            </div>
        )
    }


    return (
        <Container>
            <h1>Search for TV shows:</h1>
            <input type="text" style={{width: '100%', margin:5}}
                   onChange={e =>changeMoviesName(e)}
                   value={searchMoviesName}
            />
            {fetchLoading ? <Spinner/> : <div style={{height:300}} className="overflow-auto">
                {moviesList}
            </div>}
        </Container>
    );
};

export default Search;
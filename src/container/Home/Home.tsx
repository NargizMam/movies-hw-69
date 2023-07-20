import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectFetchLoading, selectMovies} from "../../store/MoviesSlice";
import {fetchMovies} from "../../store/MoviesThunks";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const searchMovies = useAppSelector(selectMovies);
    const fetching = useAppSelector(selectFetchLoading);
    const [searchMoviesName, setSearchMoviesName] = useState('');
    let moviesList = null;
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
        navigate(`/movies/${id}`);
    };
    if(searchMovies){
        moviesList = searchMovies.map(movie =>
            <div key={movie.id}
                 className="btn btn-outline-secondary"
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
            <div style={{height: 100}} className="overflow-auto">
                {moviesList}
            </div>
        </Container>
    );
};

export default Home;
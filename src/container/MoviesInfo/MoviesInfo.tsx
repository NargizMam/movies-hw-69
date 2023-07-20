import React from 'react';
import Spinner from "../../UI/Spinner/Spinner";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../app/hook";
import {selectOneMovie, selectOneMovieLoading} from "../../store/MoviesSlice";

const OneMovieInfo = () => {
    const oneMovie = useAppSelector(selectOneMovie);
    const fetchOneLoading = useAppSelector(selectOneMovieLoading);
    const {id} = useParams();
    const navigate = useNavigate();

    if(!id){
        navigate('/');
    }
    setTimeout(() => {
        if(oneMovie !== null && !fetchOneLoading){
            const div11 = document.getElementById('movie-info')!;
            div11.innerHTML = oneMovie.summary;
        }
    },500)

    let movieInfo =oneMovie && (
        <>
            {fetchOneLoading && <Spinner/>}
            <h2 className="card-title m-2">{oneMovie.name}</h2>
            <div className="container d-flex ">
                <img src={oneMovie.image.original}
                     style={{width: 200, height: "auto"}}
                     alt={oneMovie.name}/>
                <div className="card" >
                    <div  className="card-body">
                        <div id="movie-info"></div>
                        <h6>Здесь Вы можете посмотреть данный фильм :
                            <a href={oneMovie.url}>{oneMovie.url}</a>
                        </h6>
                    </div>
                    <p>Premiered day:{oneMovie.premiered}</p>
                </div>
            </div>
        </>
    );
    if(fetchOneLoading){
        movieInfo =(<Spinner/>)
    }
    return (
        <div className="container mt-5">
            {movieInfo}
        </div>
    );
};

export default OneMovieInfo;

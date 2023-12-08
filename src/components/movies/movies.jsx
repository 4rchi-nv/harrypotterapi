import React from "react";
import { useMovies } from "../../hooks/useMovies";
import { memo } from "react";
import { MovieCard } from "../movie-card/movie-card";
import './movies.css'

const Loader = memo(function Loader(){
    return(
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
});

export const MoviesList = () => {
    const { movies, loading } = useMovies();
        return (
        <div className="moviesContainer">
            <h1>Harry Potter Movies</h1>
            {loading ? (
              <Loader />  
            ) : (
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            )}
        </div>
    );
};
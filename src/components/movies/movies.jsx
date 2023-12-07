import React from "react";
import './movies.css'
import { useMovies } from "../../hooks/useMovies";

export const MoviesList = () => {
    const { movies, loading } = useMovies();
        return (
        <div className="moviesContainer">
            <h1>Harry Potter Movies</h1>
            {loading ? (
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
            ) : (
                movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.attributes.poster} loading="lazy" alt={movie.attributes.title} />
                        <div className="movie-details">
                            <h2>{movie.attributes.title}</h2>
                            <p className="summary">&emsp;{movie.attributes.summary}</p>
                            <p><span>Box office: </span><span>{movie.attributes.box_office}</span></p>
                            <p><span>Budget: </span><span>{movie.attributes.budget}</span></p>
                            <p><span>Running time: </span><span>{movie.attributes.running_time}</span></p>
                            <a href={movie.attributes.trailer}>Look for the teaser-trailer</a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
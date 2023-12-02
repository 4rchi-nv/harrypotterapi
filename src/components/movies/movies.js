import React, { useState, useEffect } from "react";
import './movies.css'

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://api.potterdb.com/v1/movies');
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const dataset = await response.json();
                const { data } = dataset;
                console.log(data);
                setMovies(data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        }
        fetchMovies();
    }, []);

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

export default MoviesList;

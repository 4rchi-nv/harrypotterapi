import { useState, useEffect } from "react";
import { fetchMovies } from "../api/getMovies";

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchMovies()
            .then(data => setMovies(data.data))
            .finally(() => setLoading(false));
    }, []);

    return {
        movies,
        loading,
    }
}
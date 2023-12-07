import axios from "axios";

export const fetchMovies = async () => {
    return await axios({
        method: 'GET',
        url: 'https://api.potterdb.com/v1/movies',
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Failed to fetch', error.message);
        throw error;
    });
};

// import axios from "axios";

// const API_KEY = import.meta.VITE_APP_TMDB_API_KEY;
// const BASE_URL = import.meta.VITE_APP_TMBD_BASE_URL;

// export const fetchPopularMovie = async () => {
//     const response = await axios.get (`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
//     return response.data.results;
// }
const ACCESS_KEY = import.meta.VITE_APP_TMDB_ACCESS_TOKEN;

export const fetchPopularMovie = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?page=2';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ACCESS_KEY
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));
    }
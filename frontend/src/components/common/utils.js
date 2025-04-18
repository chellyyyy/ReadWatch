import { getMovieInfo } from "@/services/tmdbAPI";

export const getImageUrl = (path, size) => {
    const sizes = {
        small: "w185",
        medium: "w342",
        large: "w500"
    }
    
    return `https://image.tmdb.org/t/p/${sizes[size] || "w342"}${path}`;
}

export const handleFetch = async (url, options = {}, errorMessage = 'Something went wrong') => {
    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            const errorBody = await res.text();
            console.error('Fetch error response:', errorBody);
            throw new Error(`${errorMessage} (${res.status})`);
        }
        return await res.json();

    } catch (err) {
        console.error(errorMessage, err);
        throw err;
    }
};

export const getMovieDetail = async (movieID) => {
    const movieInfo = await getMovieInfo(movieID)
    return movieInfo;
};
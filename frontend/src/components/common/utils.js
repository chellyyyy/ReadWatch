import { getMovieInfo } from '@/services/tmdbAPI';

export const getImageUrl = (path, size) => {
    const sizes = {
        small: 'w185',
        medium: 'w342',
        large: 'w500',
        backdrop: 'w1280',
        poster: 'w342',
        original: 'original',
    };

    return `https://image.tmdb.org/t/p/${sizes[size] || 'w342'}${path}`;
};

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
    const movieInfo = await getMovieInfo(movieID);
    return movieInfo;
};

// Get director info
export const getDirector = (credits) => {
    if (!credits || !Array.isArray(credits.crew)) return null;
    console.log(credits.crew.find((person) => person.job === 'Director'));

    return credits.crew.find((person) => person.job === 'Director') || null;
};

// Prerocessing date
export const sliceDate = (date) => {
    if (!date) return 'Unknown';

    return date.slice(0, 4);
};

// Group crew member by their job
export const preprocessCreditData = (crew) => {
    
    const result = {};

    crew.forEach((person) => {
        const job = person.job;
        const name = person.name;

        if (!result[job]) {
            result[job] = [];
        }

        result[job].push(name);
    });

    return result;
};

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

const fetchTMDB = async (url, res, errorMessage) => {
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: errorMessage || 'TMDB API Error' });
    }
};

export const getMovieById = async (req, res) => {
    const { id } = req.params;

    const movieUrl = `${TMDB_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const creditUrl = `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

    try {
        const [movieRes, creditRes] = await Promise.all([fetch(movieUrl), fetch(creditUrl)]);

        if (!movieRes.ok || !creditRes.ok) {
            return res.status(500).json({ error: 'Failed to fetch movie info or credits' });
        }

        const movieData = await movieRes.json();
        const creditData = await creditRes.json();

        res.json({
            ...movieData,
            credits: creditData,
        });
    } catch (err) {
        console.error('Fetch error:', err);
        res.status(500).json({ error: 'Error fetching movie details and credits' });
    }
};

export const getMoviesByCategory = async (req, res) => {
    const { category } = req.params;
    const language = req.query.language || 'en-US';
    const page = req.query.page || 1;
    const url = `${TMDB_BASE_URL}/movie/${category}?api_key=${API_KEY}&language=${language}&page=${page}`;
    await fetchTMDB(url, res, 'Failed to fetch movie category');
};

export const searchMovies = async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Missing search query' });
    }
    const url = `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=en-US`;
    await fetchTMDB(url, res, 'Failed to search movie');
};

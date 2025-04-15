import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

// Fetch movie data
router.get('/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movie info' });
  }
});

// Fetch movie by category
router.get('/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const language = req.query.language;
      const page = req.query.page;
      
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
      );

      res.json(response.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      res.status(500).json({ error: 'Failed to fetch movie category' });
    }
  });  

// Search movie
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=en-US`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search movie' });
  }
});

export default router;

import express from 'express';
import {
  getMovieById,
  getMoviesByCategory,
  searchMovies
} from '../controllers/tmdb.controller.js';

const router = express.Router();

router.get('/movie/:id', getMovieById);
router.get('/:category', getMoviesByCategory);
router.get('/search', searchMovies);

export default router;

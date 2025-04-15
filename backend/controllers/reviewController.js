import db from '../models/index.js';
import { getMovieInfoFromTMDB } from '../utils/tmdb.js';

export const getReviewsByMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const reviews = await db.Review.findAll({
      where: { movie_id: movieId },
      include: {
        model: db.User,
        attributes: ['id', 'username', 'avatar_url'],
      },
      order: [['created_at', 'DESC']],
    });

    const movieInfo = await getMovieInfoFromTMDB(movieId);

    res.json({
      movie: {
        id: movieInfo.id,
        title: movieInfo.title,
        poster_path: movieInfo.poster_path,
        overview: movieInfo.overview,
        release_date: movieInfo.release_date
      },
      reviews: reviews.map(r => ({
        id: r.id,
        rating: r.rating,
        content: r.content,
        created_at: r.created_at,
        user: r.User
      }))
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get reviews' });
  }
};

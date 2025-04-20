import express from 'express';
import { GetReview, GetReviewer } from '../controllers/review.controller.js';

const router = express.Router();

// Fetch review
router.get('/get', GetReview);
router.get('/reviewer', GetReviewer);

export default router;

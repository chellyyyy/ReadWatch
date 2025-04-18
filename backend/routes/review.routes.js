import express from 'express';
import { GetReview } from '../controllers/review.controller.js';

const router = express.Router();

// Fetch review
router.get('/get', GetReview);

export default router;
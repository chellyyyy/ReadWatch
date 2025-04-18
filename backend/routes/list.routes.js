import express from 'express';
import { GetList } from '../controllers/list.controller.js';

const router = express.Router();

// Fetch list
router.get('/get', GetList);

export default router;
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import tmdbRoutes from './routes/tmdb.routes.js';
import connection from './config/mysql.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/movies', tmdbRoutes);

try {
  await connection.connect();
  console.log('MySQL connected');

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
} catch (err) {
  console.error('DB connection failed:', err.message);
}

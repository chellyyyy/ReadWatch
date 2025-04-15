import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import userRoutes from './routes/user.routes.js';
import tmdbRoutes from './routes/tmdb.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/movies', tmdbRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate().then(() => {
  console.log('DB connected');
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}).catch(err => {
  console.error('DB connection failed:', err);
});

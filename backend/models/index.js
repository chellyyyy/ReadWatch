import sequelize from '../config/database.js';
import User from './user.model.js';

const db = { sequelize, User };

await sequelize.sync({ alter: true });

export default db;

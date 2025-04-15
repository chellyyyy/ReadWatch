import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const users = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password_hash: { type: DataTypes.STRING, allowNull: false },
  avatar_url: { type: DataTypes.TEXT },
  bio: { type: DataTypes.TEXT },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

export default users;

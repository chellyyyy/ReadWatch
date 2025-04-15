import db from '../models/index.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await db.users.create({
      username,
      email,
      password_hash: hash,
    });
    res.status(201).json({ id: user.id, username: user.username });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

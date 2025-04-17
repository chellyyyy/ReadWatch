import connection from '../config/mysql.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email and username is exist
    const [existing] = await connection.execute(
      `SELECT id FROM readwatch.Users WHERE email = ? OR username = ?`,
      [email, username]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        error: 'Email or username is existing.'
      });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create new user
    const [result] = await connection.execute(
      `
      INSERT INTO readwatch.Users (username, email, password_hash)
      VALUES (?, ?, ?)
      `,
      [username, email, hash]
    );

    const userId = result.insertId;

    res.status(201).json({ id: userId, username });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Register fail.' });
  }
};

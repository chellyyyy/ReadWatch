import connection from '../config/mysql.js';

// Get everything from Reviews table
export const GetReview = async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM readwatch.Reviews');
        res.json(rows);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};

// Get top reviewers
export const GetReviewer = async (req, res) => {
    try {
        const [rows] = await connection.query(
            `
                SELECT 
                    rv.user_id,
                    usr.username,
                    usr.avatar_url,
                    COUNT(*) AS review_count
                FROM
                    readwatch.Reviews rv
                LEFT JOIN
                    readwatch.Users usr ON rv.user_id = usr.id
                GROUP BY
                    rv.user_id
                ORDER BY
                    review_count DESC;
            `
        );

        res.json(rows);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to fetch reviewers' });
    }
};

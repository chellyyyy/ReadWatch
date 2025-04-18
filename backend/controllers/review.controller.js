import connection from "../config/mysql.js"

export const GetReview = async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM readwatch.Reviews');
        res.json(rows);
        // console.log("Reiviews: ", rows);
        
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};

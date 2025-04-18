import connection from "../config/mysql.js";

export const GetList = async (req, res) => {
    try {
        const [rows] = await connection.query(
            `
            SELECT
                a.id AS list_id,
                a.user_id,
                a.name AS list_name,
                a.description,
                a.created_at,
                a.like,
                b.movie_id
            FROM
                readwatch.CustomLists a
            LEFT JOIN
                readwatch.CustomListMovies b ON a.id = b.list_id
            ORDER BY
                a.id;
            `
        );

        // Group by list_id
        const grouped = new Map();

        for (const row of rows) {
            if (!grouped.has(row.list_id)) {
                grouped.set(row.list_id, {
                    list_id: row.list_id,
                    user_id: row.user_id,
                    list_name: row.list_name,
                    description: row.description,
                    created_at: row.created_at,
                    like: row.like,
                    movie_ids: []
                });
            }

            if (row.movie_id) {
                grouped.get(row.list_id).movie_ids.push(row.movie_id);
            }
        }

        const output = Array.from(grouped.values());
        res.json(output);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to fetch lists' });
    }
};

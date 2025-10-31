import { connection } from "../../db.js";

export async function getPublicStories(req, res) {
    try {
        const sql = `
            SELECT *
               
                FROM stories
                WHERE status_id = (
                    SELECT id FROM general_status WHERE name = "published"
            )
               ORDER BY created_at DESC;`
            
            
            
        const [stories] = await connection.execute(sql);

        return res.json({
            status: 'success',
            stories,
        });
    } catch (error) {
        return res.json({
            status: 'error',
            stories: [],
        });
    }
}
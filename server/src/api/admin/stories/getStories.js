import { connection } from "../../../db.js";

export async function getAdminStories(req, res) {
    try {
        const sql = `
            SELECT stories.*, general_status.name AS status_name
            FROM stories
            INNER JOIN general_status
                ON stories.status_id = general_status.id
                ORDER BY created_at DESC; `
            



        const [stories] = await connection.execute(sql);
     

  return res.json({
  status: 'success',
  stories,

  });
  }

  catch (error) {
  return res.json({
  status: 'error',
  stories: [],
  });
  }
  }

 

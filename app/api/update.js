// pages/api/update.js
import client from '../lib/elastic';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { name, email ,age,mobno } = req.body;

    try {
      const response = await client.update({
        index: 'my-index',
        id,
        body: {
          doc: { name, email ,age,mobno },
        },
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

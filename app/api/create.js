import client from '../lib/elastic';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email ,age,mobno } = req.body;

    try {
      const response = await client.index({
        index: 'my-index',
        id,
        body: { name, email ,age,mobno },
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}

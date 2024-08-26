import client from '../lib/elastic';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await client.get({
      index: 'my-index',
      id,
    });
    res.status(200).json(response.body._source);
  } catch (error) {
    res.status(404).json({ error: 'Document not found' });
  }
}

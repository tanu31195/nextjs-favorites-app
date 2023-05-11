import type { NextApiRequest, NextApiResponse } from 'next';

const favorites = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;
  console.log("🚀 ~ file: favorites.ts:7 ~ handler ~ req:", {method, body, query})

  switch (method) {
    case 'GET':
      res.status(200).json(favorites);
      break;
    case 'POST':
      favorites.push(body);
      res.status(201).json(body);
      break;
    case 'DELETE':
      const id = Number(query.id);
      const index = favorites.findIndex((item) => item.id === id);
      if (index === -1) {
        res.status(404).json({ message: 'Not found' });
      } else {
        favorites.splice(index, 1);
        res.status(200).json({ id });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}

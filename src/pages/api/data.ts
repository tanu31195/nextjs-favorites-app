import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, username: '', profileImageURL: '', postImageUrl: '', title: '', price: '', likeCount: 0, description: '', comments:['',''] },
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}

import type { NextApiRequest, NextApiResponse } from 'next';

function health(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: true });
}

export default health;

import { NextApiRequest, NextApiResponse } from 'next';

import quotes from '../../quotes.json';

type Middleware = (req: NextApiRequest, res: NextApiResponse) => void;

const randomQuote: Middleware = (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
};

export default randomQuote;

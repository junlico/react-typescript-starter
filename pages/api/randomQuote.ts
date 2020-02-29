import { NextApiRequest, NextApiResponse } from 'next';

import allQuotes from '../../quotes.json';

type Middleware = (req: NextApiRequest, res: NextApiResponse) => void;

const randomQuote: Middleware = (req, res) => {
  const { author } = req.query;

  let quotes = allQuotes;

  if (typeof author === 'string') {
    quotes = quotes.filter(quote =>
      quote.author.toLocaleLowerCase().includes(author.toLowerCase())
    );
  }

  if (!quotes.length) {
    quotes = allQuotes.filter(
      quote => quote.author.toLocaleLowerCase() === 'unknown'
    );
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
};

export default randomQuote;

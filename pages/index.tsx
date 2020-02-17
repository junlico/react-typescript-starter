import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';

interface QuoteProps {
  author: string;
  quote: string;
}

const fetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<QuoteProps> => {
  const res = await fetch(input, init);
  return res.json();
};

const Index: React.FC = () => {
  const { data, error } = useSWR('/api/randomQuote', fetcher);
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote';

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author"> - {author}</span>}

      <style jsx>
        {`
          main {
            width: 90%;
            max-width: 900px;
            margin: 300px auto;
            text-align: center;
          }

          .quote {
            font-family: cursive;
            color: #e243de;
            font-size: 24px;
            padding-bottom: 10px;
          }

          .author {
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
          }
        `}
      </style>
    </main>
  );
};

export default Index;

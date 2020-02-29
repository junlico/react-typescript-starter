/* eslint-disable @typescript-eslint/require-await */
import { NextPage } from 'next';

type AboutProps = {
  userAgent?: string;
};

const About: NextPage<AboutProps> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

About.getInitialProps = async ({ req }): Promise<AboutProps> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default About;

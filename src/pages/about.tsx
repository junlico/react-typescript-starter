/* eslint-disable @typescript-eslint/require-await */
import { NextPage } from 'next';
import Layout from '../components/Layout';

type AboutProps = {
  userAgent?: string;
};

const About: NextPage<AboutProps> = ({ userAgent }) => (
  <Layout>
    <h1>Hello world! - user agent: {userAgent}</h1>
  </Layout>
);

About.getInitialProps = async ({ req }): Promise<AboutProps> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default About;

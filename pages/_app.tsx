/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { Header } from '../components';

import '../styles/styles.scss';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const {
    title = 'Dragalia Lost',
    description = 'Dragalia Lost Stat Calculator',
  } = pageProps;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="junlico" />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;

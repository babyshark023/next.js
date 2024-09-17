import Head from 'next/head';
import Sidebar from '../components/Sidebar'; // İstemci dosya yolu

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next.js ve TypeScript ile Sidenavbar</title>
        <meta name="description" content="Next.js ve TypeScript ile kaydırmalı menü örneği" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main>
        <h1>Hoşgeldiniz!</h1>
        <p>Yan menü örneği ile birlikte Next.js ve TypeScript kullanımı.</p>
      </main>
    </div>
  );
};

export default Home;

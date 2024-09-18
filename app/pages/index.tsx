import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar'; 


const Home = () => {
  return (
    <div>
      <Head>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main>
     
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Jobs from './jobs'
import Technologies from './technologies'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryland Donovan</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='container'>
          <span>Hi, I'm</span>
          <div className='stack' style={{ ['--stacks' as any]: '3;'}}>
            <span style={{ ['--index' as any]: '0;'}}>Ryland Donovan</span>
            <span style={{ ['--index' as any]: '1;'}}>Ryland Donovan</span>
            <span style={{ ['--index' as any]: '2;'}}>Ryland Donovan</span>
          </div>
          <span style={{textAlign: 'right'}}>a full stack developer</span>
        </div>
        <Technologies></Technologies>
        <Jobs></Jobs>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

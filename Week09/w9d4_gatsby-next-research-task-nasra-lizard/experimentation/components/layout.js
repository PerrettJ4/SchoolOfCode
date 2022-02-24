import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Testing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/counter">
          <a>Counter</a>
        </Link>
        <Link href="/simpsons">
          <a>Simpsons</a>
        </Link>
      </nav>
      <main>{children}</main>

      <footer className={styles.footer}>Empowered by Liz</footer>
    </div>
  );
}

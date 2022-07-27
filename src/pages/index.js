import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/about"> About</Link>
        <h1 className={styles.title}>Welcome to Solent's Room Finder</h1>
      </main>
    </div>
  );
}

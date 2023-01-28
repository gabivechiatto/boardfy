import Head from 'next/head'

import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Boardfy - The best way to manage your tasks
        </title>
      </Head>

      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Boardfy Tool" />

        <section className={styles.callToAction}>
          <h1>Write, plan and organize with Boardfy</h1>
          <p>
            <span>100% free</span> and online.
          </p>
        </section>

        <h3 className={styles.donatersTitle}>Donaters:</h3>
        <div className={styles.donaters}>
          <img src="" alt="user 1" />
        </div>
      </main>
    </>
  )
}

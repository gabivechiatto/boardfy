import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'
import styles from './styles.module.scss'
import { SupportButton } from '@/components/SupportButton'

export default function board() {
  return (
    <>
      <Head>
        <title>Boardfy | My tasks</title>
      </Head>

      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Type your task..." />
          <button type="submit">
            <FiPlus size={25} color="#17181F" />
          </button>
        </form>

        <h1>You have 2 tasks!</h1>

        <section>
          <article className={styles.taskList}>
            <p>Essa é minha tarefa</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800"/>
                  <time>2021 July 17</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="#FFF"/>
                  <span>Edit</span>
                </button>
              </div>

              <button>
                <FiTrash size={20} color="#FF3636"/>
                <span>Delete</span>
              </button>
            </div>
          </article>
        </section>
      </main>

      <div className={styles.vipContainer}>
        <h3>Thank you for supporting this project.</h3>
        <div>
          <FiClock size={28} color="#FFF" />
          <time>
            Last donation: 3 days
          </time>
        </div>
      </div>

      <SupportButton />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

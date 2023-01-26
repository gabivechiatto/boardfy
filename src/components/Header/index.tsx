import Link from 'next/link'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Boardfy Logo" />
        </Link>

        <nav>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/board" className={styles.link}>My board</Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}

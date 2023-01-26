import { useState } from 'react';
import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const [session, setSession] = useState(true);

  return (
    <>
    { session ? (
      <button type="button" className={styles.signIn} onClick={() => {}}>
        <img src="" alt="User Image" />
        Olá Gabriela
        <FiX color="#737380" className={styles.closeIcon}/>
      </button>
    ) : (
      <button type="button" className={styles.signIn} onClick={() => {}}>
        <FaGithub color="#FFB800" />
        Sign in with Github
      </button>
    )}
    </>
  )
}

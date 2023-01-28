import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const { data: session } = useSession()

  return (
    <>
    { session ? (
      <button type="button" className={styles.signIn} onClick={() => signOut()}>
        <img src={session?.user?.image as string} alt="User Image" />
        Hello, {session?.user?.name}
        <FiX color="#737380" className={styles.closeIcon}/>
      </button>
    ) : (
      <button type="button" className={styles.signIn} onClick={() => signIn('github')}>
        <FaGithub color="#FFB800" />
        Sign in with Github
      </button>
    )}
    </>
  )
}

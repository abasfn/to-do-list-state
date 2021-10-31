import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React from 'react';
import Main from '../component/main/main.component';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}

export default Home

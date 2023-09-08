'use client'
import React from 'react'
import styles from './page.module.css'
import CardMapper from '@/components/CardMapper/CardMapper'

const Home:React.FC = () => {

  return (
      <div className={styles.container}>
        <CardMapper/>
      </div>
     )
}

export default Home
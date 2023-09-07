'use client'
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import SlideBar from '@/components/SlideBar/SlideBar'
import CardMapper from '@/components/CardMapper/CardMapper'

const Home:React.FC = () => {
  return (
      <div className={styles.container}>
        <Header/>
        <div className={styles.body}>
          <SlideBar/>
          <CardMapper/>
        </div>
      </div>
     )
}

export default Home
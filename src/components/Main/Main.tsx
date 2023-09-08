'use client'
import React from 'react'
import styles from './Main.module.css'
import NavBar from '../NavBar.tsx/NavBar'
import Header from '../Header/Header'

const Main = ({children}: {children: React.ReactNode}) => {
    return(
        <div className={styles.container}>
            <NavBar/>
            <Header/>
            <span className={styles.background}/>
            <div className={styles.appContainer}>
                {children}
            </div>
        </div>
    )
}

export default Main
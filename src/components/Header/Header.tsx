'use client'
import React, {useState} from 'react'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import {useTheme} from 'next-themes'
const Header:React.FC = () => {
    const { theme, setTheme} = useTheme()


    
    const handleSelectTheme = () => {
        setTheme( theme === 'light'? 'dark': 'light')
    }
    return(
        <div className={styles.container}>
            <SearchBar/>
            <button onClick={() => handleSelectTheme()}>chenge theme</button>
            <span className={styles.border}/>
        </div>
    )
}

export default Header
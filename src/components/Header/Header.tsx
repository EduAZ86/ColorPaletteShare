'use client'
import React, {useState} from 'react'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import {useTheme} from 'next-themes'
import {IoMdMoon} from 'react-icons/Io'
import {IoMdSunny} from 'react-icons/Io'
const Header:React.FC = () => {
    const { theme, setTheme} = useTheme()


    
    const handleSelectTheme = () => {
        setTheme( theme === 'light'? 'dark': 'light')
    }
    return(
        <div className={styles.container}>
            <SearchBar/>
            <button
                className={styles.buttonTheme} 
                onClick={() => handleSelectTheme()}>
            {theme === 'light'? <IoMdMoon/> : <IoMdSunny/> }
            </button>
            <span className={styles.border}/>
        </div>
    )
}

export default Header
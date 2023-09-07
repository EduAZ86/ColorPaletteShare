'use client'
import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    const [inputWidth, setInputWidth] = useState('10%')

    const handleFocus =() => {
       setInputWidth('80%') 
    }
    
    const handleBlur = () => {  
        setInputWidth('10%')
    };


    return(
        <div
            className={styles.container}
            >
            <input
                style={{width:inputWidth}}
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()} 
                className={styles.input}
                placeholder='Search'
                type='text'
            />
            
        </div>
    )
}

export default SearchBar
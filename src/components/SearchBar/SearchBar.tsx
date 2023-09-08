'use client'
import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {


    return(
        <div
            className={styles.container}
            >
            <input
                className={styles.input}
                placeholder='Search'
                type='text'
            />

        </div>
    )
}

export default SearchBar
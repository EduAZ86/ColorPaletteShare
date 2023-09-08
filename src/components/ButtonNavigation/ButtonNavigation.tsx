import React from 'react'
import styles from './ButtonNavigation.module.css'
import {HiFire} from 'react-icons/hi'
import {  ButtonNavigationProps } from '@/types'


const ButtonNavigation:React.FC<ButtonNavigationProps> = ({option}) => {
    
const icon = <HiFire className={styles.icon}/>
    return(
        <div className={styles.container}>
            <button className={styles.button}>
                {icon}
                <span className={styles.title}>
                    {option.name}
                </span>
            </button>
        </div>
    )
}

export default ButtonNavigation
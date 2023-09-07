import React from 'react'
import styles from './CardColor.module.css'
import { paletteColor } from '@/types'
import { SlHeart } from 'react-icons/sl'

const CardColor:React.FC<paletteColor> = ({
    first_color,
    second_color,    
    third_color,    
    fourth_color,
    fifth_color
}) => {
    const iconStyle = {
        width: '1.5rem',
        height:'1.5rem',
        borderWidth: 0,
        color:'red',
        

    }

    return (
        <div className={styles.container}>
            <div className={styles.palette}>
                <span
                    style={{
                        backgroundColor:first_color,
                        borderTopLeftRadius:'0.5rem',
                        borderBottomLeftRadius:'0.5rem',
                        borderWidth:0
                    }} 
                    className={styles.color}/>
                <span
                    style={{backgroundColor:second_color}} 
                    className={styles.color}/>
                <span
                    style={{backgroundColor:third_color}} 
                    className={styles.color}/>
                <span
                    style={{backgroundColor:fourth_color}} 
                    className={styles.color}/>
                <span
                    style={{
                        backgroundColor:fifth_color,
                        borderTopRightRadius:'0.5rem',
                        borderBottomRightRadius:'0.5rem'
                    }} 
                    className={styles.color}/>
            </div>
            <div className={styles.stadisticsContainer}>
                <button className={styles.favButton}>
                    <SlHeart
                        className={styles.favIco}

                    />
                    <span className={styles.favCounter}
                    > 20k</span>
                </button>
                <span className={styles.date}
                >2 days</span>
            </div>

        </div>
    )
}

export default CardColor
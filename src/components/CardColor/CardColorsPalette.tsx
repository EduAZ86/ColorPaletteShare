import React from 'react'
import styles from './CardColorsPalette.module.css'
import { paletteColor } from '@/types'
import { SlHeart } from 'react-icons/sl'
import ColorPalette from '../ColorPalette/ColorPalette'

const CardColorsPalette:React.FC<paletteColor> = ({
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
            <ColorPalette
                first_color={first_color}
                second_color={second_color}    
                third_color={third_color}    
                fourth_color={fourth_color}
                fifth_color={fifth_color}            
            />

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
            C</div>

        </div>
    )
}

export default CardColorsPalette
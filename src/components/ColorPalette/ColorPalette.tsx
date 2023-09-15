import React from 'react'
import styles from './ColorPalette.module.css'
import { paletteColor } from '@/types'
import ColorCard from '../ColorCard/ColorCard'

const ColorPalette:React.FC<paletteColor> = ({
    first_color,
    second_color,    
    third_color,    
    fourth_color,
    fifth_color
}) => {

    return(
        <div className={styles.palette}>
            <ColorCard
                key={'first'}
                ident={'first'}
                color={first_color}
            />
            <ColorCard
                key={'second'}
                ident={'second'}
                color={second_color}
            />
            <ColorCard
                key={'third'}
                ident={'third'}
                color={third_color}
            />
            <ColorCard
                key={'fourth'}
                ident={'fourth'}
                color={fourth_color}
            />
            <ColorCard
                key={'fifth'}
                ident={'fifth'}
                color={fifth_color}
            />
      

        </div>
    )
}

export default ColorPalette


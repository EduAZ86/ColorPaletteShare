import React from 'react'
import styles_mobile from './ButtonNavigation.mobile.module.css'
import styles_web from './ButtonNavigation.web.module.css'
import { useDevice } from '@/hooks/useDevice'
import {HiFire} from 'react-icons/hi'
import { optionsButtonType, ButtonNavigationProps } from '@/types'
import { title } from 'process'

const ButtonNavigation:React.FC<ButtonNavigationProps> = ({option}) => {
    const device = useDevice()
    const styles = ((device === 'mobile' || device === 'tablet')? styles_mobile : styles_web)
    
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
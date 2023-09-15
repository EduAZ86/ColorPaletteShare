import React from 'react'
import styles from './ColorCard.module.css'
import { ComplementaryColor, hexToRgb } from '@/utils/ColorCalculators'

interface ColorCardProps {
    color: string;
    ident:string;
  }
const ColorCard:React.FC <ColorCardProps> = ({color, ident}) => {

    const CopyToClipboard = async (text:string) => {           
        
        try {
            await navigator.clipboard.writeText(text);
        
          } catch (error) {
            console.error('No se pudo copiar al portapapeles:', error);
          }

    }

    const colorRGB = hexToRgb(color)
    const colorRGBComplementary = ComplementaryColor(colorRGB)
    const borderTopLeftRadius = (ident === 'first'? '0.5rem':0 )
    const borderBottomLeftRadius = (ident === 'first'? '0.5rem':0 )
    const borderTopRightRadius =  (ident === 'fifth'? '0.5rem':0 )
    const borderBottomRightRadius =  (ident === 'fifth'? '0.5rem':0 )

    return(
        
    <div 
        style={
            {
                backgroundColor:color,
                borderTopLeftRadius:borderTopLeftRadius,
                borderBottomLeftRadius:borderBottomLeftRadius,
                borderTopRightRadius:borderTopRightRadius,
                borderBottomRightRadius:borderBottomRightRadius
            }}
        className={styles.color}>
        <button
            onClick={() => CopyToClipboard(color)}
            style={{color:colorRGBComplementary}} 
            className={styles.copyColor}
            >
                <span
                    className={styles.copied}
                    style={{backgroundColor:colorRGBComplementary, color:color}}
                >copied</span>
                {color}
        </button>
        <button
            onClick={() => CopyToClipboard(`rgb(${colorRGB})`)}
            style={{color:colorRGBComplementary}}  
            className={styles.copyColor}
            >
                <span
                    className={styles.copied}
                    style={{backgroundColor:colorRGBComplementary, color:color}}
                >copied</span>
                {`rgb(${colorRGB})`}
        </button>        
    </div>
    )
}

export default ColorCard
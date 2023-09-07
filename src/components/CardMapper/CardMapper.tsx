import React from "react";
import styles from './CardMapper.module.css'
import CardColor from "../CardColor/CardColor";
import { paletts } from "@/constants/colorsTEST";
import { paletteColor } from "@/types";

const CardMapper:React.FC = () => {
    
    return(
        <div className={styles.container}>
            {paletts?.map((item, index:number) => {
                return(
                    <CardColor
                        key={index}
                        first_color={item.first_color}
                        second_color={item.second_color}
                        third_color={item.third_color}
                        fourth_color={item.fourth_color}
                        fifth_color={item.fifth_color}
                    />
                )

            })}
        </div>
    )
}

export default CardMapper
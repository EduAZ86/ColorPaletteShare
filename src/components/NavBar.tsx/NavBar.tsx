'use client'
import React from "react";
import styles from './NavBar.module.css'
import { options } from "@/constants/optionsButtonsNavBar";
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation";

const NavBar:React.FC = () => {

    return(
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                {options.map((item,index) => {
                    return(
                        <ButtonNavigation
                            key={`${index}-${item.name}`}
                            option={item}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default NavBar
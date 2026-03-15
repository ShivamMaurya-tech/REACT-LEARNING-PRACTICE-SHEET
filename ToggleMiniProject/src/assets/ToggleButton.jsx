import React, { useState } from 'react';
import styles from './Toggle.module.css'
export const ToggleButton =()=>{
    const [isOn, setisOn]=useState(false);
    const checkIsOn= isOn ? "ON" : "Off";
    const bgcolor={backgroundColor:isOn ? "green" : "red"}
const HandleToggle =()=>{
    setisOn(!isOn);
}

    return (
        <>
        <div className={styles.main} style={bgcolor}onClick={HandleToggle}>
        <div className={styles.childmain + " " + (isOn ? styles.ON : styles.Off)}>
           <span className={styles.button}>{checkIsOn}</span>
            </div>
            
        </div>

        
        
        </>
    )
} 

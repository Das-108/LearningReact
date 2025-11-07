import React from "react";
import styles from './Header.module.css'

const Header =() => {
    return (
        <div className={styles.header}>
            <h3>Shreyians</h3>
            <button className={styles.btn}></button>
        </div>
    )
}

export default Header
import React from 'react';

// Styles
import styles from "./AboutMe.module.css"

// Images
import farhadPhoto from "../../images/FarhadPhoto.png"

const AboutMe = () => {
    return (
        <div className={styles.container} id='AboutMe'>
            <div className={styles.header}>
                <h2> درباره من </h2>
            </div>
            <div className={styles.body}>
                <img src={farhadPhoto} alt='Farhad' />
                <p>
                    فرهاد هستم با بیش از 2 سال سابقه در طراحی وبسایت و زمینه های مرتبط
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
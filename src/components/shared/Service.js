import React from 'react';

// Styles
import styles from "./Service.module.css"

const Service = ({icon, title, text}) => {
    return (
        <div className={styles.container}>
            <img src={icon} alt="service" className={styles.icon} />
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
};

export default Service;
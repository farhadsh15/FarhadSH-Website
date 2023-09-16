import React from 'react';

// Styles
import styles from "./Skill.module.css";

const Skill = ({to, title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.inner} style={{width: `${to}%`}}>
                <span className={styles.title}>{title}</span
                ><span className={styles.to}>{to}%</span>
            </div>
        </div> 
    );
};

export default Skill;
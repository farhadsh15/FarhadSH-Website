import React from 'react';

// Styles
import styles from "./Project.module.css";

const Project = ({image, title}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="Project Photo" />
        </div>
    );
};

export default Project;
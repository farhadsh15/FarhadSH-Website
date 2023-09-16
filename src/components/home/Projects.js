import React from 'react';

// Styles
import styles from "./Projects.module.css";

// Images
import cryptoPhoto from "../../images/Project Photo/crypto.png"
import loginSignUpPhoto from "../../images/Project Photo/loginSignUp.png"
import shopingCartPhoto from "../../images/Project Photo/shopingCart.png"
import weatherAppPhoto from "../../images/Project Photo/weatherApp.png"

// Components
import Project from '../shared/Project';

const Projects = () => {
    return (
        <div className={styles.container} id='Projects'>
            <h2>پروژه های من</h2>
            <div>
                <Project image={cryptoPhoto} title="Crypto" />
                <Project image={loginSignUpPhoto} title="Login SignUp" />
                <Project image={shopingCartPhoto} title="Shoping Cart" />
                <Project image={weatherAppPhoto} title="Weather App" />
            </div>
        </div>
    );
};

export default Projects;
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// Styles
import styles from "./Navbar.module.css"

// Images
import logo from "../images/logo2.png"

const Navbar = () => {

    const [hambergur, setHambergur] = useState(false);

    const hambergurHandeler = () => {
        if (hambergur) {
            setHambergur(false)
        }
        if (!hambergur) {
            setHambergur(true)
        }
        console.log(hambergur)
    }

    

    return (
        <div className={styles.container}>
            <div className={styles.hambergur}>
                <div className={styles.hambergurNavbar}>
                    <div className={styles.hamIcon} onClick={hambergurHandeler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={logo} alt='Logo' />
                </div>
                {hambergur && <ul onClick={() => setHambergur(false)}>
                <li>
                        <a href="/#Home">خانه</a>
                    </li>
                    <li>
                        <a href="/#MyServices"> خدمات من </a>
                    </li>
                    <li>
                        <a href="/#AboutMe"> درباره من </a>
                    </li>
                    <li>
                        <a href="/#Skills"> مهارت ها </a>
                    </li>
                    <li>
                        <a href="/#Projects"> نمونه کار ها </a>
                    </li>
                    <li>
                        <a href="/#ContactMe"> تماس با ما </a>
                    </li>
                </ul> }
                
            </div>
            <div className={styles.pc}>
                <ul>
                    <li>
                        <a href="/#Home">خانه</a>
                    </li>
                    <li>
                        <a href="/#MyServices"> خدمات من </a>
                    </li>
                    <li>
                        <a href="/#AboutMe"> درباره من </a>
                    </li>
                    <li>
                        <a href="/#Skills"> مهارت ها </a>
                    </li>
                    <li>
                        <a href="/#Projects"> نمونه کار ها </a>
                    </li>
                    <li>
                        <a href="/#ContactMe"> تماس با ما </a>
                    </li>
                </ul>
                <img src={logo} alt='Logo' />
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';

// Styles
import styles from "./Footer.module.css"

// Images
import logo from "../images/logo2.png"

// Icons
import whatsapp from "../icons/svg/whatsapp.svg"
import instagram from "../icons/svg/instagram.svg"
import telegram from "../icons/svg/telegram.svg"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxs}>
                <div className={styles.box1}>
                    <h4>ساعت کاری</h4>
                    <p>
                        شنبه تا چهارشنبه از ساعت 12 الی 20
                    </p>
                    <p>
                        پنجشنبه از ساعت 8 الی 16
                    </p>
                </div>
                <div className={styles.box2}>
                    <h4>راه های اتباطی</h4>
                    <div>
                        <a href='https://wa.me/+989170115002'>
                            <img src={whatsapp} alt='whatsapp' />                
                        </a>
                        <a href='https://t.me/fsh8583'>
                            <img src={telegram} alt='telegram' />                
                        </a>
                        <a href='https://instagram/farhad.sh.15'>
                            <img src={instagram} alt='instagram' />
                        </a>
                    </div>
                </div>
                <div className={styles.box3}>
                    <a href='/'>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                <p><span>&#169;</span> تمام حق کپی رایت محفوض میباشد <span>1402</span></p>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';

// Images
import banner from "../../images/1.jpg"

// Styles
import styles from "./Banner.module.css"



const Banner = () => {
    return (
        <div className={styles.banner} id='Home'>
            <img src={banner} alt='banner' />
            <h1>فرهاد شمسی</h1>
            <div>
                <button>ثبت سفارش</button>
                <button>درخواست مشاوره</button>
            </div>
        </div>
    );
};

export default Banner;
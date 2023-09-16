import React from 'react';

// images
import seo from "../../icons/seo.png"
import coding from "../../icons/coding.png"
import support from "../../icons/support.png"

// Styles
import styles from "./MyServices.module.css"

// Components
import Service from '../shared/Service';

const MyServices = () => {
    return (
        <div className={styles.container} id='MyServices'>
            <div className={styles.header}>
                <h2>
                    خدمات من
                </h2>
            </div>
            <div className={styles.services}>
                <Service icon={coding} title=" طراح و اجرا " text=" طراحی وبسایت زیبا و مدرن و همچنین اجرا سریع و بی نقص "/>
                <Service icon={seo} title=" سئو (seo) " text=" بهینه سازی وبسات جهت نمایش بهتر در موتور های جستجو "/>
                <Service icon={support} title=" پشتیبانی " text=" پشتبانی ۲۴ ساعته ۷ روز هفته و خدمات پس از فروش عالی "/>
            </div>
        </div>
    );
};

export default MyServices;
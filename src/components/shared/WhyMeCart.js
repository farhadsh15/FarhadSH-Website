import React from 'react';

// Styles
import style from "./WhyMeCart.module.css"

const WhyMeCart = ({to, title, beforNum}) => {
    return (
        <div className={style.container}>
            <p>{to} <span>{beforNum}</span></p>
            <h4>{title}</h4>
        </div>
    );
};

export default WhyMeCart;
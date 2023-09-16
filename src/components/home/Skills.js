import React from 'react';

// Styles
import styles from "./Skills.module.css"

// Components
import Skill from '../shared/Skill';
import WhyMeCart from '../shared/WhyMeCart';

const Skills = () => {
    return (
        <div className={styles.container} id='Skills'>
            <h2>مهارت های من</h2>
            <div className={styles.skillsContainer}>
                <div className={styles.skills}>
                    <Skill to="95" title="HTML" /> 
                    <Skill to="95" title="CSS" />
                    <Skill to="98" title="JavaScript" />
                    <Skill to="83" title="React" />
                    <Skill to="90" title="Git" />
                    <Skill to="80" title="ارتباط عمومی" />
                </div>
                <div className={styles.whyMe}>
                    <WhyMeCart title="سابقه" to="2" beforNum="+" />
                    <WhyMeCart title="پروژه موفق" to="3" beforNum="+" />
                    <WhyMeCart title="پروژه" to="5" beforNum="+" />
                    <WhyMeCart title="پروژه" to="5" beforNum="+" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
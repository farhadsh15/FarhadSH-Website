import React from 'react';

// Components
import Banner from './Banner';
import MyServices from './MyServices';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <MyServices />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactUs />
        </div>
    );
};

export default Home;
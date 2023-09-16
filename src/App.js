import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
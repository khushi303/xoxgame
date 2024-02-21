import React from 'react';
// import SocialMedia from './pages/SocialMedia';
import NexAi from './pages/NexAi';
import './App.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

const App = () => {
    // -------aos--------//
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 1200,
                easing: 'ease-in-out',
            }
        );
        Aos.refresh()
    });

    return (
        <div className='overflow-hidden'>
            <NexAi />
            {/* <SocialMedia /> */}
        </div>
    )
}

export default App
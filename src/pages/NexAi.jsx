import React from 'react'
import NexNav from '../components/NexNav';
import NexHeader from '../components/NexHeader';
import Headerimg1 from '../assets/images/gif/HeroGif.gif';
import RoboImg from '../assets/images/webp/robotheader.webp';
import NexPower from '../components/NexPower';
import NexFeatures from '../components/NexFeatures';
import NexThings from '../components/NexThings';
import NexBlockchain from '../components/NexBlockchain';
import NexUtility from '../components/NexUtility';
import NexPresale from '../components/NexPresale';
import NexGet from '../components/NexGet';
import NexFooter from '../components/NexFooter';
import TopBtn from '../assets/images/webp/topbtn.webp';
import { useState, useEffect } from 'react';
import NexLoader from '../components/NexLoader';

const NexAi = () => {
    // --------preloader--------//
    const [screenLoading, setScreenLoading] = useState(false);

    useEffect(() => {
        setScreenLoading(true);
        setTimeout(() => {
            setScreenLoading(false);
        }, 3000);
    }, []);
    // ------------Back-to-Top----------//
    const top = () => {
        document.documentElement.scrollTop = 0;
    };
    const [backToTop, setbackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > 300) {
                setbackToTop(true);
            } else {
                setbackToTop(false);
            }
        });
    }, []);
    return (
        <div className='overflow-hidden'>
            {
                screenLoading ? (
                    <>
                        <div className='fixed min-h-screen bg-[#08090E] top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                            <div className='max-w-[150px] w-full'>
                                <NexLoader />
                            </div>

                        </div>

                    </>

                ) : (
                    <div className='bg-[#08090E]'>
                        <div className="bg-[#08090E] relative overflow-hidden">
                            <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#08090E]'>
                                <img src={Headerimg1} alt="Headerimg1" className='w-full h-full object-cover object-center opacity-20' />
                            </div>
                            <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#0066FF] mix-blend-overlay'>
                            </div>
                            <div className='absolute xl:top-[-150px] z-[2] top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                                <img src={RoboImg} alt="RoboImg" className='w-full max-w-[650px] max-h-[857px] object-cover h-full' />
                            </div>
                            <div className='bg_linear absolute bottom-0 left-0 right-0 h-[121px]'></div>
                            <NexNav />
                            <NexHeader />
                        </div>
                        <NexPower />
                        <NexFeatures />
                        <NexThings />
                        <NexBlockchain />
                        <NexUtility />
                        <NexPresale />
                        <NexGet />
                        <NexFooter />
                        <div className={`${backToTop ? '' : 'hidden'} border-[2.2px] rounded-[50%] border-solid border-white bg-[#08090E] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center fixed bottom-7 right-7 z-40 cursor-pointer`} onClick={() => top()}>
                            <img src={TopBtn} alt="TopBtn" className='sm:max-w-[40px] max-w-[30px]' />
                        </div>
                    </div>
                )
            }</div>
    )
}

export default NexAi;
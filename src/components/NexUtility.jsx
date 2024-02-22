import React from 'react';
import BgUtility from '../assets/images/webp/bgutility.webp';
import Utilitygif1 from '../assets/images/gif/utility1gif.gif';

const NexUtility = () => {
    return (
        <div id='Tokens' className='relative z-[1] bg-[#FFFFFF0A]'>
            <div className='absolute top-0 left-0 bottom-0 right-0'>
                <img src={BgUtility} alt="BgUtility" className='w-full h-full opacity-[4%]' />
            </div>
            <div className='bg-[#0066FF] w-[274px] h-[274px] absolute right-[-11%] bottom-[-4%] blur-[200px] z-[1]'></div>
            <div className='bg-[#0066FF] w-[274px] h-[274px] absolute left-[-11%] top-[9%] blur-[200px] z-[1]'></div>
            <div data-aos="zoom-in" className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6 lg:pt-[90px] lg:pb-[108px] sm:py-[50px] py-[40px] relative z-10'>
                <h2 className='ff_play sm:text-[48px] text-[32px] font-normal text-center text-[#fcfcfc] leading-[126%] mb-[16px]'>NexAI Token & utility</h2>
                <div className='border border-solid border-[#0066FF] sm:rounded-[32px] rounded-[20px] bg-[#FFFFFF0A] px-[20px] sm:px-[30px] lg:px-[60px] lg:pt-[149px] lg:pb-[237px] sm:py-[100px] pt-[40px] pb-[60px] relative overflow-hidden lg:mt-[70px] sm:mt-[40px] mt-[25px]'>
                    <div className='relative z-10'>
                        <div className='bg-[#FCFCFC] w-[58px] h-[58px] rounded-[50%] shadow-[0px_4px_16px_0px_#0066FF9C_inset] flex items-center justify-center'>
                            <h3 className='ff_poppins text-[32px] font-semibold items-center leading-[160%] text-[#0066FF]'>1</h3>
                        </div>
                        <p className='ff_play font-normal text-[32px] leading-[130%] text-white sm:mt-[30px] mt-[20px]'>Purchasing Nexai Products</p>
                        <p className='ff_poppins text-[16px] font-normal leading-[160%] lg:max-w-[390px] text-white opacity-70 sm:mt-[16px] mt-[8px]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                    </div>
                    <div className='absolute lg:right-[-7%] lg:bottom-[-17%] right-[-10%] sm:bottom-[-36%] bottom-[-20%] max-lg:opacity-60 xl:max-w-[689px] lg:max-w-[570px] sm:max-w-[450px] max-w-[300px] w-full'>
                        <img src={Utilitygif1} alt="Utilitygif1" className='w-full' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NexUtility
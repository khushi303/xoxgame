import React from 'react'
import Skullimg from '../assets/images/webp/skullpower.webp'
import PowerGlobe from '../assets/images/gif/Ai-gif.gif';

const NexPower = () => {
    return (
        <div id='About' className='bg-[#08090E] sm:pt-[75px] lg:pb-[130px] sm:pb-[75px] py-[50px] overflow-hidden relative z-[1]'>
            <div className='mx-auto container xl:max-w-[1164px] xl:px-3 px-6 relative z-10'>
                <div className='flex lg:flex-row flex-col-reverse flex-wrap justify-center'>
                    <div data-aos="zoom-in" className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:mt-0 mt-10'>
                        <h2 className='ff_play sm:text-[48px] text-[32px] font-normal text-[#FCFCFC] leading-[126%] sm:mb-[16px] mb-[8px]'>Ai-Powered Home Assistant</h2>
                        <p className='text-white ff_poppins text-[16px] font-normal leading-[163%] sm:mb-[6px] mb-[4px] lg:max-w-[609px] opacity-70'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='text-white ff_poppins text-[16px] font-normal leading-[163%] sm:mb-[6px] mb-[4px] lg:max-w-[609px] opacity-70'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='text-white ff_poppins text-[16px] font-normal leading-[163%] lg:max-w-[609px] opacity-70 sm:mb-[40px] mb-[22px]'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <button className='bg-[#0066FF] relative z-10 sm:py-[18px] sm:px-[32.5px] px-[30px] py-[14px] group text-white btn-1 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:rounded-[12px] rounded-[12px] after:opacity-0 after:bg-[#fcfcfc] after:scale-50 after:hover:opacity-100 after:hover:scale-100 after:transition-all after:duration-300 after:ease-linear'><span className='btn-text relative z-10 group-hover:text-[#0066FF] ff_poppins text-[18px] leading-[151%] font-semibold'>Learn more</span></button>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[40%]'>
                        <div className='max-w-[470px] w-full relative'>
                            <img src={PowerGlobe} alt="PowerGlobe" className='absolute bottom-0 right-[-8%] xl:max-w-[310px] lg:max-w-[271px] sm:max-w-[308px] max-w-[217px] w-full mix-blend-color-dodge' />
                            <img src={Skullimg} alt="Skullimg" className='w-full max-w-[443px] relative z-10' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0066FF] w-[274px] h-[168px] absolute left-[-11%] bottom-[27%] blur-[200px] z-[1]'></div>
        </div>
    )
}

export default NexPower

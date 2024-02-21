import React from 'react'
import { Playbtn, GreenArrow, Greenwhitebtn } from "../components/Iconimg";
import Btncommon from './Btncommon';
import Headerimg from '../assets/images/png/headerimg.png';
import Iconheaderimg from '../assets/images/png/iconheader.png';

const Header = () => {
    return (
        <>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6 xl:pt-[97px] lg:pt-[70px] sm:pt-[50px] pt-[35px]'>
                <div className='flex flex-row flex-wrap '>
                    <div className='lg:w-[55%] w-full flex flex-col justify-center'>
                        <Greenwhitebtn />
                        <h2 className='xl:text-[64px] mt-[6px] lg:text-[50px] sm:text-[64px] text-[42px] font-bold ff_k2d text-[#010101] leading-[130%]'>A Journey into <span className='text-[#00972A]'>Social Media Growth</span></h2>
                        <p className='text-[16px] font-normal text-[#010101] leading-[151%] mt-[16px] opacity-70'>Welcome to the era of digital influence! In a world driven by social connectivity, harnessing the power of social media is the key to expanding your reach and impact. Our expertly crafted web design is your gateway to unlocking unprecedented growth for your social media accounts.</p>
                        <div className='flex items-center gap-3 sm:mt-[44px] mt-[24px] flex-wrap'>
                            <Btncommon name="Get Started" svgname={<Playbtn />} />
                            <button className='bg-transparent sm:py-[16px] sm:px-[32px] py-[12px] px-[25px] flex items-center justify-center text-[16px] font-bold sm:gap-[10px] gap-[7px] text-[#00972A] rounded-[12px] whitespace-nowrap'>Learn More <GreenArrow /></button>
                        </div>
                    </div>
                    <div className='lg:w-[45%] w-full flex justify-end relative lg:mt-0 mt-12'>
                        <img src={Headerimg} alt="Headerimg" className='max-w-[411px] w-full lg:translate-x-[35px]' />
                        <img src={Iconheaderimg} alt="Iconheaderimg" className='xl:max-w-[275px] sm:max-w-[200px] max-w-[130px] lg:left-[-11%] lg:top-[-7%] absolute left-0 top-0' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
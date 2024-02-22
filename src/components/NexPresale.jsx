import React from 'react'
import PresaleSkull from '../assets/images/gif/skullgifpresale.gif'

const NexPresale = () => {
    return (
        <div className='lg:pt-[80px] sm:pt-[60px] pt-[50px] mb-[-20px] relative'>
            <div className='container mx-auto xl:max-w-[1216px] xl:px-3 px-6 relative z-10'>
                <div className='flex flex-row flex-wrap lg:justify-between justify-center'>
                    <div data-aos="zoom-in" className='lg:w-[40%]'>
                        <img src={PresaleSkull} alt="PresaleSkull" className='w-full' />
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[48%] w-full flex lg:justify-center lg:items-center'>
                        <div>
                            <h2 className='ff_play sm:text-[48px] text-[32px] font-normal text-[#fcfcfc] leading-[126%] mb-[16px]'>Whitelist & Presale</h2>
                            <p className='ff_poppins text-[16px] font-normal leading-[160%] text-white opacity-70 lg:max-w-[482px]'>For our early supporters, we have curated an exclusive presale opportunity. To ensure your participation, we will be implementing a whitelist registration process. By signing up on the whitelist and following the provided instructions, you will secure your spot in this exciting event. To stay informed about the whitelist opening and receive timely updates, kindly provide us with your email address, and we will notify you accordingly.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#0066FF] w-[274px] h-[274px] absolute left-[-15%] top-[32%] blur-[200px] z-[1]'></div>
            </div>
        </div>
    )
}

export default NexPresale
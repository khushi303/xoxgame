import React from 'react'

const NexHeader = () => {
    return (
        <>
            <div id='home' className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6 relative z-10 flex flex-col items-center justify-center md:pt-[160px] xl:pb-[320px] lg:pb-[200px] md:pb-[160px] py-[80px]'>
                <h2 data-aos="zoom-in" className='md:text-[60px] sm:text-[47px] text-[35px] font-bold text-center leading-[126%] text-white ff_play max-w-[978px] lg:mb-[40px] mb-[30px] capitalize'>NexAi is an advanced AI-powered home assistant</h2>
                <button data-aos="zoom-in" className='bg-[#0066FF] relative z-10 sm:py-[18px] sm:px-[32.5px] px-[30px] py-[14px] group text-white btn-1 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:rounded-[12px] rounded-[12px] after:opacity-0 after:bg-[#fcfcfc] after:scale-50 after:hover:opacity-100 after:hover:scale-100 after:transition-all after:duration-300 after:ease-linear'><span className='btn-text relative z-10 group-hover:text-[#0066FF] ff_poppins text-[18px] leading-[151%] font-semibold'>Sign Up</span></button>
            </div>
        </>
    )
}

export default NexHeader;
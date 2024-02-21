import React, { useState } from 'react'

const NexNav = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-md:overflow-hidden")

    } else {
        document.body.classList.remove("max-md:overflow-hidden")
    }
    return (
        <div className='container mx-auto xl:max-w-[1124px] xl:px-3 px-6 pt-[28px] pb-[19px]'>
            <div className='flex md:justify-end justify-between items-center lg:gap-[254px] gap-[100px] relative z-20'>
                <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-md:fixed max-md:top-0 max-md:h-full z-40 max-md:w-full max-md:z-20 max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:bg-black max-md:min-h-screen max-md:flex-col gap-[20px] items-center justify-center`}>
                    <li onClick={() => setNav(!nav)}><a href="#home" className='text-[16px] ff_poppins font-normal leading-[150%] text-white after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Home</a></li>
                    <li onClick={() => setNav(!nav)}><a href="#Marketplace" className='text-[16px] ff_poppins font-normal leading-[150%] text-white after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Marketplace</a></li>
                    <li onClick={() => setNav(!nav)}><a href="#About" className='text-[16px] ff_poppins font-normal leading-[150%] text-white after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>About</a></li>
                    <li onClick={() => setNav(!nav)}><a href="#NexChat" className='text-[16px] ff_poppins font-normal leading-[150%] text-white after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>NexChat</a></li>
                </ul>
                <div onClick={() => setNav(!nav)} className='md:hidden w-[28px] h-[20px] relative z-20 flex justify-between flex-col cursor-pointer'>
                    <span className={`${nav ? 'h-[4px] w-full duration-300 rounded-[3px] bg-white ease-linear transition-all' : "transition-all duration-300 bg-white rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"}`}></span>
                    <span className={`${nav ? 'h-[4px] w-full bg-white duration-300 rounded-[3px] ease-linear transition-all' : "duration-300 rounded-[3px] bg-white ease-linear transition-all hidden"}`}></span>
                    <span className={`${nav ? 'h-[4px] w-full duration-300 bg-white rounded-[3px] ease-linear transition-all' : "transition-all duration-300 bg-white rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                </div>
                <button className='bg-[#0066FF] relative z-10 py-[18px] px-[32.5px] group text-white btn-1 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:rounded-[12px] rounded-[12px] after:opacity-0 after:bg-[#fcfcfc] after:scale-50 after:hover:opacity-100 after:hover:scale-100 after:transition-all after:duration-300 after:ease-linear'><span className='btn-text relative z-10 group-hover:text-[#0066FF] ff_poppins text-[18px] leading-[151%] font-semibold'>Sign Up</span></button>
            </div>
        </div>
    )
}

export default NexNav
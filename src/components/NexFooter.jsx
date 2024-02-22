import React from 'react'
import { Facebook, Tweeter, Telegram } from './Iconimg'

const NexFooter = () => {
    return (
        <div id='NexChat' className="bg-[url('./assets/images/webp/bgfooter.webp')] lg:bg-FullSize bg-cover bg-center lg:pt-[263px] pt-[100px] md:pt-[150px]">
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
                <div className='flex flex-row flex-wrap justify-center pb-[61px]'>
                    <div className='lg:w-[35%] w-full pt-[36px]'>
                        <p className='ff_poppins text-[16px] font-normal lg:max-w-[243px] sm:max-w-[400px] text-white leading-[160%] opacity-70'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                        <div className='flex items-center gap-[12px] mt-[20px]'>
                            <div className='hover:translate-y-[-5px] transition-all duration-300 ease-linear'>
                                <Facebook />
                            </div>
                            <div className='hover:translate-y-[-5px] transition-all duration-300 ease-linear'>
                                <Tweeter />
                            </div>
                            <div className='hover:translate-y-[-5px] transition-all duration-300 ease-linear'>
                                <Telegram />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[25%] md:w-[50%] w-full pt-8 lg:pt-0 flex lg:justify-between lg:gap-0 sm:gap-[80px] gap-[40px]'>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='ff_play text-[18px] font-normal text-white leading-[117%]'>Quick links</li>
                            <li><a href="#home" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Home</a></li>
                            <li><a href="#Features" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Features</a></li>
                            <li><a href="#Marketplace" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Marketplace</a></li>
                            <li><a href="#Tokens" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Tokens</a></li>
                            <li><a href="#NexChat" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>NexChat</a></li>
                            <li><a href="#About" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>About</a></li>
                        </ul>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='ff_play text-[18px] font-normal text-white leading-[117%]'>Information's</li>
                            <li><a href="#Contact" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Contact</a></li>
                            <li><a href="#Phone" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Phone</a></li>
                            <li><a href="#Terms" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Terms</a></li>
                            <li><a href="#Privacy" className='ff_poppins text-[16px] font-normal leading-[100%] text-white opacity-70 after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:opacity-100 transition-all duration-300 ease-linear'>Privacy</a></li>
                        </ul>
                    </div>
                    <div className='lg:w-[40%] md:w-[50%] w-full pt-8 lg:pt-0 flex lg:items-end flex-col'>
                        <div className='lg:max-w-[357px] w-full mb-[20px]'>
                            <h2 className='ff_play text-[24px] font-normal leading-[130%] lg:max-w-[284px] text-white'>Ready to get started Talk to us Today </h2>
                        </div>
                        <div className='lg:max-w-[357px] w-full border border-solid border-[#FCFCFC33] rounded-[12px] flex items-center justify-center'>
                            <input type="text" placeholder='E-mail' className='bg-transparent py-[18px] pl-[18px] w-full text-[16px] ff_poppins font-normal text-white opacity-60 leading-[120%] outline-none' />
                            <button className='bg-[#0066FF] relative z-10 py-[18px] px-[32.5px] group text-white btn-1 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:rounded-[12px] rounded-[12px] after:opacity-0 after:bg-[#fcfcfc] after:scale-50 after:hover:opacity-100 after:hover:scale-100 after:transition-all after:duration-300 after:ease-linear whitespace-nowrap'><span className='btn-text relative z-10 group-hover:text-[#0066FF] ff_poppins text-[18px] leading-[151%] font-semibold'>Get Started</span></button>
                        </div>
                    </div>
                </div>
                <div className='bg_footer h-[4px] opacity-40 w-full rounded-[16px]'></div>
                <div className='py-[20px]'>
                    <p className='ff_poppins text-[16px] font-normal text-center text-white opacity-70 leading-[100%]'>@Copyright.nexai</p>
                </div>
            </div>
        </div>
    )
}

export default NexFooter;
import React from 'react'
import FeatureMouse from '../assets/images/webp/featuremouse.webp';
import Featureimg2 from '../assets/images/webp/featureimg2.webp';
import Featureimg3 from '../assets/images/webp/featureimg3.webp';
import Featureimg4 from '../assets/images/webp/featureimg41.webp';
import Globe1 from '../assets/images/gif/globeimgfeature.gif';

const NexFeatures = () => {
    return (
        <div id='Features' className='xl:pb-[160px] sm:pb-[60px] pb-[50px] relative overflow-hidden'>
            <div className='absolute lg:bottom-[25%] bottom-0 max-lg:top-0 left-0 right-0 flex justify-center max-lg:items-center'>
                <img src={Globe1} alt="Globe1" className='mix-blend-screen w-full max-w-[857px] max-lg:object-contain' />
            </div>
            <div data-aos="zoom-in" className='container lg:pt-[80px] pt-[40px] mx-auto xl:max-w-[1164px] xl:px-3 px-6 h-[850px] overflow-scroll featurescroll relative z-10'>
                <div className='flex items-center justify-center flex-col lg:mb-[100px] sm:mb-[60px] mb-[40px]'>
                    <h2 className='ff_play sm:text-[48px] text-center text-[32px] font-normal text-[#FCFCFC] leading-[126%] sm:mb-[16px] mb-[8px]'>Unique features</h2>
                    <p className='ff_poppins text-[16px] font-normal leading-[160%] text-white max-w-[517px] opacity-70 text-center'>ability to engage in natural, fluent conversations in over 15 languages,</p>
                </div>
                <div className='flex flex-row flex-wrap relative z-10'>
                    <div className='lg:w-[50%] w-full flex flex-col lg:items-start items-center'>
                        <div className='bg_feature rounded-[16px] cursor-pointer max-w-[364px] border border-solid border-[#FCFCFC66] relative z-[1]'>
                            <img src={FeatureMouse} alt="FeatureMouse" className='w-full rounded-t-[16px] cursor-pointer' />
                            <div className='pt-[20px] pl-[24px] rounded-b-[16px] pr-[36px] pb-[30px] bg-[#ffffff15] cursor-pointer'>
                                <p className='text-[20px] font-semibold ff_poppins text-white leading-[160.9%]'>Remote Access and File Management</p>
                            </div>
                        </div>
                        <div className='bg_feature lg:mt-[180px] sm:mt-[80px] mt-[40px] cursor-pointer rounded-[16px] max-w-[364px] border border-solid border-[#FCFCFC66] relative z-[1]'>
                            <img src={Featureimg3} alt="Featureimg3" className='w-full rounded-t-[16px] cursor-pointer' />
                            <div className='pt-[20px] pl-[24px] rounded-b-[16px] pr-[36px] pb-[30px] bg-[#ffffff15] cursor-pointer'>
                                <p className='text-[20px] font-semibold ff_poppins text-white leading-[160.9%]'>Remote Access and File Management</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full flex flex-col lg:items-end items-center lg:pt-[286px] sm:pt-[80px] pt-[40px]'>
                        <div className='bg_feature rounded-[16px] cursor-pointer max-w-[364px] border border-solid border-[#FCFCFC66] relative z-[1]'>
                            <img src={Featureimg2} alt="Featureimg2" className='w-full rounded-t-[16px] cursor-pointer' />
                            <div className='pt-[20px] pl-[24px] rounded-b-[16px] pr-[36px] pb-[30px] bg-[#ffffff15] cursor-pointer'>
                                <p className='text-[20px] font-semibold ff_poppins text-white leading-[160.9%]'>Remote Access and File Management</p>
                            </div>
                        </div>
                        <div className='bg_feature lg:mt-[180px] sm:mt-[80px] mt-[40px] cursor-pointer rounded-[16px] max-w-[364px] border border-solid border-[#FCFCFC66] relative z-[1]'>
                            <img src={Featureimg4} alt="Featureimg4" className='w-full rounded-t-[16px] cursor-pointer' />
                            <div className='pt-[20px] pl-[24px] rounded-b-[16px] pr-[36px] pb-[30px] bg-[#ffffff15] cursor-pointer'>
                                <p className='text-[20px] font-semibold ff_poppins text-white leading-[160.9%]'>Remote Access and File Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bglayer_linear absolute left-0 right-0 bottom-[-3px] h-[121px]'></div>
            <div className='bg-[#0066FF] w-[274px] h-[274px] absolute right-[-11%] top-[13%] blur-[200px] z-[1]'></div>
            <div className='bg-[#0066FF] w-[274px] h-[182px] absolute left-[-11%] bottom-[24%] blur-[200px] z-[1]'></div>
        </div>
    )
}

export default NexFeatures
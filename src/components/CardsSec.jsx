import React from 'react';
import { Stargreen, Profileimg } from './Iconimg';

const CardsSec = () => {
    const CardData = [
        {
            svg: <Profileimg />,
            p: "Acc. Build",
            p1: "5k+"
        },
        {
            svg: <Stargreen />,
            p: "Rating",
            p1: "4.9+",
        },
        {
            svg: <Profileimg />,
            p: " Acc. Build",
            p1: "5k+",
        },
        {
            svg: <Stargreen />,
            p: "Rating",
            p1: "4.9+",
        }
    ]
    return (
        <div className='pt-[158px]'>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    {CardData.map((e) => {
                        return (
                            <>
                                <div className='w-[23%] py-[24px] pl-[52px] pr-[53px] shadow-[0px_0px_16px_2px_#0000000A] rounded-[20px] flex flex-col items-center justify-center gap-3'>
                                    <div className='w-[72px] h-[72px] flex items-center justify-center bg-[#F9FFFA] rounded-[50%] shadow-[0px_3px_4px_0px_#0000001F]'>
                                        {e.svg}
                                    </div>
                                    <p className='text-[24px] font-semibold text-[#00972A] leading-[100%]'>{e.p1}<span className='text-[#010101] font-medium'>{e.p}</span></p>
                                </div>
                            </>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardsSec
import React from 'react'

const Btncommon = (props) => {
    return (
        <>
            <button className="bg-[#00972A] sm:py-[16px] sm:px-[32px] py-[12px] px-[25px] flex items-center justify-center text-[16px] font-bold sm:gap-[10px] gap-[7px] text-white rounded-[12px] whitespace-nowrap">{props.name} {props.svgname}</button>
        </>
    )
}

export default Btncommon
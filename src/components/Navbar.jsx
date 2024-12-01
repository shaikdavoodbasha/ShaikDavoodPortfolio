import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-5  px-[2vw] sm:px-[3vw] md:px-[5vw] lg:px-[5vw] cursor-pointer'>
            <p className='text-[18px]  bg-custom-red-gradient bg-clip-text text-transparent hover:text-[#ffffff] duration-[.5s] transition-all'>S H A I K D A V O O D</p>
            <div className='flex flex-col items-center justify-center gap-2 mt-3 group'>
                <div className='w-[120px] h-[3px] rounded-[10px] bg-[#f8f8f8] group-hover:scale-x-150 duration-[.5s] transition-all'></div>
                <p className='text-[13px] text-[#f8f8f8]'>MENU</p>
            </div>
            <p className='text-[18px] bg-custom-red-gradient bg-clip-text text-transparent hover:text-[#ffffff] duration-[.5s] transition-all'>CONTACT</p>
        </div>
    )
}

export default Navbar
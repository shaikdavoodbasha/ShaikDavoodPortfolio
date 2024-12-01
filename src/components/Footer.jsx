import React from 'react'
import myname from "../assets/myname.png"
import { TextFlipping } from './TextFlipping'
const Footer = () => {
    return (
        <div className='w-full h-full sm:h-[100vh] pb-[30px] sm:py-[60px]'>
            <div className='px-[2vw] sm:px-[3vw] md:px-[5vw] lg:px-[5vw] flex justify-between items-center '>
                <div className='flex flex-col justify-start gap-[-20px] items-start'>
                    <img className='h-[150px] sm:h-[250px]' src={myname} alt="" />

                </div>
                <div>
                    <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[14px]  sm:text-[20px]'>shaik.davoodbasha2@gmail.com</p>
                </div>
                <div className='flex flex-col justify-center items-start cursor-pointer gap-1'>
                    <p className='text-[18px] sm:text-[30px]'><TextFlipping text={'HOME'} /></p>
                    <p className='text-[18px] sm:text-[30px]'><TextFlipping text={'ABOUT'} /></p>
                    <p className='text-[18px] sm:text-[30px]'><TextFlipping text={'PROJECTS'} /></p>
                    <p className='text-[18px] sm:text-[30px]'><TextFlipping text={'SKILLS'} /></p>
                </div>
            </div>
            <div className='px-[2vw] sm:px-[3vw] md:px-[5vw] lg:px-[5vw]'>
                <hr className='w-full h-[1px] bg-[#f8f8f8] ' />
            </div>
            <div className='flex justify-between items-center py-[15px] px-[2vw] sm:px-[5vw]'>
                <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[13px] sm:text-[20px]'>© All rights reserved / 2024</p>
                <div className='flex justify-between items-center gap-10 cursor-pointer'>
                    <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[14px] sm:text-[20px]'><a href="https://www.linkedin.com/in/%F0%9D%99%B3%F0%9D%9A%8A%F0%9D%9A%9F%F0%9D%9A%98%F0%9D%9A%98%F0%9D%9A%8D-%F0%9D%9A%82%F0%9D%9A%91%F0%9D%9A%8A%F0%9D%9A%92%F0%9D%9A%94-6b532b243/" target='new'>Linkedin</a></p>
                    <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[14px] sm:text-[20px]'><a href="https://github.com/shaikdavoodbasha" target='new'>Github</a></p>
                    <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[14px] sm:text-[20px]'>+918341748997</p>
                </div>
            </div>
            <div className='mt-[30px] px-[2vw] sm:px-[3vw] md:px-[5vw] lg:px-[5vw] flex justify-center items-center'>
                <p className='bg-custom-red-gradient bg-clip-text text-transparent text-[75px] sm:text-[160px] whitespace-nowrap'>SHAIKDAVOOD</p>
            </div>
        </div>
    )
}

export default Footer
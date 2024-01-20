import React from 'react'
import firstImg from '../assets/GradientFirstImg.webp'
import secondImg from '../assets/GradientSecondImg.webp'
import thirdImg from '../assets/GradientThirdImg.webp'

const GradientBox = () => {
    return (
        <>
            <div className='gradientBox min-h-[550px] z-0'>
                <div className='flex flex-col items-center  gap-4'>
                    <span className="box h-[220px] max-md:h-[30%] max-md:w-[100%] w-[220px] rounded-[100%] z-10 bg-[#ef9500] mt-16">
                        <img className='w-[90%]' src={firstImg} alt="" />
                    </span>
                    <span className='flex flex-col items-center justify-center'>
                        <strong className='text-[#ffffff]'>Luggage</strong>
                        <a href="https://www.americantourister.in/luggage" target='_blank' className='font-bold text-[#ffffff]'>More   &#62; </a></span>
                </div>
                <div className='flex flex-col items-center  gap-4'>
                    <span className="box h-[220px] max-md:h-[30%] max-md:w-[100%] w-[220px] rounded-[100%] z-10 bg-[#2383b0] mt-24">
                        <img className='w-[90%]' src={secondImg} alt="" />
                    </span>
                    <span className='flex flex-col items-center justify-center'>
                        <strong className='text-[#ffffff]'>Backpacks</strong>
                        <a href="https://www.americantourister.in/luggage" target='_blank' className='font-bold text-[#ffffff]'>More   &#62; </a></span>
                </div>
                <div className='flex flex-col items-center  gap-4'>
                    <span className="box h-[220px] max-md:h-[30%] max-md:w-[100%] w-[220px] rounded-[100%] z-10 bg-[#d1d3d4] mt-36">
                        <img className='w-[90%]' src={thirdImg} alt="" />
                    </span>
                    <span className='flex flex-col items-center justify-center'>
                        <strong className='text-[#ffffff]'>Duffles</strong>
                        <a href="https://www.americantourister.in/luggage" target='_blank' className='font-bold text-[#ffffff]'>More   &#62; </a></span>
                </div>

            </div>
        </>
    )
}

export default GradientBox



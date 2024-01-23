import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import AmericanLogo from '../assets/HeadPhoto.png'
import { IoLogoYoutube } from 'react-icons/io';
import { ImInstagram } from "react-icons/im";
import master from '../assets/master.png'
import visa from '../assets/visa.png'
const BlackFotter = () => {
    return (
        <div className='bg-[#272727] py-20'>
            <div className="flex flex-col w-[90%] m-auto">
                <div className="flex ulDiv w-[70%] justify-between max-lg:w-full">
                    <ul>
                        <li><b>SUPPORT</b></li>
                        <li>Service and Warranty</li>
                        <li>Contact Us</li>
                        <li>TSA Lock Instructions</li>
                    </ul>
                    <ul>
                        <li><b>QUICK LINKS</b></li>
                        <li>Damage Policy</li>
                        <li>Care and Cleaning</li>
                        <li>Packing Tips</li>
                        <li>Site Map</li>
                    </ul>
                    <ul>
                        <li><b>OUR COMPANY</b></li>
                        <li>About American Tourister</li>
                    </ul>
                    <ul>
                        <li><b>ACCOUNT</b></li>
                        <li>Track Order</li>
                        <li>Sign In</li>
                        <li>Shop all products</li>
                    </ul>
                </div>
                <div className="flex justify-between mt-20 mb-2 w-[100%]">
                    <img className='AmericanFotter' src={AmericanLogo} />
                    <div className='flex gap-10'>
                        <FaSquareFacebook className='text-[#b9b7b7] text-2xl' />
                        <IoLogoYoutube className='text-[#b9b7b7] text-2xl' />
                        <ImInstagram className='text-[#b9b7b7] text-2xl' />
                    </div>
                </div>
                <hr />
                <div className="flex justify-between mt-10">
                    <div className="">
                        <ul className='text-[#b9b7b7b6] flex text-sm gap-10'>
                            <li>Terms & Condition</li>
                            <li>Privacy</li>
                            <li>Personal Information Collection Statement</li>
                            <li><span className='flex'><img className='h-[30px]' src={master} alt="" /> <img className='h-[30px]' src={visa} alt="" /></span></li>

                        </ul>
                        <p className='text-[#b9b7b7]'> Copyright © 2024 Developed and managed by Quadrant</p>
                    </div>
                    <p className='text-[#b9b7b7b6]'>India</p>
                </div>
            </div>
        </div>

    )
}

const WhiteFotter = () => {
    return (
        <>
        </>
    )
}

const FotterTwo = () => {
    return (
        <BlackFotter />
    )
}

export default FotterTwo

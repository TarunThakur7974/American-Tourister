import React from 'react'
import shopColor from '../assets/shopColor.jpg'
import HeadPhoto from '../assets/HeadPhoto.png'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
    return (
        <>
            <strong className='h5Top'>Free delivery on all orders in India</strong>
            <nav className='sticky top-0 bg-white z-10'>
                <div className="flex justify-between w-11/12 py-4 m-auto">
                    <div className="navLeft flex">
                        <img className='h-[38px] max-sm:h-[30px]' src={HeadPhoto} alt="" />
                    </div>
                    <div className="navMiddle max-lg:hidden">
                        <ul className='flex gap-7'>
                            <li><img className='h-7' src={shopColor} alt="" /></li>
                            <li><strong className='font-medium text-sm'>Luggage</strong></li>
                            <li><strong className='font-medium text-sm'>Backpacks</strong></li>
                            <li><strong className='font-medium text-sm'>Duffels</strong></li>
                            <li><strong className='font-medium text-sm'>Browse More</strong></li>
                            <li><strong className='font-medium text-sm'>Discover</strong></li>
                        </ul>
                    </div>
                    <div className="navRight">
                        <ul className='flex gap-6'>
                            <li className='text-2xl max-sm:text-xl'><IoLocationOutline /></li>
                            <li className='text-2xl max-sm:text-xl'><AiOutlineUser /></li>
                            <li className='text-2xl max-sm:text-xl'><BsSearch /></li>
                            <li className='text-2xl max-sm:text-xl'><MdOutlineShoppingCart /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

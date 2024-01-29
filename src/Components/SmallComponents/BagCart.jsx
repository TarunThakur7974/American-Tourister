import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import CartButton from './CartButton';

const BagCart = ({ arr }) => {
    const [red, setRed] = useState('')
    const like = () => {
        setRed((pre) => pre === '' ? 'red' : '')
    }
    return (
        <>
            <div className='flex items-center flex-col min-w-[25%] max-lg:min-w-[32%] max-md:min-w-[48%]'>
                <div className="flex self-end">
                    <span className='heart mr-10 text-gray-400 cursor-pointer' onClick={like}><GoHeartFill style={{ color: red }} /></span>
                </div>
                <img className='w-full' src={arr.image} alt="" />
                <strong className='p-1 text-2xl font-medium max-md:text-xl max-sm:text-sm '>{arr.name}</strong>
                <div className="flex gap-4">
                    <p className='p-1 text-2xl text-red-600 font-bold max-md:text-sm max-sm:p-0 max-sm:text-xs'>₹ {arr.price}
                        <sub className='p-1 font-medium text-black max-md:text-sm max-sm:text-xs'> ₹<del className='p-1 font-medium max-md:text-sm max-sm:text-xs'>{arr.oldPrice}</del></sub></p>
                </div>
                <CartButton arr={arr} />
            </div>
        </>
    )
}

export default BagCart

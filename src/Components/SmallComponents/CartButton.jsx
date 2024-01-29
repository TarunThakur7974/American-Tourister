import React from 'react'
import { CartAdd, CheckId } from '../../Redux/BagPacks'
import { useDispatch } from 'react-redux'


const CartButton = ({ arr }) => {
  const dispacth = useDispatch();
  return (
    <>
      <button type='button' onClick={() => {
        dispacth(CartAdd(arr))
        dispacth(CheckId(arr._id))
      }} className='w-4/5 rounded-full py-2 bg-black text-xl font-bold text-white  max-md:text-sm max-sm:p-1 max-sm:m-2 cartButton'>Add To Cart</button>
    </>
  )
}

export default CartButton

import React, { useEffect, useState } from "react";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCart } from "../Redux/BagPacks";

const Cart = () => {
    const dispacth = useDispatch();
    const { CartArr, TotalSum } = useSelector((state) => state.BagPacks)
    const [discount, setDiscount] = useState(null);
    const [subTotal, setSubTotal] = useState(null);
    useEffect(() => {
        setDiscount(TotalSum / 100 * 5);
    }, [TotalSum])
    useEffect(() => {
        setSubTotal(TotalSum - discount);
    }, [discount])
    const CartCompo = ({ arr }) => {
        return (
            <div className=" bg-slate-100 text-xs p-4 m-2 ">
                <div className="flex items-center justify-between ">
                    <img className="w-20" src={arr.image} alt="" />
                    <span>
                        <p>{arr.name}</p>
                        <p>Medium</p> <p>Red</p>
                    </span>
                    <p className="text-lg">₹{arr.price}.00</p>
                    <select name="" id="">
                        <option >1</option>
                    </select>
                </div>
                <div className="flex justify-evenly text-gray-500">
                    <button title="Remove" type="button" onClick={() => dispacth(RemoveCart(arr))} className="flex items-center">
                        <FaRegTrashAlt />
                        &nbsp; Remove
                    </button>
                    <button title="Move to Wishlist" className="flex items-center">
                        <FaHeart />
                        &nbsp; Move to Wishlist
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex max-md:flex-col">
            <div className="leftCart w-[65%] max-md:w-[90%] max-md:m-auto">
                <div className="flex justify-between text-center bg-slate-100 text-xs font-bold p-3 m-2">
                    <p>ITEM(S)</p>
                    <p>TOTAL&nbsp;₹&nbsp;{subTotal}.00</p>
                </div>
                <div className="flex  text-gray-400 text-xs font-bold p-3 ">
                    <p className="w-[66%]">PRODUCT</p>
                    <span className="flex justify-between w-[34%] ">
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                    </span>
                </div>
                <div className="  overflow-scroll cartScroll max-h-96">{CartArr.map((arr, i) => <CartCompo key={i} arr={arr} />)}</div>
            </div>
            <div className="rigthCart w-[35%] py-8 max-md:w-[90%] max-md:m-auto ">
                <div className="w-[80%] m-auto flex gap-3 flex-col">
                    <div className="flex  justify-between text-[15px] font-semibold">
                        <p>MRP:</p>
                        <span className="text-blue-600 font-light">₹{TotalSum}.00</span>
                    </div>
                    <div className="flex  justify-between  text-[15px] font-semibold">
                        <p>Discount:</p>
                        <span className="text-blue-600 font-light">₹{discount}.00</span>
                    </div>
                    <div className="flex justify-between  text-[15px] font-semibold">
                        <p>Sub-Total:</p>
                        <span className="text-blue-600 font-light">₹{subTotal}.00</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-[15px] font-semibold">
                        <p>Total:</p>
                        <span className="text-blue-600 font-">₹{subTotal}.00</span>
                    </div>
                    <hr />
                    <p className="text-xs text-gray-400 ">COUPON CODE</p>
                    <div className="p-2 bg-slate-100 border-dotted rounded border-gray-500 border-2">
                        <span className="p-1 bg-slate-400 text-white rounded-full">%</span>
                        <input
                            className="ms-1 me-5 focus:outline-none bg-transparent text-xs max-[420px]:me-0"
                            type="text"
                            placeholder="Enter your coupon here"
                        />
                        <button className="text-gray-300 border-2 rounded text-xs bg-white p-1 px-3 ms-5 max-[420px]:ms-0 ">
                            APPLY COUPOUN
                        </button>
                    </div>
                    <button className='text-lg px-20 py-1 btnLogin max-sm:text-lg my-1'>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
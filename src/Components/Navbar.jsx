import React, {useState } from 'react'
import shopColor from '../assets/shopColor.jpg'
import HeadPhoto from '../assets/HeadPhoto.png'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HoverBox from './HoverBox';
const Navbar = () => {
    const { LuggageArr, BackPacksArr, DuffelsArr, BrowseArr, DiscoverArr,CartArr } = useSelector(state => state.BagPacks)
    const [showLuggage, setShowLuggage] = useState(null);


    const LuggageShow = (Arr) => {
        setShowLuggage(Arr);
    };

    const hideLuggage = () => {
        setShowLuggage(null);
    };

    return (
        <>
            <strong className='h5Top'>Free delivery on all orders in India</strong>
            <nav className='sticky top-0 bg-white z-10'>
                <div className="flex justify-between w-11/12 py-3 m-auto">
                    <div className="navLeft flex">
                        <Link to='/'><img className='cursor-pointer h-[38px] max-sm:h-[30px]' src={HeadPhoto} alt="" /></Link>
                    </div>
                    <div className="max-lg:hidden">
                        <ul onMouseLeave={hideLuggage} className='flex gap-7'>
                            <li><img className='h-7' src={shopColor} alt="" /></li>
                            <li> <strong className='font-normal text-xs' onMouseOver={() => LuggageShow(LuggageArr)}>
                                Luggage
                            </strong>
                                {showLuggage && <HoverBox arr={showLuggage} />}
                            </li>
                            <li> <strong className='font-normal text-xs' onMouseEnter={() => LuggageShow(BackPacksArr)} >
                                Backpacks
                            </strong>
                                {showLuggage && <HoverBox arr={showLuggage} />}
                            </li>
                            <li> <strong className='font-normal text-xs' onMouseEnter={() => LuggageShow(DuffelsArr)} >
                                Duffels
                            </strong>
                                {showLuggage && <HoverBox arr={showLuggage} />}
                            </li>
                            <li> <strong className='font-normal text-xs' onMouseEnter={() => LuggageShow(BrowseArr)} >
                                Browse More
                            </strong>
                                {showLuggage && <HoverBox arr={showLuggage} />}
                            </li>
                            <li> <strong className='font-normal text-xs' onMouseEnter={() => LuggageShow(DiscoverArr)} >
                                Dicover
                            </strong>
                                {showLuggage && <HoverBox arr={showLuggage} />}
                            </li>
                        </ul>
                    </div>
                    <div className="navRight">
                        <ul className='flex gap-6'>
                            <li className='text-2xl max-sm:text-xl'><IoLocationOutline /></li>
                            <Link to="signIn"><li className='text-2xl max-sm:text-xl'><AiOutlineUser /></li></Link>
                            <li className='text-2xl max-sm:text-xl'><BsSearch /></li>
                            <Link to="cart"><li className='text-2xl max-sm:text-xl'><span ><MdOutlineShoppingCart />{CartArr.length > 0 && <span className='text-xs icon'><i>{CartArr.length}</i></span>}</span></li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

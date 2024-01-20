import React, { useRef, useState } from 'react'
import Heading from './SmallComponents/Heading'
import Buttons from './SmallComponents/Buttons'
import One from '../assets/MostPopularOne.webp'
import Two from '../assets/MostPopularTwo.webp'
import Three from '../assets/MostPopularThree.webp'
import Four from '../assets/MostPopularFour.webp'
import Five from '../assets/MostPopularFive.webp'
import Six from '../assets/MostPopularSix.webp'
import BagCart from './SmallComponents/BagCart'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const SliderSecond = () => {
    const slider = useRef(null);
    const [right, setRight] = useState(0);
    const [Arr] = useState([
        {
            name: "FORNAX",
            price: 8100,
            oldPrice: 10800,
            _id: 1,
            image: One
        },
        {
            name: "FORNAX",
            price: 10100,
            oldPrice: 12800,
            _id: 2,
            image: One
        },
        {
            name: "FORNAX",
            price: 6100,
            oldPrice: 8800,
            _id: 3,
            image: One
        },
        {
            name: "AMERICAN",
            price: 7100,
            oldPrice: 9800,
            _id: 4,
            image: Two
        },
        {
            name: "PLAYBLUE",
            price: 7500,
            oldPrice: 9000,
            _id: 5,
            image: Three
        },
        {
            name: "ROLLIO",
            price: 8100,
            oldPrice: 10800,
            _id: 6,
            image: Four
        },
        {
            name: "ROLLIO",
            price: 6100,
            oldPrice: 4800,
            _id: 7,
            image: Five
        },
        {
            name: "ROLLIO",
            price: 4500,
            oldPrice: 5900,
            _id: 8,
            image: Six
        },
    ])

    const previous = () => {
        const div = slider.current;
        if (right !== 0) {
            setRight(right - 360);
            div.scrollTo(right - 360, 0);
        }
    };

    const next = () => {
        const div = slider.current;
        if (right < 1442) {
            setRight(right + 360);
            div.scrollTo(right + 360, 0);
        }
    };

    return (
        <>
            <section>
                <div>
                    <Heading heading={"Shop products"} />
                </div>
                <div className='flex justify-center gap-[10%] p-4 max-md:gap-[2%] max-sm:flex-wrap'>
                    <Buttons btntext={"Most popular"} />
                    <Buttons btntext={"What's new"} />
                    <Buttons btntext={"Bestseller"} />
                </div>
            </section>
            <section>
                <div className="flex justify-center items-center">
                    <button onClick={previous} className='text-3xl p-1 cursor-pointer slidebtn'><IoIosArrowBack /></button>
                    <div ref={slider} className="py-6 sliderTwo flex gap-3 max-md:gap-2 overflow-y-scroll">
                        {Arr.map((obj, i) => <BagCart key={i} arr={obj} />)}
                    </div>
                    <button onClick={next} className='text-3xl p-1 cursor-pointer slidebtn'><IoIosArrowForward /></button>
                </div>
            </section>
        </>
    )
}

export default SliderSecond

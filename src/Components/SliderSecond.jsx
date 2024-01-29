import React, { useRef, useState } from 'react'
import Heading from './SmallComponents/Heading'
import Buttons from './SmallComponents/Buttons'
import BagCart from './SmallComponents/BagCart'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
const SliderSecond = () => {
    const { MostPopular } = useSelector((state) => state.BagPacks)
    const slider = useRef(null);
    const [right, setRight] = useState(0);
    const [Arr] = useState(MostPopular);

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

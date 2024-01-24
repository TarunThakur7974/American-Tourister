import React, { useEffect, useState } from 'react'
import ViratBhai from '../assets/ViratBhai.webp'
import secondImage from '../assets/secondImg.webp'
import thirdImage from '../assets/thirdImage.webp'
import fourthImage from '../assets/fourthImage.webp'
import fifthImage from '../assets/fifthImage.webp'
import sixthImage from '../assets/sixthImage.webp'

const SliderFirst = () => {
    const [img, setImg] = useState(ViratBhai)
    const [i, setI] = useState(0)
    const [arr] = useState([ViratBhai, secondImage, thirdImage, fourthImage, fifthImage, sixthImage])

    useEffect(() => {
        let x = setInterval(() => {
            changeInterval();
        }, 3000)
        return () => clearInterval(x);
    }, [i])


    const changeInterval = () => {
        setImg(arr[i]);
        setI((prevI) => (prevI >= arr.length - 1 ? 0 : prevI + 1));
    }

    const slideChange = (e) => {
        setI(arr.indexOf(e.target.alt));
        setImg(e.target.alt);
    }

    return (
        <>
            <section className='max-md:h-[80vh]'>
                <img className='max-md:h-[92%] max-md:object-cover'  src={img} alt="" />
                <div className="sliderOne max-sm:gap-1 max-sm:p-px max-sm:bottom-8">
                    {arr.map((image, index) => <img className='hoverImg max-lg:w-16 max-sm:w-[48px]' src={image} onClick={slideChange} key={index} alt={image} />)}
                </div>
            </section>
        </>
    )
}

export default SliderFirst


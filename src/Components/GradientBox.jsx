import React from 'react'
import firstImg from '../assets/GradientFirstImg.webp'
import secondImg from '../assets/GradientSecondImg.webp'
import thirdImg from '../assets/GradientThirdImg.webp'
import GradientDiv from './SmallComponents/GradientDiv'

const GradientBox = () => {
    return (
        <>
            <div className='gradientBox min-h-[550px] z-0 mt-16'  >
                <GradientDiv text={"Luggage"} image={firstImg} style={{ marginTop: "64px", backgroundColor: "#ef9500" }} />
                <GradientDiv text={"Backpacks"} image={secondImg} style={{ marginTop: "96px", backgroundColor: "#2383b0" }} />
                <GradientDiv text={"Duffles"} image={thirdImg} style={{ marginTop: "144px", backgroundColor: "#d1d3d4" }} />
            </div>
        </>
    )
}

export default GradientBox



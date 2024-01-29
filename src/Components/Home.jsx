import React from 'react'
import SliderFirst from './SliderFirst'
import SliderSecond from './SliderSecond'
import imageFirst from "../assets/FirstBoxImg.webp"
import imageSecond from "../assets/SecondBoxImg.webp"
import imageThird from "../assets/ThirdBoxImg.png"
import Box from './Box'
import GradientBox from './GradientBox'
import RankSlider from './RankSlider'
import SliderThird from './SliderThird'
import GradientBoxTwo from './GradientBoxTwo'
import ImageContainer from './ImageContainer'
import GradientThird from './GradientThird'
import FooterOne from './FooterOne'
import FooterTwo from './FooterTwo'


const Home = () => {

    const firstText = "Shop American Tourister's best-sellers online. Discover the most popular, top-rated travel gear handpicked by American Tourister fans!"
    const secondText = "Shop new carry-on luggage to backpacks. Freshen up your next trip with the latest in luggage and travel gear."
    const thirdText = "Discover answers for our most frequently asked questions plus how to deal with any issue you might encounter."
    return (
        <>
            <SliderFirst />
            <SliderSecond />
            <Box image={imageFirst} text={firstText} heading={"Best Sellers"} btntext={"Shop Now"} />
            <Box image={imageSecond} text={secondText} heading={"New Arrivals"} btntext={"Shop Now"} />
            <GradientBox />
            <Box image={imageThird} text={thirdText} heading={"Here For You"} btntext={"Let Us Help"} />
            <RankSlider />
            <SliderThird />
            <GradientBoxTwo />
            <ImageContainer />
            <GradientThird />
            <FooterOne />
            <FooterTwo />
        </>
    )
}

export default Home

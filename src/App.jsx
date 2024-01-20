import React from 'react'
import Navbar from './Components/Navbar'
import SliderOne from './Components/SliderOne'
import SliderSecond from './Components/SliderSecond'
import imageFirst from "./assets/FirstBoxImg.webp"
import imageSecond from "./assets/SecondBoxImg.webp"
import imageThird from "./assets/ThirdBoxImg.png"
import Box from './Components/Box'
import GradientBox from './Components/GradientBox'


const App = () => {
  const firstText = "Shop American Tourister's best-sellers online. Discover the most popular, top-rated travel gear handpicked by American Tourister fans!"
  const secondText = "Shop new carry-on luggage to backpacks. Freshen up your next trip with the latest in luggage and travel gear."
  const thirdText = "Discover answers for our most frequently asked questions plus how to deal with any issue you might encounter."
  return (
    <>
      <Navbar />
      <SliderOne/>
      <SliderSecond/>
      <Box image={imageFirst} text={firstText} heading={"Best Sellers"} btntext={"Shop Now"}/>
      <Box image={imageSecond} text={secondText} heading={"New Arrivals"} btntext={"Shop Now"}/>
      <GradientBox/>
      <Box image={imageThird} text={thirdText} heading={"Here For You"} btntext={"Let Us Help"}/>
      <div className="h-screen"></div>
    </>
  )
}

export default App

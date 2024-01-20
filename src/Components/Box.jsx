import React from 'react'
import Buttons from './SmallComponents/Buttons';
import Heading from './SmallComponents/Heading';

const Box = ({image,heading,btntext,text}) => {
  return (
    <div className="flex justify-center items-center w-[95%] m-auto max-md:flex-col">
    <div className="w-3/5 clip-path max-md:w-11/12  ">
      <img className="w-full" src={image} alt="" />
    </div>
    <div className="w-2/5 flex flex-col justify-center gap-4 pr-10 max-lg:text-[10px] max-xl:text-sm max-[900px]:text-[7px] max-md:w-11/12 max-md:text-center">
      <Heading heading={heading} />
      <p className="text-sm font-light text-gray-700">
    {text}
      </p>
      <div>
        <Buttons btntext={btntext} />
      </div>
    </div>
  </div>
  )
}
 
export default  Box

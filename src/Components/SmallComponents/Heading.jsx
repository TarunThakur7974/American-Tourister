import React from 'react'

const Heading = ({ heading, headingTwo }) => {
    return (
        <>
            <div className='px-4 flex flex-col justify-center  max-md:items-center py-3'>
                <h3 className='text-3xl font-bold max-md:text-center max-md:text-2xl text-gray-700'>{heading}
                    <br />
                    {headingTwo &&
                        headingTwo}
                </h3>
                <div className='underlineDiv mt-4'></div>
            </div>
        </>
    )
}

export default Heading

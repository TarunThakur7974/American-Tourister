import React from 'react'

const Heading = ({heading}) => {
    return (
        <>
            <div className='px-4 flex flex-col max-md:items-center py-3'>
                <h3 className='text-3xl font-bold text-gray-700'>{heading}</h3>
                <div className='underlineDiv mt-4'></div>
            </div>
        </>
    )
}

export default Heading

import React from 'react'

const SignUp = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-[48vh] w-[70%] m-auto my-9 max-md:flex-col gap-4'>
        <div className="flex flex-col justify-center items-center w-full gap-4 px-3 max-md:border-r-0 max-md:border-b-2 pb-3">
          <span> <h3 className='text-3xl font-bold max-md:text-center max-md:text-2xl text-gray-700'>Create Account</h3>
            <small className='font-light'>Customer details</small>
            <div className='underlineDiv mt-4' style={{width:'40px'}}></div></span>
            
          <form className='flex  flex-col justify-center items-center gap-2 w-[90%] max-md:w-[96%] m-auto signUp'>
            <input type="text" placeholder='Username' />
            <input required type="email" placeholder='E-Mail Address' />
            <input required type="password" placeholder='Password' />
            <input required type="password" placeholder='Confirm Password' />
            <button type='submit' className='text-lg px-20 font-bold btnLogin max-sm:text-lg  my-1'>Rigister</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp

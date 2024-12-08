import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: 'url("background.jpg")'}}>
      <div className='w-full bg-[rgba(217,217,217,1)] h-16 flex justify-between items-center underline text-[rgba(0,0,0,1)]'>
        <img src='urbanspacer-darker.svg' alt='Urban Spacer Logo' className='px-10'/>
        <a className='px-10'> Post a For Sale/ For Rent property for free </a>
      </div>
      <div className='flex'>
        { children }
      </div>

    </div>
  )
}

export default AuthLayout
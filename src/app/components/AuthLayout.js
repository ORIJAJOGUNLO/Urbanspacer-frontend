import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: 'url("background.jpg")'}}>
      <div className='w-full bg-[rgba(217,217,217,1)] text-[rgba(0,0,0,1)]'>
        <div className='container h-16 mx-auto flex justify-between items-center underline'>
          <img src='urbanspacer-darker.svg' alt='Urban Spacer Logo'/>
          <a> Post a For Sale/ For Rent property for free </a>
        </div>

      </div>
      <div className='flex'>
        { children }
      </div>

    </div>
  )
}

export default AuthLayout
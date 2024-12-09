import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='bg-none lg:bg-main-bg lg:bg-cover lg:bg-center h-full min-h-screen'>
      <nav className='w-full lg:bg-[rgba(217,217,217,1)] text-[rgba(0,0,0,1)]'>
        <div className='container h-16 mx-auto flex justify-between items-center px-4'>
          <img src='urbanspacer-darker.svg' alt='Urban Spacer Logo' className='h-10'/>
          <a className='text-xs lg:text-base underline'> Post a For Sale/ For Rent property for free </a>
        </div>
      </nav>
      <div className='flex'>
        { children }
      </div>

    </div>
  )
}

export default AuthLayout
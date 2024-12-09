import React from 'react'
import AuthLayout from '../components/AuthLayout'



const SignupPage = () => {
  return (
    <div>
      <AuthLayout>
        {/* Left Section with Background */}
        <div className='flex-1'>
          <div className='flex flex-col h-5/6 justify-center items-center'>
            <h1 className="text-white text-5xl mt-24 font-bold px-8">
            Welcome to Urban Spacer® – Transforming  Real Estate Solutions!
            </h1>
          </div>
        </div>

        {/* Right section with Background */}
        <div className="flex-1 flex items-center justify-center bg-red text-black">
          <div className='bg-white w-2/3 max-h-[85vh] flex flex-col px-16 rounded-2xl mt-12'>
            <h1 className='mt-6'>Create a free account</h1>
            <p>Sign up to access tailored services for your real estate needs</p>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                  Fullname
                </label>
                <input
                  type="name"
                  id="name"
                  className="mt-1 block w-full px-4 rounded-full py-3 border border-[rgba(131,131,131,1)] shadow-sm focus:outline-none"
                />
              </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 rounded-full py-3 border border-[rgba(131,131,131,1)] shadow-sm focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-full py-3 px-4 border border-[rgba(131,131,131,1)] shadow-sm focus:outline-none"
                />
              </div>

              <div>
                <p>Use 8 or more characters with a mix of letters, numbers and symbols. Must not contain your name or username.</p>
              </div>

              {/* Sign In Button */}
              <div>
                <button type="submit" className="w-full mt-6 py-3 rounded-full px-4 bg-[rgba(33,33,33,1)] text-white">
                  Create Account
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600 mt-12">
            Don't have an account?{' '}
            <a href="/signup" className="text-black underline font-medium hover:underline">
              Create an account
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="p-2">
              <img src='/facebook.svg' alt='facebook' />
            </button>
            <button className="p-2">
            <img src='/google.svg' alt='gooogle' />
            </button>
          </div>

          {/* Terms and Privacy */}
          <div className="text-xs text-gray-500 text-center my-12">
            By continuing, you confirm you are 18 or over and agree to our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Terms of Use
            </a>.
          </div>
          </div>
        </div>
      </AuthLayout>
    </div>
  )
}

export default SignupPage
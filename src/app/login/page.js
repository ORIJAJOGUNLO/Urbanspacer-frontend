import React from "react";
import AuthLayout from "../components/AuthLayout";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout>
        {/* Left Section with Background */}
        <div className="flex-1">
          <div className="flex flex-col h-5/6 justify-center items-center">
            <h1 className="text-white text-8xl mt-24 font-bold px-8">
              Great to have you back!
            </h1>
          </div>
        </div>

        {/* Right section with Background */}
        <div className="flex-1 flex items-center justify-center bg-red text-black">
          <div className="bg-white w-1/2 flex flex-col px-16 rounded-2xl mt-12">
            <h1 className="my-6">Sign in</h1>
            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-full py-3 border border-[rgba(131,131,131,1)] shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <a href="#" className="text-sm underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-full py-3 border border-[rgba(131,131,131,1)] shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Sign In Button */}
              <div>
                <button
                  type="submit"
                  className="w-full mt-6 py-3 rounded-full px-4 bg-[rgba(33,33,33,1)] text-white"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-600 mt-12">
              Don't have an account?
              <a
                href="/signup"
                className="text-black underline font-medium hover:underline"
              >
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
                <img src="/facebook.svg" alt="facebook" />
              </button>
              <button className="p-2">
                <img src="/google.svg" alt="gooogle" />
              </button>
            </div>

            {/* Terms and Privacy */}
            <div className="text-xs text-gray-500 text-center my-12">
              By continuing, you confirm you are 18 or over and agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              and
              <a href="#" className="underline">
                Terms of Use
              </a>
              .
            </div>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;

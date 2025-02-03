import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-300">
      <div className="container mx-auto px-6 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-4">
          <ul className="text-gray-900 space-y-3 font-medium" id="footer-col-1">
            <li>
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Listing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Property investment opportunities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Join our vibrant community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Early adopters
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Escrow
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Social Media */}
            <div>
              <h4 className="text-gray-600 font-semibold mb-2">FOLLOW US</h4>
              <p className="text-gray-700 footer-lora">
                <ul className="flex">
                  <li>
                    <a href="#">Instagram,</a>
                  </li>
                  <li>
                    <a href="#">X(formerly Twitter),</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </p>
            </div>
            {/* Email */}
            <div>
              <h4 className="text-gray-600 font-semibold mb-2">EMAIL</h4>
              <p className="text-gray-700 footer-lora">
                support@urbanspacer.com
              </p>
              <p className="text-gray-700 footer-lora">
              +234 906 353 5037
              </p>
           
              
            </div>
            {/* Office Address */}
            <div>
              <h4 className="text-gray-600 font-semibold mb-2">
                OFFICE ADDRESS
              </h4>
              <p className="text-gray-700 footer-lora">
                30, Enoma street , Ago-okota Lagos State, Nigeria
              </p>
            </div>
            {/* Partners */}
            <div>
              <h4 className="text-gray-600 font-semibold mb-2">PARTNERS</h4>
              <div className="partners flex">
                <img
                  className="ml-2"
                  src="/ule-logo.svg"
                  alt="Partner 1"
                  height={24}
                />
                <img
                  className="ml-2"
                  src="/mastercard_logo.svg"
                  alt="Partner 1"
                  height={24}
                />
                <img
                  className="ml-2"
                  src="/paystack-logo.svg"
                  alt="Partner 1"
                  height={24}
                />
                <img
                  className="ml-2"
                  src="/flutterwave-logo.svg"
                  alt="Partner 1"
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-logo flex justify-center">
        <img
          src="/urbanspacer-darker.svg"
          alt="Footer Logo"
          className=""
          width="300px"
        />
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-6">
        <p className="text-center py-4 text-gray-500 text-sm">
          © 2024 Urban Spacer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const ShortletCard = () => {
  return (
    <div className="bg-black text-white rounded-lg shadow-lg max-w-sm mx-auto">
      {/* Image Section */}
      <div className="relative">
        <img
          src="/path/to/image.jpg" // Replace with the image path
          alt="Shortlet Apartment"
          className="rounded-t-lg w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-2 py-1 rounded">
          Shortlet
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Price and Location */}
        <h2 className="text-lg font-semibold mb-2">₦300,000 per year</h2>
        <p className="text-gray-400 mb-4">
          Enoma Street, Ago Palace Way, Lagos
        </p>

        {/* Details */}
        <div className="flex justify-between text-gray-300 text-sm">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2z"
              />
            </svg>
            4 Bedrooms
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H7a4 4 0 00-4 4v6a4 4 0 004 4h10a4 4 0 004-4v-1"
              />
            </svg>
            130ft²
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 11V7a3 3 0 013-3h0a3 3 0 013 3v4m-6 4h6m-7 4h8"
              />
            </svg>
            3 Bathrooms
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortletCard;

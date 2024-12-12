import React from "react";

const PropertyCard = ({
  label,
  price,
  address,
  bedrooms,
  size,
  bathrooms,
  image,
}) => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src={image} alt="Property" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-white text-black text-sm font-bold px-3 py-1 rounded">
          {label}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{price}</h2>
        <p className="text-sm mb-4">{address}</p>
        <div className="flex items-center text-sm justify-between">
          <div className="flex items-center">
            <span className="mr-2">{bedrooms} BEDROOMS</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">{size}FT²</span>
          </div>
          <div className="flex items-center">
            <span>{bathrooms} BATHROOMS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertySlider = () => {
  const properties = [
    {
      label: "Shortlet",
      price: "\u20a6300,000 per year",
      address: "Enoma Street, Ago Palace way, Lagos",
      bedrooms: 4,
      size: 130,
      bathrooms: 3,
      image: "/house_1.webp",
    },
    {
      label: "Rent",
      price: "\u20a6300,000 per year",
      address: "Enoma Street, Ago Palace way, Lagos",
      bedrooms: 4,
      size: 130,
      bathrooms: 3,
      image: "/house_2.webp",
    },
    {
      label: "For Sale",
      price: "\u20a6300,000 per year",
      address: "Enoma Street, Ago Palace way, Lagos",
      bedrooms: 4,
      size: 130,
      bathrooms: 3,
      image: "/house_3.webp",
    },
  ];

  return (
    <div className=" text-black py-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">New Properties</h1>
        <a href="#" className="text-sm underline">
          Browse all
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertySlider;

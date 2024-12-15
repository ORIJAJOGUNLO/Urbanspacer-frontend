const FeaturesSection = () => {
  const features = [
    {
      title: "Property Listing",
      description:
        "Explore properties for sale, rent, and shortlets, with insights on location, price, and more.",
      linkText: "Start Searching",
      icon: "📄",
    },
    {
      title: "Home Loans",
      description:
        "Access flexible monthly loans to make rental payments easy and stress-free.",
      linkText: "Calculate Rental Loan",
      icon: "🏠",
    },
    {
      title: "Facility Management",
      description:
        "Streamline facility management, insurance, and open-house services harnessing the power of blockchain.",
      linkText: "Manage My Property Now",
      icon: "🔧",
    },
    {
      title: "E-legal",
      description:
        "Navigate the complexities of real estate with ease—fast, secure, and reliable legal solutions.",
      linkText: "Talk to a Legal Expert",
      icon: "⚖️",
    },
  ];

  return (
    <div className="bg-[#EDE8E2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explore Our Features
        </h2>
        <p className="text-gray-600 mb-8">
          Whether you’re looking to rent, invest, or manage property, our
          tech-driven approach simplifies every step.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 text-gray-600 rounded-full p-3 mr-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4" id="feature_description">{feature.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline flex items-center"
              id="feature_link">
                {feature.linkText} <span className="ml-1">›</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

import Image from "next/image";
export default function HomeHeader() {
  return (
    <div className="">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/urbanspacer-darker.svg"
            alt="urban-spacer-logo"
            width={122}
            height={47}
          />
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black text-sm">
            List a property
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black text-sm flex items-center space-x-1"
          >
            <Image
              src="/home-urban-spacer.svg"
              alt="Urban Spacer"
              width={25}
              height={25}
            />
            <span>Buy a home</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-sm">
            For Rent
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              className="absolute left-2 top-2"
              src="/search-urban-spacer.svg"
              alt=""
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search for properties, shortlets, warehouses..."
              className="px-9 py-2 w-80 rounded-full border placeholder:text-xs text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="flex items-center space-x-1 text-gray-700">
            <Image src="call-urban-spacer.svg" alt="" width={20} height={20} />
            <span className="text-sm">Call for assistance</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

import HomeHeader from "./components/HomepageHeader";
import EmblaCarousel from "./components/productSlider/ProductSlider";
import Shortlet from "./components/Shortlet";
import { FaAngleRight, FaUser } from "react-icons/fa";
import Image from "next/image";
import data from "./components/productSlider/space-data.json";

const OPTIONS = { align: "start", loop: true };
const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SLIDES = data;
console.table(SLIDES);

export default function LandingPage() {
  return (
    <div>
      <HomeHeader />
      <div className="place-items-center mt-20">
        <div
          className="trusted-rectangle bg-white p-1"
          style={{ borderRadius: "25px" }}
        >
          <ul className="flex">
            <li className="">
              <Image
                src="/new-trophy.svg"
                width={35}
                height={35}
                alt="trophy"
              />
            </li>
            <li className="tool-tip-font-size px-4 py-2 rounded">
              Most trusted real estate company
            </li>
          </ul>
        </div>
        {/* end of tropy */}
        <div className="jumbo-text mt-8">
          <h1 className="jumbo-text-header text-center font-semibold">
            Explore, Envision, <br />
            and Find Home
          </h1>
          <p className="text-center text-lg some-para-text sub-text leading-6 mt-6">
            from rentals to real estate investments, Urban Spacer is your
            one-stop platform for modern, secure, and innovative property
            solutions.
          </p>
        </div>
        {/* end of jumbo text */}
        <div className="jumbo-buttons">
          <div className="flex space-x-4">
            {/* Button 1 */}
            <button className="flex items-center px-4 py-2 text-white text-base black-button hover:bg-blue-600">
              Find a Home
              <FaAngleRight className="ml-2" />
            </button>
            {/* Button 2 */}
            <button
              className="flex items-center px-2 py-2 bg-white text-black rounded hover:bg-green-600"
              style={{ borderRadius: "25px" }}
            >
              <ul className="flex">
                <li className="">
                  <Image
                    src="/customer-urban-export.webp"
                    width={35}
                    height={35}
                    alt="trophy"
                  />
                </li>
                <li className="tool-tip-font-size px-4 py-2">
                  Get Started with Rent Financing{" "}
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
      <EmblaCarousel slides={data} options={OPTIONS} className="slider" />
      {/* <Shortlet /> */}
      {/* slider */}
      {/* end of jumbo */}
    </div>
    // end of LandingPage div
  );
}

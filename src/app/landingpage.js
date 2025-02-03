import HomeHeader from "./components/HomepageHeader";
import EmblaCarousel from "./components/ProductSlider";
import Shortlet from "./components/Shortlet";
import HowUrbanSpacerWorks from "./components/BannerSlider";
import FeaturesSection from "./components/Features";
import PropertySlider from "./components/PropertySlider";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { FaAngleRight, FaUser } from "react-icons/fa";
import Image from "next/image";
import data from "./components/space-data.json";

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
          <h1 className="text-sm jumbo-text-header text-center font-semibold">
            Explore, Envision, <br />
            and Find Home
          </h1>
          <p className="text-center text-lg some-para-text sub-text leading-6 mt-6">
            from rentals to real estate investments, Urban Spacer is your
            one-stop platform  <br/> modern, secure, and innovative property
            solutions.
          </p>
        </div>
        {/* end of jumbo text */}
        <div className="jumbo-buttons mt-2">
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
      <div className="container mx-auto p-4 about-snippet py-40">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded">
            <h1 className="title-h1">About Urban Spacer®</h1>
          </div>
          <div className="p-6 about-snippet-text">
            <p>
              Whether you’re looking for your next home, investment
              opportunities, or property management support, Urban Spacer is
              designed to meet the needs of renters, buyers, and owners alike.
              Through smart contracts, rent financing options, and comprehensive
              property listings, we’re committed to making real estate
              accessible and equitable for all.{" "}
              <a href="" target="_blank">
                Read More{">>"}
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* end of banner */}
      <div className="our-projects">
        <FeaturesSection />
      </div>
      <div className="propertySlider">
        <PropertySlider />
      </div>
      <div className="bannerSlider">
        <HowUrbanSpacerWorks />
      </div>
      <div className="subscribe bg-black pt-24">
        <Subscribe />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    // end of LandingPage div
  );
}

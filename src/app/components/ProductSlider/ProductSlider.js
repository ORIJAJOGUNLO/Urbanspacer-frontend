"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./ProductSlider.css/";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="slider">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((user, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__slide__image"
                  style={{
                    backgroundImage: `url(${user.image})`,
                    height: "360px",
                    width: "470px",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="propContent mt-4">
                  <div className="amenities flex justify-between text-gray-300 text-sm">
                    <div className="flex items-center">
                      <img class="mr-1" src="./bedroom.svg" alt="user" />4
                      Bedrooms
                    </div>
                    <div className="flex items-center">
                      <img class="mr-1" src="./area.svg" alt="user" />
                      130ft²
                    </div>
                    <div className="flex items-center">
                      <img class="mr-1" src="./bathroom.svg" alt="user" />3
                      Bathrooms
                    </div>
                  </div>
                  <div className="propTitle mt-2">
                    <h1>{user.name}</h1>
                  </div>
                  <div className="propPrice flex">
                    <div className="flex items-center">
                      <h2>₦{user.cost}</h2>&nbsp; •
                    </div>
                    <div className="flex items-center">
                      &nbsp;<h2> {user.location.address}</h2>
                    </div>
                  </div>
                </div>
                {/* end of prop contents */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmblaCarousel;

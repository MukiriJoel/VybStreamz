"use client";
import Slider, { Settings } from "react-slick";
import { SlickSettings } from "@/types/slick";

// ✅ Required slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import CarouselDots from "./CarouselDots";

export interface ICarousel {
  id: number;
  image: string;
}

interface AdSliderProps {
  slides?: ICarousel[];
  delay?: number;
  showDots?: boolean;
  isLandScape?: boolean
  
}

const AdSlider = ({ slides = [], delay = 4000,showDots=true, isLandScape=true }: AdSliderProps) => {
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Default slide if no slides provided
  const defaultSlide: ICarousel = {
    id: 1,
    image: "/images/safAd.png",
  };


  const slidesToRender = slides.length > 0 ? slides : [defaultSlide];

  const settings: Settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: slidesToRender.length > 1,
    autoplaySpeed: delay,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // afterChange: (i: number) => setActiveIndex(i),
  };

  const goToSlide = (i: number) => {
    sliderRef.current?.slickGoTo(i);
  };

  return (
    <>
      <Slider
        {...settings}
        ref={sliderRef}
        beforeChange={(_, next) => setActiveIndex(next)}
        className="adSlider pt-3 px-2 "
      >
        {slidesToRender.map((slide, index) => (
          <div className="relative " key={slide.id}>
            <div className={`w-full ${isLandScape?`aspect-video`:`h-full w-full`}  bg-gradient-to-r rounded-2xl overflow-hidden `}>
              <img
                src={slide.image}
                alt="Advertisement"
                className={`w-full  h-full ${isLandScape?`object-cover`:`object-contain`} cursor-pointer shadow-lg`}
              />
            </div>
          
          </div>
        ))}
      </Slider>
        <div className="flex items-center justify-center mt-1">
              {showDots &&(
                <CarouselDots
                slides={slidesToRender}
                goToSlide={goToSlide}
                activeIndex={activeIndex}
              /> 
             
           )}
              
            </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .adSlider .slick-list {
            height: auto;
          }
          .adSlider .slick-track {
            height: auto;
          }
        }

        @media (min-width: 768px) and (max-width: 1280px) {
          .adSlider .slick-list {
            height: auto;
          }
          .adSlider .slick-track {
            height: auto;
          }
        }

        .dot {
          transition: background-color 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default AdSlider;

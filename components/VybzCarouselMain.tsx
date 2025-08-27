"use client";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { SlickSettings } from "@/types/slick";
import React from "react";

// ✅ Required slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VybzCarouselPodCast from "./VybzCarouselPodcast";
import CarouselDots from "./CarouselDots";

export interface ICarousel {
  id: number;
  title: string;
  description?: string;
  category?: string;
  ageRating?: string;
  streamingPlatform?: string;
  platformLogo?: string;
  backgroundImage?: string;
}

interface VybzCarouselMainProps {
  slides?: ICarousel[];
  delay?: number;
}


const VybzCarouselMain = ({
  slides = [],
  delay = 4000,
}: VybzCarouselMainProps) => {

  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  // Default slide if no slides provided
  const defaultSlide: ICarousel = {
    id: 1,
    title: "Squid Game 3",
    description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where every choice sparks more fire.",
    category: "Game",
    ageRating: "16 Yrs +",
    streamingPlatform: "Netflix",
    platformLogo: "/logos/netflix.png",
    backgroundImage: "/images/netflixGames.png"
  };

  slides = [
  {
    id: 1,
    title: "Squid Game 3",
    description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where every choice sparks more fire.",
    category: "Game",
    ageRating: "16 Yrs +",
    backgroundImage: "/images/netflixGames.png",
    streamingPlatform: "Netflix",
    platformLogo: "/logos/netflix.png"
  },
  {
    id: 2,
    title: "Mofaya",
    description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where every choice sparks more fire.",
    category: "Movie",
    ageRating: "16 Yrs +",
    backgroundImage: "/images/mofaya.png",
    streamingPlatform: "Baze",
    platformLogo: "/logos/bazeLg.png"
  },
  {
    id: 3,
    title: "Dora",
    description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where every choice sparks more fire.",
    category: "Movie",
    ageRating: "16 Yrs +",
    backgroundImage: "/images/dora.png",
    streamingPlatform: "Baze",
    platformLogo: "/logos/bazeLg.png"
  }
];


  const slidesToRender = slides.length > 0 ? slides : [defaultSlide];

  
  const settings: SlickSettings = {
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

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToSlide = (i: number) =>{
    console.log("slide",i)
      sliderRef.current?.slickGoTo(i)
  };

  const PrevArrow = () => {
    return (
      <button
        onClick={goToPrev}
        className="hidden cursor-pointer md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#2C2C2C] rounded-full p-2 shadow-md hover:bg-[#C62676]"
      >
        <MdChevronLeft className="w-6 h-6 text-white" />
      </button>
    )}

  const NextArrow = () => {
    return(
      <button
        onClick={goToNext}
        className="hidden cursor-pointer md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#2C2C2C] rounded-full p-2 shadow-md hover:bg-[#C62676]"
      >
        <MdChevronRight className="w-6 h-6 text-white" />
      </button>
    )
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}  beforeChange={(_, next) => setActiveIndex(next)} className="w-screen h-[80vh]">
        {slidesToRender.map((slide, index) => (
          <div key={index} className="relative h-[80vh] w-screen">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="flex flex-wrap items-end gap-6 mb-4">
                <div className="flex-1 min-w-[150px]">
                  <h1 className="text-[28px] font-extrabold text-white capitalize">
                    {slide.title}
                  </h1>
                  <p className="text-white text-[14px] font-semibold mt-2">
                    {slide.category} | {slide.ageRating}
                  </p>
                  <p className="text-white text-[12px] max-w-md pt-1">
                    {slide.description}
                  </p>
                </div>

                <div className="flex pt-10 items-center pr-10 cursor-pointer">
                  <p className="text-white/70 text-[14px] uppercase tracking-wide">
                    stream on:
                  </p>
                  {slide.platformLogo && (
                    <img
                      src={slide.platformLogo}
                      className="w-[45px] h-[45px] ml-2"
                    />
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-between flex-wrap">
                <div className="flex gap-4 mx-auto !sm:ml-0 md:mx-0">
                  <Button className="bg-[#C62676] text-xs hover:bg-[#e91e63]/90 text-white px-8 h-10 rounded-full font-semibold w-40 cursor-pointer">
                    Subscribe
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-xs text-white hover:bg-white dark:bg-[#2C2C2C]/20 hover:text-white px-6 h-10 rounded-full bg-[#2C2C2C] backdrop-blur-sm w-40 cursor-pointer"
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>

                <div className="flex items-center gap-4 mx-auto md:mx-0 md:pr-10">
                  {/* Custom dots */}
                  <CarouselDots slides={slides} goToSlide={goToSlide} activeIndex={activeIndex}/>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white border-2 rounded-full cursor-pointer"
                  >
                    <HiOutlineSpeakerXMark />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows */}
     
     <PrevArrow/>
     <NextArrow/>

       <style jsx global>{`
            .slick-list{
                height:80vh
            }
            .slick-track{
              height:80vh
            }
            .dot {
              transition: background-color 0.2s ease-in-out;
            }
       
       `}</style>
    </div>

      
  );
  
};

export default VybzCarouselMain;
